"""Point deploy-netlify.ps1 at the direct-API Python deploy when a token is
present. The Python path avoids npx/node entirely (the CLI hit a transient
DNS failure) and needs no browser."""
import io

PATH = r"C:\Users\ansht\ansh-thakur-portfolio\deploy-netlify.ps1"
text = io.open(PATH, encoding="utf-8", newline="").read()

old = (
    "$deployArgs = @(\"--yes\", \"netlify-cli@17\", \"deploy\", \"--prod\", \"--dir=$stage\",\r\n"
    "                \"--message\", \"Portfolio refresh: 5 case studies + revenue engine cockpit\")\r\n"
    "if ($useToken) { $deployArgs += @(\"--site=$site\") }\r\n"
    "$deploy = & npx @deployArgs 2>&1\r\n"
)
new = (
    "# With a token, deploy through the REST API directly (scripts/deploy_netlify.py).\r\n"
    "# That path avoids npx/node, which intermittently failed with\r\n"
    "# \"getaddrinfo ENOTFOUND api.netlify.com\", and needs no browser.\r\n"
    "if ($useToken) {\r\n"
    "    $deploy = & python (Join-Path $repo \"scripts\\deploy_netlify.py\") 2>&1\r\n"
    "} else {\r\n"
    "    $deployArgs = @(\"--yes\", \"netlify-cli@17\", \"deploy\", \"--prod\", \"--dir=$stage\",\r\n"
    "                    \"--message\", \"Portfolio refresh: 5 case studies + revenue engine cockpit\")\r\n"
    "    if ($useToken) { $deployArgs += @(\"--site=$site\") }\r\n"
    "    $deploy = & npx @deployArgs 2>&1\r\n"
    "}\r\n"
)
assert old in text, "deploy invocation not found"
text = text.replace(old, new, 1)

io.open(PATH, "w", encoding="utf-8", newline="").write(text)
print("patched")
