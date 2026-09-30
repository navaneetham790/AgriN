import React, { useState } from 'react';
import { BRICS_REGIONS } from '../data/bricsRegions';
import { RefreshCw, Sparkles, TrendingUp, ShieldCheck, DollarSign, Droplets, Leaf, Award, CheckCircle2 } from 'lucide-react';

export default function CropRecommendation({ initialRegion }) {
  const [farmSize, setFarmSize] = useState(5.0); // Hectares
  const [selectedRegion, setSelectedRegion] = useState(initialRegion || BRICS_REGIONS[0]);
  const [primaryGoal, setPrimaryGoal] = useState('nitrogen'); // nitrogen | carbon | water | yield
  const [isCalculating, setIsCalculating] = useState(false);

  // Computed Regenerative Impact Metrics
  const carbonSequestration = (farmSize * (selectedRegion.organicCarbon * 1.85)).toFixed(1); // t CO2 / year
  const fertilizerSavingsUsd = (farmSize * 142).toFixed(0); // USD
  const nitrogenFixationKg = (farmSize * 42).toFixed(0); // kg N / ha
  const waterSavedLiters = (farmSize * 28000).toLocaleString(); // liters

  const handleRecalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 space-y-6">
      
      {/* Title Header */}
      <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <RefreshCw className="w-6 h-6 text-emerald-400" />
            <h2 className="text-xl font-bold text-slate-100">Regenerative Crop Rotation & Soil Restoration Engine</h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Simulate climate-resilient crop sequences, calculate carbon offset credits, and reduce chemical inputs.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-emerald-950/80 border border-emerald-800/60 px-3.5 py-1.5 rounded-xl text-xs text-emerald-300">
          <Award className="w-4 h-4 text-amber-400" />
          <span className="font-bold">BRICS AgriN Regenerative Protocol Standard</span>
        </div>
      </div>

      {/* Control Panel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Form: Inputs */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 space-y-5">
          <h3 className="font-extrabold text-sm text-slate-100 flex items-center gap-2 border-b border-slate-800 pb-3">
            <span>⚙️</span> Farm & Agro-Ecological Parameters
          </h3>

          {/* Region Selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300">BRICS Agricultural Belt:</label>
            <select
              value={selectedRegion.id}
              onChange={(e) => {
                const reg = BRICS_REGIONS.find(r => r.id === e.target.value);
                if (reg) setSelectedRegion(reg);
              }}
              className="w-full bg-slate-950 text-xs text-slate-100 p-3 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500"
            >
              {BRICS_REGIONS.map(reg => (
                <option key={reg.id} value={reg.id}>
                  {reg.flag} {reg.country} — {reg.regionName}
                </option>
              ))}
            </select>
          </div>

          {/* Farm Size Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-bold text-slate-300">
              <span>Total Farm Area:</span>
              <span className="text-emerald-400 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                {farmSize} Hectares ({ (farmSize * 2.471).toFixed(1) } Acres)
              </span>
            </div>
            <input
              type="range"
              min="0.5"
              max="100"
              step="0.5"
              value={farmSize}
              onChange={(e) => setFarmSize(parseFloat(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
          </div>

          {/* Regenerative Goal Selection */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 block">Primary Soil Restoration Objective:</label>
            
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => { setPrimaryGoal('nitrogen'); handleRecalculate(); }}
                className={`p-2.5 rounded-xl text-xs font-bold text-left transition-all border ${
                  primaryGoal === 'nitrogen'
                    ? 'bg-emerald-950 text-emerald-300 border-emerald-500'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                🌱 Nitrogen Fixation
              </button>

              <button
                onClick={() => { setPrimaryGoal('carbon'); handleRecalculate(); }}
                className={`p-2.5 rounded-xl text-xs font-bold text-left transition-all border ${
                  primaryGoal === 'carbon'
                    ? 'bg-emerald-950 text-emerald-300 border-emerald-500'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                🪨 Carbon Storage
              </button>

              <button
                onClick={() => { setPrimaryGoal('water'); handleRecalculate(); }}
                className={`p-2.5 rounded-xl text-xs font-bold text-left transition-all border ${
                  primaryGoal === 'water'
                    ? 'bg-emerald-950 text-emerald-300 border-emerald-500'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                💧 Water Conservation
              </button>

              <button
                onClick={() => { setPrimaryGoal('yield'); handleRecalculate(); }}
                className={`p-2.5 rounded-xl text-xs font-bold text-left transition-all border ${
                  primaryGoal === 'yield'
                    ? 'bg-emerald-950 text-emerald-300 border-emerald-500'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                📈 Pest & Disease Break
              </button>
            </div>
          </div>

          {/* Current Soil Telemetry Snapshot */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
            <span className="font-bold text-slate-400 uppercase tracking-wider block text-[10px]">
              Baseline Soil Telemetry
            </span>
            <div className="grid grid-cols-2 gap-2 text-slate-300">
              <div>Type: <span className="font-semibold text-emerald-400">{selectedRegion.soilType}</span></div>
              <div>pH: <span className="font-semibold text-emerald-400">{selectedRegion.soilpH}</span></div>
              <div>Organic Carbon: <span className="font-semibold text-amber-400">{selectedRegion.organicCarbon}%</span></div>
              <div>NDVI Score: <span className="font-semibold text-emerald-400">{selectedRegion.ndvi}</span></div>
            </div>
          </div>

        </div>

        {/* Right 2 Columns: Impact Metrics & Rotation Sequence Timeline */}
        <div className="lg:col-span-2 space-y-5">
          
          {/* Key Impact Counter Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            
            <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 space-y-1">
              <div className="text-[11px] text-slate-400 flex items-center gap-1">
                <Leaf className="w-3.5 h-3.5 text-emerald-400" /> Carbon Offset
              </div>
              <div className="text-xl font-black text-emerald-400">
                {carbonSequestration} <span className="text-xs font-normal">t CO₂/yr</span>
              </div>
              <div className="text-[10px] text-slate-500">Sequestration Credit</div>
            </div>

            <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 space-y-1">
              <div className="text-[11px] text-slate-400 flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-amber-400" /> Fertilizer Savings
              </div>
              <div className="text-xl font-black text-amber-300">
                ${fertilizerSavingsUsd} <span className="text-xs font-normal">/yr</span>
              </div>
              <div className="text-[10px] text-slate-500">-35% Synthetic Input</div>
            </div>

            <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 space-y-1">
              <div className="text-[11px] text-slate-400 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" /> Bio-Nitrogen
              </div>
              <div className="text-xl font-black text-teal-300">
                +{nitrogenFixationKg} <span className="text-xs font-normal">kg N</span>
              </div>
              <div className="text-[10px] text-slate-500">Leguminous Fixation</div>
            </div>

            <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 space-y-1">
              <div className="text-[11px] text-slate-400 flex items-center gap-1">
                <Droplets className="w-3.5 h-3.5 text-sky-400" /> Water Saved
              </div>
              <div className="text-xl font-black text-sky-300">
                {waterSavedLiters} <span className="text-xs font-normal">L</span>
              </div>
              <div className="text-[10px] text-slate-500">Subsurface Moisture Retention</div>
            </div>

          </div>

          {/* AI Recommended 3-Phase Crop Rotation Sequence */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h3 className="font-extrabold text-lg text-slate-100 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-400" /> Recommended 3-Phase Regenerative Rotation Sequence
                </h3>
                <p className="text-xs text-slate-400">Tailored for {selectedRegion.country} ({selectedRegion.regionName})</p>
              </div>

              <span className="text-xs font-mono bg-emerald-950 text-emerald-300 px-3 py-1 rounded-full border border-emerald-800">
                Optimal 18-Month Cycle
              </span>
            </div>

            {/* Sequence Timeline Cards */}
            <div className="space-y-3">
              
              {/* Phase 1 */}
              <div className="bg-slate-950 p-4 rounded-xl border border-emerald-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-700 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <div className="font-bold text-slate-100 text-sm flex items-center gap-2">
                      {selectedRegion.recommendedRotation[0]?.crop || 'Mung Bean (Legume Cover)'}
                      <span className="text-[10px] bg-emerald-900/60 text-emerald-300 px-2 py-0.5 rounded font-mono">Restorative Phase</span>
                    </div>
                    <p className="text-xs text-emerald-400 mt-0.5">
                      {selectedRegion.recommendedRotation[0]?.benefit || 'Nitrogen Fixation & Soil Aeration'}
                    </p>
                  </div>
                </div>
                <div className="text-right font-mono text-xs text-slate-400">
                  Duration: {selectedRegion.recommendedRotation[0]?.term || '60 Days'}
                </div>
              </div>

              {/* Phase 2 */}
              <div className="bg-slate-950 p-4 rounded-xl border border-teal-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-teal-950 text-teal-400 border border-teal-700 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <div className="font-bold text-slate-100 text-sm flex items-center gap-2">
                      {selectedRegion.recommendedRotation[1]?.crop || 'Main Cash Crop'}
                      <span className="text-[10px] bg-teal-900/60 text-teal-300 px-2 py-0.5 rounded font-mono">High Yield Harvest</span>
                    </div>
                    <p className="text-xs text-teal-400 mt-0.5">
                      {selectedRegion.recommendedRotation[1]?.benefit || 'Capitalizes on biologically fixed NPK'}
                    </p>
                  </div>
                </div>
                <div className="text-right font-mono text-xs text-slate-400">
                  Duration: {selectedRegion.recommendedRotation[1]?.term || '120 Days'}
                </div>
              </div>

              {/* Phase 3 */}
              <div className="bg-slate-950 p-4 rounded-xl border border-amber-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-950 text-amber-400 border border-amber-700 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <div className="font-bold text-slate-100 text-sm flex items-center gap-2">
                      {selectedRegion.recommendedRotation[2]?.crop || 'Mustard / Cover Crop'}
                      <span className="text-[10px] bg-amber-900/60 text-amber-300 px-2 py-0.5 rounded font-mono">Bio-Fumigation</span>
                    </div>
                    <p className="text-xs text-amber-400 mt-0.5">
                      {selectedRegion.recommendedRotation[2]?.benefit || 'Suppresses soil-borne pathogens & weeds naturally'}
                    </p>
                  </div>
                </div>
                <div className="text-right font-mono text-xs text-slate-400">
                  Duration: {selectedRegion.recommendedRotation[2]?.term || '90 Days'}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
