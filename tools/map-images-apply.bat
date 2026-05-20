@echo off
REM ============================================================
REM IVRI Anatomy - Image -> Data Mapper (APPLY MODE)
REM Writes high-confidence  img: "images/..."  lines into your
REM data-*.JS files. Every file edited gets a .bak backup first.
REM Entries that already have an img: are NEVER overwritten.
REM ============================================================

setlocal
cd /d "%~dp0\.."

echo.
echo ============================================================
echo  This will EDIT your data-*.JS files.
echo  A .bak backup is made for every file touched.
echo  Entries that already have an "img:" line are skipped.
echo ============================================================
echo.
choice /C YN /N /M "Proceed? [Y/N]: "
if errorlevel 2 goto :cancel

where py >nul 2>nul
if %errorlevel% == 0 (
    py -3 tools\map-images.py --apply
    goto :done
)

where python >nul 2>nul
if %errorlevel% == 0 (
    python tools\map-images.py --apply
    goto :done
)

echo.
echo ERROR: Python is not installed or not in PATH.
echo Install from https://www.python.org/downloads/ then re-run.
echo.
pause
exit /b 1

:cancel
echo Cancelled. No files were modified.
pause
exit /b 0

:done
echo.
echo Opening updated report in your browser...
start "" "tools\image-map-report.html"
echo.
echo Press any key to close this window...
pause >nul
endlocal
