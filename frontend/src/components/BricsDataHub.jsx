import React, { useState } from 'react';
import { BRICS_PUBLIC_GOOD_SCHEMA, BRICS_NODES_STATUS } from '../data/bricsPublicGoodSchemas';
import { Share2, Server, CheckCircle2, Copy, Download, Code, ShieldCheck, Activity, Send } from 'lucide-react';

export default function BricsDataHub() {
  const [copied, setCopied] = useState(false);
  const [selectedNode, setSelectedNode] = useState(BRICS_NODES_STATUS[0]);
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  const [broadcastMessage, setBroadcastMessage] = useState(null);

  const schemaJsonString = JSON.stringify(BRICS_PUBLIC_GOOD_SCHEMA, null, 2);

  const handleCopySchema = () => {
    navigator.clipboard.writeText(schemaJsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulateBroadcast = () => {
    setIsBroadcasting(true);
    setBroadcastMessage(null);
    setTimeout(() => {
      setIsBroadcasting(false);
      setBroadcastMessage({
        timestamp: new Date().toISOString(),
        txHash: '0x' + Math.random().toString(16).substring(2, 18),
        status: 'SUCCESS',
        nodesAcknowledged: 8
      });
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 space-y-6">
      
      {/* Title Header */}
      <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Share2 className="w-6 h-6 text-emerald-400" />
            <h2 className="text-xl font-bold text-slate-100">BRICS AgriN Interoperable Digital Public Good (DPG) Portal</h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Standardized open telemetry schemas, federated differential privacy protocols, and cross-border AI model registry.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-emerald-950/80 border border-emerald-800/60 px-3.5 py-1.5 rounded-xl text-xs text-emerald-300">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span className="font-bold">DPG Certified: UN/BRICS AgriN Standard v1.2</span>
        </div>
      </div>

      {/* Main Grid: BRICS Federated Nodes & Schema Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: BRICS Federated Nodes Live Monitor */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 space-y-4">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
              <Server className="w-4 h-4 text-emerald-400" /> Active BRICS Federated Nodes
            </span>
            <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded font-mono">
              8/8 Online
            </span>
          </div>

          <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
            {BRICS_NODES_STATUS.map((node) => (
              <button
                key={node.code}
                onClick={() => setSelectedNode(node)}
                className={`w-full text-left p-3 rounded-xl text-xs transition-all border ${
                  selectedNode.code === node.code
                    ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/60 shadow-md'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-bold text-slate-200 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>{node.country} ({node.code})</span>
                  </div>
                  <span className="font-mono text-[10px] bg-slate-900 px-2 py-0.5 rounded text-emerald-400">
                    {node.latency}
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1 truncate">
                  {node.institute}
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5 font-mono">
                  Synced Records: {node.syncRecords.toLocaleString()} | Schema: {node.version}
                </div>
              </button>
            ))}
          </div>

        </div>

        {/* Right 2 Columns: Schema Code Viewer & Payload Broadcast Simulator */}
        <div className="lg:col-span-2 space-y-5">
          
          {/* Action Simulation Card */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 space-y-4">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="font-extrabold text-slate-100 text-sm flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400" /> Broadcast Telemetry Payload to BRICS AgriN Network
                </h3>
                <p className="text-xs text-slate-400">Node: {selectedNode.country} ({selectedNode.institute})</p>
              </div>

              <button
                onClick={handleSimulateBroadcast}
                disabled={isBroadcasting}
                className="bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2 transition-all disabled:opacity-50"
              >
                <Send className={`w-3.5 h-3.5 ${isBroadcasting ? 'animate-bounce' : ''}`} />
                <span>{isBroadcasting ? 'Encrypting & Syncing...' : 'Simulate Federated Sync'}</span>
              </button>
            </div>

            {/* Broadcast Ack Banner */}
            {broadcastMessage && (
              <div className="bg-emerald-950/80 border border-emerald-500/60 p-3 rounded-xl text-xs text-emerald-200 space-y-1 font-mono">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-4 h-4" /> Telemetry Payload Successfully Synchronized Across 8 BRICS Nodes!
                </div>
                <div className="text-[11px] text-emerald-300">
                  Transaction Hash: <span className="text-white">{broadcastMessage.txHash}</span> | Timestamp: {broadcastMessage.timestamp}
                </div>
              </div>
            )}

          </div>

          {/* JSON Schema Code Viewer Box */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 space-y-3">
            
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                <Code className="w-4 h-4 text-emerald-400" />
                <span>BRICS AgriN Standard JSON Schema v1.2</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopySchema}
                  className="bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-lg border border-slate-800 flex items-center gap-1.5 transition-all"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied!' : 'Copy Schema'}</span>
                </button>
              </div>
            </div>

            {/* Code Block */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 max-h-[340px] overflow-y-auto">
              <pre className="text-[11px] font-mono text-emerald-400 leading-relaxed whitespace-pre-wrap">
                {schemaJsonString}
              </pre>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
