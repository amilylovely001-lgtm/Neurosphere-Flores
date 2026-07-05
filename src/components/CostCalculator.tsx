import React, { useState, useMemo } from 'react';
import { bomData as initialBOM } from '../data/bomData';
import { DollarSign, Percent, TrendingUp, Shield, BarChart2, Briefcase, ChevronRight } from 'lucide-react';

export default function CostCalculator() {
  // Financial sliders state
  const [occupancyRate, setOccupancyRate] = useState<number>(72); // %
  const [solarMultiplier, setSolarMultiplier] = useState<number>(1.0); // coeff
  const [carbonPrice, setCarbonPrice] = useState<number>(45); // USD per ton of CO2
  const [contingencyBuffer, setContingencyBuffer] = useState<number>(250000); // USD

  // BOM Filtering State
  const [selectedBOMCategory, setSelectedBOMCategory] = useState<string>('All');

  // Categories list for BOM
  const bomCategories = useMemo(() => {
    const list = new Set(initialBOM.map(item => item.category));
    return ['All', ...Array.from(list)];
  }, []);

  // Filtered BOM
  const filteredBOM = useMemo(() => {
    return initialBOM.filter(item => selectedBOMCategory === 'All' || item.category === selectedBOMCategory);
  }, [selectedBOMCategory]);

  // Dynamically calculate CAPEX based on base BOM + contingency buffer
  const financialMetrics = useMemo(() => {
    const baseBOMTotal = initialBOM.reduce((sum, item) => sum + item.amount, 0);
    const totalCAPEX = baseBOMTotal + contingencyBuffer;

    // Base revenues
    const baseHorticultureRevenue = 15000; // USD/year
    const basePariwisataRevenue = 380000 * (occupancyRate / 100); // USD/year based on occupancy
    const baseCarbonOffsets = 3120 * (carbonPrice / 1000); // USD/year (CO2 sequestered * price per kg)
    const baseSolarExcessSavings = 42000 * solarMultiplier; // USD/year saved on desalinization/fuels

    const totalRevenue = baseHorticultureRevenue + basePariwisataRevenue + baseCarbonOffsets + baseSolarExcessSavings;

    // OPEX (Base maintenance + variable occupancy costs)
    const baseOPEX = 45000;
    const variableOPEX = 12000 * (occupancyRate / 100);
    const totalOPEX = baseOPEX + variableOPEX;

    // Annual Net Cash Flow
    const annualNetCashFlow = totalRevenue - totalOPEX;

    // Calculate Payback Period
    const paybackPeriod = totalCAPEX / annualNetCashFlow;

    // Simple NPV (10 years, discount rate of 8%)
    const r = 0.08;
    let npv = -totalCAPEX;
    for (let year = 1; year <= 10; year++) {
      npv += annualNetCashFlow / Math.pow(1 + r, year);
    }

    // Estimate IRR (Iterative approximation)
    let irr = 0.05;
    for (let step = 0; step < 100; step++) {
      let tempNPV = -totalCAPEX;
      for (let year = 1; year <= 10; year++) {
        tempNPV += annualNetCashFlow / Math.pow(1 + irr, year);
      }
      if (Math.abs(tempNPV) < 100) break;
      irr += tempNPV > 0 ? 0.005 : -0.005;
    }

    return {
      totalCAPEX,
      totalOPEX,
      totalRevenue,
      annualNetCashFlow,
      paybackPeriod: parseFloat(Math.max(1, paybackPeriod).toFixed(1)),
      npv: Math.round(npv),
      irr: parseFloat((irr * 100).toFixed(1))
    };
  }, [occupancyRate, solarMultiplier, carbonPrice, contingencyBuffer]);

  return (
    <div className="bg-[#111317] border border-[#232731] rounded-xl overflow-hidden shadow-xl font-sans" id="cost-calculator-section">
      <div className="bg-[#181B22] border-b border-[#232731] p-5 text-left">
        <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono mb-2">
          VOLUME O & P: COST ENGINEERING & BILL OF MATERIAL
        </h3>
        <p className="text-xs text-gray-400">
          Uji sensitivitas kelayakan investasi LCC (Life Cycle Costing) dan rincian material komposit bambu struktural secara waktu nyata.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Left Column: Interactive LCC Calculators & Sliders (5 cols) */}
        <div className="lg:col-span-5 p-5 border-r border-[#232731] bg-[#14171E]/30 flex flex-col gap-5 text-left">
          <span className="text-xs font-bold text-gray-300 font-mono uppercase tracking-widest block mb-1">
            INPUT VARIABEL KEUANGAN (LCC)
          </span>

          {/* Slider 1: Occupancy Rate */}
          <div className="bg-[#1A1E26] p-3 rounded-lg border border-[#232731] font-mono text-xs">
            <div className="flex justify-between text-gray-300 mb-1">
              <span className="flex items-center gap-1.5">
                <Percent className="w-3.5 h-3.5 text-emerald-400" />
                Okupansi Hunian Wisata
              </span>
              <span className="font-bold text-emerald-400">{occupancyRate}%</span>
            </div>
            <input
              type="range"
              min="30"
              max="100"
              value={occupancyRate}
              onChange={e => setOccupancyRate(parseInt(e.target.value))}
              className="w-full accent-emerald-500 h-1 bg-gray-800 rounded-lg cursor-pointer"
              id="slider-occupancy"
            />
            <span className="text-[10px] text-gray-500 block mt-1">Rentang okupansi pariwisata ekologis harian.</span>
          </div>

          {/* Slider 2: Carbon Credit price */}
          <div className="bg-[#1A1E26] p-3 rounded-lg border border-[#232731] font-mono text-xs">
            <div className="flex justify-between text-gray-300 mb-1">
              <span className="flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                Harga Kredit Karbon (CO2)
              </span>
              <span className="font-bold text-cyan-400">${carbonPrice}/Ton</span>
            </div>
            <input
              type="range"
              min="10"
              max="150"
              value={carbonPrice}
              onChange={e => setCarbonPrice(parseInt(e.target.value))}
              className="w-full accent-cyan-500 h-1 bg-gray-800 rounded-lg cursor-pointer"
              id="slider-carbon-price"
            />
            <span className="text-[10px] text-gray-500 block mt-1">Harga karbon terverifikasi Verra/Gold Standard.</span>
          </div>

          {/* Slider 3: Contingency Buffer */}
          <div className="bg-[#1A1E26] p-3 rounded-lg border border-[#232731] font-mono text-xs">
            <div className="flex justify-between text-gray-300 mb-1">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                Dana Cadangan Risiko
              </span>
              <span className="font-bold text-amber-400">${contingencyBuffer.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="50000"
              max="500000"
              step="10000"
              value={contingencyBuffer}
              onChange={e => setContingencyBuffer(parseInt(e.target.value))}
              className="w-full accent-amber-500 h-1 bg-gray-800 rounded-lg cursor-pointer"
              id="slider-contingency"
            />
            <span className="text-[10px] text-gray-500 block mt-1">Alokasi tak terduga keterlambatan logistik maritim.</span>
          </div>

          {/* Outputs Panel */}
          <div className="border-t border-[#232731] pt-4 mt-1">
            <span className="text-xs font-bold text-gray-300 font-mono uppercase tracking-widest block mb-3">
              PARAMETER KELAYAKAN INVESTASI
            </span>
            <div className="grid grid-cols-3 gap-2 font-mono">
              <div className="bg-[#0E1014] border border-[#232731] rounded-lg p-2.5 text-center">
                <span className="text-[8px] text-gray-500 uppercase block mb-1">CAPEX Total</span>
                <span className="text-xs font-bold text-white">${financialMetrics.totalCAPEX.toLocaleString()}</span>
              </div>
              <div className="bg-[#0E1014] border border-[#232731] rounded-lg p-2.5 text-center">
                <span className="text-[8px] text-gray-500 uppercase block mb-1">NPV (10Y, 8%)</span>
                <span className={`text-xs font-bold ${financialMetrics.npv >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  ${financialMetrics.npv.toLocaleString()}
                </span>
              </div>
              <div className="bg-[#0E1014] border border-[#232731] rounded-lg p-2.5 text-center">
                <span className="text-[8px] text-gray-500 uppercase block mb-1">IRR Estimasi</span>
                <span className="text-xs font-bold text-cyan-400">{financialMetrics.irr}%</span>
              </div>
            </div>

            <div className="bg-[#1A2321] border border-emerald-500/10 rounded-lg p-3 mt-3 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-emerald-400" />
                <span className="text-gray-300">Payback Period (PBP):</span>
              </div>
              <span className="font-bold text-emerald-400 text-sm">{financialMetrics.paybackPeriod} Tahun</span>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Bill of Materials (BOM) Section (7 cols) */}
        <div className="lg:col-span-7 p-5 flex flex-col justify-between h-[480px] text-left">
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
              <span className="text-xs font-bold text-gray-300 font-mono uppercase tracking-widest block">
                DAFTAR HARGA MATERIAL UTAMA (BOM)
              </span>

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedBOMCategory}
                  onChange={e => setSelectedBOMCategory(e.target.value)}
                  className="bg-[#1A1E26] border border-[#232731] rounded-lg px-2.5 py-1 text-[11px] text-white focus:outline-none focus:ring-1 focus:ring-emerald-500 font-mono"
                  id="bom-category-select"
                >
                  {bomCategories.map((cat, idx) => (
                    <option key={idx} value={cat}>
                      {cat === 'All' ? 'Semua Kategori BOM' : cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Scrollable BOM Table */}
            <div className="overflow-y-auto border border-[#232731] rounded-lg h-[340px] bg-[#0E1014] scrollbar-thin scrollbar-thumb-gray-800">
              <table className="w-full text-left border-collapse font-mono text-[10px]">
                <thead className="bg-[#181B22] text-gray-400 sticky top-0 border-b border-[#232731]">
                  <tr>
                    <th className="p-2 w-12 text-center">ID</th>
                    <th className="p-2">Material / Alat</th>
                    <th className="p-2 hidden sm:table-cell">Spesifikasi Teknik</th>
                    <th className="p-2 text-right">Harga (USD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#232731] text-gray-300">
                  {filteredBOM.map(item => (
                    <tr key={item.id} className="hover:bg-[#13161C]/50 transition">
                      <td className="p-2 text-center text-gray-500 font-bold">{item.id}</td>
                      <td className="p-2">
                        <span className="font-semibold text-white block">{item.material}</span>
                        <span className="text-[8px] text-gray-500 block sm:hidden">{item.specification}</span>
                      </td>
                      <td className="p-2 hidden sm:table-cell text-gray-400 max-w-[200px] truncate">
                        {item.specification}
                      </td>
                      <td className="p-2 text-right font-bold text-emerald-400">
                        ${item.amount.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Aggregated Total */}
          <div className="pt-3 border-t border-[#232731] mt-3 flex justify-between items-center font-mono text-xs">
            <span className="text-gray-500">Subtotal Terfilter ({filteredBOM.length} Items):</span>
            <span className="text-sm font-bold text-white">
              ${filteredBOM.reduce((sum, item) => sum + item.amount, 0).toLocaleString()}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
