import React, { useState, useMemo } from 'react';
import { Search, AlertTriangle, HelpCircle, ArrowRight, User, RefreshCw, Layers } from 'lucide-react';
import { riskRegister as initialRisks } from '../data/riskRegister';
import { RiskItem } from '../types';

export default function RiskMatrix() {
  const [risks, setRisks] = useState<RiskItem[]>(initialRisks);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCell, setSelectedCell] = useState<{ p: number; i: number } | null>(null);
  const [expandedRiskId, setExpandedRiskId] = useState<string | null>(null);

  // Categories list
  const categories = useMemo(() => {
    const list = new Set(risks.map(r => r.category));
    return ['All', ...Array.from(list)];
  }, [risks]);

  // Heatmap generation: count of risks in each cell (P: 1-5, I: 1-5)
  const heatmapData = useMemo(() => {
    const matrix = Array(5).fill(null).map(() => Array(5).fill(0));
    risks.forEach(r => {
      // P: 1-5, I: 1-5. Matrix is 0-indexed where row is Impact (5 down to 1), col is Probability (1 to 5)
      const pIdx = r.probability - 1;
      const iIdx = r.impact - 1;
      if (pIdx >= 0 && pIdx < 5 && iIdx >= 0 && iIdx < 5) {
        matrix[4 - iIdx][pIdx]++; // Impact 5 is top row (index 0), Impact 1 is bottom row (index 4)
      }
    });
    return matrix;
  }, [risks]);

  // Statistics calculation
  const stats = useMemo(() => {
    let high = 0;
    let medium = 0;
    let low = 0;
    risks.forEach(r => {
      const score = r.probability * r.impact;
      if (score >= 15) high++;
      else if (score >= 5) medium++;
      else low++;
    });
    return { total: risks.length, high, medium, low };
  }, [risks]);

  // Filter risks based on selections
  const filteredRisks = useMemo(() => {
    return risks.filter(r => {
      const matchesSearch =
        r.risk.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.mitigation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.owner.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || r.category === selectedCategory;

      const matchesCell = selectedCell === null || (r.probability === selectedCell.p && r.impact === selectedCell.i);

      return matchesSearch && matchesCategory && matchesCell;
    });
  }, [risks, searchQuery, selectedCategory, selectedCell]);

  // Handle Probability Slider Change
  const updateRiskValue = (id: string, field: 'probability' | 'impact', val: number) => {
    setRisks(prev => prev.map(r => {
      if (r.id === id) {
        const updated = { ...r, [field]: val };
        const score = updated.probability * updated.impact;
        updated.residualRisk = score >= 15 ? 'High' : score >= 5 ? 'Medium' : 'Low';
        return updated;
      }
      return r;
    }));
  };

  // Reset filters
  const resetFilters = () => {
    setSelectedCell(null);
    setSelectedCategory('All');
    setSearchQuery('');
  };

  // Get cell color for 5x5 grid
  const getCellColor = (iVal: number, pVal: number, isSelected: boolean) => {
    const p = pVal; // Probability (1 to 5)
    const i = 6 - iVal; // Impact (5 down to 1)
    const score = p * i;

    let baseBg = 'bg-emerald-500/20 hover:bg-emerald-500/35 border-emerald-500/20';
    if (score >= 15) {
      baseBg = 'bg-rose-500/25 hover:bg-rose-500/40 border-rose-500/20';
    } else if (score >= 5) {
      baseBg = 'bg-amber-500/20 hover:bg-amber-500/35 border-amber-500/20';
    }

    if (isSelected) {
      baseBg += ' ring-2 ring-emerald-400 border-white/50 scale-102';
    }

    return baseBg;
  };

  return (
    <div className="bg-[#111317] border border-[#232731] rounded-xl overflow-hidden shadow-xl font-sans" id="risk-matrix-panel">
      {/* Header and KPI Row */}
      <div className="bg-[#181B22] border-b border-[#232731] p-5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-5">
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
              VOLUME Q: RISK REGISTER MATRIX (150 ITEMS)
            </h3>
            <p className="text-xs text-gray-400">
              Sistem identifikasi risiko sirkuler otonom terverifikasi standar ISO 31000. Klik sel pada Heatmap untuk menyaring pendaftaran risiko.
            </p>
          </div>
          {selectedCell && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1E222A] text-xs text-emerald-400 hover:text-white rounded border border-emerald-500/30 transition font-mono"
            >
              <RefreshCw className="w-3 h-3 animate-spin" />
              Saringan Aktif (P:{selectedCell.p}, I:{selectedCell.i}) - Reset Saringan
            </button>
          )}
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-[#13161C] border border-[#232731] rounded-lg p-3 text-left">
            <span className="text-[10px] text-gray-500 font-mono uppercase block">Total Identifikasi Risiko</span>
            <span className="text-lg font-bold text-white font-mono">{stats.total} Risks</span>
          </div>
          <div className="bg-[#1E1519] border border-rose-500/20 rounded-lg p-3 text-left">
            <span className="text-[10px] text-rose-500 font-mono uppercase block">Risiko Tinggi (P x I ≥ 15)</span>
            <span className="text-lg font-bold text-rose-400 font-mono">{stats.high}</span>
          </div>
          <div className="bg-[#1F1B16] border border-amber-500/20 rounded-lg p-3 text-left">
            <span className="text-[10px] text-amber-500 font-mono uppercase block">Risiko Sedang (5 ≤ P x I ≤ 12)</span>
            <span className="text-lg font-bold text-amber-400 font-mono">{stats.medium}</span>
          </div>
          <div className="bg-[#121815] border border-emerald-500/20 rounded-lg p-3 text-left">
            <span className="text-[10px] text-emerald-500 font-mono uppercase block">Risiko Rendah (P x I ≤ 4)</span>
            <span className="text-lg font-bold text-emerald-400 font-mono">{stats.low}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Column: Interactive 5x5 Heatmap (4 cols) */}
        <div className="lg:col-span-4 p-5 border-r border-[#232731] bg-[#14171E]/30 flex flex-col items-center justify-center">
          <span className="text-xs font-bold text-gray-300 font-mono uppercase tracking-widest block mb-4 text-center">
            MATRIKS RISIKO 5x5 (ISO 31000)
          </span>

          <div className="flex w-full max-w-[280px] aspect-square flex-col">
            {/* 5 Rows for Impact (5 down to 1) */}
            {Array(5).fill(null).map((_, iIdx) => {
              const impactLevel = 5 - iIdx;
              return (
                <div key={iIdx} className="flex flex-1 items-stretch">
                  {/* Y-Axis Label (Impact) */}
                  <div className="w-6 flex items-center justify-center text-[10px] font-mono text-gray-400 font-bold">
                    {impactLevel}
                  </div>
                  {/* 5 Cells representing Probability (1 to 5) */}
                  {Array(5).fill(null).map((_, pIdx) => {
                    const probLevel = pIdx + 1;
                    const count = heatmapData[iIdx][pIdx];
                    const isSelected = selectedCell?.p === probLevel && selectedCell?.i === impactLevel;

                    return (
                      <button
                        key={pIdx}
                        onClick={() => {
                          if (isSelected) {
                            setSelectedCell(null);
                          } else {
                            setSelectedCell({ p: probLevel, i: impactLevel });
                          }
                        }}
                        className={`flex-1 border text-center transition flex flex-col items-center justify-center m-[2px] rounded ${getCellColor(
                          iIdx + 1,
                          probLevel,
                          isSelected
                        )}`}
                        id={`cell-p${probLevel}-i${impactLevel}`}
                      >
                        <span className="text-xs font-bold font-mono text-white leading-none">{count}</span>
                        <span className="text-[8px] text-gray-400 font-mono mt-0.5">P{probLevel}-I{impactLevel}</span>
                      </button>
                    );
                  })}
                </div>
              );
            })}
            {/* X-Axis Labels (Probability) */}
            <div className="flex h-6 mt-1">
              <div className="w-6" /> {/* spacer */}
              {Array(5).fill(null).map((_, pIdx) => (
                <div key={pIdx} className="flex-1 text-center text-[10px] font-mono text-gray-400 font-bold">
                  {pIdx + 1}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between w-full max-w-[280px] mt-4 text-[10px] text-gray-500 font-mono">
            <span>Sumbu X: PROBABILITY (P)</span>
            <span>Sumbu Y: IMPACT (I)</span>
          </div>
        </div>

        {/* Right Column: Searchable, Filterable & Expandable List (8 cols) */}
        <div className="lg:col-span-8 p-5 flex flex-col justify-between h-[480px]">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Cari kode risiko, deskripsi, mitigasi, atau pemilik..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-[#1A1E26] border border-[#232731] rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-mono"
                id="risk-search-input"
              />
            </div>

            <div className="relative">
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                className="bg-[#1A1E26] border border-[#232731] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-emerald-500 font-mono w-full sm:w-[160px]"
                id="risk-category-filter"
              >
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat === 'All' ? 'Semua Kategori' : cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Table / List Area */}
          <div className="flex-1 overflow-y-auto border border-[#232731] rounded-lg scrollbar-thin scrollbar-thumb-gray-800 bg-[#0E1014]">
            {filteredRisks.length === 0 ? (
              <div className="text-center py-12 text-gray-500 font-mono text-xs">
                Tidak ada risiko yang cocok dengan saringan filter ini. Klik reset di kanan atas untuk melihat semua.
              </div>
            ) : (
              <div className="divide-y divide-[#232731]">
                {filteredRisks.map(r => {
                  const score = r.probability * r.impact;
                  const isExpanded = expandedRiskId === r.id;
                  let scoreBadge = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
                  if (score >= 15) {
                    scoreBadge = 'bg-rose-500/10 text-rose-400 border-rose-500/20';
                  } else if (score >= 5) {
                    scoreBadge = 'bg-amber-500/10 text-amber-400 border-amber-500/20';
                  }

                  return (
                    <div key={r.id} className={`transition-all ${isExpanded ? 'bg-[#181C25]/50' : 'hover:bg-[#13161C]/50'}`}>
                      {/* Row Brief View */}
                      <div
                        onClick={() => setExpandedRiskId(isExpanded ? null : r.id)}
                        className="p-3 flex items-center justify-between gap-3 cursor-pointer text-left"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="text-[10px] font-mono text-gray-500 bg-[#1E222A] px-1.5 py-0.5 rounded border border-gray-800">
                            {r.id}
                          </span>
                          <span className="text-xs text-white font-medium truncate max-w-[280px] sm:max-w-[420px]">
                            {r.risk}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${scoreBadge}`}>
                            Score {score} (P{r.probability}xI{r.impact})
                          </span>
                        </div>
                      </div>

                      {/* Expandable detailed edit/sliders panel */}
                      {isExpanded && (
                        <div className="px-4 pb-4 pt-2 border-t border-[#1C202B] bg-[#10131A] text-left text-xs leading-relaxed font-mono">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1">Dampak Kegagalan Teknis</span>
                              <p className="text-gray-300 leading-normal">{r.risk}</p>
                              
                              <div className="mt-3 bg-[#161B24] border border-[#232731] p-2.5 rounded-lg">
                                <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider block mb-1 flex items-center gap-1">
                                  <Layers className="w-3 h-3" />
                                  Desain Mitigasi FEED Berkelanjutan
                                </span>
                                <p className="text-gray-400 text-[11px] leading-relaxed">{r.mitigation}</p>
                              </div>
                            </div>

                            <div className="flex flex-col gap-3">
                              {/* Sliders for Adjusting Values */}
                              <div className="bg-[#14171E] p-3 rounded-lg border border-[#232731]">
                                <span className="text-[9px] font-bold text-cyan-400 uppercase block mb-2">Simulasikan Dampak Mitigasi (P & I)</span>
                                
                                <div className="mb-2">
                                  <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                                    <span>Probability: {r.probability}</span>
                                    <span className="text-[9px] text-gray-500">AWPA Chemical Treatment / Sensor</span>
                                  </div>
                                  <input
                                    type="range"
                                    min="1"
                                    max="5"
                                    value={r.probability}
                                    onChange={e => updateRiskValue(r.id, 'probability', parseInt(e.target.value))}
                                    className="w-full accent-emerald-500 h-1 bg-gray-800 rounded-lg cursor-pointer"
                                  />
                                </div>

                                <div>
                                  <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                                    <span>Impact Level: {r.impact}</span>
                                    <span className="text-[9px] text-gray-500">Redundancy / Structural Anchor</span>
                                  </div>
                                  <input
                                    type="range"
                                    min="1"
                                    max="5"
                                    value={r.impact}
                                    onChange={e => updateRiskValue(r.id, 'impact', parseInt(e.target.value))}
                                    className="w-full accent-cyan-500 h-1 bg-gray-800 rounded-lg cursor-pointer"
                                  />
                                </div>
                              </div>

                              <div className="flex justify-between items-center text-[10px] text-gray-400">
                                <span className="flex items-center gap-1 text-gray-500">
                                  <User className="w-3.5 h-3.5" />
                                  RISK OWNER:
                                </span>
                                <span className="text-white font-medium">{r.owner}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Bottom Count indicator */}
          <div className="pt-3 border-t border-[#232731] mt-3 flex justify-between items-center text-[10px] font-mono text-gray-500">
            <span>Menampilkan {filteredRisks.length} dari {risks.length} Risiko Teridentifikasi</span>
            <span>Standar Penilaian Kualitatif ISO 31000 / ASCE-7</span>
          </div>
        </div>
      </div>
    </div>
  );
}
