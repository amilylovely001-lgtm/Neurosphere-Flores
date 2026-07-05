import React, { useState } from 'react';
import { Calendar, CheckSquare, ListTodo, MapPin, Milestone, ChevronRight } from 'lucide-react';

interface GanttTask {
  id: string;
  task: string;
  phase: 'Inisiasi' | 'Material' | 'Sipil' | 'Smart System' | 'Utilitas';
  startMonth: number; // 1-12
  duration: number; // in months
  progress: number; // %
  assignee: string;
}

interface RoadmapPhase {
  phaseNum: number;
  title: string;
  duration: string;
  description: string;
  checklists: string[];
  status: 'Completed' | 'In-Progress' | 'Pending';
}

export default function GanttChart() {
  const [activeTab, setActiveTab] = useState<'gantt' | 'roadmap'>('gantt');
  const [selectedPhaseNum, setSelectedPhaseNum] = useState<number>(2); // Default to FEED stage

  // Tasks dataset for Gantt Chart (12 months timeline)
  const tasks: GanttTask[] = [
    { id: "TSK-001", task: "Studi Kelayakan Adat & Budaya", phase: "Inisiasi", startMonth: 1, duration: 2, progress: 100, assignee: "Cultural Specialist" },
    { id: "TSK-002", task: "Studi Geoteknik & Silt Curtain Design", phase: "Inisiasi", startMonth: 2, duration: 2, progress: 100, assignee: "Oceanographer" },
    { id: "TSK-003", task: "Modifikasi Termal Torrefaction Bambu", phase: "Material", startMonth: 3, duration: 3, progress: 85, assignee: "Composite Specialist" },
    { id: "TSK-004", task: "Desain Autoclave Boron Impregnasi AWPA", phase: "Material", startMonth: 4, duration: 2, progress: 90, assignee: "Bamboo Specialist" },
    { id: "TSK-005", task: "Pemancangan Tiang Mikro Pantai", phase: "Sipil", startMonth: 5, duration: 4, progress: 15, assignee: "Marine Engineer" },
    { id: "TSK-006", task: "Penyusunan Tiang Agung Scrimber", phase: "Sipil", startMonth: 7, duration: 3, progress: 0, assignee: "Structural Engineer" },
    { id: "TSK-007", task: "Integrasi Sensor Optik FBG & MEMS", phase: "Smart System", startMonth: 6, duration: 4, progress: 40, assignee: "SHM Specialist" },
    { id: "TSK-008", task: "Konfigurasi InfluxDB & WebGL Twin", phase: "Smart System", startMonth: 8, duration: 3, progress: 10, assignee: "Digital Twin Architect" },
    { id: "TSK-009", task: "Penyusunan Kontainer RO Desalinasi", phase: "Utilitas", startMonth: 7, duration: 3, progress: 20, assignee: "Water Engineer" },
    { id: "TSK-010", task: "Instalasi Turbin Arus & BESS LFP", phase: "Utilitas", startMonth: 9, duration: 3, progress: 0, assignee: "Smart Grid Engineer" }
  ];

  // Roadmap Stages
  const roadmapPhases: RoadmapPhase[] = [
    {
      phaseNum: 1,
      title: "Konsep & Kelayakan Budaya",
      duration: "M1 - M6",
      description: "Penyelarasan adat Manggarai, musyawarah Lonto Leok ulayat, amdal kelautan, studi topografi.",
      status: "Completed",
      checklists: [
        "Persetujuan adat tertulis dari Lembaga Adat Manggarai",
        "Pemetaan area ulayat darat & laut dengan GPS RTK",
        "Laporan studi kelayakan ekologi (biodiversitas terumbu karang)",
        "Studi pemodelan numerik awal gempa & angin siklon"
      ]
    },
    {
      phaseNum: 2,
      title: "Pre-FEED & FEED",
      duration: "M7 - M15",
      description: "Desain spesifikasi material komposit, integrasi siber digital twin, perancangan sirkuit kelistrikan.",
      status: "In-Progress",
      checklists: [
        "Perhitungan parameter mekanis MOR/MOE komposit bambu",
        "Penyusunan arsitektur sensor serat optik FBG struktural",
        "Rancangan detail sirkuit proteksi relai IEC 61850",
        "Pemodelan Digital Twin 3D glTF & InfluxDB schema"
      ]
    },
    {
      phaseNum: 3,
      title: "Detailed Engineering Design",
      duration: "M16 - M27",
      description: "Shop drawings fabrikasi lengkap, pemesanan material, perancangan sasis precast, sertifikasi mandiri.",
      status: "Pending",
      checklists: [
        "Gambar kerja detail sambungan carbon-wrap",
        "Pemesanan mesin autoclave penekan borat berukuran 12 meter",
        "Sertifikasi uji ketahanan bakar laboratorium ASTM E84",
        "Uji simulasi beban seismik dinamis virtual Digital Twin"
      ]
    },
    {
      phaseNum: 4,
      title: "Fabrikasi & Pilot Prototipe",
      duration: "M28 - M45",
      description: "Pembangunan 1 unit contoh Mbaru Niang, pemancangan tiang mikro laut pertama, pengetesan instrumen.",
      status: "Pending",
      checklists: [
        "Pengecoran pondasi tiang mikro komposit lepas pantai pertama",
        "Penyusunan pilar agung bambu scrimber termodifikasi",
        "Instalasi loop sistem desalinasi air laut kontainer",
        "Kalibrasi sensor getaran dan alarm peringatan dini"
      ]
    }
  ];

  const currentPhaseDetail = roadmapPhases.find(p => p.phaseNum === selectedPhaseNum) || roadmapPhases[1];

  return (
    <div className="bg-[#111317] border border-[#232731] rounded-xl overflow-hidden shadow-xl font-sans" id="gantt-roadmap-section">
      
      {/* Header and Switcher */}
      <div className="bg-[#181B22] border-b border-[#232731] p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
            VOLUME M & N: IMPLEMENTATION ROADMAP & GANTT CHART
          </h3>
          <p className="text-xs text-gray-400">
            Jadwal konstruksi linimasa 12 bulan dan saringan gerbang keputusan (stage-gate) proyek Neurosphere Flores.
          </p>
        </div>

        <div className="flex gap-2 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('gantt')}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono transition ${
              activeTab === 'gantt'
                ? 'bg-[#1D212A] text-white border border-emerald-500/40'
                : 'text-gray-400 hover:text-white bg-transparent border-transparent'
            }`}
            id="tab-gantt-chart"
          >
            <Calendar className="w-4 h-4 text-emerald-400" />
            Gantt Chart (Teks)
          </button>

          <button
            onClick={() => setActiveTab('roadmap')}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono transition ${
              activeTab === 'roadmap'
                ? 'bg-[#1D212A] text-white border border-cyan-400/40'
                : 'text-gray-400 hover:text-white bg-transparent border-transparent'
            }`}
            id="tab-roadmap-explorer"
          >
            <Milestone className="w-4 h-4 text-cyan-400" />
            Roadmap & Checklist
          </button>
        </div>
      </div>

      <div className="p-5 text-left min-h-[400px]">
        
        {/* TEXT-BASED GANTT CHART VIEW */}
        {activeTab === 'gantt' && (
          <div>
            <div className="mb-4">
              <span className="text-xs font-bold text-gray-300 font-mono uppercase tracking-widest block mb-1">
                JADWAL PELAKSANAAN LINIMASA (BULAN 1 - 12)
              </span>
              <p className="text-xs text-gray-400">
                Visualisasi durasi pengerjaan, persentase kemajuan (progress), dan pemilik tugas per departemen rekayasa.
              </p>
            </div>

            {/* Gantt Chart Matrix */}
            <div className="overflow-x-auto border border-[#232731] rounded-lg bg-[#0E1014] p-3">
              <div className="min-w-[720px]">
                
                {/* Timeline Header Row */}
                <div className="grid grid-cols-12 border-b border-gray-800 pb-2 text-[10px] font-mono text-gray-500 font-bold uppercase tracking-wider">
                  <div className="col-span-4">Paket Pekerjaan (WBS Level 4)</div>
                  <div className="col-span-8 grid grid-cols-12 text-center border-l border-gray-900 pl-2">
                    {Array(12).fill(null).map((_, idx) => (
                      <div key={idx} className="border-r border-gray-900 last:border-0">B{idx + 1}</div>
                    ))}
                  </div>
                </div>

                {/* Task Rows */}
                <div className="divide-y divide-gray-900 mt-2">
                  {tasks.map(t => (
                    <div key={t.id} className="grid grid-cols-12 py-2.5 items-center text-xs font-mono">
                      
                      {/* Left: Task Meta */}
                      <div className="col-span-4 pr-3 flex flex-col justify-center">
                        <span className="text-[9px] text-gray-500 font-bold block">{t.id} | {t.phase}</span>
                        <span className="text-white font-medium truncate">{t.task}</span>
                        <span className="text-[8px] text-gray-500">PIC: {t.assignee} ({t.progress}%)</span>
                      </div>

                      {/* Right: Gantt Bar */}
                      <div className="col-span-8 grid grid-cols-12 h-5 items-center border-l border-gray-900 pl-2 relative">
                        
                        {/* 12 columns background grid lines */}
                        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none pl-2">
                          {Array(12).fill(null).map((_, idx) => (
                            <div key={idx} className="border-r border-gray-900/40 h-full" />
                          ))}
                        </div>

                        {/* Task Progress Bar */}
                        <div 
                          className="h-3 rounded-md overflow-hidden relative border border-emerald-500/10"
                          style={{
                            gridColumnStart: t.startMonth,
                            gridColumnEnd: t.startMonth + t.duration
                          }}
                        >
                          {/* Total duration bar (shadow) */}
                          <div className="absolute inset-0 bg-emerald-500/10" />
                          {/* Completed progress bar */}
                          <div 
                            className="h-full bg-emerald-500 transition-all duration-500"
                            style={{ width: `${t.progress}%` }}
                          />
                        </div>

                      </div>

                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        )}

        {/* ROADMAP & CHECKLIST GATE VIEW */}
        {activeTab === 'roadmap' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            
            {/* Left side: Phase Selectors (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <span className="text-xs font-bold text-gray-300 font-mono uppercase tracking-widest block">
                GERBANG TAHAPAN PROYEK (STAGE-GATE)
              </span>
              
              <div className="flex flex-col gap-2">
                {roadmapPhases.map(p => (
                  <button
                    key={p.phaseNum}
                    onClick={() => setSelectedPhaseNum(p.phaseNum)}
                    className={`flex items-center justify-between p-3 rounded-lg border text-left transition ${
                      selectedPhaseNum === p.phaseNum
                        ? 'bg-[#1D212A] border-cyan-500/50 text-white'
                        : 'bg-[#0E1014] border-[#232731] text-gray-400 hover:bg-[#15181F]'
                    }`}
                    id={`roadmap-phase-btn-${p.phaseNum}`}
                  >
                    <div className="flex items-center gap-3 font-mono">
                      <span className="text-xs bg-gray-900 text-gray-400 px-1.5 py-0.5 rounded font-bold">
                        Gate {p.phaseNum}
                      </span>
                      <span className="text-xs font-semibold uppercase">{p.title}</span>
                    </div>
                    <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border ${
                      p.status === 'Completed' 
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : p.status === 'In-Progress'
                          ? 'bg-amber-500/10 text-amber-400 border-amber-500/20 animate-pulse'
                          : 'bg-gray-800 text-gray-500 border-transparent'
                    }`}>
                      {p.status}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right side: Active Phase Checklist (7 cols) */}
            <div className="lg:col-span-7 bg-[#0E1014] border border-[#232731] rounded-lg p-5 flex flex-col justify-between h-[360px]">
              <div className="text-left font-mono">
                <div className="flex justify-between items-center border-b border-gray-800 pb-2 mb-3">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">
                    GERBANG PENERIMAAN {currentPhaseDetail.phaseNum}: {currentPhaseDetail.duration}
                  </span>
                  <span className="text-[10px] text-gray-500">M = Month</span>
                </div>

                <p className="text-xs text-gray-300 leading-normal mb-4">
                  {currentPhaseDetail.description}
                </p>

                {/* Checklist block */}
                <div>
                  <span className="text-[9px] font-bold text-gray-500 uppercase block mb-2 flex items-center gap-1">
                    <ListTodo className="w-3.5 h-3.5" />
                    Kriteria Kelayakan Teknis (Checklist)
                  </span>
                  <div className="flex flex-col gap-2 max-h-[160px] overflow-y-auto pr-1">
                    {currentPhaseDetail.checklists.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-400 leading-normal">
                        <CheckSquare className={`w-4 h-4 mt-0.5 shrink-0 ${
                          currentPhaseDetail.status === 'Completed' ? 'text-emerald-400' : 'text-cyan-400'
                        }`} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-2 text-[9px] text-gray-500 font-mono text-left leading-normal">
                *Proyek tidak diperkenankan melangkah ke gerbang konstruksi fisik berikutnya sebelum seluruh daftar kelayakan berstatus terverifikasi hijau.
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
