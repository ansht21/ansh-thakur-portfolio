"""Deploy the portfolio to Netlify production using the REST API directly.

Why not the netlify CLI: it shells out to npx/node, which occasionally hit a
transient DNS failure ("getaddrinfo ENOTFOUND api.netlify.com") and its
login flow needs a browser. This talks to the same REST API from Python
using a Personal Access Token, so the only manual step is providing the
token.

Usage:
    $env:NETLIFY_AUTH_TOKEN = "your-netlify-token"
    python scripts/deploy_netlify.py

The publish set is built from `git ls-files` only, so untracked files that
are deliberately git-ignored (private notes) can never be published.
"""
import hashlib
import json
import os
import subprocess
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
API = "https://api.netlify.com/api/v1"
SITE_NAME = os.environ.get("NETLIFY_SITE", "ansh-thakur-netlify")
MESSAGE = "Portfolio refresh: 5 case studies + revenue engine cockpit"

# Files that must never reach the public site.
FORBIDDEN = ("escalation", "token", "password", "secret")


def token():
    t = os.environ.get("NETLIFY_AUTH_TOKEN", "").strip()
    if not t:
        print("Set NETLIFY_AUTH_TOKEN first:")
        print('  $env:NETLIFY_AUTH_TOKEN = "your-netlify-token"')
        sys.exit(2)
    return t


def api(method, path, tok, data=None, content_type=None, raw=False):
    url = f"{API}{path}"
    headers = {"Authorization": f"Bearer {tok}"}
    body = None
    if data is not None:
        body = data if isinstance(data, bytes) else json.dumps(data).encode("utf-8")
        headers["Content-Type"] = content_type or "application/json"
    req = urllib.request.Request(url, data=body, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req, timeout=90) as resp:
            payload = resp.read()
            return resp.status, (payload if raw else json.loads(payload.decode("utf-8", "replace")))
    except urllib.error.HTTPError as exc:
        payload = exc.read().decode("utf-8", "replace")
        if raw:
            return exc.code, payload
        try:
            return exc.code, json.loads(payload)
        except ValueError:
            return exc.code, payload


def collect_files():
    """Return {relpath: bytes} for every git-tracked file."""
    out = subprocess.run(
        ["git", "-C", REPO, "ls-files"], capture_output=True, text=True
    ).stdout.split()
    files = {}
    for rel in out:
        path = os.path.join(REPO, rel.replace("/", os.sep))
        if not os.path.isfile(path):
            continue
        low = rel.lower()
        if any(bad in low for bad in FORBIDDEN):
            raise SystemExit(f"ABORT refusing to publish {rel}")
        with open(path, "rb") as fh:
            files[rel] = fh.read()
    return files


def main():
    tok = token()

    # --- resolve the site --------------------------------------------------
    st, site = api("GET", f"/sites/{urllib.parse.quote(SITE_NAME)}", tok)
    if st != 200:
        print(f"FAIL  could not resolve site '{SITE_NAME}': HTTP {st} {str(site)[:200]}")
        print("      Check the name - it is the part before .netlify.app")
        return 1
    site_id = site["id"]
    print(f"site  {site.get('name')}  id={site_id}  url={site.get('ssl_url') or site.get('url')}")

    # --- build the publish set --------------------------------------------
    files = collect_files()
    print(f"staged {len(files)} git-tracked files (untracked/ignored excluded)")

    digests = {
        rel: hashlib.sha1(data).hexdigest() for rel, data in files.items()
    }

    # --- create the deploy -------------------------------------------------
    st, deploy = api(
        "POST",
        f"/sites/{site_id}/deploys",
        tok,
        {
            "files": digests,
            "async": True,
            "draft": False,
            "branch": "main",
            "title": MESSAGE,
        },
    )
    if st not in (200, 201):
        print(f"FAIL  could not create deploy: HTTP {st} {str(deploy)[:300]}")
        return 1
    deploy_id = deploy["id"]
    print(f"deploy id={deploy_id}")

    # --- upload the changed files -----------------------------------------
    uploads = [f for f in (deploy.get("upload_files") or []) if f.get("required")]
    print(f"uploading {len(uploads)} file(s)...")
    for f in uploads:
        rel = f["path"]
        if rel not in files:
            continue
        enc = urllib.parse.quote(rel, safe="")
        st, body = api(
            "PUT",
            f"/deploys/{deploy_id}/files/{enc}",
            tok,
            files[rel],
            content_type="application/octet-stream",
            raw=True,
        )
        if st not in (200, 201, 204):
            print(f"FAIL  upload {rel}: HTTP {st} {str(body)[:200]}")
            return 1
    print("uploads complete")

    # --- wait for the deploy to go live -----------------------------------
    print("waiting for the deploy to process...")
    state = "unknown"
    for _ in range(60):
        st, info = api("GET", f"/deploys/{deploy_id}", tok)
        if st == 200:
            state = info.get("state")
            if state in ("ready", "error", "failed"):
                break
        time.sleep(3)

    if state == "ready":
        print()
        print("DEPLOYED - live at:")
        print(f"  {site.get('ssl_url') or site.get('url')}")
        return 0

    print(f"FAIL  deploy state = {state}")
    return 1


if __name__ == "__main__":
    sys.exit(main())
