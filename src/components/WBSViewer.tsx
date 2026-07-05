import React, { useState } from 'react';
import { wbsData } from '../data/wbsData';
import { WBSNode } from '../types';
import { Layers, Folder, FolderOpen, Tag, Plus, Minus, Search } from 'lucide-react';

export default function WBSViewer() {
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({
    "WBS-1.0": true,
    "WBS-1.1": true,
    "WBS-1.2": true,
    "WBS-1.3": false,
    "WBS-1.4": false,
    "WBS-1.5": false
  });
  const [selectedNode, setSelectedNode] = useState<WBSNode>(wbsData);
  const [searchQuery, setSearchQuery] = useState('');

  // Toggle node visibility
  const toggleNode = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedNodes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSelectNode = (node: WBSNode) => {
    setSelectedNode(node);
  };

  // Render tree node recursively
  const renderWBSNode = (node: WBSNode) => {
    const isExpanded = expandedNodes[node.id];
    const hasChildren = node.children && node.children.length > 0;
    const isSelected = selectedNode.id === node.id;

    // Check if node matches search query or has a child that does
    const matchesSearch = (n: WBSNode): boolean => {
      if (n.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          n.code.toLowerCase().includes(searchQuery.toLowerCase()) || 
          (n.description && n.description.toLowerCase().includes(searchQuery.toLowerCase()))) {
        return true;
      }
      if (n.children) {
        return n.children.some(child => matchesSearch(child));
      }
      return false;
    };

    if (searchQuery && !matchesSearch(node)) {
      return null;
    }

    // Determine indentation padding based on level
    const pl = node.level === 1 ? 'pl-0' : node.level === 2 ? 'pl-4' : node.level === 3 ? 'pl-8' : 'pl-12';

    return (
      <div key={node.id} className="flex flex-col">
        {/* Row element */}
        <div
          onClick={() => handleSelectNode(node)}
          className={`group flex items-center justify-between p-2 rounded-lg cursor-pointer transition text-left ${pl} ${
            isSelected 
              ? 'bg-[#1D212A] border-l-2 border-emerald-500 text-white' 
              : 'hover:bg-[#15181F] text-gray-300'
          }`}
        >
          <div className="flex items-center gap-2 min-w-0">
            {hasChildren ? (
              <button
                onClick={(e) => toggleNode(node.id, e)}
                className="p-1 hover:bg-[#20242D] rounded text-gray-500 hover:text-white transition"
              >
                {isExpanded ? <FolderOpen className="w-4 h-4 text-emerald-400" /> : <Folder className="w-4 h-4 text-cyan-400" />}
              </button>
            ) : (
              <div className="w-6 flex justify-center text-gray-600">
                <Tag className="w-3.5 h-3.5" />
              </div>
            )}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 min-w-0">
              <span className="font-mono text-xs text-gray-500 bg-[#14171E] px-1 py-0.5 rounded border border-gray-800">
                {node.code}
              </span>
              <span className="text-xs font-semibold truncate group-hover:text-emerald-400 transition">
                {node.title}
              </span>
            </div>
          </div>
          
          <span className="text-[9px] font-mono text-gray-600 bg-gray-900 px-1.5 py-0.5 rounded uppercase font-bold shrink-0">
            Level {node.level}
          </span>
        </div>

        {/* Child items */}
        {hasChildren && isExpanded && (
          <div className="flex flex-col mt-0.5 border-l border-gray-800 ml-5">
            {node.children?.map(child => renderWBSNode(child))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-[#111317] border border-[#232731] rounded-xl overflow-hidden shadow-xl font-sans" id="wbs-visualizer">
      <div className="bg-[#181B22] border-b border-[#232731] p-5">
        <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono mb-2">
          VOLUME N: WORK BREAKDOWN STRUCTURE (WBS TREE)
        </h3>
        <p className="text-xs text-gray-400">
          Hierarki pembagian paket kerja rekayasa multi-disiplin Neurosphere Flores dari inisiasi hingga utilitas sirkuler.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Column: Interactive Tree Explorer (7 cols) */}
        <div className="lg:col-span-7 p-5 border-r border-[#232731] flex flex-col gap-4">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Cari paket kerja berdasarkan kode atau nama..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-[#1A1E26] border border-[#232731] rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-mono"
              id="wbs-search-input"
            />
          </div>

          <div className="h-[360px] overflow-y-auto border border-[#232731] rounded-lg p-3 bg-[#0E1014] flex flex-col gap-1 scrollbar-thin scrollbar-thumb-gray-800">
            {renderWBSNode(wbsData)}
          </div>
        </div>

        {/* Right Column: Detailed Node Metadata Card (5 cols) */}
        <div className="lg:col-span-5 p-5 bg-[#14171E]/30 flex flex-col justify-between h-[420px]">
          <div className="text-left font-mono">
            <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest block mb-2">
              INFORMASI PAKET KERJA TERPILIH
            </span>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs bg-[#1E222A] text-white px-2 py-1 rounded border border-gray-800">
                {selectedNode.code}
              </span>
              <span className="text-[10px] text-gray-500 uppercase font-bold">
                Level {selectedNode.level} Element
              </span>
            </div>

            <h4 className="text-sm font-bold text-white mb-3">
              {selectedNode.title}
            </h4>

            {selectedNode.description ? (
              <div className="bg-[#0E1014] border border-[#232731] rounded-lg p-4 text-xs text-gray-400 leading-relaxed">
                <span className="text-[10px] text-gray-500 font-bold block mb-1">DESKRIPSI DELIVERABLE</span>
                {selectedNode.description}
              </div>
            ) : (
              <div className="text-xs text-gray-600 italic">Tidak ada deskripsi detail tambahan.</div>
            )}

            {/* Child deliverables brief list */}
            {selectedNode.children && selectedNode.children.length > 0 && (
              <div className="mt-4">
                <span className="text-[10px] text-gray-500 font-bold block mb-2">DAFTAR ANAK DELIVERABLES ({selectedNode.children.length})</span>
                <div className="flex flex-col gap-1.5 max-h-[140px] overflow-y-auto pr-1">
                  {selectedNode.children.map(child => (
                    <div
                      key={child.id}
                      onClick={() => handleSelectNode(child)}
                      className="flex items-center justify-between p-1.5 rounded bg-[#161B24] border border-[#232731] hover:border-emerald-500/50 cursor-pointer text-[10px] text-gray-400 font-mono transition"
                    >
                      <span className="truncate pr-2">{child.code}: {child.title}</span>
                      <span className="bg-gray-900 text-[8px] px-1 py-0.5 rounded uppercase font-bold text-gray-500">L{child.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-[#232731] pt-3 mt-4 text-[9px] text-gray-500 font-mono text-left leading-normal">
            *Setiap deliverables Level 4 memiliki pemilik tanggung jawab tunggal, alokasi biaya, estimasi durasi tetap, dan verifikasi acceptance criteria.
          </div>
        </div>
      </div>
    </div>
  );
}
