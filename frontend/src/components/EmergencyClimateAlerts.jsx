import React from 'react';
import { AlertTriangle, ShieldAlert, CloudRain, Sun, Thermometer, ArrowRight, BellRing } from 'lucide-react';

export default function EmergencyClimateAlerts({ onSelectRegion }) {
  const alerts = [
    {
      id: 'alert-za',
      country: 'South Africa',
      flag: '🇿🇦',
      region: 'Free State Grain Plateau',
      severity: 'CRITICAL',
      title: 'Severe Arid Spells & Subsoil Moisture Deficit (-42%)',
      impact: 'High risk of sunflower & maize crop wilting during grain filling stage.',
      recommendation: 'Deploy Drought-Resistant Sorghum + Cowpea cover crop immediately to preserve root moisture.',
      time: 'Issued 14 mins ago via ARC South Africa'
    },
    {
      id: 'alert-in',
      country: 'India',
      flag: '🇮🇳',
      region: 'Punjab Agricultural Belt',
      severity: 'MODERATE',
      title: 'Unseasonable Humidity (>88%) Spore Corridor Alert',
      impact: 'Favorable condition for Late Blight & Wheat Stripe Rust fungal outbreak.',
      recommendation: 'Foliar spray Trichoderma viride bio-fungicide. Halt overhead sprinkler irrigation.',
      time: 'Issued 32 mins ago via ICAR Telemetry'
    },
    {
      id: 'alert-br',
      country: 'Brazil',
      flag: '🇧🇷',
      region: 'Mato Grosso Savanna',
      severity: 'WARNING',
      title: 'Tropical Downpour & Topsoil Soil Erosion Alert (42mm)',
      impact: 'Risk of nitrogen leaching into local river tributaries.',
      recommendation: 'Intercrop Safrinha Maize with Brachiaria grass for root biomass anchorage.',
      time: 'Issued 1 hour ago via EMBRAPA Node'
    }
  ];

  return (
    <div className="bg-slate-900/90 rounded-2xl border border-amber-900/50 p-5 space-y-4">
      
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-amber-950 border border-amber-700/60 flex items-center justify-center text-amber-400">
            <BellRing className="w-4 h-4 animate-bounce" />
          </div>
          <div>
            <h3 className="font-extrabold text-white text-sm">BRICS AgriN Climate Early Warning Engine</h3>
            <p className="text-[11px] text-slate-400">Real-time alerts broadcasted to smallholder networks</p>
          </div>
        </div>

        <span className="text-[10px] font-mono bg-amber-950 text-amber-300 border border-amber-800 px-2.5 py-1 rounded-full font-bold">
          3 Active Alerts
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs hover:border-amber-700/60 transition-all">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white flex items-center gap-1.5">
                <span>{alert.flag}</span> {alert.country}
              </span>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded font-mono ${
                alert.severity === 'CRITICAL' ? 'bg-rose-950 text-rose-300 border border-rose-800' : 'bg-amber-950 text-amber-300'
              }`}>
                {alert.severity}
              </span>
            </div>

            <div className="font-bold text-slate-200 text-xs">{alert.title}</div>
            <p className="text-[11px] text-slate-400 leading-relaxed">{alert.impact}</p>

            <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-[11px] text-emerald-400">
              <strong className="text-white block">AI Action Plan:</strong> {alert.recommendation}
            </div>

            <div className="text-[10px] text-slate-500 font-mono text-right">{alert.time}</div>
          </div>
        ))}
      </div>

    </div>
  );
}
