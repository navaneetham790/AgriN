import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import Navigation from './components/Navigation';
import SatelliteMap from './components/SatelliteMap';
import DiseaseScanner from './components/DiseaseScanner';
import CropRecommendation from './components/CropRecommendation';
import BricsDataHub from './components/BricsDataHub';
import MicroserviceHealth from './components/MicroserviceHealth';
import EmergencyClimateAlerts from './components/EmergencyClimateAlerts';
import AgroChatbot from './components/AgroChatbot';
import { BRICS_REGIONS } from './data/bricsRegions';
import { Sprout, LogOut, User } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('landing'); // landing | dashboard
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  const [activeTab, setActiveTab] = useState('map'); // map | disease | recommendation | brics-hub | microservice-health | chat
  const [selectedLang, setSelectedLang] = useState('EN');
  const [targetRegionForAdvice, setTargetRegionForAdvice] = useState(BRICS_REGIONS[0]);

  // Guaranteed Handler for Login & Dashboard Switch
  const handleLoginSuccess = (profile) => {
    setUserProfile(profile);
    setShowLoginModal(false);
    setCurrentView('dashboard');
  };

  const handleSelectRegionFromMap = (region) => {
    setTargetRegionForAdvice(region);
    setActiveTab('recommendation');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Login Modal with Google OAuth Chooser */}
      {showLoginModal && (
        <LoginPage
          onClose={() => setShowLoginModal(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {/* Render Landing Page */}
      {currentView === 'landing' ? (
        <LandingPage
          onExploreDashboard={() => setCurrentView('dashboard')}
          onOpenLogin={() => setShowLoginModal(true)}
        />
      ) : (
        /* Render Main Dashboard */
        <div className="min-h-screen flex flex-col">
          
          {/* Top Authenticated User Banner */}
          {userProfile && (
            <div className="bg-emerald-950 border-b border-emerald-800/80 px-4 lg:px-8 py-2 text-xs flex items-center justify-between text-emerald-200">
              <div className="flex items-center gap-2">
                <span className="text-base">{userProfile.avatar || '👤'}</span>
                <span>Logged in via <strong className="text-white">{userProfile.provider}</strong>: <strong className="text-emerald-300">{userProfile.name || userProfile.email}</strong> ({userProfile.role})</span>
              </div>
              <button
                onClick={() => setUserProfile(null)}
                className="text-emerald-400 hover:text-white flex items-center gap-1 font-semibold cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" /> Sign Out
              </button>
            </div>
          )}

          {/* Quick Nav Bar to return to Landing */}
          <div className="bg-slate-900 border-b border-slate-800 px-4 py-1.5 flex items-center justify-between text-xs">
            <button
              onClick={() => setCurrentView('landing')}
              className="text-slate-400 hover:text-emerald-400 flex items-center gap-1 font-medium cursor-pointer"
            >
              ← Back to Landing Page
            </button>
            <span className="text-[10px] text-slate-400 font-mono">AgriN 3-Spring-Boot Microservice System</span>
          </div>

          <Header selectedLang={selectedLang} setSelectedLang={setSelectedLang} />
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

          <main className="flex-1 space-y-6 pb-8">
            
            {/* Render Map & Emergency Warning Banner */}
            {activeTab === 'map' && (
              <div className="space-y-6">
                <SatelliteMap onSelectRegionForAdvice={handleSelectRegionFromMap} />
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                  <EmergencyClimateAlerts onSelectRegion={handleSelectRegionFromMap} />
                </div>
              </div>
            )}

            {activeTab === 'disease' && (
              <DiseaseScanner />
            )}

            {activeTab === 'recommendation' && (
              <CropRecommendation initialRegion={targetRegionForAdvice} />
            )}

            {activeTab === 'brics-hub' && (
              <BricsDataHub />
            )}

            {activeTab === 'microservice-health' && (
              <MicroserviceHealth />
            )}

            {activeTab === 'chat' && (
              <AgroChatbot selectedLang={selectedLang} />
            )}
          </main>

          <footer className="bg-slate-950 border-t border-slate-900 py-6 px-4 text-center text-xs text-slate-500">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Sprout className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-slate-400">AgriN — BRICS Regenerative Agricultural Intelligence Network</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                <span>Theme: BRICS Cooperation</span>
                <span>•</span>
                <span>Spring Boot Microservice Backend</span>
              </div>
            </div>
          </footer>

        </div>
      )}

    </div>
  );
}
