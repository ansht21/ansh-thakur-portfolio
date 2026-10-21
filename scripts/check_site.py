"""Portfolio integrity check.

Runs in CI (and locally) to guarantee that what is published is complete and
safe:

  1. every local asset referenced by index.html / script.js / styles.css exists
  2. the canonical URL, og:url and JSON-LD url all agree on one host
  3. the og:image actually exists and is a real 1200x630 raster
  4. no private notes are tracked by git (they are gitignored, but the repo
     is public, so this is asserted rather than assumed)
  5. the number of published case studies is the expected 5

Exit code 0 = all good, 1 = at least one failure.
"""
import json
import os
import re
import subprocess
import sys

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE_HOST = "ansh-thakur-netlify.netlify.app"
EXPECTED_CASE_STUDIES = 5

# Files that must never be committed to this public repository.
FORBIDDEN = [
    "github-escalation-drafts.md",
    ".env",
    "id_rsa",
    ".netlify/state.json",
]

failures = []
notes = []


def read(rel):
    with open(os.path.join(REPO, rel), encoding="utf-8") as fh:
        return fh.read()


def check(label, ok, detail=""):
    if ok:
        notes.append(f"  PASS  {label}")
    else:
        failures.append(f"  FAIL  {label}{(' -> ' + detail) if detail else ''}")


# ---------------------------------------------------------------- assets ----
html = read("index.html")
js = read("script.js")
css = read("styles.css")
blob = html + "\n" + js + "\n" + css

refs = set()
SKIP_SCHEMES = ("#", "http://", "https://", "//", "data:", "mailto:", "tel:", "sms:", "javascript:")

for attr in ("src", "href"):
    for m in re.finditer(attr + r'\s*=\s*"([^"]+)"', blob):
        url = m.group(1).strip()
        if not url or url.lower().startswith(SKIP_SCHEMES):
            continue
        refs.add(url.split("?")[0].split("#")[0])

# srcset is a comma-separated list of "url descriptor" pairs - only it splits.
for m in re.finditer(r'srcset\s*=\s*"([^"]+)"', blob):
    for part in m.group(1).split(","):
        url = part.strip().split(" ")[0].strip()
        if not url or url.lower().startswith(SKIP_SCHEMES):
            continue
        refs.add(url.split("?")[0].split("#")[0])

# url(...) in CSS
for m in re.finditer(r"url\(\s*['\"]?([^'\")]+)", blob):
    url = m.group(1).strip()
    if not url or url.lower().startswith(SKIP_SCHEMES):
        continue
    refs.add(url.split("?")[0].split("#")[0])

missing = sorted(r for r in refs if not os.path.exists(os.path.join(REPO, r.replace("/", os.sep))))
check(
    f"all {len(refs)} local asset references resolve",
    not missing,
    "missing: " + ", ".join(missing),
)

# ------------------------------------------------------------- canonical ----
canon = re.search(r'<link\s+rel="canonical"\s+href="([^"]+)"', html)
ogurl = re.search(r'property="og:url"\s+content="([^"]+)"', html)
ld = re.search(r'<script type="application/ld\+json">(.*?)</script>', html, re.S)

check("canonical link present", bool(canon))
check("og:url present", bool(ogurl))

if canon and ogurl:
    check(
        "canonical and og:url use the same host",
        SITE_HOST in canon.group(1) and SITE_HOST in ogurl.group(1),
        f"canonical={canon.group(1)} og:url={ogurl.group(1)}",
    )

if ld:
    try:
        data = json.loads(ld.group(1))
        check("JSON-LD parses", True)
        check(
            "JSON-LD url uses the site host",
            SITE_HOST in data.get("url", ""),
            f"url={data.get('url')!r}",
        )
    except json.JSONDecodeError as exc:
        check("JSON-LD parses", False, str(exc))
else:
    check("JSON-LD block present", False)

# ------------------------------------------------------------- og:image ----
ogimg = re.search(r'<meta\s+property="og:image"\s+content="([^"]+)"', html)
check("og:image present", bool(ogimg))

if ogimg:
    url = ogimg.group(1)
    check("og:image points at the site host", SITE_HOST in url, url)
    name = url.rsplit("/", 1)[-1]
    path = os.path.join(REPO, "images", name)
    check("og:image file exists", os.path.exists(path), path)
    if os.path.exists(path):
        try:
            from PIL import Image

            with Image.open(path) as im:
                check(
                    "og:image is 1200x630",
                    im.size == (1200, 630),
                    f"{im.size[0]}x{im.size[1]}",
                )
        except ImportError:
            notes.append("  SKIP  og:image dimensions (Pillow not installed)")

# -------------------------------------------------------------- privacy ----
tracked = subprocess.run(
    ["git", "-C", REPO, "ls-files"],
    capture_output=True,
    text=True,
).stdout.split()

leaked = [f for f in tracked if os.path.basename(f) in FORBIDDEN or f in FORBIDDEN]
check("no private/forbidden files are tracked", not leaked, ", ".join(leaked))

# ------------------------------------------------------------- content ----
articles = len(re.findall(r"<article\b", html))
check(
    f"{EXPECTED_CASE_STUDIES} case studies published",
    articles == EXPECTED_CASE_STUDIES,
    f"found {articles}",
)

# --------------------------------------------------------------- report ----
for line in notes:
    print(line)
for line in failures:
    print(line)

print()
if failures:
    print(f"FAILED - {len(failures)} problem(s) found")
    sys.exit(1)
print(f"OK - {len(notes)} checks passed")
