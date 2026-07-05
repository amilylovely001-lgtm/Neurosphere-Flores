import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, Cpu, Activity, ShieldCheck, Layers, Calendar, 
  DollarSign, ClipboardList, Eye, Info, HelpCircle, 
  ExternalLink, UserCheck, BookOpen 
} from 'lucide-react';

import VolumeViewer from './components/VolumeViewer';
import DigitalTwinSimulator from './components/DigitalTwinSimulator';
import RiskMatrix from './components/RiskMatrix';
import WBSViewer from './components/WBSViewer';
import CostCalculator from './components/CostCalculator';
import EngineeringMatrices from './components/EngineeringMatrices';
import GanttChart from './components/GanttChart';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('manual');

  // List of active 23 roles on the joint board (abbreviated in metadata for spacing)
  const engineeringRoles = [
    "Chief Systems Engineer", "Chief Structural Engineer", "Bamboo Composite Specialist",
    "Marine Engineer", "Renewable Energy Engineer", "AI System Architect", "Digital Twin Architect",
    "IoT Architect", "Smart Grid Engineer", "SHM Specialist", "Environmental Engineer",
    "Circular Economy Specialist", "Construction Engineer", "Cost Engineer", "Risk Engineer",
    "BIM Manager", "Systems Safety Engineer", "FEED Consultant", "Smart City Planner",
    "Cultural Heritage Architect", "Disaster Mitigation Engineer", "Oceanographer", "Climate Scientist"
  ];

  return (
    <div className="min-h-screen bg-[#0A0C10] text-[#E1E4EA] selection:bg-emerald-500/30 selection:text-white" id="main-app-container">
      
      {/* Top Professional Utility Bar */}
      <div className="bg-[#111317] border-b border-[#1E222B] px-6 py-2.5 flex flex-col sm:flex-row justify-between items-center text-xs font-mono gap-2 text-gray-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-emerald-400 font-semibold animate-pulse">
            <span className="w-2 h-2 rounded-full bg-emerald-400 block" />
            STANDBY FOR ENGINEERING COMMISSIONING
          </span>
          <span className="text-gray-600 hidden sm:inline">|</span>
          <span className="hidden sm:inline">ISO/IEC/IEEE 15288 SYSTEMS PROTOCOL</span>
        </div>
        <div className="flex items-center gap-3">
          <span>PORTAL VERSI: 1.0.0</span>
          <span>DATE: 2026-07-05</span>
        </div>
      </div>

      {/* Primary Landing Hero Section */}
      <header className="max-w-7xl mx-auto px-6 pt-8 pb-4 text-left">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-[#232731] pb-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <Compass className="w-5 h-5 text-emerald-400" />
              <span className="font-mono text-[10px] font-bold text-gray-400 tracking-wider uppercase bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                PROYEK NASIONAL REGENERATIF
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 font-mono uppercase">
              NEUROSPHERE FLORES FEED Portal
            </h1>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
              Cyber-Physical Systems Integration Board: Mbaru Niang Composite Architecture, Digital Twin, Distributed AI, Fiber Bragg Grating SHM, Hybrid Energy Microgrid, and Circular Blue-Green Economy.
            </p>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-gray-500 shrink-0 bg-[#111317] border border-[#232731] px-3.5 py-2 rounded-lg">
            <span>SISTEM ENERGI INDEPENDEN</span>
            <span className="text-emerald-400 font-bold">100% RE</span>
          </div>
        </div>
      </header>

      {/* Joint Board Info Section (Collapsible details) */}
      <section className="max-w-7xl mx-auto px-6 mb-6">
        <div className="bg-[#14171E] border border-[#232731] rounded-xl p-5 text-left">
          <div className="flex items-center gap-2 mb-3 border-b border-gray-800 pb-2">
            <UserCheck className="w-4 h-4 text-cyan-400" />
            <h3 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
              REKAYASA KOLABORATIF: KOMITE DOKUMEN BIRU (23 DEPARTEMEN)
            </h3>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed mb-4">
            Portal ini menyajikan Dokumen Biru (FEED - Front End Engineering Design) yang disusun secara matematis dan modular oleh komite rekayasa multidisiplin. Desain ini murni menggunakan sains, hukum fisika terapan, and structural composites, mengintegrasikan kearifan lokal Flores dengan cyber-physical systems modern.
          </p>
          
          <div className="flex flex-wrap gap-1.5 max-h-[110px] overflow-y-auto pr-1">
            {engineeringRoles.map((role, idx) => (
              <span key={idx} className="text-[9px] font-mono text-gray-400 bg-gray-950 border border-gray-800/60 px-2 py-0.5 rounded-md hover:border-cyan-500/30 transition hover:text-white cursor-default">
                ● {role}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Hub Tabs Switcher */}
      <section className="max-w-7xl mx-auto px-6 mb-4">
        <div className="flex flex-wrap gap-2 border-b border-[#1E222B] pb-3" id="hub-navigation-tabs">
          
          <button
            onClick={() => setActiveTab('manual')}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-mono transition border ${
              activeTab === 'manual'
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400 font-bold'
                : 'bg-transparent border-transparent text-gray-400 hover:bg-[#111317] hover:text-white'
            }`}
            id="tab-manual"
          >
            <BookOpen className="w-4 h-4" />
            Spesifikasi FEED (Volume A-S)
          </button>

          <button
            onClick={() => setActiveTab('twin')}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-mono transition border ${
              activeTab === 'twin'
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400 font-bold'
                : 'bg-transparent border-transparent text-gray-400 hover:bg-[#111317] hover:text-white'
            }`}
            id="tab-twin"
          >
            <Cpu className="w-4 h-4" />
            Digital Twin Simulator
          </button>

          <button
            onClick={() => setActiveTab('risk')}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-mono transition border ${
              activeTab === 'risk'
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400 font-bold'
                : 'bg-transparent border-transparent text-gray-400 hover:bg-[#111317] hover:text-white'
            }`}
            id="tab-risk"
          >
            <ShieldCheck className="w-4 h-4" />
            Matriks Risiko (150 Items)
          </button>

          <button
            onClick={() => setActiveTab('wbs')}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-mono transition border ${
              activeTab === 'wbs'
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400 font-bold'
                : 'bg-transparent border-transparent text-gray-400 hover:bg-[#111317] hover:text-white'
            }`}
            id="tab-wbs"
          >
            <Layers className="w-4 h-4" />
            Work Packages (WBS)
          </button>

          <button
            onClick={() => setActiveTab('gantt')}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-mono transition border ${
              activeTab === 'gantt'
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400 font-bold'
                : 'bg-transparent border-transparent text-gray-400 hover:bg-[#111317] hover:text-white'
            }`}
            id="tab-gantt"
          >
            <Calendar className="w-4 h-4" />
            Jadwal & Roadmap
          </button>

          <button
            onClick={() => setActiveTab('cost')}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-mono transition border ${
              activeTab === 'cost'
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400 font-bold'
                : 'bg-transparent border-transparent text-gray-400 hover:bg-[#111317] hover:text-white'
            }`}
            id="tab-cost"
          >
            <DollarSign className="w-4 h-4" />
            Estimator Biaya & BOM
          </button>

          <button
            onClick={() => setActiveTab('matrices')}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-mono transition border ${
              activeTab === 'matrices'
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400 font-bold'
                : 'bg-transparent border-transparent text-gray-400 hover:bg-[#111317] hover:text-white'
            }`}
            id="tab-matrices"
          >
            <ClipboardList className="w-4 h-4" />
            Matriks Keterlacakan (RTM/FMEA)
          </button>

        </div>
      </section>

      {/* Main Container Stage with Animation */}
      <main className="max-w-7xl mx-auto px-6 pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'manual' && <VolumeViewer />}
            {activeTab === 'twin' && <DigitalTwinSimulator />}
            {activeTab === 'risk' && <RiskMatrix />}
            {activeTab === 'wbs' && <WBSViewer />}
            {activeTab === 'gantt' && <GanttChart />}
            {activeTab === 'cost' && <CostCalculator />}
            {activeTab === 'matrices' && <EngineeringMatrices />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Professional Project Footer */}
      <footer className="bg-[#111317] border-t border-[#1E222B] py-10 mt-16 text-xs text-gray-500 font-mono text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-left">
            <span className="text-white font-bold tracking-wider block mb-1">PROYEK REKAYASA NEUROSPHERE FLORES</span>
            <span>Tersegel Digital & Terverifikasi Komite Rekayasa Nasional 2026</span>
          </div>
          <div className="flex gap-4">
            <a href="#tab-manual" onClick={() => setActiveTab('manual')} className="hover:text-white transition">Dokumentasi</a>
            <span>•</span>
            <a href="#tab-twin" onClick={() => setActiveTab('twin')} className="hover:text-white transition">Simulasi</a>
            <span>•</span>
            <a href="#tab-risk" onClick={() => setActiveTab('risk')} className="hover:text-white transition">Registrasi Risiko</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
