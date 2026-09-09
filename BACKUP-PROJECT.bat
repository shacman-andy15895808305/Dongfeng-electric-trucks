@echo off
setlocal

cd /d "%~dp0"
set "PROJECT_DIR=%~dp0"

where powershell >nul 2>nul
if errorlevel 1 (
  echo PowerShell was not found. Cannot create ZIP backup.
  pause
  exit /b 1
)

echo Creating project backup, please wait...

powershell -NoProfile -ExecutionPolicy Bypass -Command "$ErrorActionPreference = 'Stop'; $project = (Resolve-Path -LiteralPath $env:PROJECT_DIR).Path.TrimEnd('\'); $parent = Split-Path -Path $project -Parent; $name = Split-Path -Path $project -Leaf; $stamp = Get-Date -Format 'yyyyMMdd-HHmmss'; $dest = Join-Path -Path $parent -ChildPath ($name + '-backup-' + $stamp + '.zip'); if (Test-Path -LiteralPath $dest) { throw ('Backup file already exists: ' + $dest) }; Add-Type -AssemblyName System.IO.Compression.FileSystem; [System.IO.Compression.ZipFile]::CreateFromDirectory($project, $dest, [System.IO.Compression.CompressionLevel]::Optimal, $false); Write-Host ('Backup created: ' + $dest)"

if errorlevel 1 (
  echo Backup failed.
  pause
  exit /b 1
)

pause
