import React, { useState, useEffect, useRef } from 'react';
import { BRICS_REGIONS } from '../data/bricsRegions';
import ReportExporter from './ReportExporter';
import { Layers, Droplets, Sparkles, Thermometer, ShieldAlert, ArrowRight, Eye } from 'lucide-react';
import L from 'leaflet';

export default function SatelliteMap({ onSelectRegionForAdvice }) {
  const [selectedRegion, setSelectedRegion] = useState(BRICS_REGIONS[0]);
  const [activeLayer, setActiveLayer] = useState('ndvi'); // ndvi | moisture | carbon | drought
  const [tileMode, setTileMode] = useState('satellite'); // satellite | street
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const tileLayerRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [selectedRegion.lat, selectedRegion.lng],
        zoom: 5,
        zoomControl: true,
      });

      // Esri World Imagery (100% REAL Satellite Imagery - Free, No API Key, No Watermark)
      const satelliteTiles = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        maxZoom: 18
      });

      satelliteTiles.addTo(map);
      tileLayerRef.current = satelliteTiles;
      mapInstanceRef.current = map;
    }

    const map = mapInstanceRef.current;

    // Toggle tile mode between Real Satellite and OpenStreetMap
    if (tileLayerRef.current) {
      map.removeLayer(tileLayerRef.current);
      if (tileMode === 'satellite') {
        tileLayerRef.current = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
          attribution: 'Esri World Imagery Satellite',
          maxZoom: 18
        });
      } else {
        tileLayerRef.current = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
          maxZoom: 19
        });
      }
      tileLayerRef.current.addTo(map);
    }

    // Clear old markers
    markersRef.current.forEach(m => map.removeLayer(m));
    markersRef.current = [];

    // Add BRICS Markers with real telemetry
    BRICS_REGIONS.forEach((region) => {
      let markerColor = '#22c55e';
      if (activeLayer === 'moisture' && region.soilMoisture < 30) markerColor = '#f59e0b';
      if (activeLayer === 'drought' && region.droughtRisk === 'High') markerColor = '#ef4444';

      const customIcon = L.divIcon({
        className: 'custom-leaflet-marker',
        html: `
          <div style="
            background: rgba(15, 23, 42, 0.95);
            border: 2px solid ${region.id === selectedRegion.id ? '#34d399' : '#059669'};
            box-shadow: 0 0 15px ${markerColor}bb;
            border-radius: 9999px;
            padding: 4px 10px;
            color: white;
            font-size: 11px;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 6px;
            white-space: nowrap;
            transform: scale(${region.id === selectedRegion.id ? 1.15 : 1});
            transition: all 0.2s ease;
          ">
            <span>${region.flag}</span>
            <span>${region.regionName.split(' ')[0]}</span>
            <span style="background:${markerColor}; color:#0f172a; padding:1px 5px; border-radius:4px; font-size:10px;">
              ${activeLayer === 'ndvi' ? 'NDVI ' + region.ndvi : ''}
              ${activeLayer === 'moisture' ? region.soilMoisture + '%' : ''}
              ${activeLayer === 'carbon' ? region.organicCarbon + '% C' : ''}
              ${activeLayer === 'drought' ? region.droughtRisk : ''}
            </span>
          </div>
        `,
        iconSize: [120, 32],
        iconAnchor: [60, 16]
      });

      const marker = L.marker([region.lat, region.lng], { icon: customIcon }).addTo(map);
      marker.on('click', () => {
        setSelectedRegion(region);
        map.flyTo([region.lat, region.lng], 6, { duration: 1.2 });
      });

      markersRef.current.push(marker);
    });

  }, [activeLayer, tileMode, selectedRegion.id]);

  const handleFlyToRegion = (region) => {
    setSelectedRegion(region);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([region.lat, region.lng], 6, { duration: 1.2 });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 space-y-6">
      
      {/* Top Banner & Selector */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
        <div>
          <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
            <span>🛰️</span> BRICS Interoperable Agricultural Telemetry Engine
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Real-time geospatial analytics powered by Esri World Satellite Imagery & OpenStreetMap Telemetry
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {BRICS_REGIONS.map((reg) => (
            <button
              key={reg.id}
              onClick={() => handleFlyToRegion(reg)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedRegion.id === reg.id
                  ? 'bg-emerald-500 text-slate-950 font-extrabold shadow-md shadow-emerald-950 ring-1 ring-emerald-300'
                  : 'bg-slate-950 text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              <span>{reg.flag}</span>
              <span>{reg.country}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Map + Side Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Map Box (2 Cols) */}
        <div className="lg:col-span-2 space-y-4">
          
          <div className="flex flex-wrap items-center justify-between bg-slate-900/90 px-4 py-2.5 rounded-2xl border border-slate-800 gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-emerald-400" /> Layer:
              </span>
              <button
                onClick={() => setActiveLayer('ndvi')}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeLayer === 'ndvi'
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
                }`}
              >
                🌱 NDVI ({selectedRegion.ndvi})
              </button>
              <button
                onClick={() => setActiveLayer('moisture')}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeLayer === 'moisture'
                    ? 'bg-sky-500 text-slate-950 font-bold'
                    : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
                }`}
              >
                💧 Moisture ({selectedRegion.soilMoisture}%)
              </button>
              <button
                onClick={() => setActiveLayer('carbon')}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeLayer === 'carbon'
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
                }`}
              >
                🪨 Carbon ({selectedRegion.organicCarbon}%)
              </button>
            </div>

            {/* Satellite / Street Map Toggle */}
            <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => setTileMode('satellite')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  tileMode === 'satellite' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                🛰️ Real Satellite
              </button>
              <button
                onClick={() => setTileMode('street')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  tileMode === 'street' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                🗺️ OpenStreetMap
              </button>
            </div>
          </div>

          <div className="relative h-[480px] rounded-2xl overflow-hidden border border-emerald-900/40 shadow-2xl bg-slate-950">
            <div ref={mapContainerRef} className="w-full h-full z-10"></div>

            <div className="absolute bottom-4 left-4 z-20 bg-slate-950/90 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-xs space-y-1.5">
              <div className="font-bold text-slate-200 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Active Node: {selectedRegion.country} ({selectedRegion.flag})
              </div>
              <div className="text-[11px] text-slate-400">
                Lat: {selectedRegion.lat}° | Lng: {selectedRegion.lng}°
              </div>
              <div className="text-[10px] text-emerald-400 font-mono">
                Source: Esri World Imagery Satellite (100% Real, Watermark Free)
              </div>
            </div>
          </div>

        </div>

        {/* Right Telemetry Details */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 space-y-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{selectedRegion.flag}</span>
                  <h3 className="font-extrabold text-lg text-white">{selectedRegion.regionName}</h3>
                </div>
                <p className="text-xs text-emerald-400 font-medium">{selectedRegion.bricsTelemetryPartner}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 my-4">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <div className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Droplets className="w-3.5 h-3.5 text-sky-400" /> Soil Moisture
                </div>
                <div className="text-xl font-bold text-sky-300 mt-1">{selectedRegion.soilMoisture}%</div>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <div className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> NDVI Index
                </div>
                <div className="text-xl font-bold text-emerald-300 mt-1">{selectedRegion.ndvi}</div>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <div className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Thermometer className="w-3.5 h-3.5 text-amber-400" /> Soil pH & Carbon
                </div>
                <div className="text-base font-bold text-slate-200 mt-1">
                  pH {selectedRegion.soilpH} <span className="text-xs text-amber-400">({selectedRegion.organicCarbon}% SOC)</span>
                </div>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <div className="text-[11px] text-slate-400 flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-rose-400" /> Climate Vulnerability
                </div>
                <div className={`text-base font-bold mt-1 ${selectedRegion.droughtRisk === 'High' ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {selectedRegion.droughtRisk}
                </div>
              </div>
            </div>

            <div className="bg-emerald-950/40 p-4 rounded-xl border border-emerald-800/60 space-y-3">
              <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block">
                Recommended Crop Rotation
              </span>

              <div className="space-y-2">
                {selectedRegion.recommendedRotation.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-slate-950/70 px-3 py-2 rounded-lg text-xs border border-emerald-900/40">
                    <div>
                      <span className="font-semibold text-slate-200">{item.crop}</span>
                      <p className="text-[10px] text-emerald-400">{item.benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => onSelectRegionForAdvice(selectedRegion)}
            className="w-full bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
          >
            <span>Generate Full Plan for {selectedRegion.country}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Exporter Section */}
      <ReportExporter region={selectedRegion} />

    </div>
  );
}
