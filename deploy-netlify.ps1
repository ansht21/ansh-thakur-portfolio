# ============================================================
#  Publish the portfolio to Netlify (production).
#
#  Usage:  powershell -ExecutionPolicy Bypass -File deploy-netlify.ps1
#           (or right-click -> Run with PowerShell)
#
#  The live site (https://ansh-thakur-netlify.netlify.app) is currently
#  serving an OLD build. Re-running this script republishes the current
#  repo: 5 case studies + the revenue engine cockpit.
#
#  First run asks you to log in to Netlify in a browser (one time only).
# ============================================================

$repo = "C:\Users\ansht\ansh-thakur-portfolio"
Set-Location $repo

Write-Host ""
Write-Host "=== Portfolio -> Netlify (production) ===" -ForegroundColor Cyan
Write-Host ""

Write-Host "[1/3] Staging the tracked files..." -ForegroundColor Yellow

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

Write-Host "[2/3] Publishing to Netlify production..." -ForegroundColor Yellow
$deploy = npx --yes netlify-cli@17 deploy --prod --dir=$stage --message "Portfolio refresh: 5 case studies + revenue engine cockpit" 2>&1
$deploy | ForEach-Object { Write-Host "    $_" }

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "[OK] Deployed. Your portfolio is live at:" -ForegroundColor Green
    Write-Host "     https://ansh-thakur-netlify.netlify.app/" -ForegroundColor Green
    Write-Host ""
    Remove-Item $stage -Recurse -Force -ErrorAction SilentlyContinue
    exit 0
}

Write-Host ""
Write-Host "[ERROR] Deploy failed. Common causes:" -ForegroundColor Red
Write-Host "  - Not logged in yet: run  npx netlify-cli login  once, then re-run this script."
Write-Host "  - The site is not linked to this folder: run  npx netlify-cli link  and pick"
Write-Host "    'ansh-thakur-netlify' (or your site), then re-run this script."
Write-Host "  - Alternatively, in the Netlify dashboard: Site configuration -> re-link the"
Write-Host "    Git repository (ansht21/ansh-thakur-portfolio, branch main, publish '.')"
Write-Host "    and press 'Trigger deploy'."
Write-Host ""
$deploy | ForEach-Object { Write-Host "    $_" }
