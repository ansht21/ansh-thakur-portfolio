# ============================================================
#  Push portfolio from GitLab-synced repo to GitHub (ansht21)
#  Usage:  right-click -> Run with PowerShell   OR   run in terminal:
#          powershell -ExecutionPolicy Bypass -File push-to-github.ps1
# ============================================================

$repo = "C:\Users\ansht\ansh-thakur-portfolio"
Set-Location $repo

Write-Host ""
Write-Host "=== Ansh's Portfolio -> GitHub (ansht21) ===" -ForegroundColor Cyan
Write-Host ""

# 1. Try the push
Write-Host "[1/3] Pushing main branch to github.com/ansht21/ansh-thakur-portfolio ..." -ForegroundColor Yellow
$output = git push github main 2>&1
$failed = $LASTEXITCODE -ne 0

if (-not $failed) {
    Write-Host ""
    Write-Host "[OK] Push succeeded! Your portfolio is now live on GitHub:" -ForegroundColor Green
    Write-Host "     https://github.com/ansht21/ansh-thakur-portfolio" -ForegroundColor Green
    Write-Host ""
    exit 0
}

# 2. Diagnose the failure
$msg = ($output | Out-String)
if ($msg -match "suspended") {
    Write-Host ""
    Write-Host "[BLOCKED] The ansht21 account is STILL SUSPENDED." -ForegroundColor Red
    Write-Host "          Your appeal is still being processed by GitHub support."
    Write-Host "          Please try again later (appeals can take 1-3 days)."
    Write-Host "          Your code remains 100% safe on GitLab in the meantime."
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "[ERROR] Push failed for a different reason:" -ForegroundColor Red
    Write-Host $msg
    Write-Host ""
}
