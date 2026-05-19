@echo off
REM ==========================================================================
REM node-red-trexmes-service - MkDocs Build & Serve Yardimcisi (Windows)
REM ==========================================================================
setlocal

IF "%1"=="install" GOTO INSTALL
IF "%1"=="serve"   GOTO SERVE
IF "%1"=="build"   GOTO BUILD
IF "%1"=="deploy"  GOTO DEPLOY
IF "%1"=="clean"   GOTO CLEAN
GOTO HELP

:INSTALL
echo [+] Python paketleri kuruluyor...
pip install -r requirements.txt
GOTO END

:SERVE
echo [+] Yerel sunucu baslatiliyor: http://127.0.0.1:8000
mkdocs serve
GOTO END

:BUILD
echo [+] Statik HTML dosyalari uretiliyor (site/ klasoru)...
mkdocs build --clean
echo.
echo [OK] Olusturulan dosyalar: %CD%\site
GOTO END

:DEPLOY
echo [+] GitHub Pages'e deploy ediliyor...
mkdocs gh-deploy --force
GOTO END

:CLEAN
echo [+] site/ klasoru temizleniyor...
IF EXIST site rmdir /s /q site
GOTO END

:HELP
echo.
echo Kullanim: build.bat [install ^| serve ^| build ^| deploy ^| clean]
echo.
echo   install  - Gerekli Python paketlerini kurar (ilk seferde)
echo   serve    - Yerel sunucuyu baslatir (http://127.0.0.1:8000)
echo   build    - site/ klasorunde statik HTML uretir
echo   deploy   - GitHub Pages'e yayinlar
echo   clean    - site/ klasorunu temizler
echo.
GOTO END

:END
endlocal
