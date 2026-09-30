import React from 'react';
import { Map, Scan, RefreshCw, Share2, MessageSquareCode, Server } from 'lucide-react';

export default function Navigation({ activeTab, setActiveTab }) {
  const tabs = [
    {
      id: 'map',
      label: 'BRICS GIS Satellite',
      icon: Map,
      badge: 'Live Telemetry'
    },
    {
      id: 'disease',
      label: 'AI Disease Diagnostics',
      icon: Scan,
      badge: 'Vision AI'
    },
    {
      id: 'recommendation',
      label: 'Regenerative Rotation',
      icon: RefreshCw,
      badge: 'Carbon Credit'
    },
    {
      id: 'brics-hub',
      label: 'BRICS AgriN Public Good',
      icon: Share2,
      badge: 'Federated DPG'
    },
    {
      id: 'microservice-health',
      label: 'Spring Boot Health',
      icon: Server,
      badge: '3 Microservices'
    },
    {
      id: 'chat',
      label: 'AI Farmer Advisory',
      icon: MessageSquareCode,
      badge: 'Multilingual'
    }
  ];

  return (
    <nav className="bg-slate-900/70 backdrop-blur-md border-b border-slate-800/80 sticky top-[65px] z-40 px-4 lg:px-8 py-2 overflow-x-auto no-scrollbar">
      <div className="max-w-7xl mx-auto flex items-center gap-2 min-w-max">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                isActive
                  ? 'bg-emerald-950/90 text-emerald-300 border-emerald-500/60 shadow-md shadow-emerald-950/40 ring-1 ring-emerald-400/40'
                  : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800 hover:border-slate-700'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                isActive ? 'bg-emerald-900/80 text-emerald-200 font-bold' : 'bg-slate-900 text-slate-400'
              }`}>
                {tab.badge}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
