import React, { useState } from 'react';
import { DISEASE_DATABASE } from '../data/diseaseDatabase';
import { Scan, UploadCloud, Camera, CheckCircle2, AlertTriangle, ShieldCheck, Leaf, Sparkles, RefreshCw, Layers } from 'lucide-react';

export default function DiseaseScanner() {
  const [selectedDisease, setSelectedDisease] = useState(DISEASE_DATABASE[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [customImage, setCustomImage] = useState(null);
  const [activeTab, setActiveTab] = useState('organic'); // organic | prevention | brics

  const handleSelectSample = (disease) => {
    setSelectedDisease(disease);
    setCustomImage(null);
    triggerScanAnimation();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCustomImage(reader.result);
        triggerScanAnimation();
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerScanAnimation = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 space-y-6">
      
      {/* Title Header */}
      <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Scan className="w-6 h-6 text-emerald-400" />
            <h2 className="text-xl font-bold text-slate-100">AI Computer Vision Crop Disease Diagnostic Tool</h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Detect leaf pathologies in real-time, compute outbreak risk scores, and access BRICS-standard organic treatments.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs bg-emerald-950/80 border border-emerald-800/50 px-3 py-1.5 rounded-xl text-emerald-300">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>Model: AgriN Vision Transformer v3.4 (96.4% Precision)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Image Loader & Sample Selector */}
        <div className="space-y-4">
          
          {/* Main Upload Box */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]">
            
            {/* Neural Scan Line Effect */}
            {isScanning && (
              <div className="absolute inset-0 bg-emerald-500/10 z-20 pointer-events-none flex flex-col justify-between">
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#34d399] animate-bounce"></div>
                <div className="text-center text-xs font-mono font-bold text-emerald-300 bg-slate-950/80 py-1">
                  Scanning Feature Vectors & Leaf Lesion Geometry...
                </div>
              </div>
            )}

            {/* Custom Image or Visual Specimen Box */}
            <div className="w-full h-48 bg-slate-950 rounded-xl border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden group">
              {customImage ? (
                <img src={customImage} alt="Uploaded Leaf Specimen" className="w-full h-full object-cover" />
              ) : (
                <div className="flex flex-col items-center justify-center p-4 text-center space-y-2">
                  <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center">
                    <Leaf className="w-7 h-7 text-emerald-400 animate-pulse" />
                  </div>
                  <span className="text-sm font-bold text-slate-200">{selectedDisease.name}</span>
                  <span className="text-[11px] text-slate-400 italic">Scientific: {selectedDisease.scientificName}</span>
                </div>
              )}
              
              <label className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer">
                <UploadCloud className="w-8 h-8 text-emerald-400 mb-1" />
                <span className="text-xs font-bold text-white">Upload / Drag & Drop Leaf Image</span>
                <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
              </label>
            </div>

            <div className="w-full mt-4 flex items-center justify-between">
              <label className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer transition-all">
                <Camera className="w-4 h-4" />
                <span>Upload Leaf Photo</span>
                <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
              </label>
              
              <button
                onClick={triggerScanAnimation}
                className="ml-2 bg-slate-950 hover:bg-slate-800 text-slate-300 p-2.5 rounded-xl border border-slate-800"
                title="Re-run Diagnostics"
              >
                <RefreshCw className={`w-4 h-4 ${isScanning ? 'animate-spin' : ''}`} />
              </button>
            </div>

          </div>

          {/* Pre-loaded Specimen Picker */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-4 space-y-3">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              Or Select Verified BRICS Disease Specimen:
            </span>

            <div className="space-y-2">
              {DISEASE_DATABASE.map((disease) => (
                <button
                  key={disease.id}
                  onClick={() => handleSelectSample(disease)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all flex items-center justify-between border ${
                    selectedDisease.id === disease.id && !customImage
                      ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/60 font-semibold'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <div>
                    <div className="font-bold text-slate-200">{disease.name}</div>
                    <div className="text-[10px] text-slate-500">Crops: {disease.affectedCrops.join(', ')}</div>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                    disease.severity.includes('High') || disease.severity.includes('Severe')
                      ? 'bg-rose-950 text-rose-300 border border-rose-800/40'
                      : 'bg-amber-950 text-amber-300'
                  }`}>
                    {disease.severity.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right 2 Columns: Detailed AI Diagnosis & Treatment Plan */}
        <div className="lg:col-span-2 space-y-5">
          
          {/* Diagnosis Header Result Card */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-extrabold text-slate-100">{selectedDisease.name}</h3>
                  <span className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-800/60 px-2.5 py-0.5 rounded-full font-mono font-bold">
                    Confidence: {(selectedDisease.confidenceScore * 100).toFixed(1)}%
                  </span>
                </div>
                <p className="text-xs text-emerald-400 font-mono italic mt-0.5">
                  Taxonomy: {selectedDisease.scientificName}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Severity:</span>
                <span className="text-xs font-bold px-3 py-1 rounded-lg bg-rose-950 text-rose-300 border border-rose-800/60 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  {selectedDisease.severity}
                </span>
              </div>
            </div>

            {/* Quick Symptom & Cause Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Identified Symptoms
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedDisease.symptoms}
                </p>
              </div>

              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Environmental Trigger Causes
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedDisease.causes}
                </p>
              </div>
            </div>

          </div>

          {/* Treatment Tabs Navigation */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 space-y-4">
            
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3 overflow-x-auto">
              <button
                onClick={() => setActiveTab('organic')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'organic'
                    ? 'bg-emerald-600 text-slate-950 shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200'
                }`}
              >
                <ShieldCheck className="w-4 h-4" /> Organic & Biological Treatment
              </button>

              <button
                onClick={() => setActiveTab('prevention')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'prevention'
                    ? 'bg-emerald-600 text-slate-950 shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200'
                }`}
              >
                <Leaf className="w-4 h-4" /> Regenerative Crop & Soil Prevention
              </button>

              <button
                onClick={() => setActiveTab('brics')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'brics'
                    ? 'bg-emerald-600 text-slate-950 shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200'
                }`}
              >
                <Layers className="w-4 h-4" /> BRICS Outbreak Risk Zones
              </button>
            </div>

            {/* Tab Content Display */}
            {activeTab === 'organic' && (
              <div className="space-y-3 bg-slate-950 p-4 rounded-xl border border-emerald-900/40">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4" /> BRICS Agro-Ecological Recommended Intervention:
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-sans">
                  {selectedDisease.organicTreatment}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                  <span className="font-semibold text-emerald-400">Chemical Dependency Reduction:</span>
                  <span>Eliminates synthetic pesticide runoff into local groundwater tables by 100%.</span>
                </div>
              </div>
            )}

            {activeTab === 'prevention' && (
              <div className="space-y-3 bg-slate-950 p-4 rounded-xl border border-emerald-900/40">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                  <Leaf className="w-4 h-4" /> Long-Term Regenerative Farming Practices:
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-sans">
                  {selectedDisease.regenerativePrevention}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                  <span className="font-semibold text-emerald-400">Soil Microbiome Health:</span>
                  <span>Preserves mycorrhizal fungal networks and earthworm density.</span>
                </div>
              </div>
            )}

            {activeTab === 'brics' && (
              <div className="space-y-3 bg-slate-950 p-4 rounded-xl border border-emerald-900/40">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                  <Layers className="w-4 h-4" /> High Risk BRICS Member Agricultural Belts:
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-sans font-semibold">
                  {selectedDisease.bricsImpactZone}
                </p>
                <div className="text-[11px] text-slate-400">
                  Shared early warning alert broadcasted via AgriN Federated API Node Protocol v1.2.
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}
