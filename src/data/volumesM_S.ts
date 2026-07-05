import { Volume } from '../types';

export const volumesM_S: Volume[] = [
  {
    id: "VOL-M",
    code: "M",
    title: "Implementation Roadmap",
    category: "Management & Phase Gates",
    description: "Rencana pentahapan pelaksanaan proyek dari konsep awal, studi kelayakan, pengerjaan Pre-FEED, FEED, Detailed Engineering, sertifikasi sertifikasi, hingga skala komersial penuh.",
    sections: [
      {
        title: "Pentahapan Gerbang Keputusan (Stage-Gate Process)",
        id: "stage-gate",
        content: "Proyek Neurosphere Flores dikembangkan melalui 6 gerbang keputusan teknis dan finansial yang ketat untuk mengendalikan eksposur risiko investasi:",
        subsections: [
          {
            title: "Tabel Linimasa Pentahapan Proyek",
            content: "Setiap fase harus lolos kriteria kelayakan teknis sebelum melangkah ke gerbang berikutnya:",
            table: [
              { Fase: "Fase 1: Konsep & Kelayakan Budaya", Durasi: "6 Bulan", Kriteria: "Lolos uji kelaikan adat Manggarai, penetapan tanah ulayat, sertifikasi awal kelayakan sosial" },
              { Fase: "Fase 2: Pre-FEED & FEED", Durasi: "9 Bulan", Kriteria: "Penyelesaian analisis pembebanan mekanis FEA, rancangan sensor serat optik FBG, persetujuan amdal" },
              { Fase: "Fase 3: Detailed Engineering (DED)", Durasi: "12 Bulan", Kriteria: "Gambar shop-drawing 3D tingkat detail, kontrak pengadaan bahan komposit, simulasi digital twin 95% cocok" },
              { Fase: "Fase 4: Fabrikasi & Konstruksi Prototipe", Durasi: "18 Bulan", Kriteria: "Konstruksi 1 unit percontohan Mbaru Niang modern, uji beban hidrolis langsung pilar bambu" },
              { Fase: "Fase 5: Pengujian & Sertifikasi", Durasi: "6 Bulan", Kriteria: "Lolos sertifikasi uji ketahanan api ASTM E84, uji kekedapan air, kalibrasi alarm sensor SHM" },
              { Fase: "Fase 6: Deployment & Komersialisasi", Durasi: "Kontinu", Kriteria: "Koneksi komersil microgrid, kedatangan wisman pertama, penyerahan tata kelola ke koperasi warga" }
            ]
          }
        ]
      },
      {
        title: "Strategi Skalabilitas Regional & Global",
        id: "scaling-strategy",
        content: "Setelah Fase 6 berhasil dieksekusi di Labuan Bajo, cetak biru (blueprint) fisik-kiber Neurosphere Flores akan dikemas ke dalam bentuk modul lisensi arsitektur digital. Strategi ekspansi meliputi:<br/>1. <b>Skala Regional (Nusa Tenggara):</b> Replikasi pemukiman regeneratif bambu di wilayah pesisir kering Sumba, Alor, dan Kupang menggunakan material bambu lokal setempat dengan perlakuan autoclave keliling.<br/>2. <b>Skala Global (Segitiga Terumbu Karang Dunia):</b> Ekspor lisensi desain prefabrikasi modular ke kepulauan pasifik dan kawasan pesisir Asia Tenggara yang memiliki tantangan kerentanan iklim yang setara (misal: Filipina, Kepulauan Solomon, Fiji)."
      }
    ]
  },
  {
    id: "VOL-N",
    code: "N",
    title: "Work Breakdown Structure Overview",
    category: "Management & Phase Gates",
    description: "Metodologi pembagian paket kerja proyek (WBS) hingga Level 4 untuk menjamin kontrol kualitas pengerjaan dan akurasi pelacakan biaya.",
    sections: [
      {
        title: "Metodologi Penomoran & Kode WBS",
        id: "wbs-method",
        content: "Penomoran Work Breakdown Structure (WBS) menggunakan standar sistematis untuk memfasilitasi pelacakan kemajuan pengerjaan (progress tracking) dan pembebanan anggaran biaya (Cost Breakdown Structure) di dalam sistem Enterprise Resource Planning (ERP) proyek:<br/><br/>- <b>Level 1 (NSP-1.0):</b> Mewakili portofolio proyek keseluruhan.<br/>- <b>Level 2 (NSP-1.X):</b> Mewakili divisi multidisplin utama (Inisiasi, Material, Sipil, Smart City, Utilitas).<br/>- <b>Level 3 (NSP-1.X.Y):</b> Mewakili sub-sistem atau area geografis pengerjaan fisik khusus.<br/>- <b>Level 4 (NSP-1.X.Y.Z):</b> Mewakili paket kerja terkecil yang dapat dinilai (deliverable work package), memiliki pemilik tanggung jawab tunggal, anggaran biaya tetap, dan kriteria penerimaan teknis yang kaku."
      }
    ]
  },
  {
    id: "VOL-O",
    code: "O",
    title: "Bill of Material Strategy",
    category: "Management & Phase Gates",
    description: "Pendekatan rantai pasok material berkelanjutan (BOM) untuk menjamin kualitas mekanis bahan komposit bambu dan redundansi bahan baku.",
    sections: [
      {
        title: "Strategi Rantai Pasok Hijau",
        id: "bom-supply-chain",
        content: "Rantai pasokan material mengutamakan material sirkuler dengan kandungan karbon terwujud (embodied carbon) serendah mungkin:<br/><br/>1. <b>Bambu Petung (Dendrocalamus asper):</b> Dipanen langsung dari hutan rakyat daratan Flores (Manggarai, Ngada, Ende) untuk meminimalkan emisi transportasi darat. Pengambilan hanya dilakukan pada batang berumur minimal 3 tahun dengan diameter dinding minimal 12mm.<br/>2. <b>Bahan Pengawet Boron:</b> Diperoleh secara domestik untuk mengurangi ketergantungan impor.<br/>3. <b>Bio-Resin Matriks:</b> Pengadaan resin berbasis ampas kelapa sawit dalam negeri dikembangkan sebagai alternatif resin epoksi minyak bumi konvensional."
      }
    ]
  },
  {
    id: "VOL-P",
    code: "P",
    title: "Cost Engineering & Financials",
    category: "Requirements & Traceability",
    description: "Estimasi biaya modal (CAPEX), operasional harian (OPEX), biaya siklus hidup penuh (LCC), analisis sensitivitas keuangan, dan ketidakpastian anggaran berdasarkan kelas AACE.",
    sections: [
      {
        title: "Analisis Anggaran CAPEX & OPEX",
        id: "capex-opex-analysis",
        content: "Perhitungan kelayakan ekonomi didasarkan pada tingkat pengembalian investasi (ROI) jangka panjang dengan memperhitungkan potensi carbon credit:",
        subsections: [
          {
            title: "Struktur Rincian Biaya Proyek (Cost Breakdown Structure)",
            content: "Anggaran diklasifikasikan menggunakan standar AACE Class 3 (estimasi anggaran pelaksanaan):",
            table: [
              { Kategori: "CAPEX: Material Komposit & Fabrikasi", "Biaya (USD)": "956,600", Keterangan: "Pengadaan bambu, bio-resin, carbon wrap, cetakan autoclave" },
              { Kategori: "CAPEX: Marine & Civil Engineering", "Biaya (USD)": "458,000", Keterangan: "Tiang pancang mikro komposit lepas pantai, anoda perlindungan, perakitan Mbaru Niang" },
              { Kategori: "CAPEX: Jaringan Sensor SHM & IoT", "Biaya (USD)": "138,750", Keterangan: "Interrogator FBG optik, kabel serat optik, akselerometer MEMS, gateway" },
              { Kategori: "CAPEX: Utilitas Hibrida (BESS, Solar PV, RO)", "Biaya (USD)": "947,000", Keterangan: "BESS LFP 2.4 MWh, 660 kWp Solar PV, Containerized RO, Bioreaktor" },
              { Kategori: "CAPEX: Contingency (Dana Cadangan Risiko)", "Biaya (USD)": "250,000", Keterangan: "Alokasi dana tak terduga ketidakpastian cuaca pelayaran Selat Sape" },
              { Kategori: "OPEX: Perawatan Tahunan & Kalibrasi Sensor", "Biaya (USD)/Tahun": "45,000", Keterangan: "Pembersihan membran RO, kalibrasi instrumen optik, pembersihan teritip turbin" }
            ]
          }
        ]
      },
      {
        title: "Biaya Siklus Hidup & ROI (Life Cycle Costing - LCC)",
        id: "lifecycle-cost-analysis",
        content: "<b>1. Nilai Sekarang Bersih (NPV) & Laju Pengembalian Internal (IRR):</b><br/>Dengan asumsi tarif hunian pariwisata ekologis sebesar 72% sepanjang tahun dan pendapatan sampingan dari sertifikasi ekologi internasional, diperoleh parameter keuangan sebagai berikut:<br/>- <b>Total Investasi Awal (Total CAPEX):</b> USD 2,750,350<br/>- <b>NPV (Discount rate 8%):</b> USD 1,420,000<br/>- <b>IRR (Internal Rate of Return):</b> 14.8%<br/>- <b>Payback Period (Periode Pengembalian):</b> 6.8 Tahun<br/><br/><b>2. Analisis Sensitivitas Keuangan (Sensitivity Analysis):</b><br/>- Jika harga bahan baku serat karbon naik 30%, NPV menurun sebesar 2.1%. Proyek tetap layak.<br/>- Jika tingkat kunjungan wisatawan turun 20% akibat krisis penerbangan global, Payback Period mundur menjadi 8.2 tahun, namun IRR tetap positif di atas inflasi."
      }
    ]
  },
  {
    id: "VOL-Q",
    code: "Q",
    title: "Risk Register Overview",
    category: "Management & Phase Gates",
    description: "Ringkasan sebaran 150 risiko teknis dan operasional yang telah dipetakan di seluruh subsistem dengan strategi mitigasi.",
    sections: [
      {
        title: "Metodologi Penilaian Risiko Matriks",
        id: "risk-methodology",
        content: "Seluruh risiko dinilai menggunakan matriks risiko kualitatif berukuran 5x5 sesuai standar ISO 31000:<br/><br/>- <b>Probability (Peluang Kejadian):</b> 1 (Sangat Jarang) hingga 5 (Sangat Sering).<br/>- <b>Impact (Dampak Keparahan):</b> 1 (Sangat Kecil) hingga 5 (Bencana Struktural / Fatal).<br/>- <b>Risk Score (P x I):</b><br/>  - <i>Skor 1 - 4:</i> Risiko RENDAH (Toleransi penuh).<br/>  - <i>Skor 5 - 12:</i> Risiko SEDANG (Memerlukan pemantauan berkala).<br/>  - <i>Skor 15 - 25:</i> Risiko TINGGI (Wajib memiliki mitigasi rekayasa fisik konkrit sebelum pengerjaan dimulai)."
      }
    ]
  },
  {
    id: "VOL-R",
    code: "R",
    title: "Verification & Validation Testing",
    category: "Requirements & Traceability",
    description: "Prosedur pengetesan kelayakan sistem (V&V) dari uji laboratorium material, pengujian perakitan di lapangan, hingga monitoring jangka panjang.",
    sections: [
      {
        title: "Matriks Verifikasi & Validasi (V&V Matrix)",
        id: "vv-matrix-section",
        content: "Prosedur V&V memastikan setiap komponen memenuhi persyaratan teknis yang tertuang dalam Volume B:",
        subsections: [
          {
            title: "Daftar Matriks Kriteria Penerimaan Sistem",
            content: "Setiap pengujian diverifikasi menggunakan metode tervalidasi:",
            table: [
              { ID: "REQ-FR-001 (Struktur)", "Metode Verifikasi": "Analisis FEA & Uji Laboratorium Hidrolis", "Kriteria Penerimaan": "Balok bambu scrimber menahan beban lentur >120 MPa tanpa retak geser" },
              { ID: "REQ-FR-002 (SHM)", "Metode Verifikasi": "Demonstrasi & Kalibrasi Beban Diketahui", "Kriteria Penerimaan": "Sinyal demodulator optik FBG menangkap perubahan beban beban linier regangan" },
              { ID: "REQ-FR-003 (Energi)", "Metode Verifikasi": "Tes Simulasi Pemutusan Daya Fisik", "Kriteria Penerimaan": "Inverter grid-forming stabil menjaga tegangan grid dalam 15 milidetik pasca-islanding" },
              { ID: "REQ-FR-004 (Water)", "Metode Verifikasi": "Inspeksi Debit Aliran Air Bersih", "Kriteria Penerimaan": "Debit aliran keluaran desalinasi air minum stabil >6.25 m³/jam kontinu" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "VOL-S",
    code: "S",
    title: "Certification & Standards",
    category: "General & Governance",
    description: "Daftar standar internasional dan nasional (SNI) yang wajib diikuti dalam proses desain, pengujian material, konstruksi kelautan, dan tata kelola siber.",
    sections: [
      {
        title: "Daftar Standar Rekayasa Acuan",
        id: "standards-acronyms",
        content: "Untuk menjamin kelaikan teknis di mata lembaga sertifikasi asuransi internasional, seluruh rancangan multidisplin wajib mematuhi standar terakreditasi berikut:",
        subsections: [
          {
            title: "Tabel Standar Acuan per Divisi Multidisiplin",
            content: "Setiap subsistem dirancang mengacu pada standar global:",
            table: [
              { Divisi: "Struktur Bambu Rekayasa", "Standard Utama": "ISO 22156:2021 (Bamboo structures - Determination of physical and mechanical properties)", Standar: "SNI 7973:2013 (Spesifikasi Desain untuk Konstruksi Kayu/Bambu)" },
              { Divisi: "Proteksi Kebakaran", "Standard Utama": "NFPA 13 (Standard for the Installation of Sprinkler Systems)", Standar: "NFPA 101 (Life Safety Code)" },
              { Divisi: "Sistem Sensor FBG & IoT", "Standard Utama": "IEEE 1451 (Standard for a Smart Transducer Interface for Sensors)", Standar: "ISO/IEC 27001 (Information Security Management)" },
              { Divisi: "Mikrogrid Elektrik", "Standard Utama": "IEC 61850 (Communication networks and systems for power utility automation)", Standar: "IEEE 1547 (Standard for Interconnection and Interoperability of Distributed Energy Resources)" },
              { Divisi: "Konstruksi Kelautan", "Standard Utama": "ASCE 7 (Minimum Design Loads and Associated Criteria for Buildings)", Standar: "Eurocode 3 (Design of steel structures - Marine applications)" }
            ]
          }
        ]
      }
    ]
  }
];
