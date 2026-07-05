import React, { useState, useMemo } from 'react';
import { allVolumes } from '../data/volumes';
import { Volume, VolumeSection } from '../types';
import { Search, Bookmark, BookmarkCheck, BookOpen, ChevronRight, Hash, Eye, Tag } from 'lucide-react';

export default function VolumeViewer() {
  const [selectedVolumeId, setSelectedVolumeId] = useState<string>("VOL-A");
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [bookmarkedSections, setBookmarkedSections] = useState<string[]>([]); // Section IDs

  // List of unique categories
  const categories = useMemo(() => {
    const list = new Set(allVolumes.map(v => v.category));
    return ['All', ...Array.from(list)];
  }, []);

  // Filter volumes list based on search or category
  const filteredVolumes = useMemo(() => {
    return allVolumes.filter(v => {
      const matchesCategory = selectedCategory === 'All' || v.category === selectedCategory;
      const matchesSearch = 
        v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.sections.some(s => 
          s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.content.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Retrieve current active volume
  const activeVolume = useMemo(() => {
    return allVolumes.find(v => v.id === selectedVolumeId) || allVolumes[0];
  }, [selectedVolumeId]);

  // Toggle bookmark
  const toggleBookmark = (sectionId: string) => {
    setBookmarkedSections(prev => {
      if (prev.includes(sectionId)) {
        return prev.filter(id => id !== sectionId);
      } else {
        return [...prev, sectionId];
      }
    });
  };

  return (
    <div className="bg-[#111317] border border-[#232731] rounded-xl overflow-hidden shadow-xl font-sans" id="volume-reader-portal">
      {/* Search & Category Filter bar */}
      <div className="bg-[#181B22] border-b border-[#232731] p-4 flex flex-col md:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Cari kata kunci dalam 19 Volume FEED (misal: 'scrimber', 'GOOSE', 'FSC')..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-[#1A1E26] border border-[#232731] rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-mono"
            id="volume-global-search"
          />
        </div>

        <div className="flex gap-2">
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="bg-[#1A1E26] border border-[#232731] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-emerald-500 font-mono w-full md:w-[180px]"
            id="volume-category-select"
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat === 'All' ? 'Semua Kategori' : cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        
        {/* Left Column: List of Volumes (4 cols) */}
        <div className="md:col-span-4 border-r border-[#232731] h-[580px] overflow-y-auto bg-[#14171E]/30 divide-y divide-[#1D212B] scrollbar-thin scrollbar-thumb-gray-800">
          {filteredVolumes.length === 0 ? (
            <div className="p-8 text-center text-gray-500 font-mono text-xs">
              Tidak ada Volume yang cocok dengan kata kunci pencarian.
            </div>
          ) : (
            filteredVolumes.map(v => (
              <button
                key={v.id}
                onClick={() => setSelectedVolumeId(v.id)}
                className={`w-full p-4 text-left transition flex flex-col gap-1.5 ${
                  selectedVolumeId === v.id
                    ? 'bg-[#1D212A] border-l-3 border-emerald-500 text-white'
                    : 'hover:bg-[#15181F] text-gray-300'
                }`}
                id={`sidebar-volume-${v.code}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-[#12141B] px-1.5 py-0.5 rounded border border-gray-800">
                    VOLUME {v.code}
                  </span>
                  <span className="text-[9px] font-mono text-gray-500 uppercase flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {v.category}
                  </span>
                </div>
                <h4 className="text-xs font-bold leading-normal">{v.title}</h4>
                <p className="text-[10px] text-gray-400 line-clamp-2 leading-relaxed">{v.description}</p>
              </button>
            ))
          )}
        </div>

        {/* Right Column: Detailed Volume Reader Panel (8 cols) */}
        <div className="md:col-span-8 p-6 h-[580px] overflow-y-auto bg-[#0E1014] text-left scrollbar-thin scrollbar-thumb-gray-800 flex flex-col justify-between">
          <div>
            {/* Header section with active Volume info */}
            <div className="border-b border-[#232731] pb-4 mb-5">
              <span className="text-[10px] font-bold font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                SISTEM FEED NASIONAL / INTERNASIONAL
              </span>
              <h2 className="text-base font-bold text-white mb-2">
                Volume {activeVolume.code}: {activeVolume.title}
              </h2>
              <p className="text-xs text-gray-400 leading-relaxed font-mono">
                {activeVolume.description}
              </p>
            </div>

            {/* Dynamic sections render */}
            <div className="flex flex-col gap-6">
              {activeVolume.sections.map((section, sIdx) => (
                <div key={sIdx} className="border border-[#232731] rounded-lg p-5 bg-[#14171E]/40" id={`section-${section.id}`}>
                  
                  {/* Title of Section + Bookmark button */}
                  <div className="flex justify-between items-center border-b border-[#20242E] pb-2 mb-4">
                    <h3 className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-emerald-400" />
                      {section.title}
                    </h3>
                    
                    <button
                      onClick={() => toggleBookmark(section.id)}
                      className="p-1 text-gray-500 hover:text-white transition"
                      title={bookmarkedSections.includes(section.id) ? 'Hapus penanda' : 'Tandai bagian ini'}
                    >
                      {bookmarkedSections.includes(section.id) ? (
                        <BookmarkCheck className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Primary text content */}
                  <div
                    className="text-xs text-gray-300 leading-relaxed font-mono"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />

                  {/* Render subsections if any */}
                  {section.subsections?.map((sub, subIdx) => (
                    <div key={subIdx} className="mt-5 pt-4 border-t border-[#1C202B]">
                      <h4 className="text-[11px] font-bold text-emerald-300 font-mono mb-2 flex items-center gap-1">
                        <ChevronRight className="w-3.5 h-3.5" />
                        {sub.title}
                      </h4>

                      <div
                        className="text-xs text-gray-400 leading-relaxed font-mono"
                        dangerouslySetInnerHTML={{ __html: sub.content }}
                      />

                      {/* Display ASCII Diagrams */}
                      {sub.diagram && (
                        <pre className="bg-[#0A0B0E] text-emerald-400 p-4 rounded-lg text-[9px] font-mono overflow-x-auto leading-relaxed border border-[#1E222C] mt-3 select-all">
                          {sub.diagram}
                        </pre>
                      )}

                      {/* Display structured tables */}
                      {sub.table && (
                        <div className="overflow-x-auto border border-[#232731] rounded-lg mt-3 bg-[#0C0D11]">
                          <table className="w-full text-left border-collapse font-mono text-[9px]">
                            <thead className="bg-[#15171F] text-gray-400 border-b border-[#232731]">
                              <tr>
                                {Object.keys(sub.table[0]).map((key, kIdx) => (
                                  <th key={kIdx} className="p-2 uppercase font-bold tracking-wider">{key}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#1F232D] text-gray-300">
                              {sub.table.map((row, rIdx) => (
                                <tr key={rIdx} className="hover:bg-[#13161D]/50 transition">
                                  {Object.values(row).map((val, vIdx) => (
                                    <td key={vIdx} className="p-2">{val}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                    </div>
                  ))}

                </div>
              ))}
            </div>
          </div>

          {/* Footnotes */}
          <div className="pt-4 border-t border-[#232731] mt-8 text-[9px] text-gray-600 font-mono flex flex-col sm:flex-row justify-between gap-2">
            <span>SISTEM DOKUMENTASI TERVERIFIKASI FEED v1.0</span>
            <span>PROYEK NEUROSPHERE FLORES - TAHUN REKAYASA 2026</span>
          </div>
        </div>

      </div>
    </div>
  );
}
