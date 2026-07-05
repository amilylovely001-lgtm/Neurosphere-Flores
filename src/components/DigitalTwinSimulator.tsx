import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, ShieldAlert, Cpu, Zap, Droplets, Leaf, Play, RotateCcw, AlertTriangle } from 'lucide-react';
import { SensorReading } from '../types';

export default function DigitalTwinSimulator() {
  const [activeTwin, setActiveTwin] = useState<'structural' | 'energy' | 'ecology'>('structural');
  const [isSimulating, setIsSimulating] = useState<string | null>(null);
  const [telemetryLogs, setTelemetryLogs] = useState<string[]>([]);
  const [simTime, setSimTime] = useState<string>('');

  // Live sensor values
  const [sensors, setSensors] = useState<SensorReading[]>([
    { id: "S-FBG-1", name: "FBG Joint Base", type: "FBG", value: 45, unit: "µε", status: "Normal", location: "Pondasi Tiang Agung" },
    { id: "S-FBG-2", name: "FBG Ring Beam 3", type: "FBG", value: 120, unit: "µε", status: "Normal", location: "Struktur Tengah (Lentar)" },
    { id: "S-ACC-1", name: "MEMS X-Axis", type: "Accelerometer", value: 0.02, unit: "g", status: "Normal", location: "Puncak Atap (Hekang)" },
    { id: "S-AE-1", name: "Acoustic Node 4", type: "Acoustic", value: 0, unit: "cps", status: "Normal", location: "Sambungan Carbon Wrap" },
    { id: "S-ENV-1", name: "Humidity Index", type: "Environmental", value: 72, unit: "%", status: "Normal", location: "Hunian Bawah (Lutur)" }
  ]);

  // Microgrid values
  const [solarPV, setSolarPV] = useState<number>(340); // kW
  const [marineTurbine, setMarineTurbine] = useState<number>(180); // kW
  const [biogasGen, setBiogasGen] = useState<number>(15); // kW
  const [batterySoC, setBatterySoC] = useState<number>(68); // %
  const [communityLoad, setCommunityLoad] = useState<number>(195); // kW
  const [isIslanding, setIsIslanding] = useState<boolean>(false);

  // Ecology values
  const [rainwaterTank, setRainwaterTank] = useState<number>(84); // %
  const [roRecovery, setRoRecovery] = useState<number>(44.2); // %
  const [biocharStored, setBiocharStored] = useState<number>(1280); // kg
  const [co2Sequestered, setCo2Sequestered] = useState<number>(3120); // kg

  // Vibration wave state for chart rendering
  const [wavePoints, setWavePoints] = useState<number[]>(Array(40).fill(10));

  // Handle telemetry log generation
  const addLog = (msg: string) => {
    const timeStr = new Date().toLocaleTimeString();
    setTelemetryLogs(prev => [`[${timeStr}] ${msg}`, ...prev.slice(0, 18)]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setSimTime(now.toISOString().replace('T', ' ').substring(0, 19));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulating small telemetry noise
  useEffect(() => {
    const interval = setInterval(() => {
      if (isSimulating === 'seismic') {
        // Seismic vibrations
        setSensors(prev => prev.map(s => {
          if (s.type === 'FBG') {
            const v = Math.min(250, Math.max(10, s.value + (Math.random() - 0.5) * 40));
            return { ...s, value: Math.round(v), status: v > 180 ? 'Warning' : 'Normal' };
          }
          if (s.type === 'Accelerometer') {
            const v = Math.min(0.8, Math.max(0.01, s.value + (Math.random() - 0.3) * 0.15));
            return { ...s, value: parseFloat(v.toFixed(3)), status: v > 0.5 ? 'Critical' : 'Warning' };
          }
          if (s.type === 'Acoustic') {
            const v = Math.round(Math.random() * 8);
            return { ...s, value: v, status: v > 5 ? 'Warning' : 'Normal' };
          }
          return s;
        }));

        setWavePoints(prev => [...prev.slice(1), 10 + (Math.random() - 0.5) * 22]);
      } else if (isSimulating === 'typhoon') {
        // Typhoon wind loading
        setSensors(prev => prev.map(s => {
          if (s.type === 'FBG') {
            const v = Math.min(280, Math.max(80, s.value + (Math.random() - 0.4) * 25));
            return { ...s, value: Math.round(v), status: v > 220 ? 'Warning' : 'Normal' };
          }
          if (s.type === 'Accelerometer') {
            const v = Math.min(0.4, Math.max(0.05, s.value + (Math.random() - 0.5) * 0.05));
            return { ...s, value: parseFloat(v.toFixed(3)), status: v > 0.35 ? 'Warning' : 'Normal' };
          }
          return s;
        }));
        setWavePoints(prev => [...prev.slice(1), 10 + (Math.random() - 0.5) * 12]);
      } else {
        // Normal baseline fluctuation
        setSensors(prev => prev.map(s => {
          if (s.type === 'FBG') {
            const base = s.id === "S-FBG-1" ? 45 : 120;
            return { ...s, value: Math.round(base + (Math.random() - 0.5) * 4), status: 'Normal' };
          }
          if (s.type === 'Accelerometer') {
            return { ...s, value: parseFloat((0.02 + (Math.random() - 0.5) * 0.005).toFixed(3)), status: 'Normal' };
          }
          if (s.type === 'Acoustic') {
            return { ...s, value: Math.random() > 0.85 ? 1 : 0, status: 'Normal' };
          }
          return s;
        }));
        setWavePoints(prev => [...prev.slice(1), 10 + (Math.random() - 0.5) * 2]);
      }

      // Energy system fluctuations
      if (!isIslanding) {
        setSolarPV(prev => Math.max(0, Math.round(340 + (Math.random() - 0.5) * 15)));
        setMarineTurbine(prev => Math.round(180 + (Math.random() - 0.5) * 5));
        setBatterySoC(prev => Math.min(100, Math.max(10, parseFloat((prev + (Math.random() > 0.6 ? 0.1 : -0.05)).toFixed(1)))));
        setCommunityLoad(prev => Math.round(195 + (Math.random() - 0.5) * 10));
      } else {
        // Islanded mode: Adjust load to match generation
        setSolarPV(prev => Math.max(0, Math.round(280 + (Math.random() - 0.5) * 8)));
        setMarineTurbine(prev => Math.round(180 + (Math.random() - 0.5) * 4));
        setCommunityLoad(prev => Math.round(160 + (Math.random() - 0.5) * 5)); // automated load shed
        setBatterySoC(prev => Math.max(20, parseFloat((prev - 0.15).toFixed(2)))); // discharging fast
      }

      // Ecology fluctuations
      setRainwaterTank(prev => Math.max(0, Math.min(100, prev + (isSimulating === 'typhoon' ? 0.3 : -0.01))));
    }, 400);

    return () => clearInterval(interval);
  }, [isSimulating, isIslanding]);

  // Handle simulations trigger
  const triggerSimulation = (type: string) => {
    if (isSimulating === type) {
      setIsSimulating(null);
      addLog(`SIMULATOR: Menghentikan simulasi ${type}. Mengembalikan status ke baseline.`);
    } else {
      setIsSimulating(type);
      addLog(`SISTEM: Memulai simulasi ${type.toUpperCase()} pada Mbaru Niang digital twin.`);
      if (type === 'seismic') {
        addLog("SHM WARNING: Terdeteksi percepatan seismic mikro 0.65g. Memicu pengecekan integritas penampang...");
      } else if (type === 'typhoon') {
        addLog("SHM ALERT: Tekanan angin siklon terdeteksi setara 175 km/jam pada kubah atap.");
      }
    }
  };

  const toggleIslanding = () => {
    setIsIslanding(!isIslanding);
    if (!isIslanding) {
      addLog("POWER GUARD: Terdeteksi ketidakstabilan grid luar. Memicu skema ISOLASI MANDIRI (Islanding) via GOOSE.");
      addLog("IEC 61850: Pesan GOOSE terkirim dalam 2.8ms. Inverter beralih ke pembentuk grid (Grid-Forming) otonom.");
      addLog("SMART LOAD-SHEDDING: Mematikan beban non-esensial pariwisata 35 kW untuk menjaga frekuensi baterai.");
    } else {
      addLog("POWER GUARD: Sinkronisasi kembali ke jaringan grid utama berhasil. Menutup kontaktor kopling sinkron.");
    }
  };

  const resetAllSimulations = () => {
    setIsSimulating(null);
    setIsIslanding(false);
    setSensors(prev => prev.map(s => ({ ...s, status: 'Normal' })));
    addLog("SIMULATOR: Reset seluruh variabel simulasi ke baseline standar.");
  };

  return (
    <div className="bg-[#111317] border border-[#232731] rounded-xl overflow-hidden shadow-2xl font-sans" id="digital-twin-portal">
      {/* Top Telemetry Header */}
      <div className="bg-[#181B22] px-6 py-4 border-b border-[#232731] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500/10 rounded-lg">
            <Cpu className="w-5 h-5 text-emerald-400 animate-pulse" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
              NEUROSPHERE DIGITAL TWIN PLATFORM v1.0
            </h3>
            <p className="text-xs text-gray-400 font-mono">
              STATUS: SECURE CONNECTED | CLOUD REPLICA: ACTIVE
            </p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-xs text-gray-500 font-mono block">UTC SIMULATOR CLOCK</span>
          <span className="text-xs text-emerald-400 font-mono font-medium">{simTime || "2026-07-05 14:20:00"}</span>
        </div>
      </div>

      {/* Main Grid: Twin Controls, Center Visualization, Side Telemetry Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Column: Selector Tabs & Simulator Controls (4 Cols) */}
        <div className="lg:col-span-3 border-r border-[#232731] p-5 bg-[#14171E]/50 flex flex-col gap-5">
          <div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-2">PILIH PILAR DIGITAL TWIN</span>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => { setActiveTwin('structural'); resetAllSimulations(); }}
                className={`flex items-center justify-between px-4 py-3 rounded-lg border text-left transition ${
                  activeTwin === 'structural'
                    ? 'bg-[#1D212A] border-emerald-500/50 text-white'
                    : 'bg-transparent border-transparent text-gray-400 hover:bg-[#181B22] hover:text-white'
                }`}
                id="tab-structural-twin"
              >
                <div className="flex items-center gap-3">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Structural Twin</span>
                </div>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded font-mono">SHM</span>
              </button>

              <button
                onClick={() => { setActiveTwin('energy'); resetAllSimulations(); }}
                className={`flex items-center justify-between px-4 py-3 rounded-lg border text-left transition ${
                  activeTwin === 'energy'
                    ? 'bg-[#1D212A] border-cyan-500/50 text-white'
                    : 'bg-transparent border-transparent text-gray-400 hover:bg-[#181B22] hover:text-white'
                }`}
                id="tab-energy-twin"
              >
                <div className="flex items-center gap-3">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Energy Twin</span>
                </div>
                <span className="text-[10px] bg-cyan-500/10 text-cyan-400 px-1.5 py-0.5 rounded font-mono">Grid</span>
              </button>

              <button
                onClick={() => { setActiveTwin('ecology'); resetAllSimulations(); }}
                className={`flex items-center justify-between px-4 py-3 rounded-lg border text-left transition ${
                  activeTwin === 'ecology'
                    ? 'bg-[#1D212A] border-lime-500/50 text-white'
                    : 'bg-transparent border-transparent text-gray-400 hover:bg-[#181B22] hover:text-white'
                }`}
                id="tab-ecology-twin"
              >
                <div className="flex items-center gap-3">
                  <Leaf className="w-4 h-4 text-lime-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Ecology Twin</span>
                </div>
                <span className="text-[10px] bg-lime-500/10 text-lime-400 px-1.5 py-0.5 rounded font-mono">Loop</span>
              </button>
            </div>
          </div>

          <div className="border-t border-[#232731] pt-5">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-3">KONTROL SIMULATOR FISIK</span>
            
            {activeTwin === 'structural' && (
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => triggerSimulation('seismic')}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-mono text-xs transition ${
                    isSimulating === 'seismic'
                      ? 'bg-rose-600 text-white hover:bg-rose-700 font-bold border border-rose-400'
                      : 'bg-[#1D212A] border border-[#2C313E] text-rose-400 hover:bg-[#252A36]'
                  }`}
                  id="btn-trigger-seismic"
                >
                  <AlertTriangle className="w-4 h-4 animate-bounce" />
                  {isSimulating === 'seismic' ? 'Hentikan Gempa' : 'Simulasikan Gempa'}
                </button>

                <button
                  onClick={() => triggerSimulation('typhoon')}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-mono text-xs transition ${
                    isSimulating === 'typhoon'
                      ? 'bg-amber-600 text-white hover:bg-amber-700 font-bold border border-amber-400'
                      : 'bg-[#1D212A] border border-[#2C313E] text-amber-400 hover:bg-[#252A36]'
                  }`}
                  id="btn-trigger-typhoon"
                >
                  <Activity className="w-4 h-4" />
                  {isSimulating === 'typhoon' ? 'Hentikan Angin Badai' : 'Simulasikan Badai Siklon'}
                </button>
              </div>
            )}

            {activeTwin === 'energy' && (
              <div className="flex flex-col gap-2">
                <button
                  onClick={toggleIslanding}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-mono text-xs transition ${
                    isIslanding
                      ? 'bg-cyan-600 text-white border border-cyan-400 font-bold'
                      : 'bg-[#1D212A] border border-[#2C313E] text-cyan-400 hover:bg-[#252A36]'
                  }`}
                  id="btn-trigger-islanding"
                >
                  <ShieldAlert className="w-4 h-4" />
                  {isIslanding ? 'Kembali ke Grid Utama' : 'Picu Pemadaman (Islanding)'}
                </button>
              </div>
            )}

            {activeTwin === 'ecology' && (
              <div className="text-gray-500 font-mono text-xs py-3 text-center bg-[#181B22] rounded-lg border border-[#232731]">
                Siklus sirkular air & limbah terikat langsung dengan aktivitas iklim. Picu Badai di tab Structural Twin untuk menampung curah air hujan deras.
              </div>
            )}

            <button
              onClick={resetAllSimulations}
              className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2 bg-transparent hover:bg-gray-800 text-gray-400 hover:text-white rounded-lg font-mono text-xs transition border border-[#232731]"
              id="btn-reset-simulator"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Baseline
            </button>
          </div>
        </div>

        {/* Center Column: Interactive Visualization Area (6 Cols) */}
        <div className="lg:col-span-6 p-6 border-r border-[#232731] flex flex-col justify-between min-h-[440px]">
          {/* Active Twin Visual Stage */}
          <div className="flex-1 flex flex-col items-center justify-center relative">
            
            {/* STRUCTURAL TWIN VISUAL (SVG Dome representing Mbaru Niang) */}
            {activeTwin === 'structural' && (
              <div className="w-full max-w-[340px] aspect-square flex flex-col items-center relative">
                <span className="text-[10px] font-mono text-gray-500 absolute top-0 left-0 bg-[#181B22] border border-[#232731] px-2 py-0.5 rounded uppercase">
                  Structural Dome Model (Mbaru Niang)
                </span>

                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Grid Lines background */}
                  <line x1="100" y1="10" x2="100" y2="190" stroke="#1F232B" strokeWidth="0.5" strokeDasharray="3 3" />
                  <line x1="10" y1="180" x2="190" y2="180" stroke="#1F232B" strokeWidth="0.5" strokeDasharray="3 3" />
                  <circle cx="100" cy="180" r="50" fill="none" stroke="#1F232B" strokeWidth="0.5" strokeDasharray="3 3" />
                  <circle cx="100" cy="180" r="100" fill="none" stroke="#1F232B" strokeWidth="0.5" strokeDasharray="3 3" />

                  {/* 5-layer traditional-modern boundaries */}
                  {/* Layer 5 (Hekang Kode) */}
                  <path d="M 100,20 L 88,45 L 112,45 Z" fill="none" stroke="#2C313E" strokeWidth="1" />
                  {/* Layer 4 (Lempa Rae) */}
                  <path d="M 88,45 L 75,75 L 125,75 L 112,45 Z" fill="none" stroke="#2C313E" strokeWidth="1" />
                  {/* Layer 3 (Lentar) */}
                  <path d="M 75,75 L 60,115 L 140,115 L 125,75 Z" fill="none" stroke="#2C313E" strokeWidth="1" />
                  {/* Layer 2 (Lobo) */}
                  <path d="M 60,115 L 42,150 L 158,150 L 140,115 Z" fill="none" stroke="#2C313E" strokeWidth="1" />
                  {/* Layer 1 (Lutur) */}
                  <path d="M 42,150 L 25,180 L 175,180 L 158,150 Z" fill="none" stroke="#2C313E" strokeWidth="1.5" />

                  {/* Ocean Bed / Ground foundation */}
                  <rect x="15" y="180" width="170" height="8" rx="2" fill="#181B22" stroke="#2E3440" strokeWidth="1" />

                  {/* Bamboo main pillars (Tiang Agung) */}
                  <line x1="100" y1="20" x2="100" y2="180" stroke="#EBCB8B" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
                  <line x1="85" y1="60" x2="85" y2="180" stroke="#8FBCBB" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                  <line x1="115" y1="60" x2="115" y2="180" stroke="#8FBCBB" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

                  {/* FBG Optic fiber path along structure */}
                  <path d="M 25,180 L 42,150 L 60,115 L 75,75 L 88,45 L 100,20 L 112,45 L 125,75 L 140,115 L 158,150 L 175,180"
                        fill="none"
                        stroke={isSimulating ? '#F7768E' : '#10B981'}
                        strokeWidth="1.2"
                        strokeDasharray={isSimulating ? '2 2' : 'none'}
                        className={isSimulating ? 'animate-[dash_2s_linear_infinite]' : ''}
                  />

                  {/* Dynamic interactive/animated Node FBG sensors */}
                  {/* Node 1: Base */}
                  <circle cx="100" cy="180" r="4.5"
                          fill={isSimulating === 'seismic' ? '#EF4444' : '#10B981'}
                          className={isSimulating === 'seismic' ? 'animate-ping' : ''} />
                  <circle cx="100" cy="180" r="3" fill="#1E222A" stroke={isSimulating === 'seismic' ? '#EF4444' : '#10B981'} strokeWidth="1.5" />

                  {/* Node 2: Ring Beam */}
                  <circle cx="140" cy="115" r="4.5"
                          fill={isSimulating ? '#F59E0B' : '#10B981'}
                          className={isSimulating ? 'animate-pulse' : ''} />
                  <circle cx="140" cy="115" r="3" fill="#1E222A" stroke={isSimulating ? '#F59E0B' : '#10B981'} strokeWidth="1.5" />

                  {/* Node 3: Top Acceleration */}
                  <circle cx="100" cy="20" r="4.5"
                          fill={isSimulating ? '#EF4444' : '#10B981'}
                          className={isSimulating ? 'animate-ping' : ''} />
                  <circle cx="100" cy="20" r="3" fill="#1E222A" stroke={isSimulating ? '#EF4444' : '#10B981'} strokeWidth="1.5" />
                </svg>

                {/* Simulated Waveform chart block */}
                <div className="w-full bg-[#181B22]/80 border border-[#232731] rounded-lg p-3 mt-2">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[9px] font-bold text-gray-400 font-mono uppercase tracking-wider flex items-center gap-1">
                      <Activity className="w-3.5 h-3.5 text-rose-400" />
                      Dynamic Spectrum Analysis (MEMS Vibration Feed)
                    </span>
                    <span className="text-[9px] text-gray-500 font-mono">100Hz Real-time</span>
                  </div>
                  <div className="h-10 flex items-end gap-[3px] overflow-hidden">
                    {wavePoints.map((h, i) => (
                      <div
                        key={i}
                        className={`w-full transition-all duration-300 rounded-t-sm ${
                          isSimulating === 'seismic' ? 'bg-rose-500' : isSimulating === 'typhoon' ? 'bg-amber-500' : 'bg-emerald-500'
                        }`}
                        style={{ height: `${Math.max(4, Math.min(40, h + 15))}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ENERGY TWIN VISUAL */}
            {activeTwin === 'energy' && (
              <div className="w-full max-w-[340px] aspect-square flex flex-col items-center relative justify-center">
                <span className="text-[10px] font-mono text-gray-500 absolute top-0 left-0 bg-[#181B22] border border-[#232731] px-2 py-0.5 rounded uppercase">
                  Microgrid Dynamic Flow model
                </span>

                {/* Energy Block flow visualizer */}
                <div className="grid grid-cols-2 gap-4 w-full mt-6">
                  {/* Generator block */}
                  <div className="bg-[#181B22] border border-[#232731] rounded-lg p-3 text-left">
                    <span className="text-[9px] font-bold font-mono text-gray-400 tracking-wider uppercase block mb-2">Pembangkitan Daya</span>
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-gray-400">Surya PV:</span>
                        <span className="text-emerald-400 font-bold">{solarPV} kW</span>
                      </div>
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-gray-400">Arus Laut:</span>
                        <span className="text-cyan-400 font-bold">{marineTurbine} kW</span>
                      </div>
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-gray-400">Biogas:</span>
                        <span className="text-lime-400 font-bold">{biogasGen} kW</span>
                      </div>
                    </div>
                  </div>

                  {/* Storage block */}
                  <div className="bg-[#181B22] border border-[#232731] rounded-lg p-3 text-left">
                    <span className="text-[9px] font-bold font-mono text-gray-400 tracking-wider uppercase block mb-1">Penyimpanan BESS</span>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-full bg-gray-800 h-2.5 rounded-full overflow-hidden">
                        <div
                          className="bg-cyan-500 h-full rounded-full transition-all duration-500"
                          style={{ width: `${batterySoC}%` }}
                        />
                      </div>
                      <span className="text-xs font-mono text-white font-bold">{batterySoC}%</span>
                    </div>
                    <div className="text-[9px] text-gray-400 font-mono">
                      Stabilitas Termal LFP: <span className="text-emerald-400">NORMAL (29.4°C)</span>
                    </div>
                  </div>

                  {/* Load balance block */}
                  <div className="bg-[#181B22] border border-[#232731] rounded-lg p-3 text-left">
                    <span className="text-[9px] font-bold font-mono text-gray-400 tracking-wider uppercase block mb-1">Beban Pemukiman</span>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-gray-400">Total Load:</span>
                      <span className="text-white font-bold">{communityLoad} kW</span>
                    </div>
                    <div className="text-[9px] text-gray-400 font-mono">
                      Grid Status:{' '}
                      <span className={isIslanding ? 'text-rose-400 font-bold' : 'text-emerald-400'}>
                        {isIslanding ? 'ISOLATED' : 'SYNCHRONIZED'}
                      </span>
                    </div>
                  </div>

                  {/* Power Guard actions */}
                  <div className="bg-[#181B22] border border-[#232731] rounded-lg p-3 text-left flex flex-col justify-between">
                    <span className="text-[9px] font-bold font-mono text-gray-400 tracking-wider uppercase block">IEC 61850 Relai</span>
                    <div className="text-[10px] font-mono leading-tight">
                      {isIslanding ? (
                        <span className="text-cyan-400 font-bold">● Active Islanding | Smart Load-shedding on</span>
                      ) : (
                        <span className="text-gray-500">● Grid stable. Relai stand-by.</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Central balancing animation */}
                <div className="w-full bg-[#1A1F2B] border border-cyan-500/20 rounded-lg p-3 mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400 animate-bounce" />
                    <div>
                      <span className="text-[10px] font-mono font-bold text-white uppercase block leading-tight">Smart Net Energy Balance</span>
                      <span className="text-[9px] font-mono text-gray-400">Sistem Otonom EMS</span>
                    </div>
                  </div>
                  <span className="text-sm font-mono text-emerald-400 font-bold">
                    +{solarPV + marineTurbine + biogasGen - communityLoad} kW
                  </span>
                </div>
              </div>
            )}

            {/* ECOLOGY TWIN VISUAL */}
            {activeTwin === 'ecology' && (
              <div className="w-full max-w-[340px] aspect-square flex flex-col items-center relative justify-center">
                <span className="text-[10px] font-mono text-gray-500 absolute top-0 left-0 bg-[#181B22] border border-[#232731] px-2 py-0.5 rounded uppercase">
                  Water & Circular ecology loop
                </span>

                <div className="grid grid-cols-2 gap-3 w-full mt-6">
                  {/* Water Catchment */}
                  <div className="bg-[#181B22] border border-[#232731] rounded-lg p-3 text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <Droplets className="w-4 h-4 text-blue-400" />
                      <span className="text-[10px] font-bold font-mono text-gray-300 uppercase">Tadah Hujan</span>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="text-xs text-gray-400 font-mono">Volume Tangki:</span>
                      <span className="text-sm font-mono text-blue-400 font-bold">{rainwaterTank}%</span>
                    </div>
                  </div>

                  {/* Desalination */}
                  <div className="bg-[#181B22] border border-[#232731] rounded-lg p-3 text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-cyan-400" />
                      <span className="text-[10px] font-bold font-mono text-gray-300 uppercase">Desalinasi RO</span>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="text-xs text-gray-400 font-mono">Recovery Rate:</span>
                      <span className="text-sm font-mono text-cyan-400 font-bold">{roRecovery}%</span>
                    </div>
                  </div>

                  {/* Carbon Capture Biochar */}
                  <div className="bg-[#181B22] border border-[#232731] rounded-lg p-3 text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <Leaf className="w-4 h-4 text-emerald-400" />
                      <span className="text-[10px] font-bold font-mono text-gray-300 uppercase">Biochar Simpan</span>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="text-xs text-gray-400 font-mono">Total Massa:</span>
                      <span className="text-sm font-mono text-emerald-400 font-bold">{biocharStored} kg</span>
                    </div>
                  </div>

                  {/* CO2 Sequestered */}
                  <div className="bg-[#181B22] border border-[#232731] rounded-lg p-3 text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <Activity className="w-4 h-4 text-lime-400" />
                      <span className="text-[10px] font-bold font-mono text-gray-300 uppercase">Sekuestrasi CO2</span>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="text-xs text-gray-400 font-mono">Setara Karbon:</span>
                      <span className="text-sm font-mono text-lime-400 font-bold">{co2Sequestered} kg</span>
                    </div>
                  </div>
                </div>

                <div className="w-full bg-[#1D212A] border border-lime-500/20 rounded-lg p-3 mt-4 text-xs font-mono text-gray-300 leading-normal">
                  <span className="text-lime-400 font-bold block mb-1">CO2 SEKUESTRASI AKTIF</span>
                  Setiap siklus pirolisis mengunci serat karbon bambu secara permanen di tanah hortikultura Flores, menghasilkan nilai karbon kredit komersial terverifikasi.
                </div>
              </div>
            )}

          </div>

          {/* Bottom Telemetry Mini-Stat Grid */}
          <div className="border-t border-[#232731] pt-4 mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div>
              <span className="text-[9px] text-gray-500 font-mono block uppercase">Wind velocity</span>
              <span className="text-xs font-semibold text-white font-mono">
                {isSimulating === 'typhoon' ? '175.4 km/jam' : '14.8 km/jam'}
              </span>
            </div>
            <div>
              <span className="text-[9px] text-gray-500 font-mono block uppercase">Structural tilt</span>
              <span className="text-xs font-semibold text-white font-mono">
                {isSimulating === 'seismic' ? '0.24°' : '0.002°'}
              </span>
            </div>
            <div>
              <span className="text-[9px] text-gray-500 font-mono block uppercase">Grid frequency</span>
              <span className="text-xs font-semibold text-white font-mono">
                {isIslanding ? '49.92 Hz' : '50.00 Hz'}
              </span>
            </div>
            <div>
              <span className="text-[9px] text-gray-500 font-mono block uppercase">System alarm level</span>
              <span className={`text-xs font-bold font-mono ${
                isSimulating === 'seismic' ? 'text-rose-500' : isSimulating === 'typhoon' ? 'text-amber-500' : 'text-emerald-500'
              }`}>
                {isSimulating === 'seismic' ? 'CRITICAL' : isSimulating === 'typhoon' ? 'WARNING' : 'SECURE'}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Simulated Live Console Logs (3 Cols) */}
        <div className="lg:col-span-3 bg-[#0E1014] p-4 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2 font-mono">
              REAL-TIME TELEMETRY SYSTEM LOGS
            </span>
            <div className="h-[310px] overflow-y-auto font-mono text-[10px] leading-relaxed text-gray-400 flex flex-col gap-1 pr-1.5 scrollbar-thin scrollbar-thumb-gray-800">
              {telemetryLogs.length === 0 ? (
                <div className="text-gray-600 italic py-2">
                  Menunggu input dari sensor fisik... Tekan simulasi gempa atau islanding untuk memicu log data langsung.
                </div>
              ) : (
                telemetryLogs.map((log, idx) => {
                  let colorClass = 'text-gray-400';
                  if (log.includes('WARNING') || log.includes('ALERT') || log.includes('Islanding')) colorClass = 'text-amber-400';
                  if (log.includes('CRITICAL') || log.includes('ERROR')) colorClass = 'text-rose-400';
                  if (log.includes('SISTEM') || log.includes('SIMULATOR')) colorClass = 'text-cyan-400';
                  return (
                    <div key={idx} className={`${colorClass} border-b border-gray-900 pb-1`}>
                      {log}
                    </div>
                  );
                })
              )}
            </div>
          </div>

          <div className="border-t border-[#232731] pt-3 mt-3">
            <span className="text-[9px] text-gray-500 font-mono block uppercase">Edge AI Model</span>
            <span className="text-[10px] font-mono text-emerald-400 font-medium">NEURO-DOME-RUL v1.42 (Edge-compiled)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
