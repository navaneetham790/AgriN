import React, { useState } from 'react';
import { FileText, Download, CheckCircle2, ShieldCheck, Printer, Sparkles, QrCode } from 'lucide-react';

export default function ReportExporter({ region }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [certificateId, setCertificateId] = useState(null);

  const handleGenerateReport = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setCertificateId('BRICS-AGRIN-' + Math.floor(100000 + Math.random() * 900000));
      setIsGenerating(false);
    }, 600);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-900/90 rounded-2xl border border-emerald-900/50 p-5 space-y-4">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div>
          <h3 className="font-extrabold text-white text-sm flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald-400" />
            Official BRICS AgriN Regenerative Soil & Crop Advisory Certificate
          </h3>
          <p className="text-xs text-slate-400">Verifiable Digital Public Good (DPG) Advisory Document</p>
        </div>

        <button
          onClick={handleGenerateReport}
          disabled={isGenerating}
          className="bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isGenerating ? 'Generating Certificate...' : 'Generate Official Certificate'}</span>
        </button>
      </div>

      {certificateId && (
        <div className="bg-slate-950 p-6 rounded-2xl border border-emerald-500/40 space-y-4 font-sans text-slate-200 shadow-2xl">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <div>
                <span className="font-extrabold text-sm text-white block">BRICS AgriN Regenerative Certificate</span>
                <span className="text-[10px] text-slate-500 font-mono">ID: {certificateId}</span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded font-mono font-bold border border-emerald-800">
                VERIFIED DPG RECORD
              </span>
              <div className="text-[10px] text-slate-500 mt-1">{new Date().toLocaleDateString()}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Territory / Node</span>
              <span className="font-bold text-white">{region?.country || 'India'} ({region?.flag || '🇮🇳'})</span>
            </div>

            <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Baseline Soil pH / SOC</span>
              <span className="font-bold text-emerald-300">pH {region?.soilpH || '7.2'} ({region?.organicCarbon || '0.58'}% SOC)</span>
            </div>

            <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Satellite NDVI Score</span>
              <span className="font-bold text-teal-300">{region?.ndvi || '0.74'} Sentinel-2</span>
            </div>

            <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Recommended Sequence</span>
              <span className="font-bold text-amber-300">Legume $\rightarrow$ Basmati $\rightarrow$ Mustard</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-800">
            <div className="text-[11px] text-slate-400">
              Certified by ICAR / EMBRAPA BRICS Agricultural Observatories Standard.
            </div>

            <button
              onClick={handlePrint}
              className="bg-slate-900 hover:bg-slate-800 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-emerald-400" />
              <span>Print / Save PDF</span>
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
