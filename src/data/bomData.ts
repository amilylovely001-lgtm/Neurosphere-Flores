import { BOMItem } from '../types';

export const bomData: BOMItem[] = [
  // CATEGORY: Structure
  {
    id: "BOM-001",
    category: "Structure",
    material: "Engineered Bamboo Scrimber (Dendrocalamus asper)",
    specification: "Densitas >1.15 g/cm³, MOR >150 MPa, MOE >15 GPa, perlakuan boron AWPA",
    unit: "m³",
    qty: 450,
    rate: 1200,
    amount: 540000,
    vendorCategory: "Produsen Komposit Bambu Domestik",
    alternative: "Laminated Bamboo (Dendrocalamus asper) - Kekuatan geser lateral sedikit lebih rendah"
  },
  {
    id: "BOM-002",
    category: "Structure",
    material: "Laminated Bamboo Beams & Columns",
    specification: "3-layer vertical lamination, MOR >80 MPa, MOE >12 GPa, lem bio-polyurethane",
    unit: "m³",
    qty: 320,
    rate: 950,
    amount: 304000,
    vendorCategory: "Fabrikator Kayu & Bambu Laminasi Regional",
    alternative: "Laminated Glulam Pine Wood (Impor) - Lebih rentan terhadap rayap pantai Flores"
  },
  {
    id: "BOM-003",
    category: "Structure",
    material: "Carbon Fiber Reinforcement Sheet (Carbon Wrap)",
    specification: "Tipe Unidirectional CF, Tensile Strength 4900 MPa, kerapatan 300 g/m²",
    unit: "m²",
    qty: 1800,
    rate: 35,
    amount: 63000,
    vendorCategory: "Pemasok Material Komposit Tingkat Tinggi",
    alternative: "Basalt Fiber Wrap - Lebih ramah lingkungan, kekuatan tarik 30% lebih rendah"
  },
  {
    id: "BOM-004",
    category: "Structure",
    material: "Structural Bio-Epoxy Resin Matrix",
    specification: "65% Bio-content, viskositas rendah untuk vacuum infusion, anti-UV stabil",
    unit: "kg",
    qty: 2400,
    rate: 18,
    amount: 43200,
    vendorCategory: "Distributor Bahan Kimia Hijau Internasional",
    alternative: "Polyester Resin anti-UV konvensional - Emisi VOC tinggi, tidak sirkuler"
  },
  {
    id: "BOM-005",
    category: "Structure",
    material: "High-Strength Connection Pins & Bolts",
    specification: "Baja Tahan Karat Grade 316L (SS316L), diameter 16-24mm dengan ring isolasi nilon",
    unit: "Pcs",
    qty: 8500,
    rate: 8,
    amount: 68000,
    vendorCategory: "Pemasok Suku Cadang Kelautan & Korosi",
    alternative: "Hot-Dip Galvanized Steel Grade 8.8 - Harus dicat epoksi berkala anti-karat"
  },

  // CATEGORY: Foundation
  {
    id: "BOM-006",
    category: "Foundation",
    material: "Bamboo-Beton Composite Micropiles",
    specification: "Tiang pancang gesekan mini berdiameter 250mm, selongsong bambu scrimber diisi beton prategang",
    unit: "m",
    qty: 1500,
    rate: 110,
    amount: 165000,
    vendorCategory: "Kontraktor Rekayasa Geoteknik Khusus",
    alternative: "Spun Pile Beton Pratekan Standard - Bobot berat memicu kerusakan karang pantai"
  },
  {
    id: "BOM-007",
    category: "Foundation",
    material: "Sacrificial Zinc Anodes for Cathodic Protection",
    specification: "Standard ASTM B418 Type I, berat 12 kg per blok, kabel interkoneksi tembaga",
    unit: "Pcs",
    qty: 120,
    rate: 140,
    amount: 16800,
    vendorCategory: "Pemasok Sistem Proteksi Korosi Kelautan",
    alternative: "Aluminium-Indium sacrificial anode - Efisiensi berbeda di air payau estuari"
  },

  // CATEGORY: Envelope
  {
    id: "BOM-008",
    category: "Envelope",
    material: "Hydrophobic Bamboo-Fiber Woven Roofing (Atap Anyaman)",
    specification: "Lapisan anyaman serat bambu kasar terkompresi dengan membran tahan air silikon tipis",
    unit: "m²",
    qty: 3500,
    rate: 22,
    amount: 77000,
    vendorCategory: "Koperasi Pengrajin & Industri Kecil Menengah Flores",
    alternative: "Atap Ilalang Tradisional Murni - Harus diganti setiap 4-6 tahun akibat busuk hujan"
  },
  {
    id: "BOM-009",
    category: "Envelope",
    material: "Double Glazed Low-E Glass Windows",
    specification: "Argon-filled, U-value <1.6 W/m²K, SHGC <0.35, tebal 6mm+12Argon+6mm",
    unit: "m²",
    qty: 480,
    rate: 180,
    amount: 86400,
    vendorCategory: "Pabrikan Kaca Arsitektural Presisi",
    alternative: "Single Glazed Tempered Glass - Konsumsi energi pendinginan ruang (HVAC) melonjak"
  },

  // CATEGORY: IoT & Monitoring
  {
    id: "BOM-010",
    category: "IoT & Monitoring",
    material: "Fiber Bragg Grating (FBG) Optical Sensor Cable",
    specification: "Serat optik lapis pelindung baja kapiler, jarak kisi 1.5m, resolusi regangan 1 microstrain",
    unit: "m",
    qty: 3000,
    rate: 25,
    amount: 75000,
    vendorCategory: "Integrator Sistem Sensor Serat Optik Presisi",
    alternative: "Electrical Strain Gauge - Sangat rentan petir dan kebocoran isolasi air laut"
  },
  {
    id: "BOM-011",
    category: "IoT & Monitoring",
    material: "FBG Interrogator Unit (Optical Demodulator)",
    specification: "4-channel, rentang panjang gelombang 1510-1590nm, sampling rate 100 Hz, ethernet",
    unit: "Unit",
    qty: 4,
    rate: 12000,
    amount: 48000,
    vendorCategory: "Distributor Instrumen Optoelektronik Industri",
    alternative: "Interrogator 2-channel portabel - Sulit dipantau online terus menerus"
  },
  {
    id: "BOM-012",
    category: "IoT & Monitoring",
    material: "MEMS Triaxial Accelerometers",
    specification: "Rentang ukur ±2g, noise ultra-rendah, IP68 casing baja antikarat, LoRaWAN",
    unit: "Pcs",
    qty: 35,
    rate: 450,
    amount: 15750,
    vendorCategory: "Pemasok Sensor IoT Industri Kelas Laut",
    alternative: "Akselerometer kabel piezoelektrik - Memerlukan pengkabelan koaksial mahal"
  },

  // CATEGORY: Energy
  {
    id: "BOM-013",
    category: "Energy",
    material: "Bifacial Solar PV Panels 550Wp",
    specification: "Teknologi N-Type TOPCon, efisiensi modul 22.3%, garansi performa 30 tahun",
    unit: "Unit",
    qty: 1200,
    rate: 160,
    amount: 192000,
    vendorCategory: "Pabrikan Panel Surya Global Tier-1",
    alternative: "Monocrystalline Single-sided - Kehilangan potensi refleksi pasir pantai pantai (albedo)"
  },
  {
    id: "BOM-014",
    category: "Energy",
    material: "Battery Energy Storage System (BESS) LFP 2.4 MWh",
    specification: "Sel Lithium Iron Phosphate (LFP) 3.2V, dilengkapi sasis pendingin cair & BMS pintar",
    unit: "Sistem",
    qty: 1,
    rate: 380000,
    amount: 380000,
    vendorCategory: "Pemasok Solusi Penyimpanan Energi Skala Gardu",
    alternative: "Lead-Acid Gel Battery - Masa pakai siklus sangat pendek, jejak karbon berat"
  },
  {
    id: "BOM-015",
    category: "Energy",
    material: "Marine Current Turbine 150 kW",
    specification: "Tipe turbin aksial bawah laut, kecepatan operasional arus 1.5 - 3.5 m/s, IP68 generator",
    unit: "Unit",
    qty: 2,
    rate: 145000,
    amount: 290000,
    vendorCategory: "Spesialis Generator Arus & Pasang Surut Kelautan",
    alternative: "Generator Diesel Darurat (Backup) - Sangat berisiko polusi solar dan bising"
  },

  // CATEGORY: Water & Waste
  {
    id: "BOM-016",
    category: "Water",
    material: "Containerized Solar Desalination Unit RO",
    specification: "Kapasitas 150 m³/hari, konsumsi daya spesifik <3.0 kWh/m³, pemulihan energi sirkulasi",
    unit: "Set",
    qty: 1,
    rate: 110000,
    amount: 110000,
    vendorCategory: "Spesialis Pengolahan Air Kontainer & Membran",
    alternative: "Multi-Effect Distillation (MED) - Memerlukan boiler uap panas berlebih"
  },
  {
    id: "BOM-017",
    category: "Waste",
    material: "Closed-Loop Anaerobic Digester & Biogas Pre-Treatment",
    specification: "Kapasitas 50 m³/hari, reaktor baja tahan asam dengan pengukur tekanan nirkabel",
    unit: "Set",
    qty: 1,
    rate: 65000,
    amount: 65000,
    vendorCategory: "Pabrikan Sistem Pengolah Limbah Bioenergi",
    alternative: "Septic Tank Konvensional Terbuka - Menyebabkan pencemaran nitrat parah ke pesisir"
  }
];
