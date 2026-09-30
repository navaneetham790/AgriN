import React from 'react';
import { Sprout, Globe, ShieldCheck, Sparkles, ArrowRight, Scan, Map, RefreshCw, Share2, Activity, Lock, Users, ChevronRight, BarChart3 } from 'lucide-react';

export default function LandingPage({ onExploreDashboard, onOpenLogin }) {
  const bricsNations = [
    { name: 'India', flag: '🇮🇳', region: 'Punjab & Maharashtra', code: 'IN-04', color: 'from-amber-500 to-orange-600' },
    { name: 'Brazil', flag: '🇧🇷', region: 'Mato Grosso Savanna', code: 'BR-01', color: 'from-emerald-500 to-teal-600' },
    { name: 'China', flag: '🇨🇳', region: 'Heilongjiang Black Soil', code: 'CN-09', color: 'from-rose-500 to-red-600' },
    { name: 'South Africa', flag: '🇿🇦', region: 'Free State Grain Plateau', code: 'ZA-03', color: 'from-yellow-500 to-amber-600' },
    { name: 'Russia', flag: '🇷🇺', region: 'Krasnodar Chernozem', code: 'RU-02', color: 'from-blue-500 to-cyan-600' },
    { name: 'Egypt', flag: '🇪🇬', region: 'Nile Delta Alluvial', code: 'EG-05', color: 'from-amber-400 to-yellow-600' },
    { name: 'Ethiopia', flag: '🇪🇹', region: 'Oromia Highlands', code: 'ET-07', color: 'from-emerald-600 to-green-700' },
    { name: 'UAE', flag: '🇦🇪', region: 'Al Ain Arid Hydro-Agri', code: 'AE-11', color: 'from-teal-400 to-emerald-600' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Top Navbar */}
      <nav className="bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 sticky top-0 z-50 px-4 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/20 ring-1 ring-emerald-400/40">
              <Sprout className="w-6 h-6 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
                  AgriN
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-emerald-950/90 text-emerald-400 border border-emerald-500/30">
                  BRICS Theme: Cooperation
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
                Digital Agriculture Network & Interoperable Public Good
              </p>
            </div>
          </div>

          {/* Nav CTA Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenLogin}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 transition-all flex items-center gap-2 shadow-sm"
            >
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sign In / Register</span>
            </button>

            <button
              onClick={onExploreDashboard}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-300 hover:to-teal-300 transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2 ring-1 ring-emerald-400/50"
            >
              <span>Launch Live Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 px-4 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        
        {/* Glow Effects */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-emerald-500/15 to-teal-500/15 blur-[140px] rounded-full pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs font-semibold shadow-inner">
            <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>Inspired by the BRICS AgriN Digital Public Good Initiative</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.15]">
            Real-Time Agricultural Intelligence for <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
              Smallholder Farmers & Emerging Economies
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            AgriN delivers real-time Sentinel-2 satellite feeds, soil health telemetry, AI crop disease diagnostics, 
            and a federated data exchange empowering BRICS member states with climate-resilient farming model sharing.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onExploreDashboard}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-extrabold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-300 hover:to-teal-300 transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2.5 ring-1 ring-emerald-300/60"
            >
              <span>Explore Interactive GIS Map & Dashboard</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </button>

            <button
              onClick={onOpenLogin}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 transition-all flex items-center justify-center gap-2.5 shadow-md"
            >
              <Users className="w-4.5 h-4.5 text-emerald-400" />
              <span>Access Agronomist & Farmer Portal</span>
            </button>
          </div>

        </div>
      </section>

      {/* Live Metrics Counter Banner */}
      <section className="border-y border-slate-800/80 bg-slate-900/60 backdrop-blur-lg py-12 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono tracking-tight">8 / 8</div>
            <div className="text-xs font-bold text-slate-200">BRICS Member Nodes</div>
            <div className="text-[11px] text-slate-400">India, Brazil, China, SA, Russia, Egypt, Ethiopia, UAE</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-teal-300 font-mono tracking-tight">2.4M+</div>
            <div className="text-xs font-bold text-slate-200">Hectares Monitored</div>
            <div className="text-[11px] text-slate-400">Sentinel-2 Optical Telemetry</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-amber-300 font-mono tracking-tight">96.4%</div>
            <div className="text-xs font-bold text-slate-200">Vision AI Diagnostic Precision</div>
            <div className="text-[11px] text-slate-400">Vision Transformer (ViT) Model</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-emerald-300 font-mono tracking-tight">-35%</div>
            <div className="text-xs font-bold text-slate-200">Chemical Input Reduction</div>
            <div className="text-[11px] text-slate-400">Leguminous Nitrogen Fixation</div>
          </div>

        </div>
      </section>

      {/* 3 Spring Boot Microservices Architecture Section */}
      <section className="py-20 px-4 lg:px-8 max-w-7xl mx-auto space-y-14">
        
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950 text-emerald-400 text-xs font-mono font-semibold border border-emerald-800/60">
            Microservice Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Powered by 3 Spring Boot Microservices
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Engineered for national-scale deployment, high concurrency, and federated data privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 group space-y-5 shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-emerald-950 border border-emerald-700/60 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <Map className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">1. Satellite & GIS Telemetry Service</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Fetches Sentinel-2 optical imagery, calculates NDVI vegetation index, tracks soil moisture %, organic carbon, and drought risk across BRICS agricultural zones.
              </p>
            </div>
            <div className="pt-2">
              <span className="text-xs font-mono bg-slate-950 text-emerald-400 px-3 py-1.5 rounded-xl border border-slate-800 block w-fit">
                Spring Boot Service #2 • Port 8082
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl border border-slate-800 hover:border-teal-500/50 transition-all duration-300 group space-y-5 shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-teal-950 border border-teal-700/60 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
              <Scan className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">2. AI Pathology & DPG Diagnostic Service</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Runs leaf pathology vision inference, prescribes organic bio-fungicide treatments, and exports standardized OpenAPI schemas for BRICS Digital Public Good compliance.
              </p>
            </div>
            <div className="pt-2">
              <span className="text-xs font-mono bg-slate-950 text-teal-400 px-3 py-1.5 rounded-xl border border-slate-800 block w-fit">
                Spring Boot Service #3 • Port 8083
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group space-y-5 shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-amber-950 border border-amber-700/60 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <Lock className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">3. Authentication & JWT Profile Service</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Manages JWT tokens, user profiles, RBAC permissions for Farmers, Agronomists, and BRICS Delegates, ensuring differential privacy across national nodes.
              </p>
            </div>
            <div className="pt-2">
              <span className="text-xs font-mono bg-slate-950 text-amber-400 px-3 py-1.5 rounded-xl border border-slate-800 block w-fit">
                Spring Boot Service #1 • Port 8081
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* BRICS Nations Grid */}
      <section className="py-16 bg-slate-900/40 border-t border-slate-800/80 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              BRICS Interoperable Telemetry Network
            </h3>
            <h2 className="text-2xl font-extrabold text-white">
              Participating BRICS Agricultural Hubs
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {bricsNations.map((nation, idx) => (
              <div key={idx} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all text-left space-y-2 group">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{nation.flag}</span>
                  <span className="text-[10px] font-mono bg-slate-900 text-emerald-400 px-2 py-0.5 rounded border border-slate-800">
                    Node #{nation.code}
                  </span>
                </div>
                <div>
                  <div className="font-extrabold text-sm text-white">{nation.name}</div>
                  <div className="text-xs text-slate-400 truncate">{nation.region}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-8 px-4 text-center text-xs text-slate-400 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sprout className="w-5 h-5 text-emerald-400" />
            <span className="font-bold text-slate-200">AgriN — BRICS Digital Agriculture Platform</span>
          </div>
          <div>Inspired by BRICS Agricultural Cooperation Track 4</div>
        </div>
      </footer>

    </div>
  );
}
