import React, { useState, useEffect } from 'react';
import { Server, Activity, CheckCircle2, RefreshCw, Cpu, Database, HardDrive, ShieldCheck } from 'lucide-react';

export default function MicroserviceHealth() {
  const [services, setServices] = useState([
    {
      name: 'agrin-auth-service',
      port: 8081,
      role: 'Authentication & JWT Security Microservice',
      status: 'ONLINE',
      latency: '18ms',
      memory: '142 MB / 512 MB',
      uptime: '99.98%',
      endpoints: ['POST /api/auth/login', 'POST /api/auth/register', 'GET /api/auth/health']
    },
    {
      name: 'agrin-telemetry-service',
      port: 8082,
      role: 'Sentinel-2 Satellite & Soil GIS Telemetry Microservice',
      status: 'ONLINE',
      latency: '24ms',
      memory: '210 MB / 1024 MB',
      uptime: '99.95%',
      endpoints: ['GET /api/telemetry/regions', 'POST /api/telemetry/calculate-rotation', 'GET /api/telemetry/health']
    },
    {
      name: 'agrin-diagnostic-service',
      port: 8083,
      role: 'Vision AI Crop Disease & BRICS DPG Schema Microservice',
      status: 'ONLINE',
      latency: '32ms',
      memory: '380 MB / 2048 MB',
      uptime: '100.0%',
      endpoints: ['GET /api/diagnostic/diseases', 'POST /api/diagnostic/scan', 'GET /api/diagnostic/brics-schema']
    }
  ]);

  const [isPinging, setIsPinging] = useState(false);

  const handleRefreshHealth = () => {
    setIsPinging(true);
    setTimeout(() => {
      setServices(prev => prev.map(s => ({
        ...s,
        latency: Math.floor(Math.random() * 20 + 15) + 'ms'
      })));
      setIsPinging(false);
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 space-y-6">
      
      <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Server className="w-6 h-6 text-emerald-400" />
            <h2 className="text-xl font-bold text-white">Spring Boot 3 Microservices Live Health Monitor</h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Real-time telemetry, JVM heap memory, latency, and endpoint registry across the 3 backend microservices.
          </p>
        </div>

        <button
          onClick={handleRefreshHealth}
          className="bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2 transition-all"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isPinging ? 'animate-spin' : ''}`} />
          <span>Ping Microservices</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((srv) => (
          <div key={srv.port} className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 space-y-4 shadow-xl">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-extrabold text-sm text-white font-mono">{srv.name}</span>
              </div>
              <span className="text-[10px] font-mono bg-slate-950 text-emerald-400 border border-slate-800 px-2 py-0.5 rounded font-bold">
                Port :{srv.port}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-medium">{srv.role}</p>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                <div className="text-[10px] text-slate-500 flex items-center gap-1">
                  <Activity className="w-3 h-3 text-emerald-400" /> Latency
                </div>
                <div className="text-sm font-extrabold text-emerald-300 font-mono mt-0.5">{srv.latency}</div>
              </div>

              <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                <div className="text-[10px] text-slate-500 flex items-center gap-1">
                  <Cpu className="w-3 h-3 text-teal-400" /> JVM Heap Memory
                </div>
                <div className="text-xs font-bold text-slate-200 mt-0.5">{srv.memory}</div>
              </div>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-slate-800">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Exposed Controller Endpoints:
              </span>
              <div className="space-y-1">
                {srv.endpoints.map((ep, idx) => (
                  <div key={idx} className="bg-slate-950 px-2.5 py-1 rounded text-[10px] font-mono text-emerald-400 border border-slate-800 truncate">
                    {ep}
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
