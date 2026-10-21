# ============================================================
#  Publish the portfolio to Netlify (production).
#
#  Usage:  powershell -ExecutionPolicy Bypass -File deploy-netlify.ps1
#          (or right-click -> Run with PowerShell)
#
#  The live site (https://ansh-thakur-netlify.netlify.app) is currently
#  serving an OLD build (2 case studies, no revenue cockpit). Re-running
#  this script republishes the current repo: 5 case studies + the
#  revenue engine cockpit.
#
#  Two ways to authenticate - the token path needs no browser:
#
#    A) Token (recommended, scriptable):
#       $env:NETLIFY_AUTH_TOKEN = "your-netlify-token"
#       powershell -ExecutionPolicy Bypass -File deploy-netlify.ps1
#
#    B) Browser (one time):
#       powershell -ExecutionPolicy Bypass -File deploy-netlify.ps1
#       -> opens a Netlify authorize page, approve it once
#
#  Get a token at: Netlify -> User settings -> Personal access tokens
#  -> Generate new token (Full access). Long opaque string.
# ============================================================

$repo = "C:\Users\ansht\ansh-thakur-portfolio"
$site = "ansh-thakur-netlify"
$live = "https://ansh-thakur-netlify.netlify.app/"

Set-Location $repo

Write-Host ""
Write-Host "=== Portfolio -> Netlify (production) ===" -ForegroundColor Cyan
Write-Host ""

# --- Step 0: make sure the CLI is authenticated -------------------------
# A NETLIFY_AUTH_TOKEN in the environment is used as-is: no browser, no
# link file. Otherwise fall back to the interactive browser login.
$useToken = $false
if ($env:NETLIFY_AUTH_TOKEN -and $env:NETLIFY_AUTH_TOKEN.Trim().Length -gt 0) {
    $useToken = $true
    Write-Host "[0/4] Using NETLIFY_AUTH_TOKEN from the environment." -ForegroundColor Yellow
}

$configPath = Join-Path $env:APPDATA "netlify\Config\config.json"
$hasToken = $false
if (Test-Path $configPath) {
    try {
        $cfg = Get-Content $configPath -Raw | ConvertFrom-Json
        $hasToken = ($cfg.users -and $cfg.users.Count -gt 0)
    } catch { $hasToken = $false }
}

if (-not $hasToken -and -not $useToken) {
    Write-Host "[0/4] Not logged in yet - opening a browser to approve..." -ForegroundColor Yellow
    Write-Host "      (approve the request in the browser window that opens)" -ForegroundColor DarkGray
    npx --yes netlify-cli@17 login 2>&1 | ForEach-Object { Write-Host "      $_" }
    Write-Host ""
}

# --- Step 1: link to the site ------------------------------------------
$statePath = Join-Path $repo ".netlify\state.json"
if ($useToken) {
    Write-Host "[1/4] Targeting site '$site'..." -ForegroundColor Yellow
} elseif (-not (Test-Path $statePath)) {
    Write-Host "[1/4] Linking to the '$site' site..." -ForegroundColor Yellow
    npx --yes netlify-cli@17 link --site=$site 2>&1 | ForEach-Object { Write-Host "      $_" }
    Write-Host ""
}

# --- Step 2: stage the tracked files ------------------------------------
Write-Host "[2/4] Staging the tracked files..." -ForegroundColor Yellow

# Publish ONLY the files that are tracked in git. Deploying the folder
# directly (--dir=.) would also publish untracked files that are on disk
# but deliberately git-ignored - e.g. github-escalation-drafts.md, which
# contains private email and support-ticket details.
$stage = Join-Path $env:TEMP "ansh-thakur-portfolio-publish"
Remove-Item $stage -Recurse -Force -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Path $stage -Force | Out-Null

$copied = 0
git ls-files | ForEach-Object {
    $rel = $_
    $src = Join-Path $repo $rel
    if (Test-Path $src) {
        $dst = Join-Path $stage $rel
        $parent = Split-Path $dst -Parent
        if (-not (Test-Path $parent)) { New-Item -ItemType Directory -Path $parent -Force | Out-Null }
        Copy-Item $src $dst -Force
        $copied++
    }
}
Write-Host "    staged $copied tracked files (untracked/ignored files excluded)" -ForegroundColor DarkGray

# --- Step 3: sanity-check the staged set --------------------------------
Write-Host "[3/4] Verifying the staged site..." -ForegroundColor Yellow
$og = Join-Path $stage "images\og-cover.jpg"
if (Test-Path $og) {
    Write-Host "    OK   images\og-cover.jpg" -ForegroundColor DarkGray
} else {
    Write-Host "    WARN images\og-cover.jpg is missing from the staged set" -ForegroundColor Yellow
}
$leak = Get-ChildItem $stage -Recurse -File | Where-Object {
    $_.Name -match 'escalation|token|password|secret|\.env'
}
if ($leak) {
    Write-Host "    ABORT private files would be published:" -ForegroundColor Red
    $leak | ForEach-Object { Write-Host "      $($_.Name)" -ForegroundColor Red }
    exit 1
}
Write-Host "    OK   no private files in the publish set" -ForegroundColor DarkGray

# --- Step 4: publish ----------------------------------------------------
Write-Host "[4/4] Publishing to Netlify production..." -ForegroundColor Yellow
$deployArgs = @("--yes", "netlify-cli@17", "deploy", "--prod", "--dir=$stage",
                "--message", "Portfolio refresh: 5 case studies + revenue engine cockpit")
if ($useToken) { $deployArgs += @("--site=$site") }
$deploy = & npx @deployArgs 2>&1
$deploy | ForEach-Object { Write-Host "    $_" }

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "[OK] Deployed. Your portfolio is live at:" -ForegroundColor Green
    Write-Host "     $live" -ForegroundColor Green
    Write-Host ""
    Remove-Item $stage -Recurse -Force -ErrorAction SilentlyContinue
    exit 0
}

Write-Host ""
Write-Host "[ERROR] Deploy failed. Common causes:" -ForegroundColor Red
Write-Host "  - Login not approved: run  npx netlify-cli login  once, then re-run."
Write-Host "  - The site is not linked: run  npx netlify-cli link --site=$site"
Write-Host "  - Alternatively, in the Netlify dashboard: Site configuration -> re-link the"
Write-Host "    Git repository (ansht21/ansh-thakur-portfolio, branch main, publish '.')"
Write-Host "    and press 'Trigger deploy'."
Write-Host ""
$deploy | ForEach-Object { Write-Host "    $_" }
exit 1
