import React, { useState } from 'react';
import { BRICS_REGIONS } from '../data/bricsRegions';
import { MessageSquareCode, Send, Bot, User, Sparkles, Languages, Volume2 } from 'lucide-react';

export default function AgroChatbot({ selectedLang }) {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Namaste! Welcome to AgriN AI Agro-Advisory Assistant. I am trained on BRICS soil telemetry, satellite NDVI feeds, and organic regenerative farming protocols. How can I assist your farm today?',
      timestamp: 'Just now'
    }
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sampleQuestions = [
    "What crop should I plant after Basmati Rice in Punjab to restore Nitrogen?",
    "How can I organically treat Potato Late Blight without chemical sprays?",
    "Which cover crop sequesters maximum carbon in Mato Grosso, Brazil?",
    "How does BRICS AgriN share soil telemetry across member states?"
  ];

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    // Add User Message
    const newMsg = {
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMsg]);
    if (!textToSend) setInputQuery('');
    setIsTyping(true);

    // AI Response Logic
    setTimeout(() => {
      let aiText = "Based on current BRICS AgriN telemetry: ";
      if (query.toLowerCase().includes('punjab') || query.toLowerCase().includes('rice') || query.toLowerCase().includes('basmati')) {
        aiText += "In the Punjab Agricultural Belt, planting **Mung Bean (Vigna radiata)** immediately after Basmati Rice fixes ~35-42 kg of atmospheric Nitrogen per hectare, reduces synthetic urea demand by 30%, and takes only 60 days before the next sowing cycle.";
      } else if (query.toLowerCase().includes('blight') || query.toLowerCase().includes('potato') || query.toLowerCase().includes('treat')) {
        aiText += "For **Potato Late Blight**, avoid chemical fungicides by spraying **Trichoderma viride bio-agent (5g/L)** combined with **Copper Octanoate**. Ensure wide plant spacing to improve airflow, and destroy infected haulms immediately to prevent spore splash.";
      } else if (query.toLowerCase().includes('brazil') || query.toLowerCase().includes('mato grosso') || query.toLowerCase().includes('carbon')) {
        aiText += "In Mato Grosso (Brazil), introducing **Safrinha Maize intercropped with Brachiaria grass** sequesters up to 2.4 metric tons of Soil Organic Carbon (SOC) per hectare while providing year-round soil biomass cover against tropical erosion.";
      } else {
        aiText += "AgriN integrates real-time Sentinel-2 satellite data, soil moisture sensors, and local weather forecasts to generate localized agro-advisories. You can explore crop rotation plans or disease scans using the top navigation menu!";
      }

      setMessages(prev => [...prev, {
        sender: 'ai',
        text: aiText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-8 py-6 space-y-6">
      
      {/* Title Banner */}
      <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center">
            <Bot className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-100">AgriN Multilingual Agro-Advisory Chatbot</h2>
            <p className="text-xs text-slate-400">Powered by BRICS Regenerative Knowledge Graph</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950 px-3 py-1.5 rounded-xl border border-emerald-800">
          <Languages className="w-4 h-4" />
          <span>Active Language: {selectedLang}</span>
        </div>
      </div>

      {/* Main Chat Box */}
      <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-4 h-[420px] flex flex-col justify-between">
        
        {/* Messages Feed */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-800 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-emerald-400" />
                </div>
              )}

              <div className={`max-w-[80%] rounded-2xl p-3.5 text-xs leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-emerald-600 text-slate-950 font-medium rounded-tr-none'
                  : 'bg-slate-950 text-slate-200 border border-slate-800 rounded-tl-none space-y-1'
              }`}>
                <div>{msg.text}</div>
                <div className={`text-[10px] ${msg.sender === 'user' ? 'text-emerald-950 font-bold' : 'text-slate-500'} text-right`}>
                  {msg.timestamp}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-lg bg-emerald-700 text-slate-950 flex items-center justify-center shrink-0 font-bold text-xs">
                  <User className="w-4 h-4 text-slate-950" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-slate-950 p-3 rounded-xl border border-slate-800 w-fit">
              <Bot className="w-4 h-4 animate-bounce" />
              <span>Analyzing BRICS AgriN Soil Knowledge Graph...</span>
            </div>
          )}
        </div>

        {/* Quick Question Chips */}
        <div className="pt-3 border-t border-slate-800 space-y-2">
          <div className="text-[11px] text-slate-400 flex items-center gap-1 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Suggested Questions:
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {sampleQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="whitespace-nowrap bg-slate-950 hover:bg-slate-800 text-slate-300 text-[11px] px-3 py-1.5 rounded-xl border border-slate-800 transition-all text-left"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Text Input Bar */}
          <div className="flex items-center gap-2 pt-1">
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask any question about soil health, crop disease, weather, or crop rotation..."
              className="flex-1 bg-slate-950 text-xs text-slate-100 p-3 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500"
            />
            
            <button
              onClick={() => handleSendMessage()}
              className="bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold p-3 rounded-xl transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
