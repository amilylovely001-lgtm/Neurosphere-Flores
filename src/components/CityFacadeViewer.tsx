import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Eye, Compass, Info, ShieldCheck, Sparkles, Navigation, 
  MapPin, Coffee, Zap, Layers, Ship, Globe, Users, Wind 
} from 'lucide-react';
import facadeImage from '../assets/images/neurosphere_facade_1783293438399.jpg';

interface Hotspot {
  id: string;
  x: string; // percentage from left
  y: string; // percentage from top
  title: string;
  category: string;
  description: string;
  metric?: string;
  icon: React.ComponentType<any>;
}

export default function CityFacadeViewer() {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [scrollPosition, setScrollPosition] = useState<number>(50); // percentage scroll across pan
  const containerRef = useRef<HTMLDivElement>(null);

  // 5 Engineering Hotspots on the building facade from end-to-end
  const hotspots: Hotspot[] = [
    {
      id: "bamboo-composite",
      x: "15%",
      y: "35%",
      title: "Mbaru Niang Composite Hull",
      category: "Structural Architecture",
      description: "Traditional 5-tier aerodynamic cone crafted from modern cross-laminated engineered scrimber bamboo, treated with anti-rot organic polymers, offering high tensile resilience against category 5 tropical cyclones.",
      metric: "Elastic Modulus: 18.5 GPa",
      icon: Layers
    },
    {
      id: "shm-fiber",
      x: "38%",
      y: "55%",
      title: "Fiber-Optic FBG Strain Network",
      category: "Structural Health Monitoring",
      description: "Embedded Fiber Bragg Grating sensors woven into the composite beams, continuously monitoring load variations, temperature anomalies, and marine atmospheric corrosion in real-time.",
      metric: "Sampling Rate: 1000 Hz / Node",
      icon: ShieldCheck
    },
    {
      id: "ai-edge-grid",
      x: "55%",
      y: "25%",
      title: "Edge Distributed AI Core",
      category: "Intelligence Systems",
      description: "Low-power neural processing units mounted directly onto the facades, handling local environmental telemetries, adaptive solar steering, and community decentralized communication systems without cloud reliance.",
      metric: "Computing Power: 85 TOPS / Pod",
      icon: Sparkles
    },
    {
      id: "bio-green-facade",
      x: "72%",
      y: "45%",
      title: "Vertical Living Bio-filter",
      category: "Environmental Systems",
      description: "Draped vertical gardens utilizing native endemic Flores flora. These bio-filters act as passive thermal regulators, oxygenate high-density living areas, and naturally filter coastal salinity from rain-catchment.",
      metric: "CO2 Sequestration: 42kg / m² / yr",
      icon: Wind
    },
    {
      id: "microgrid-hybrid",
      x: "88%",
      y: "65%",
      title: "Tidal-Solar Energy Nexus",
      category: "Energy Infrastructure",
      description: "Bi-directional energy harvesting system integrating high-efficiency multi-junction PV modules along the roofing and underwater kinetic marine turbines capturing the tidal currents of the Flores shoreline.",
      metric: "Grid Independence: 100% Autarky",
      icon: Zap
    }
  ];

  const handlePanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setScrollPosition(val);
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth - containerRef.current.clientWidth;
      containerRef.current.scrollLeft = (val / 100) * scrollWidth;
    }
  };

  return (
    <div className="bg-[#05020c]/40 border border-[#232731] rounded-xl overflow-hidden shadow-2xl font-sans" id="facade-lifestyle-portal">
      
      {/* Dynamic Interactive Header */}
      <div className="bg-gradient-to-r from-[#12072b] to-[#0c051a] p-6 border-b border-cyber-pink/20 text-left">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-[10px] font-bold font-mono text-cyber-pink uppercase tracking-widest bg-cyber-pink/15 px-2.5 py-0.5 rounded border border-cyber-pink/30 flex items-center gap-1.5 w-max mb-1">
              <Compass className="w-3.5 h-3.5" />
              SISTEM FACADE PANORAMIK & FILOSOFI HIDUP
            </span>
            <h2 className="text-lg font-bold text-white tracking-wide uppercase font-display neon-text-pink">
              FAKADE AKUSTIK & REKAYASA SOSIAL NEUROSPHERE FLORES
            </h2>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed font-sans max-w-4xl">
              Tekan tombol hotspot <span className="text-cyber-cyan font-bold">●</span> pada panorama fakade di bawah untuk menginspeksi sistem structural-physics dan sensor digital-twin dari ujung barat ke ujung timur pemukiman pantai.
            </p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setZoomLevel(prev => prev === 1 ? 1.5 : 1)}
              className="px-3 py-1.5 bg-[#05020c] border border-cyber-cyan/40 text-cyber-cyan rounded text-[10px] font-mono tracking-widest uppercase hover:bg-cyber-cyan/15 transition cursor-pointer"
            >
              ZOOM: {zoomLevel === 1 ? "100%" : "150%"}
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Wide Panorama Container */}
      <div className="relative bg-black select-none group/pan">
        {/* Scroll indicator overlay */}
        <div className="absolute top-4 left-4 z-20 bg-[#05020c]/80 border border-cyber-pink/40 px-3 py-1.5 rounded text-[10px] font-mono text-gray-300 pointer-events-none flex items-center gap-1.5">
          <Navigation className="w-3.5 h-3.5 text-cyber-pink animate-pulse" />
          <span>GESER PANORAMA (Ujung-ke-Ujung): {Math.round(scrollPosition)}%</span>
        </div>

        {/* Pan Window */}
        <div 
          ref={containerRef}
          className="overflow-x-auto overflow-y-hidden relative h-[420px] md:h-[500px] transition-all scroll-smooth cursor-grab active:cursor-grabbing scrollbar-none"
        >
          <div 
            className="relative h-full transition-transform duration-300"
            style={{ 
              width: `${zoomLevel * 160}%`, 
              height: '100%' 
            }}
          >
            {/* Real Hyper-realistic Facade Image */}
            <img 
              src={facadeImage} 
              alt="Panoramic Facade of Neurosphere Flores Coastal City" 
              className="w-full h-full object-cover object-bottom"
              referrerPolicy="no-referrer"
            />

            {/* Glowing Sunset Ambient Backdrop Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20 pointer-events-none" />

            {/* Render Interactive Hotspots */}
            {hotspots.map((h) => {
              const Icon = h.icon;
              const isSelected = activeHotspot?.id === h.id;
              
              return (
                <button
                  key={h.id}
                  onClick={() => setActiveHotspot(isSelected ? null : h)}
                  className={`absolute group p-1 rounded-full transition-all duration-300 z-10 cursor-pointer ${
                    isSelected 
                      ? 'scale-125 z-30' 
                      : 'hover:scale-110'
                  }`}
                  style={{ left: h.x, top: h.y }}
                >
                  {/* Glowing Radar Rings */}
                  <span className={`absolute inset-0 rounded-full animate-ping opacity-60 ${
                    isSelected ? 'bg-cyber-pink' : 'bg-cyber-cyan'
                  }`} />
                  
                  {/* Core Icon Button */}
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isSelected
                      ? 'bg-cyber-pink border-white text-white shadow-[0_0_15px_rgba(255,0,127,1)]'
                      : 'bg-[#05020c]/90 border-cyber-cyan text-cyber-cyan hover:border-white shadow-[0_0_10px_rgba(0,240,255,0.5)]'
                  }`}>
                    <Icon className="w-4.5 h-4.5" />
                  </div>

                  {/* Quick label tooltip on hover */}
                  <span className="absolute left-1/2 -translate-x-1/2 top-10 bg-[#05020c]/90 border border-cyber-cyan text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-md pointer-events-none">
                    {h.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Details Modal Overlay */}
        <AnimatePresence>
          {activeHotspot && (
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              className="absolute right-4 top-4 bottom-4 w-[280px] sm:w-[320px] bg-[#0c051a]/95 border-2 border-cyber-pink rounded-xl p-5 shadow-[0_0_25px_rgba(255,0,127,0.4)] z-30 overflow-y-auto text-left"
            >
              <div className="flex justify-between items-start border-b border-cyber-pink/20 pb-2.5 mb-3.5">
                <div>
                  <span className="text-[8px] font-mono font-bold text-cyber-pink tracking-widest uppercase bg-cyber-pink/15 px-2 py-0.5 rounded">
                    {activeHotspot.category}
                  </span>
                  <h3 className="text-xs font-bold text-white mt-1.5 tracking-wider font-mono">
                    {activeHotspot.title}
                  </h3>
                </div>
                <button 
                  onClick={() => setActiveHotspot(null)}
                  className="text-gray-400 hover:text-white font-mono text-xs cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <p className="text-[11px] text-gray-300 leading-relaxed font-sans mb-4">
                {activeHotspot.description}
              </p>

              {activeHotspot.metric && (
                <div className="bg-black/40 border border-cyber-cyan/30 rounded p-2.5 flex items-center justify-between font-mono text-[10px]">
                  <span className="text-gray-500">REALTIME TELEMETRY:</span>
                  <span className="text-cyber-cyan font-bold">{activeHotspot.metric}</span>
                </div>
              )}

              <div className="mt-4 pt-3.5 border-t border-cyber-pink/20 flex items-center justify-between text-[8px] font-mono text-gray-500">
                <span>COMPLY WITH STANDARD FEED VOL. B</span>
                <span>SECURED NODE</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive Slider for Pan Control (Simulates drag feel and ensures ease of use) */}
      <div className="bg-[#12141B] px-6 py-4 border-b border-[#232731] flex flex-col sm:flex-row items-center gap-4 text-xs font-mono">
        <span className="text-gray-400 shrink-0 text-[10px] tracking-wider uppercase">Fakade Barat (Ujung Kiri)</span>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={scrollPosition}
          onChange={handlePanChange}
          className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyber-pink" 
        />
        <span className="text-gray-400 shrink-0 text-[10px] tracking-wider uppercase">Fakade Timur (Ujung Kanan)</span>
      </div>

      {/* Comprehensive Lifestyle Section - Nuances of the Neurosphere Flores Lifestyle */}
      <div className="p-6 md:p-8 text-left bg-gradient-to-b from-[#0c051a] to-[#05020c]">
        
        <div className="flex items-center gap-2 mb-6 border-b border-cyber-cyan/20 pb-3">
          <Globe className="w-5 h-5 text-cyber-cyan" />
          <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider neon-text-cyan">
            NUANSA GAYA HIDUP & EKOSISTEM SOSIAL REGENERATIF
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Techno-Primitivism */}
          <div className="bg-[#12072b]/30 border border-cyber-pink/20 hover:border-cyber-pink/50 rounded-xl p-5 transition duration-300 flex flex-col justify-between relative group">
            <div className="absolute top-0 right-0 bg-cyber-pink/10 text-cyber-pink text-[9px] font-mono px-2 py-0.5 rounded-bl">01</div>
            <div>
              <div className="w-9 h-9 rounded bg-cyber-pink/10 flex items-center justify-center text-cyber-pink border border-cyber-pink/30 mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-white font-mono tracking-wider mb-2 uppercase">Tekno-Primitivisme</h4>
              <p className="text-[11px] text-gray-300 leading-relaxed font-sans">
                Filosofi hidup yang menyatukan kearifan komunal 'gotong royong' adat Manggarai dengan rekayasa mandiri digital. Warga bersama-sama merawat sensor akustik rumah mereka melalui feedback harian, menjaga harmoni struktur dengan alam.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-cyber-pink/10 text-[9px] font-mono text-cyber-pink uppercase font-semibold">
              Kearifan Lokal × Masa Depan
            </div>
          </div>

          {/* Card 2: Lontar Promenade */}
          <div className="bg-[#12072b]/30 border border-cyber-cyan/20 hover:border-cyber-cyan/50 rounded-xl p-5 transition duration-300 flex flex-col justify-between relative group">
            <div className="absolute top-0 right-0 bg-cyber-cyan/10 text-cyber-cyan text-[9px] font-mono px-2 py-0.5 rounded-bl">02</div>
            <div>
              <div className="w-9 h-9 rounded bg-cyber-cyan/10 flex items-center justify-center text-cyber-cyan border border-cyber-cyan/30 mb-4">
                <Coffee className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-white font-mono tracking-wider mb-2 uppercase">Koridor Pantai Lontar</h4>
              <p className="text-[11px] text-gray-300 leading-relaxed font-sans">
                Promenade kayu bambu di sepanjang bibir pantai berpendar saat matahari terbenam. Menjadi pusat interaksi sosial tempat insinyur komposit, peneliti kelautan, petani rumput laut, dan nelayan berdiskusi hangat sambil menikmati kopi Flores.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-cyber-cyan/10 text-[9px] font-mono text-cyber-cyan uppercase font-semibold">
              Interaksi Interdisiplin
            </div>
          </div>

          {/* Card 3: Blue-Green Circular Economy */}
          <div className="bg-[#12072b]/30 border border-cyber-yellow/20 hover:border-cyber-yellow/50 rounded-xl p-5 transition duration-300 flex flex-col justify-between relative group">
            <div className="absolute top-0 right-0 bg-cyber-yellow/10 text-cyber-yellow text-[9px] font-mono px-2 py-0.5 rounded-bl">03</div>
            <div>
              <div className="w-9 h-9 rounded bg-cyber-yellow/10 flex items-center justify-center text-cyber-yellow border border-cyber-yellow/30 mb-4">
                <Ship className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-white font-mono tracking-wider mb-2 uppercase">Ekonomi Biru-Hijau</h4>
              <p className="text-[11px] text-gray-300 leading-relaxed font-sans">
                Tidak ada limbah terbuang. Rumput laut laut diproses menjadi bio-plastik pembungkus instrumen sensor, daun bambu sisa konstruksi difermentasi menjadi pakan ternak sirkular, dan air laut didesalinasi menggunakan energi surya murni.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-cyber-yellow/10 text-[9px] font-mono text-cyber-yellow uppercase font-semibold">
              100% Sirkularitas Fisik
            </div>
          </div>

          {/* Card 4: Demokrasi Data Twin */}
          <div className="bg-[#12072b]/30 border border-cyber-green/20 hover:border-cyber-green/50 rounded-xl p-5 transition duration-300 flex flex-col justify-between relative group">
            <div className="absolute top-0 right-0 bg-cyber-green/10 text-cyber-green text-[9px] font-mono px-2 py-0.5 rounded-bl">04</div>
            <div>
              <div className="w-9 h-9 rounded bg-cyber-green/10 flex items-center justify-center text-cyber-green border border-cyber-green/30 mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-white font-mono tracking-wider mb-2 uppercase">Demokrasi Data Warga</h4>
              <p className="text-[11px] text-gray-300 leading-relaxed font-sans">
                Setiap warga memiliki hak suara penuh dalam komite rekayasa. Data beban angin, cadangan mikrogrid, dan kualitas air pantai dapat diakses secara transparan melalui portal terenkripsi lokal, menghilangkan birokrasi sentral.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-cyber-green/10 text-[9px] font-mono text-cyber-green uppercase font-semibold">
              Transparansi Kedaulatan
            </div>
          </div>

        </div>

        {/* Detailed Narrative Section */}
        <div className="mt-8 bg-[#0c051a]/60 border border-[#232731] rounded-xl p-6 relative">
          <h4 className="text-xs font-bold text-white font-mono mb-3 uppercase flex items-center gap-1.5 text-cyber-cyan">
            <Info className="w-4 h-4" />
            CATATAN ETNOGRAFIS: INTEGRASI TEKNOLOGI PADA KOMUNITAS COSTE
          </h4>
          <p className="text-[11px] text-gray-300 leading-relaxed font-sans mb-3">
            Kehidupan di Neurosphere Flores bukan sekadar hidup di kota pintar konvensional yang kaku. Di sini, nuansa kehidupan dipandu oleh ritme pasang surut air laut dan hembusan angin pantai. Arsitektur rumah yang menyerupai Mbaru Niang bukan sekadar hiasan estetis, melainkan representasi fisik dari keseimbangan energi dan sirkulasi udara alami.
          </p>
          <p className="text-[11px] text-gray-300 leading-relaxed font-sans">
            Warga menganggap sistem pemantauan struktural (SHM) yang tertanam di pilar bambu mereka sebagai 'penjaga gaib digital'. Ketika sensor mendeteksi beban berlebih akibat badai, sistem AI lokal akan merekomendasikan penyesuaian tirai bambu pintar secara otomatis guna mengubah dinamika aliran angin di sekitar atap berbentuk kerucut tersebut. Dengan demikian, kedaulatan sains modern menyatu mulus dengan jiwa komunal Flores.
          </p>
        </div>

      </div>

    </div>
  );
}
