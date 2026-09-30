@echo off
echo =========================================================================
echo  Launching AgriN — BRICS 3-Spring Boot Microservices System
echo =========================================================================
echo.
echo Launching Microservice 1: agrin-auth-service (Port 8081) ...
start cmd /k "title Auth-Service-8081 && java -cp backend\agrin-auth-service\src\main\java com.agrin.auth.AuthServiceApplication"

echo Launching Microservice 2: agrin-telemetry-service (Port 8082) ...
start cmd /k "title Telemetry-Service-8082 && java -cp backend\agrin-telemetry-service\src\main\java com.agrin.telemetry.TelemetryServiceApplication"

echo Launching Microservice 3: agrin-diagnostic-service (Port 8083) ...
start cmd /k "title Diagnostic-Service-8083 && java -cp backend\agrin-diagnostic-service\src\main\java com.agrin.diagnostic.DiagnosticServiceApplication"

echo Launching React Frontend Application on http://localhost:3000 ...
start cmd /k "title Frontend-3000 && cd frontend && npx vite --port 3000"

echo.
echo All 3 Spring Boot Microservices and React Frontend are initializing!
echo Open http://localhost:3000 in your browser.
echo =========================================================================
