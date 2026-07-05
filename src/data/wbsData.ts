import { WBSNode } from '../types';

export const wbsData: WBSNode = {
  id: "WBS-1.0",
  code: "NSP-1.0",
  title: "PROYEK NEUROSPHERE FLORES",
  level: 1,
  description: "Kawasan regenerative smart settlement terintegrasi budaya Flores, konstruksi bamboo-composite, SHM, Digital Twin, dan energi mandiri.",
  children: [
    {
      id: "WBS-1.1",
      code: "NSP-1.1",
      title: "Inisiasi & Desain Engineering (FEED)",
      level: 2,
      description: "Studi kelayakan teknis, budaya, dan desain rekayasa depan (Front-End Engineering Design).",
      children: [
        {
          id: "WBS-1.1.1",
          code: "NSP-1.1.1",
          title: "Studi Kelayakan Budaya, Adat, & Ekologi",
          level: 3,
          description: "Penyelarasan adat Mbaru Niang dan analisis dampak ekosistem pesisir.",
          children: [
            {
              id: "WBS-1.1.1.1",
              code: "NSP-1.1.1.1",
              title: "Analisis Struktur Adat Manggarai & Dimensi Mbaru Niang",
              level: 4,
              description: "Melakukan survei sosial-kultural dan konsultasi dengan tetua adat mengenai zona sakral."
            },
            {
              id: "WBS-1.1.1.2",
              code: "NSP-1.1.1.2",
              title: "Penilaian Dampak Keanekaragaman Hayati & Siltation",
              level: 4,
              description: "Analisis potensi dampak pemancangan pantai terhadap karang dan penyu."
            }
          ]
        },
        {
          id: "WBS-1.1.2",
          code: "NSP-1.1.2",
          title: "Desain FEED Multidisplin Terintegrasi",
          level: 3,
          description: "Desain spesifikasi material, sensor, dan sirkulasi energi.",
          children: [
            {
              id: "WBS-1.1.2.1",
              code: "NSP-1.1.2.1",
              title: "Desain Struktur Komposit Bambu & Carbon Wrap",
              level: 4,
              description: "Pemodelan mekanis FEA (Finite Element Analysis) bambu scrimber di bawah beban seismik dan badai."
            },
            {
              id: "WBS-1.1.2.2",
              code: "NSP-1.1.2.2",
              title: "Arsitektur IoT & Jaringan Sensor Serat Optik FBG",
              level: 4,
              description: "Pemetaan tata letak jaringan serat optik FBG, accelerometer, dan gateway LoRaWAN."
            },
            {
              id: "WBS-1.1.2.3",
              code: "NSP-1.1.2.3",
              title: "Desain Sinkronisasi Digital Twin 5 Layer",
              level: 4,
              description: "Skema basis data deret waktu dan integrasi model BIM ke platform 3D."
            }
          ]
        }
      ]
    },
    {
      id: "WBS-1.2",
      code: "NSP-1.2",
      title: "Rekayasa & Pengolahan Material Komposit",
      level: 2,
      description: "Fabrikasi bambu rekayasa berkekuatan tinggi (Engineered Bamboo Composite) bersertifikasi.",
      children: [
        {
          id: "WBS-1.2.1",
          code: "NSP-1.2.1",
          title: "Pemanenan & Pengawetan Bambu Berkelanjutan",
          level: 3,
          description: "Ekstraksi dan perlakuan pengawetan boron ramah lingkungan.",
          children: [
            {
              id: "WBS-1.2.1.1",
              code: "NSP-1.2.1.1",
              title: "Seleksi & Pemanenan Bambu Petung (Dendrocalamus asper) Umur 3-5 Tahun",
              level: 4,
              description: "Kemitraan koperasi petani lokal untuk panen lestari di luar musim rebung."
            },
            {
              id: "WBS-1.2.1.2",
              code: "NSP-1.2.1.2",
              title: "Pengawetan Impregnasi Borat Tekanan Tinggi AWPA",
              level: 4,
              description: "Perendaman tangki autoclave bertekanan dengan formulasi boraks-asam borat bebas pestisida beracun."
            }
          ]
        },
        {
          id: "WBS-1.2.2",
          code: "NSP-1.2.2",
          title: "Fabrikasi Komposit Bamboo Scrimber & Laminasi",
          level: 3,
          description: "Pengepresan densitas tinggi dan komposit hibrida serat karbon.",
          children: [
            {
              id: "WBS-1.2.2.1",
              code: "NSP-1.2.2.1",
              title: "Pengepresan Bamboo Scrimber Kepadatan Tinggi (>1.1 g/cm³)",
              level: 4,
              description: "Penghancuran serat bambu kasar, impregnasi bio-resin, dan hot-pressing mekanis."
            },
            {
              id: "WBS-1.2.2.2",
              code: "NSP-1.2.2.2",
              title: "Laminasi Silang Komposit Bambu (Cross-Laminated Bamboo)",
              level: 4,
              description: "Pengeleman slats bambu dengan susunan anyaman silang tegak lurus penahan geser plat."
            },
            {
              id: "WBS-1.2.2.3",
              code: "NSP-1.2.2.3",
              title: "Pemberian Carbon Wrap & Finishing Coating Bio-Epoxy",
              level: 4,
              description: "Pembungkusan area sambungan kritis dengan anyaman serat karbon dan bio-epoxy resin anti-UV."
            }
          ]
        }
      ]
    },
    {
      id: "WBS-1.3",
      code: "NSP-1.3",
      title: "Konstruksi Sipil & Infrastruktur Kawasan",
      level: 2,
      description: "Pekerjaan konstruksi pondasi lepas pantai, penahan ombak, dan perakitan Mbaru Niang modern.",
      children: [
        {
          id: "WBS-1.3.1",
          code: "NSP-1.3.1",
          title: "Pekerjaan Pondasi Pantai & Marine Engineering",
          level: 3,
          description: "Pondasi tiang mikro komposit lepas pantai dengan anoda perlindungan.",
          children: [
            {
              id: "WBS-1.3.1.1",
              code: "NSP-1.3.1.1",
              title: "Pemancangan Tiang Pancang Mikro Komposit Beton-Bambu",
              level: 4,
              description: "Injeksi tiang pancang geser gesekan rendah dilindungi silinder HDPE anti-abrasi."
            },
            {
              id: "WBS-1.3.1.2",
              code: "NSP-1.3.1.2",
              title: "Instalasi Sistem Proteksi Katodik Anoda Korban Seng",
              level: 4,
              description: "Pemasangan zinc anodes di sepanjang bagian tiang logam pancang bawah pasang air laut."
            }
          ]
        },
        {
          id: "WBS-1.3.2",
          code: "NSP-1.3.2",
          title: "Perakitan Struktur Hunian Tradisional-Modern",
          level: 3,
          description: "Dirikan struktur Mbaru Niang modular pracetak.",
          children: [
            {
              id: "WBS-1.3.2.1",
              code: "NSP-1.3.2.1",
              title: "Fabrikasi & Erection Tiang Agung Pilar Utama",
              level: 4,
              description: "Pemberian pasak titanium pada pilar agung silinder komposit bamboo scrimber."
            },
            {
              id: "WBS-1.3.2.2",
              code: "NSP-1.3.2.2",
              title: "Konstruksi Kerangka Kerucut Diagonal 5 Tingkat",
              level: 4,
              description: "Pemasangan elemen lengkung diagonal bersendi peluru nilon kaku gempa."
            },
            {
              id: "WBS-1.3.2.3",
              code: "NSP-1.3.2.3",
              title: "Instalasi Atap Anyaman Komposit Kedap Air & Ilalang",
              level: 4,
              description: "Pelapisan atap jerami dengan membran serat kaca hidrofobik tahan api ekstrim."
            }
          ]
        }
      ]
    },
    {
      id: "WBS-1.4",
      code: "NSP-1.4",
      title: "Sistem Smart Settlement, IoT & Digital Twin",
      level: 2,
      description: "Implementasi jaringan sensor, server edge, visualisasi Digital Twin, dan AI.",
      children: [
        {
          id: "WBS-1.4.1",
          code: "NSP-1.4.1",
          title: "Sistem Structural Health Monitoring (SHM)",
          level: 3,
          description: "Sensor serat optik, akustik emisi, dan sensor korosi.",
          children: [
            {
              id: "WBS-1.4.1.1",
              code: "NSP-1.4.1.1",
              title: "Pemasangan Sensor FBG & Serat Optik DFOS Terdistribusi",
              level: 4,
              description: "Injeksi serat optik mikro sepanjang balok scrimber utama untuk mengukur regangan seismik."
            },
            {
              id: "WBS-1.4.1.2",
              code: "NSP-1.4.1.2",
              title: "Instalasi Akselerometer MEMS & Sensor Akustik Emisi (AE)",
              level: 4,
              description: "Pemasangan sensor getaran frekuensi alami struktur dan sensor deteksi retak mikro bambu."
            }
          ]
        },
        {
          id: "WBS-1.4.2",
          code: "NSP-1.4.2",
          title: "Digital Twin & Dashboard Operasional Kawasan",
          level: 3,
          description: "Visualisasi 3D WebGL, sinkronisasi data sensor, dan AI otonom.",
          children: [
            {
              id: "WBS-1.4.2.1",
              code: "NSP-1.4.2.1",
              title: "Konfigurasi Gateway OPC-UA Edge AI & Enkripsi LoRaWAN",
              level: 4,
              description: "Instalasi gateway industri pengumpul sensor terlindungi enkripsi AES-128."
            },
            {
              id: "WBS-1.4.2.2",
              code: "NSP-1.4.2.2",
              title: "Sinkronisasi Basis Data Deret Waktu & WebGL Engine",
              level: 4,
              description: "Integrasi basis data InfluxDB dengan UI digital twin berbasis model BIM 3D."
            },
            {
              id: "WBS-1.4.2.3",
              code: "NSP-1.4.2.3",
              title: "Model AI Otonom Estimasi RUL (Remaining Useful Life)",
              level: 4,
              description: "Implementasi algoritma deep learning penentu kelelahan bambu di edge server."
            }
          ]
        }
      ]
    },
    {
      id: "WBS-1.5",
      code: "NSP-1.5",
      title: "Sistem Energi & Air Sirkuler Terintegrasi",
      level: 2,
      description: "Penyediaan listrik mikrogrid mandiri, desalinasi, constructed wetlands, dan pirolisis sampah.",
      children: [
        {
          id: "WBS-1.5.1",
          code: "NSP-1.5.1",
          title: "Pembangkitan Energi Terbarukan & Smart Grid",
          level: 3,
          description: "Solar PV, Marine Current Turbine, baterai LFP, dan EMS.",
          children: [
            {
              id: "WBS-1.5.1.1",
              code: "NSP-1.5.1.1",
              title: "Pemasangan Bifacial Solar PV & Inverter Grid-Forming",
              level: 4,
              description: "Instalasi panel surya bifasial atas atap dan sistem inverter pembentuk grid lokal otonom."
            },
            {
              id: "WBS-1.5.1.2",
              code: "NSP-1.5.1.2",
              title: "Instalasi Turbin Arus Laut & Sistem Baterai LFP 2.4 MWh",
              level: 4,
              description: "Penempatan turbin bawah laut di celah selat berarus kencang Flores dan sistem pendingin cair baterai LFP."
            }
          ]
        },
        {
          id: "WBS-1.5.2",
          code: "NSP-1.5.2",
          title: "Sistem Air & Pengolahan Limbah Sirkuler",
          level: 3,
          description: "Desalinasi bertenaga surya, wetland buatan, dan pembuat biochar.",
          children: [
            {
              id: "WBS-1.5.2.1",
              code: "NSP-1.5.2.1",
              title: "Instalasi Unit RO Desalinasi Air Laut Surya",
              level: 4,
              description: "Sistem pompa dengan Variable Frequency Drive (VFD) untuk optimasi energi solar PV siang hari."
            },
            {
              id: "WBS-1.5.2.2",
              code: "NSP-1.5.2.2",
              title: "Pembangunan Unit Pirolisis Komposit & Pembuatan Biochar",
              level: 4,
              description: "Sistem pengolahan limbah kotoran dan bambu sisa menjadi arang aktif biochar penyerap karbon."
            }
          ]
        }
      ]
    }
  ]
};
