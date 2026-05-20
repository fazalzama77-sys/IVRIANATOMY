@echo off
REM ============================================================
REM IVRI Anatomy — Image Compressor (one-click runner for Windows)
REM Drops images into images-raw/atlas/ or images-raw/why/, then
REM double-click this file. Compressed WebP files appear in
REM images/atlas/ and images/why/.
REM ============================================================

setlocal
cd /d "%~dp0\.."

echo.
echo Looking for Python...

REM Try the launcher first (preferred on Windows), then the python command
where py >nul 2>nul
if %errorlevel% == 0 (
    py -3 tools\compress.py %*
    goto :done
)

where python >nul 2>nul
if %errorlevel% == 0 (
    python tools\compress.py %*
    goto :done
)

echo.
echo ERROR: Python is not installed or not in PATH.
echo.
echo Please install Python from https://www.python.org/downloads/
echo During install, check the box "Add Python to PATH".
echo Then double-click this file again.
echo.
pause
exit /b 1

:done
echo.
echo Press any key to close this window...
pause >nul
endlocal
