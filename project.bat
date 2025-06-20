@echo off

start "" "C:\Program Files\Docker\Docker\Docker Desktop.exe"

:wait_docker
docker info >nul 2>&1
IF ERRORLEVEL 1 (
    timeout /t 2 >nul
    GOTO wait_docker
)

echo Docker est prêt !

wsl -d docker-desktop -- true

for /f "tokens=*" %%i in ('docker ps -q') do docker stop %%i

docker compose up -d

:: met à jour git
start cmd /k "git stash && git pull origin develop && git stash apply"

code .
exit