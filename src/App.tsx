import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, Cpu, Activity, ShieldCheck, Layers, Calendar, 
  DollarSign, ClipboardList, Eye, Info, HelpCircle, 
  ExternalLink, UserCheck, BookOpen, Smartphone, Download,
  Lock, Sparkles, ShieldAlert, Terminal, Wifi
} from 'lucide-react';

import VolumeViewer from './components/VolumeViewer';
import DigitalTwinSimulator from './components/DigitalTwinSimulator';
import RiskMatrix from './components/RiskMatrix';
import WBSViewer from './components/WBSViewer';
import CostCalculator from './components/CostCalculator';
import EngineeringMatrices from './components/EngineeringMatrices';
import GanttChart from './components/GanttChart';

// Interactive Cyberpunk Coastal Logo
const CyberLogo = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 512 512" className={`${className} animate-coast-pulse`} id="cyberpunk-coastal-logo">
    <defs>
      <linearGradient id="cyberGradApp" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff007f" />
        <stop offset="50%" stopColor="#7000ff" />
        <stop offset="100%" stopColor="#00f0ff" />
      </linearGradient>
      <filter id="glowApp" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <circle cx="256" cy="256" r="210" fill="none" stroke="url(#cyberGradApp)" strokeWidth="12" filter="url(#glowApp)" />
    <circle cx="256" cy="256" r="190" fill="none" stroke="#ff007f" strokeWidth="2" strokeDasharray="10,15" opacity="0.6" />
    
    <path d="M 110 340 Q 256 270 402 340" fill="none" stroke="#00f0ff" strokeWidth="8" filter="url(#glowApp)" />
    <path d="M 90 370 Q 256 310 422 370" fill="none" stroke="#7000ff" strokeWidth="4" opacity="0.8" />
    
    <polygon points="256,90 150,310 362,310" fill="none" stroke="url(#cyberGradApp)" strokeWidth="10" filter="url(#glowApp)" />
    <line x1="200" y1="200" x2="312" y2="200" stroke="#ff007f" strokeWidth="5" />
    <line x1="175" y1="255" x2="337" y2="255" stroke="#00f0ff" strokeWidth="5" />
    
    <circle cx="256" cy="240" r="45" fill="none" stroke="#fff500" strokeWidth="6" filter="url(#glowApp)" />
    <circle cx="256" cy="240" r="12" fill="#39ff14" filter="url(#glowApp)" />
    
    <circle cx="256" cy="90" r="14" fill="#fff500" filter="url(#glowApp)" />
    <circle cx="150" cy="310" r="10" fill="#ff007f" />
    <circle cx="362" cy="310" r="10" fill="#00f0ff" />
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('manual');
  
  // Custom states for PWA Auto-Installer and Platform Detection
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isStandalone, setIsStandalone] = useState<boolean>(false);
  const [showInstallBanner, setShowInstallBanner] = useState<boolean>(true);
  const [platform, setPlatform] = useState<'ios' | 'android' | 'desktop'>('desktop');
  
  // Rhythmic state for "Tombol Hidup Bergantian" (coast-pulse rhythm through tabs)
  const [pulseIndex, setPulseIndex] = useState<number>(0);

  // List of active 23 roles on the joint board
  const engineeringRoles = [
    "Chief Systems Engineer", "Chief Structural Engineer", "Bamboo Composite Specialist",
    "Marine Engineer", "Renewable Energy Engineer", "AI System Architect", "Digital Twin Architect",
    "IoT Architect", "Smart Grid Engineer", "SHM Specialist", "Environmental Engineer",
    "Circular Economy Specialist", "Construction Engineer", "Cost Engineer", "Risk Engineer",
    "BIM Manager", "Systems Safety Engineer", "FEED Consultant", "Smart City Planner",
    "Cultural Heritage Architect", "Disaster Mitigation Engineer", "Oceanographer", "Climate Scientist"
  ];

  // Tab definitions with custom styling keys
  const tabsList = [
    { id: 'manual', label: 'Spesifikasi FEED (Volume A-S)', icon: BookOpen },
    { id: 'twin', label: 'Digital Twin Simulator', icon: Cpu },
    { id: 'risk', label: 'Matriks Risiko (150 Items)', icon: ShieldCheck },
    { id: 'wbs', label: 'Work Packages (WBS)', icon: Layers },
    { id: 'gantt', label: 'Jadwal & Roadmap', icon: Calendar },
    { id: 'cost', label: 'Estimator Biaya & BOM', icon: DollarSign },
    { id: 'matrices', label: 'Matriks Keterlacakan (RTM/FMEA)', icon: ClipboardList }
  ];

  useEffect(() => {
    // 1. Force dynamic document title
    document.title = "Neurosphere Flores Gratis Rp 2 milyar / person";

    // 2. Check standalone display mode
    const checkStandalone = window.matchMedia('(display-mode: standalone)').matches 
      || (navigator as any).standalone 
      || window.location.search.includes('standalone=true');
    setIsStandalone(checkStandalone);

    // 3. Platform Detection
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      setPlatform('ios');
    } else if (/android/i.test(userAgent)) {
      setPlatform('android');
    } else {
      setPlatform('desktop');
    }

    // 4. Listen for browser installation prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Auto-open banner
      setShowInstallBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // 5. Successful install handler
    const handleAppInstalled = () => {
      console.log('Neurosphere PWA Installed Successfully!');
      setIsStandalone(true);
      setShowInstallBanner(false);
      localStorage.setItem('neurosphere_standalone_enabled', 'true');
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    // 6. Denyut Nadi (Coast Pulse Tab Switcher Loop)
    const interval = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % tabsList.length);
    }, 2000);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      clearInterval(interval);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User installation choice outcome: ${outcome}`);
      setDeferredPrompt(null);
    } else {
      // Manual prompt helper
      if (platform === 'ios') {
        alert(
          "Panduan Instalasi iOS Safari:\n\n" +
          "1. Ketuk tombol 'Share/Bagikan' 📤 di bar bawah browser Safari.\n" +
          "2. Geser menu ke bawah lalu ketuk 'Add to Home Screen / Tambah ke Layar Utama' ➕.\n" +
          "3. Ketuk 'Add' di pojok kanan atas.\n\n" +
          "Neurosphere Flores PWA akan terpasang di HP Anda!"
        );
      } else {
        alert(
          "Instalasi Otomatis Browser Terbatas:\n\n" +
          "Silakan buka Menu browser Anda (biasanya titik 3 di kanan atas), lalu ketuk 'Instal Aplikasi' atau 'Tambahkan ke Layar Utama' untuk memasang secara manual."
        );
      }
    }
  };

  return (
    <div className="min-h-screen bg-cyber-dark text-[#F1EAFF] selection:bg-cyber-pink/30 selection:text-white cyber-grid relative min-w-0 overflow-x-hidden" id="main-app-container">
      
      {/* Absolute futuristic decorative background assets */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none cyber-scanline opacity-10 z-0" />
      
      {/* Top Cyberpunk Neon Header */}
      <div className="bg-[#05020c]/85 backdrop-blur-md border-b border-cyber-pink/30 px-6 py-3.5 flex flex-col sm:flex-row justify-between items-center text-xs font-mono gap-3 relative z-40">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-cyber-green font-semibold tracking-wider neon-text-cyan">
            <span className="w-2.5 h-2.5 rounded-full bg-cyber-green block animate-ping" />
            STANDALONE ENCRYPTED NODE-FLORES ONLINE
          </span>
          <span className="text-gray-700 hidden sm:inline">|</span>
          <span className="text-cyber-cyan uppercase tracking-widest text-[9px] hidden sm:inline">SECURITY LEVEL: ULTRA 5 SANDBOX</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-cyber-yellow font-bold bg-cyber-yellow/10 px-3 py-1 border border-cyber-yellow/30 rounded text-[10px] tracking-wider animate-pulse">
            NEUROSPHERE FLORES GRATIS Rp 2 MILYAR / PERSON
          </span>
          
          {/* Identity Anchor / Photo Profile */}
          <div className="relative group">
            <button className="flex items-center gap-2 bg-[#12072b] border border-cyber-pink hover:border-cyber-cyan p-1 rounded-full transition shadow-[0_0_10px_rgba(255,0,127,0.3)] cursor-pointer">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-[#05020c] p-0.5 border border-cyber-pink">
                <CyberLogo className="w-full h-full" />
              </div>
              <span className="text-[10px] text-gray-300 pr-2 hidden md:inline font-mono font-bold tracking-widest text-cyber-pink">IDENTITY ANCHOR</span>
            </button>
            
            {/* Hover dropdown details for full cybersecurity feel */}
            <div className="absolute right-0 mt-2 w-72 bg-cyber-void border-2 border-cyber-pink rounded-lg p-4 shadow-[0_0_20px_rgba(255,0,127,0.5)] z-50 hidden group-hover:block hover:block text-left">
              <div className="flex items-center gap-3 border-b border-cyber-pink/30 pb-3 mb-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-black p-1 border border-cyber-cyan">
                  <CyberLogo className="w-full h-full" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs tracking-wider">bemmagz@gmail.com</h4>
                  <span className="text-[9px] text-cyber-cyan block font-semibold uppercase">CHIEF CYBER-PHYSICAL ARCHITECT</span>
                </div>
              </div>
              <div className="space-y-2 text-[10px] font-mono">
                <div className="flex justify-between">
                  <span className="text-gray-500">SECURE ACCESS:</span>
                  <span className="text-cyber-green font-bold">LEVEL 5 AUTHORIZED</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">ALLOCATION:</span>
                  <span className="text-cyber-yellow font-bold">Rp 2 Milyar / Person</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">SANDBOX ENCRYPTION:</span>
                  <span className="text-cyber-cyan">AES-256 GCM SHIELD</span>
                </div>
                <div className="mt-3 pt-2 border-t border-cyber-pink/20 text-[9px] text-cyber-pink text-center uppercase tracking-wider animate-pulse font-bold">
                  🔒 SECURE SANDBOX ENFORCED
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cyberpunk Large Auto-Install Prompt Banner */}
      {showInstallBanner && !isStandalone && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-6 pt-6 relative z-30"
          id="pwa-auto-install-prompt"
        >
          <div className="bg-cyber-purple/90 border-2 border-cyber-pink rounded-xl p-6 relative overflow-hidden shadow-[0_0_25px_rgba(255,0,127,0.4)]">
            <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />
            <div className="absolute top-0 right-0 bg-cyber-pink text-cyber-dark font-mono font-bold text-[9px] px-3 py-1 uppercase tracking-widest animate-pulse">
              ⚡ REKOMENDASI PWA STANDALONE ⚡
            </div>
            
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 relative z-10">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
                <div className="bg-[#05020c] p-3 rounded-lg border-2 border-cyber-cyan shadow-[0_0_15px_rgba(0,240,255,0.4)] shrink-0 animate-coast-pulse">
                  <CyberLogo className="w-16 h-16" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white font-display tracking-tight uppercase flex flex-col md:flex-row md:items-center gap-2">
                    PASANG NEUROSPHERE FLORES STANDALONE
                    <span className="text-[10px] bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/40 px-2 py-0.5 rounded font-mono font-normal">SECURE SANDBOX ACTIVE</span>
                  </h2>
                  <p className="text-xs text-gray-200 mt-2 max-w-2xl leading-relaxed font-sans">
                    Jalankan portal secara instan dari Layar Utama HP/Komputer Anda. Dapatkan perlindungan penuh dari <span className="text-cyber-green font-semibold">Anti-Reverse Engineering</span>, performa maksimal <span className="text-cyber-cyan font-semibold">100% Terenkripsi</span>, dan akses instan tanpa bilah browser. <span className="text-cyber-pink font-semibold">Gratis Rp 2 milyar / person</span> alokasi komite diaktifkan otomatis.
                  </p>
                  
                  {/* Intelligent Platform Detection Info */}
                  <div className="mt-3 flex flex-wrap items-center justify-center md:justify-start gap-3 text-[10px] font-mono text-gray-400">
                    <span className="flex items-center gap-1 bg-[#05020c] px-2.5 py-1 border border-gray-800 rounded">
                      <span className="w-2 h-2 rounded-full bg-cyber-green animate-ping" />
                      DETEKSI OS: <span className="text-white uppercase">{platform}</span>
                    </span>
                    {platform === 'ios' && (
                      <span className="text-cyber-cyan animate-pulse font-semibold">
                        👉 Gunakan iOS Safari: Tap <strong>Share (Bagikan) 📤</strong> lalu pilih <strong>Add to Home Screen (Tambah ke Layar Utama) ➕</strong>
                      </span>
                    )}
                    {platform === 'android' && (
                      <span className="text-cyber-pink animate-pulse font-semibold">
                        👉 Cukup 1-Klik tombol "INSTALL SEKARANG" di bawah untuk pemasangan instan!
                      </span>
                    )}
                    {platform === 'desktop' && (
                      <span className="text-cyber-yellow font-semibold">
                        👉 Dukungan Chrome/Edge terdeteksi. Gunakan tombol instalasi otomatis di samping atau di bilah alamat browser.
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 w-full lg:w-auto shrink-0 justify-end">
                <button
                  onClick={handleInstallClick}
                  className="px-6 py-4 bg-gradient-to-r from-cyber-pink via-purple-600 to-cyber-cyan text-white text-xs font-bold font-mono uppercase rounded-lg shadow-[0_0_20px_rgba(255,0,127,0.6)] hover:shadow-[0_0_35px_rgba(0,240,255,0.8)] hover:scale-105 active:scale-95 transition-all w-full lg:w-auto border-t border-white/20 text-center cursor-pointer"
                >
                  🚀 INSTALL SEKARANG (1-KLIK)
                </button>
                <button
                  onClick={() => setShowInstallBanner(false)}
                  className="px-3 py-4 bg-cyber-dark border border-cyber-pink/30 text-gray-400 hover:text-white rounded-lg text-xs font-mono transition cursor-pointer"
                  title="Abaikan"
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Standalone Security Banner (Active in PWA standalone display mode) */}
      {isStandalone && (
        <div className="max-w-7xl mx-auto px-6 pt-6 relative z-30" id="standalone-active-dashboard">
          <div className="bg-[#05020c]/90 border border-cyber-green rounded-xl p-5 flex flex-col md:flex-row justify-between items-center gap-4 shadow-[0_0_20px_rgba(57,255,20,0.3)]">
            <div className="flex items-center gap-3 text-left">
              <div className="bg-cyber-green/10 p-2 rounded border border-cyber-green/40 animate-pulse text-cyber-green text-xs font-mono font-bold tracking-widest">
                🛡️ SHIELD SECURE
              </div>
              <div>
                <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
                  STANDALONE SECURE SANDBOX ACTIVE
                  <span className="text-[9px] bg-cyber-green/20 text-cyber-green px-2 py-0.5 rounded border border-cyber-green/30 font-normal">ANTI-HACK / COMPILING ENFORCED</span>
                </h4>
                <p className="text-[10px] text-gray-400 font-mono mt-0.5 leading-relaxed">
                  Sistem berjalan dalam kontainer standalone aman. Proteksi memory-dump, perlindungan injeksi kode, dan filter anti-inspeksi diaktifkan secara komprehensif.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 font-mono text-[10px] text-cyber-green shrink-0 bg-[#12072b] border border-cyber-green/30 px-3.5 py-2 rounded-lg">
              <span>SANDBOX ALOKASI:</span>
              <span className="font-bold text-cyber-yellow">Rp 2.000.000.000,- / PERSON APPROVED 🔒</span>
            </div>
          </div>
        </div>
      )}

      {/* Primary Landing Hero Section (Cyberpunk Neon Makeover) */}
      <header className="max-w-7xl mx-auto px-6 pt-8 pb-4 text-left relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-cyber-pink/30 pb-6">
          <div className="flex flex-col md:flex-row gap-5 items-start">
            <div className="shrink-0 bg-cyber-purple/40 p-2.5 rounded-xl border border-cyber-pink shadow-[0_0_15px_rgba(255,0,127,0.4)]">
              <CyberLogo className="w-16 h-16" />
            </div>
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Compass className="w-5 h-5 text-cyber-pink" />
                <span className="font-mono text-[9px] font-bold text-cyber-cyan tracking-widest uppercase bg-cyber-cyan/15 px-2.5 py-0.5 rounded border border-cyber-cyan/30">
                  PROYEK NASIONAL REGENERATIF CYBERPUNK
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 font-display uppercase neon-text-pink">
                NEUROSPHERE FLORES FEED PORTAL
              </h1>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                Sistem Cyber-Physical Terintegrasi: Arsitektur Komposit Mbaru Niang, Digital Twin, Kecerdasan Buatan Terdistribusi, Sensor Serat Optik FBG SHM, Mikrogrid Energi Hibrida, dan Ekonomi Biru-Hijau Pantai Flores.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1 font-mono text-xs text-right shrink-0 bg-[#12072b] border border-cyber-cyan/40 px-4 py-3 rounded-lg shadow-[0_0_12px_rgba(0,240,255,0.2)]">
            <div className="flex items-center gap-1.5 text-cyber-cyan">
              <span className="w-2 h-2 rounded-full bg-cyber-cyan block animate-pulse" />
              <span>ENERGI INDEPENDEN COSTE</span>
            </div>
            <span className="text-cyber-pink font-bold text-sm tracking-widest neon-text-pink">100% RE FLORES</span>
          </div>
        </div>
      </header>

      {/* Joint Board Info Section (Cyberpunk Stylized) */}
      <section className="max-w-7xl mx-auto px-6 mb-6 relative z-20">
        <div className="bg-[#12072b]/50 border-2 border-[#12072b] hover:border-cyber-pink/50 rounded-xl p-5 text-left transition-all duration-300 shadow-[0_0_15px_rgba(18,7,43,0.8)] relative">
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyber-cyan" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyber-cyan" />
          
          <div className="flex items-center gap-2 mb-3 border-b border-cyber-pink/20 pb-2">
            <UserCheck className="w-4 h-4 text-cyber-cyan" />
            <h3 className="text-xs font-bold text-white font-mono uppercase tracking-wider neon-text-cyan">
              REKAYASA KOLABORATIF: KOMITE DOKUMEN BIRU (23 DEPARTEMEN)
            </h3>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed mb-4">
            Portal ini menyajikan Dokumen Biru (FEED - Front End Engineering Design) yang disusun secara matematis dan modular oleh komite rekayasa multidisiplin. Desain ini murni menggunakan sains, hukum fisika terapan, dan structural composites, mengintegrasikan kearifan lokal Flores dengan cyber-physical systems modern.
          </p>
          
          <div className="flex flex-wrap gap-1.5 max-h-[110px] overflow-y-auto pr-1">
            {engineeringRoles.map((role, idx) => (
              <span key={idx} className="text-[9px] font-mono text-gray-300 bg-[#05020c] border border-gray-800 hover:border-cyber-cyan/50 px-2 py-1 rounded transition hover:text-white cursor-default">
                ● {role}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Hub Tabs Switcher (With animated heartbeat / pulse cycle) */}
      <section className="max-w-7xl mx-auto px-6 mb-6 relative z-20">
        <div className="border-b border-[#ff007f]/30 pb-3" id="hub-navigation-tabs">
          <div className="flex items-center gap-2 mb-3">
            <Activity className="w-4 h-4 text-cyber-pink animate-pulse" />
            <span className="text-[10px] font-mono text-cyber-pink font-bold uppercase tracking-widest">
              DENYUT NADI FLORES (TAB CYCLE MONITOR)
            </span>
            <span className="text-[9px] bg-[#ff007f]/10 text-cyber-pink border border-[#ff007f]/30 px-1.5 py-0.5 rounded font-mono animate-pulse">
              ACTIVE PULSE INDEX: {pulseIndex + 1}/7
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2.5">
            {tabsList.map((tab, idx) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              const isPulsing = pulseIndex === idx;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                  }}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg text-xs font-mono transition-all duration-300 border relative overflow-hidden group cursor-pointer ${
                    isActive
                      ? 'bg-[#12072b]/95 border-cyber-pink text-cyber-pink font-bold shadow-[0_0_18px_rgba(255,0,127,0.55)] scale-102 z-10'
                      : 'bg-cyber-void/60 border-cyber-pink/20 text-gray-400 hover:bg-cyber-purple/50 hover:text-cyber-cyan hover:border-cyber-cyan/40'
                  } ${
                    isPulsing && !isActive
                      ? 'shadow-[0_0_15px_rgba(0,240,255,0.7)] border-cyber-cyan text-white scale-102 z-10'
                      : ''
                  }`}
                  id={`tab-${tab.id}`}
                >
                  {/* Decorative glowing background on active or pulsing */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyber-pink/10 to-transparent pointer-events-none" />
                  )}
                  {isPulsing && !isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/10 to-transparent pointer-events-none" />
                  )}

                  {/* Rhythmic beach wave dot representing Flores Pulse */}
                  <span className={`w-2 h-2 rounded-full block ${
                    isActive 
                      ? 'bg-cyber-pink animate-ping' 
                      : isPulsing 
                        ? 'bg-cyber-cyan animate-pulse scale-150' 
                        : 'bg-gray-700'
                  }`} />
                  
                  <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                    isActive 
                      ? 'text-cyber-pink' 
                      : isPulsing 
                        ? 'text-cyber-cyan' 
                        : 'text-gray-400'
                  }`} />
                  
                  <span className="tracking-wide">{tab.label}</span>
                  
                  {/* Neon Corner Angles */}
                  {isActive && (
                    <>
                      <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyber-pink" />
                      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyber-pink" />
                    </>
                  )}
                  {isPulsing && !isActive && (
                    <>
                      <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyber-cyan" />
                      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyber-cyan" />
                    </>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Container Stage with Animation (Cyber styled boundaries) */}
      <main className="max-w-7xl mx-auto px-6 pb-16 relative z-20">
        <div className="relative">
          {/* Cyberpunk ambient border wrappers */}
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-cyber-pink pointer-events-none" />
          <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-cyber-cyan pointer-events-none" />
          <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-cyber-cyan pointer-events-none" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-cyber-pink pointer-events-none" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="bg-[#0c051a]/90 border border-cyber-pink/20 rounded-xl p-1 shadow-[0_0_30px_rgba(0,0,0,0.8)]"
            >
              <div className="p-1 sm:p-4 rounded-lg overflow-hidden bg-cyber-void/50">
                {activeTab === 'manual' && <VolumeViewer />}
                {activeTab === 'twin' && <DigitalTwinSimulator />}
                {activeTab === 'risk' && <RiskMatrix />}
                {activeTab === 'wbs' && <WBSViewer />}
                {activeTab === 'gantt' && <GanttChart />}
                {activeTab === 'cost' && <CostCalculator />}
                {activeTab === 'matrices' && <EngineeringMatrices />}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Professional Project Footer (Cyberpunk Finish) */}
      <footer className="bg-[#05020c]/90 border-t-2 border-cyber-pink/40 py-12 mt-16 text-xs text-gray-400 font-mono text-center relative z-40">
        <div className="absolute inset-0 pointer-events-none cyber-scanline opacity-10" />
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left">
            <span className="text-white font-bold tracking-wider block mb-1.5 text-cyber-pink uppercase neon-text-pink">
              PROYEK REKAYASA NEUROSPHERE FLORES
            </span>
            <span className="text-gray-500 block">Tersegel Digital & Terverifikasi Komite Rekayasa Nasional 2026</span>
            <span className="text-cyber-cyan text-[10px] mt-1 block">Enkripsi Sandbox Standalone v3.5 - Multi-Node Secure Distribution</span>
          </div>
          <div className="flex flex-wrap gap-4 text-[10px]">
            <a href="#tab-manual" onClick={() => setActiveTab('manual')} className="hover:text-cyber-pink transition duration-300 uppercase font-bold border-b border-transparent hover:border-cyber-pink">Dokumentasi</a>
            <span className="text-cyber-pink">•</span>
            <a href="#tab-twin" onClick={() => setActiveTab('twin')} className="hover:text-cyber-cyan transition duration-300 uppercase font-bold border-b border-transparent hover:border-cyber-cyan">Simulasi 3D</a>
            <span className="text-cyber-pink">•</span>
            <a href="#tab-risk" onClick={() => setActiveTab('risk')} className="hover:text-cyber-yellow transition duration-300 uppercase font-bold border-b border-transparent hover:border-cyber-yellow">Registrasi Risiko</a>
            <span className="text-cyber-pink">•</span>
            <button onClick={handleInstallClick} className="hover:text-cyber-green transition duration-300 uppercase font-bold border-b border-transparent hover:border-cyber-green cursor-pointer">Pasang PWA</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
