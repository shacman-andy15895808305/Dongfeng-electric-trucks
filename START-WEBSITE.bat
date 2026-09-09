@echo off
setlocal

cd /d "%~dp0"

set "SITE_URL=http://127.0.0.1:3000"

title Dongfeng Electric Trucks Local Website

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found.
  echo Please install Node.js 18 or later, then run this file again.
  pause
  exit /b 1
)

if not exist "%~dp0dist\index.html" (
  echo dist\index.html was not found. Website files are incomplete.
  pause
  exit /b 1
)

echo Project directory: %cd%
echo Starting Dongfeng Electric Trucks website...
echo Website URL: %SITE_URL%
echo.

start "" powershell -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -Command "Start-Sleep -Seconds 2; Start-Process '%SITE_URL%'"

node server.js

echo.
echo Website server stopped.
pause
