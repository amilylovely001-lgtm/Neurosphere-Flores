import React, { useState } from 'react';
import { Layers, ShieldCheck, Activity, Search, ClipboardList } from 'lucide-react';

interface RTMRow {
  reqId: string;
  type: string;
  text: string;
  layer: string;
  verification: string;
  status: string;
}

interface FMEARow {
  item: string;
  failureMode: string;
  effect: string;
  sev: number; // Severity (1-10)
  occ: number; // Occurrence (1-10)
  det: number; // Detection (1-10)
  rpn: number; // RPN = S x O x D
  mitigation: string;
}

export default function EngineeringMatrices() {
  const [activeMatrix, setActiveMatrix] = useState<'rtm' | 'fmea' | 'vv'>('rtm');
  const [searchQuery, setSearchQuery] = useState('');

  // Requirement Traceability Matrix Data
  const rtmData: RTMRow[] = [
    { reqId: "REQ-FR-001", type: "Functional", text: "Struktur atap harus mampu mendistribusikan beban angin siklon 185 km/jam.", layer: "Layer 04: Structure", verification: "FEA Pembebanan & Uji Terowongan Angin", status: "VERIFIED" },
    { reqId: "REQ-FR-002", type: "Functional", text: "Sensor optik FBG harus menangkap regangan mikro struktural hingga 0.1 µε.", layer: "Layer 06: Sensors", verification: "Kalibrasi Regangan Beban Lab Sastrawan", status: "VERIFIED" },
    { reqId: "REQ-FR-003", type: "Functional", text: "Sistem mikrogrid harus mampu islanding otomatis dalam waktu <15 milidetik.", layer: "Layer 09: Energy", verification: "Tes Penyuntikan Sinyal Relai IED GOOSE", status: "VERIFIED" },
    { reqId: "REQ-FR-004", type: "Functional", text: "Unit desalinasi RO harus memulihkan 44% air tawar bersih dari asupan air laut.", layer: "Layer 10: Water", verification: "Inspeksi Pengukur Aliran Lapangan Kontinu", status: "VERIFIED" },
    { reqId: "REQ-FR-005", type: "Functional", text: "Digital Twin harus menyinkronkan data status sensor getaran dengan latensi <100ms.", layer: "Layer 08: Digital Twin", verification: "Tes Latensi Jaringan Sinkronisasi InfluxDB", status: "VERIFIED" },
    { reqId: "REQ-NFR-001", type: "Non-Functional", text: "Ketersediaan suplai daya listrik mandiri minimal 99.99% sepanjang tahun.", layer: "Layer 09: Energy", verification: "Uji Redundansi N-1 Kegagalan Generator", status: "VERIFIED" },
    { reqId: "REQ-NFR-002", type: "Non-Functional", text: "Seluruh transmisi data nirkabel wajib diamankan enkripsi penuh AES-128.", layer: "Layer 07: Edge AI", verification: "Audit Keamanan Penetrasi Jaringan Siber", status: "VERIFIED" },
    { reqId: "REQ-NFR-003", type: "Non-Functional", text: "Bahan komposit bambu harus tahan abrasi & rayap laut minimal 50 tahun.", layer: "Layer 04: Structure", verification: "Tes Akselerasi Degradasi Garam/Suhu Lab", status: "VERIFIED" },
    { reqId: "REQ-NFR-004", type: "Non-Functional", text: "Sirkuit interupsi manusia (Hardwired Kill Switch) harus melompati kontrol AI.", layer: "Layer 16: Governance", verification: "Simulasi Kegagalan Otonom & Interupsi Fisik", status: "VERIFIED" }
  ];

  // FMEA Data
  const fmeaData: FMEARow[] = [
    { item: "Sambungan Baut Utama", failureMode: "Korosi korosif atmosferik laut", effect: "Kehilangan kekuatan dukung kaku, kelonggaran baut", sev: 8, occ: 4, det: 2, rpn: 64, mitigation: "Isolator nilon sleeve dan baut stainless steel SS316L" },
    { item: "Laminasi Balok Bambu", failureMode: "Delaminasi perekat akibat indeks UV ekstrim", effect: "Retak geser horizontal, penurunan modulus lentur", sev: 9, occ: 3, det: 3, rpn: 81, mitigation: "Pencampuran nanopartikel silika penyerap UV pada bio-epoxy" },
    { item: "Atap Ilalang Anyaman", failureMode: "Pembusukan biologis akibat curah hujan konstan", effect: "Kebocoran atap utilitas, pembusukan bambu penyangga", sev: 6, occ: 5, det: 2, rpn: 60, mitigation: "Pemberian membran serat kaca hidrofobik di bawah anyaman" },
    { item: "Kabel Serat Optik FBG", failureMode: "Tekukan berlebih (micro-bending) saat pengecoran", effect: "Sinyal optik redup, kehilangan pembacaan regangan", sev: 7, occ: 4, det: 3, rpn: 84, mitigation: "Pelindung pipa kapiler logam fleksibel baja tahan karat" },
    { item: "Rotor Turbin Arus Laut", failureMode: "Biofouling agresif teritip laut", effect: "Penurunan putaran rotor, hilangnya efisiensi daya", sev: 8, occ: 6, det: 2, rpn: 96, mitigation: "Cat pelindung anti-fouling silikon licin bebas racun" },
    { item: "Baterai BESS LFP", failureMode: "Thermal runaway sel akibat suhu ekstrim", effect: "Kebakaran kimiawi berantai, pemadaman listrik total", sev: 10, occ: 2, det: 2, rpn: 40, mitigation: "Sistem pendingin cair sirkulasi aktif & sensor deteksi asap" }
  ];

  // Filtered RTM Row
  const filteredRTM = rtmData.filter(row => 
    row.reqId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.layer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filtered FMEA Row
  const filteredFMEA = fmeaData.filter(row => 
    row.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.failureMode.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.mitigation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#111317] border border-[#232731] rounded-xl overflow-hidden shadow-xl font-sans" id="engineering-matrices-panel">
      
      {/* Tab Selector Header */}
      <div className="bg-[#181B22] border-b border-[#232731] p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="flex gap-2 w-full sm:w-auto">
          <button
            onClick={() => { setActiveMatrix('rtm'); setSearchQuery(''); }}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono transition ${
              activeMatrix === 'rtm'
                ? 'bg-[#1D212A] text-white border border-emerald-500/40'
                : 'text-gray-400 hover:text-white bg-transparent border-transparent'
            }`}
            id="tab-rtm"
          >
            <ClipboardList className="w-4 h-4 text-emerald-400" />
            Requirement Traceability (RTM)
          </button>

          <button
            onClick={() => { setActiveMatrix('fmea'); setSearchQuery(''); }}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono transition ${
              activeMatrix === 'fmea'
                ? 'bg-[#1D212A] text-white border border-rose-500/40'
                : 'text-gray-400 hover:text-white bg-transparent border-transparent'
            }`}
            id="tab-fmea"
          >
            <Activity className="w-4 h-4 text-rose-400" />
            Failure Mode (FMEA Analysis)
          </button>
        </div>

        {/* Local Search */}
        <div className="relative w-full sm:w-[220px]">
          <Search className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Cari dalam matriks..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-[#1A1E26] border border-[#232731] rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-mono"
            id="matrix-search-input"
          />
        </div>
      </div>

      {/* Grid Content */}
      <div className="p-5 text-left min-h-[380px]">
        
        {/* RTM MATRIX VIEW */}
        {activeMatrix === 'rtm' && (
          <div>
            <div className="mb-4">
              <span className="text-xs font-bold text-gray-300 font-mono uppercase tracking-widest block mb-1">
                MATRIKS KETERLACAKAN KEBUTUHAN (RTM)
              </span>
              <p className="text-xs text-gray-400">
                Penyelarasan kode kebutuhan fungsional (FR) dan non-fungsional (NFR) dengan 16-lapisan arsitektur dan prosedur pengujian kelaikan.
              </p>
            </div>

            <div className="overflow-x-auto border border-[#232731] rounded-lg bg-[#0E1014]">
              <table className="w-full text-left border-collapse font-mono text-[10px]">
                <thead className="bg-[#181B22] text-gray-400 border-b border-[#232731]">
                  <tr>
                    <th className="p-2.5 w-24">Req ID</th>
                    <th className="p-2.5 w-24">Type</th>
                    <th className="p-2.5">Kebutuhan Teknis (Sistem)</th>
                    <th className="p-2.5">Arsitektur Layer</th>
                    <th className="p-2.5">Uji Verifikasi</th>
                    <th className="p-2.5 w-20 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#232731] text-gray-300">
                  {filteredRTM.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#13161C]/50 transition">
                      <td className="p-2.5 font-bold text-emerald-400">{row.reqId}</td>
                      <td className="p-2.5 text-gray-500">{row.type}</td>
                      <td className="p-2.5 leading-normal max-w-[250px]">{row.text}</td>
                      <td className="p-2.5 text-gray-400">{row.layer}</td>
                      <td className="p-2.5 text-gray-400">{row.verification}</td>
                      <td className="p-2.5 text-center">
                        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded text-[8px] font-bold">
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* FMEA MATRIX VIEW */}
        {activeMatrix === 'fmea' && (
          <div>
            <div className="mb-4">
              <span className="text-xs font-bold text-gray-300 font-mono uppercase tracking-widest block mb-1">
                ANALISIS MODUS KEGAGALAN & EFEK (FMEA)
              </span>
              <p className="text-xs text-gray-400">
                Pemberian skor risiko prioritas (RPN = Severity x Occurrence x Detection) untuk komponen penahan beban kritis, material hibrida, dan sistem sensor.
              </p>
            </div>

            <div className="overflow-x-auto border border-[#232731] rounded-lg bg-[#0E1014]">
              <table className="w-full text-left border-collapse font-mono text-[10px]">
                <thead className="bg-[#181B22] text-gray-400 border-b border-[#232731]">
                  <tr>
                    <th className="p-2.5">Komponen Kritis</th>
                    <th className="p-2.5">Modus Kegagalan</th>
                    <th className="p-2.5">Efek Kegagalan</th>
                    <th className="p-2.5 text-center w-12">S</th>
                    <th className="p-2.5 text-center w-12">O</th>
                    <th className="p-2.5 text-center w-12">D</th>
                    <th className="p-2.5 text-center w-16 text-rose-400">RPN</th>
                    <th className="p-2.5">Rencana Tindakan Mitigasi FEED</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#232731] text-gray-300">
                  {filteredFMEA.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#13161C]/50 transition">
                      <td className="p-2.5 font-bold text-white">{row.item}</td>
                      <td className="p-2.5 text-rose-400">{row.failureMode}</td>
                      <td className="p-2.5 text-gray-400 leading-normal max-w-[150px]">{row.effect}</td>
                      <td className="p-2.5 text-center text-gray-500">{row.sev}</td>
                      <td className="p-2.5 text-center text-gray-500">{row.occ}</td>
                      <td className="p-2.5 text-center text-gray-500">{row.det}</td>
                      <td className="p-2.5 text-center font-bold text-rose-400">{row.rpn}</td>
                      <td className="p-2.5 text-gray-400 leading-normal max-w-[200px]">{row.mitigation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 bg-[#14171E] border border-[#232731] p-3 rounded-lg text-[10px] text-gray-500 font-mono leading-relaxed">
              *Skor RPN dihitung dengan rumus: <b>RPN = Severity (S) x Occurrence (O) x Detection (D)</b>. Batas kritis penanganan mitigasi wajib adalah RPN &gt; 50.
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
