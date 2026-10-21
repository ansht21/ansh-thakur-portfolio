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

Write-Host "[1/2] Publishing the current repo..." -ForegroundColor Yellow
$output = git ls-files -z | ForEach-Object { $_ } | Out-Null   # sanity: repo is a git repo

# Deploy the working tree as the site root (netlify.toml sets publish = ".")
$deploy = npx --yes netlify-cli@17 deploy --prod --dir=. --message "Portfolio refresh: 5 case studies + revenue engine cockpit" 2>&1
$deploy | ForEach-Object { Write-Host "    $_" }

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "[OK] Deployed. Your portfolio is live at:" -ForegroundColor Green
    Write-Host "     https://ansh-thakur-netlify.netlify.app/" -ForegroundColor Green
    Write-Host ""
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
