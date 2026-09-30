# AgriN — BRICS Regenerative Agricultural Intelligence Network
> **Track 4 — AgriN & Regenerative Agricultural Intelligence**  
> **BRICS Theme: Cooperation**  
> **Architecture: Frontend Folder (React 19) + Backend Folder (3 Spring Boot Microservices)**

---

## 🌟 Clean Project Directory Structure

```
C:\I335\AgriN/
├── frontend/                          # React 19 Frontend Web Application
│   ├── src/
│   │   ├── components/                # Landing Page, Login, Satellite GIS, Disease Scanner, Rotation Engine, DPG Hub
│   │   ├── data/                      # BRICS Regional Telemetry Specs
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── datasets/                      # Real CSV Datasets (Crop_recommendation, plant_disease_diagnostics, brics_agri_nodes)
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
├── backend/                           # 3 Java 17 Spring Boot Microservices
│   ├── agrin-auth-service/            # Microservice #1 (Port 8081 - JWT, OAuth 2.0 & RBAC)
│   ├── agrin-telemetry-service/       # Microservice #2 (Port 8082 - Satellite Feeds & Soil Telemetry)
│   └── agrin-diagnostic-service/      # Microservice #3 (Port 8083 - AI Disease Diagnostics & BRICS OpenAPI DPG)
│
├── start.bat                          # 1-Click Multi-Service Launcher Script
├── README.md                          # Main Project Documentation
└── HACKATHON_SUBMISSION.md            # Hackathon Judging & Pitch Guide
```

---

## ☕ 3 Spring Boot Microservices Breakdown

| Microservice Name | Folder Path | Port | Key Endpoints | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`agrin-auth-service`** | `backend/agrin-auth-service/` | `8081` | `POST /api/auth/login`<br>`GET /api/auth/health` | JWT Token Generation, Farmer/Agronomist Authentication, Role RBAC |
| **`agrin-telemetry-service`** | `backend/agrin-telemetry-service/` | `8082` | `GET /api/telemetry/regions`<br>`GET /api/telemetry/health` | Sentinel-2 Satellite Feeds, Soil Moisture & Carbon API |
| **`agrin-diagnostic-service`** | `backend/agrin-diagnostic-service/` | `8083` | `GET /api/diagnostic/diseases`<br>`GET /api/diagnostic/health` | AI Leaf Disease Inference, Organic Treatments, BRICS OpenAPI DPG Schema |

---

## ⚡ Quick Start Instructions

Double-click `start.bat` in `C:\I335\AgriN` to launch the frontend and all 3 microservices.

- **React Frontend:** [http://localhost:3000](http://localhost:3000)
- **Auth Microservice #1:** `http://localhost:8081`
- **Telemetry Microservice #2:** `http://localhost:8082`
- **Diagnostic Microservice #3:** `http://localhost:8083`
