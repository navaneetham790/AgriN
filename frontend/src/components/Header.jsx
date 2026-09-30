import React from 'react';
import { Sprout, Globe2, ShieldCheck, Activity, Languages } from 'lucide-react';

export default function Header({ selectedLang, setSelectedLang }) {
  const bricsFlags = [
    { name: 'India', flag: '🇮🇳' },
    { name: 'Brazil', flag: '🇧🇷' },
    { name: 'China', flag: '🇨🇳' },
    { name: 'South Africa', flag: '🇿🇦' },
    { name: 'Russia', flag: '🇷🇺' },
    { name: 'Egypt', flag: '🇪🇬' },
    { name: 'Ethiopia', flag: '🇪🇹' },
    { name: 'UAE', flag: '🇦🇪' }
  ];

  return (
    <header className="bg-slate-900/90 backdrop-blur-md border-b border-emerald-900/40 sticky top-0 z-50 px-4 lg:px-8 py-3.5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand & Theme Title */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-lg shadow-emerald-950/50 border border-emerald-400/30">
              <Sprout className="w-6 h-6 text-emerald-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent font-display">
                  AgriN
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                  BRICS Theme: Cooperation
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium hidden sm:block">
                Regenerative Agricultural Intelligence Network & Digital Public Good
              </p>
            </div>
          </div>

          {/* Mobile indicator */}
          <div className="md:hidden flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Node #IN-04
          </div>
        </div>

        {/* BRICS Member Flags & Status */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-2 bg-slate-950/80 px-3 py-1.5 rounded-xl border border-slate-800/80">
            <span className="text-xs text-slate-400 font-medium">BRICS Network:</span>
            <div className="flex items-center gap-1 text-base">
              {bricsFlags.map((item, idx) => (
                <span key={idx} title={item.name} className="hover:scale-125 transition-transform cursor-help">
                  {item.flag}
                </span>
              ))}
            </div>
          </div>

          {/* Node Health Pill */}
          <div className="hidden md:flex items-center gap-2 text-xs bg-slate-950 px-3 py-1.5 rounded-xl border border-emerald-800/50 text-emerald-300">
            <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span className="font-semibold">8/8 BRICS Nodes Syncing</span>
            <span className="text-[10px] bg-emerald-950 text-emerald-400 px-1.5 py-0.5 rounded font-mono">42ms</span>
          </div>

          {/* Multilingual Selector */}
          <div className="flex items-center gap-1.5 bg-slate-950 px-2.5 py-1.5 rounded-xl border border-slate-800">
            <Languages className="w-4 h-4 text-emerald-400" />
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
              className="bg-transparent text-xs text-slate-200 focus:outline-none cursor-pointer font-medium"
            >
              <option value="EN" className="bg-slate-900 text-slate-200">English (EN)</option>
              <option value="HI" className="bg-slate-900 text-slate-200">हिन्दी (Hindi)</option>
              <option value="PT" className="bg-slate-900 text-slate-200">Português (PT)</option>
              <option value="ZH" className="bg-slate-900 text-slate-200">中文 (Chinese)</option>
              <option value="RU" className="bg-slate-900 text-slate-200">Русский (Russian)</option>
            </select>
          </div>
        </div>

      </div>
    </header>
  );
}
