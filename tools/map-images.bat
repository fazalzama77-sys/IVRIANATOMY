@echo off
REM ============================================================
REM IVRI Anatomy - Image -> Data Mapper (REPORT ONLY)
REM Scans images/atlas/ and images/why/, figures out which atlas
REM entry each image belongs to, writes a browser-openable report.
REM This run does NOT edit any data file.
REM ============================================================

setlocal
cd /d "%~dp0\.."

echo.
echo Looking for Python...

where py >nul 2>nul
if %errorlevel% == 0 (
    py -3 tools\map-images.py
    goto :done
)

where python >nul 2>nul
if %errorlevel% == 0 (
    python tools\map-images.py
    goto :done
)

echo.
echo ERROR: Python is not installed or not in PATH.
echo Install from https://www.python.org/downloads/ then re-run.
echo.
pause
exit /b 1

:done
echo.
echo Opening report in your browser...
start "" "tools\image-map-report.html"
echo.
echo Press any key to close this window...
pause >nul
endlocal
