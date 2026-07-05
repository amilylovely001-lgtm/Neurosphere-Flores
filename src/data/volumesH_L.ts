import { Volume } from '../types';

export const volumesH_L: Volume[] = [
  {
    id: "VOL-H",
    code: "H",
    title: "Energy System & Microgrid",
    category: "Infrastructure & Resources",
    description: "Desain sistem mikrogrid hibrida (surya, arus laut, biogas) mandiri terproteksi standar IEC 61850 dengan sistem penyimpanan baterai LFP 2.4 MWh.",
    sections: [
      {
        title: "Pembangkitan Daya & Keseimbangan Energi",
        id: "energy-generation",
        content: "Kebutuhan daya listrik puncak (peak load) kawasan Neurosphere Flores diestimasi sebesar 380 kW, dengan rata-rata beban harian (average load) 185 kW. Sistem pembangkit dirancang secara hibrida untuk menjamin keandalan suplai berkelanjutan:",
        subsections: [
          {
            title: "Konfigurasi Aset Pembangkit Energi Hibrida",
            content: "Setiap pembangkit diintegrasikan melalui smart grid terdistribusi:",
            table: [
              { Sumber: "Solar PV Bifacial", Kapasitas: "660 kWp", Ketersediaan: "Intermittent (Siang hari)", Efisiensi: "22.3%", "Teknologi Utama": "N-Type TOPCon Cell, Bifacial glass-glass" },
              { Sumber: "Marine Current Turbine", Kapasitas: "300 kW (2x150)", Ketersediaan: "Kontinu (Arus Selat Flores)", Efisiensi: "38.5%", "Teknologi Utama": "Axial flow underwater, IP68 magnet permanen" },
              { Sumber: "Biogas Generator", Kapasitas: "50 kW", Ketersediaan: "Baseload / Dispatchable", Efisiensi: "33.0%", "Teknologi Utama": "Four-stroke internal combustion, sinkronis" },
              { Sumber: "OTEC (Roadmap Depan)", Kapasitas: "1.0 MW", Ketersediaan: "Kontinu (Ocean thermal)", Efisiensi: "Concept Only", "Teknologi Utama": "Closed-cycle amonia, perbedaan suhu air laut 22°C" }
            ]
          }
        ]
      },
      {
        title: "Sistem Penyimpanan & Proteksi Grid (IEC 61850)",
        id: "energy-protection",
        content: "<b>1. Battery Energy Storage System (BESS):</b> Menggunakan baterai Lithium Iron Phosphate (LFP) dengan total kapasitas 2.4 MWh. LFP dipilih karena stabilitas termalnya yang unggul (tidak memicu kebakaran oksigen jika terjadi hubungan singkat) dibanding baterai NMC.<br/><br/><b>2. Protokol Komunikasi Proteksi IEC 61850:</b> Gardu distribusi menggunakan arsitektur relai cerdas (IED - Intelligent Electronic Device) berbasis standar internasional IEC 61850. Untuk mengantisipasi kegagalan sistem proteksi, kami mengimplementasikan transmisi pesan cepat <b>GOOSE (Generic Object Oriented Substation Events)</b> dengan jaminan pengantaran paket data proteksi di bawah 4 milidetik di dalam jaringan ring serat optik lokal. Ini memungkinkan lokalisasi gangguan sirkuit pendek instan sebelum merusak komponen sensitif inverter."
      }
    ]
  },
  {
    id: "VOL-I",
    code: "I",
    title: "Communication System & Protocols",
    category: "Monitoring & Digital Twin",
    description: "Sistem jaringan komunikasi bertingkat (5-Layer) menggunakan protokol industri MQTT, OPC-UA, IEC 61850, media fiber optik, nirkabel LoRaWAN, dan backup Starlink.",
    sections: [
      {
        title: "Arsitektur Komunikasi 5-Layer Jaringan",
        id: "comm-layers",
        content: "Jaringan komunikasi dibagi menjadi 5 tingkatan terisolasi untuk menghindari kontaminasi lalu lintas data dan mencegah peretasan siber silang:",
        subsections: [
          {
            title: "Tabel Spesifikasi Jaringan Komunikasi 5-Layer",
            content: "Setiap tingkatan menggunakan protokol spesifik sesuai kebutuhan latensi:",
            table: [
              { Layer: "Sensor Network", Media: "Kabel Tembaga / SPI-I2C", Protokol: "Modbus RTU / CAN-Bus", Latensi: "<1 ms", Penggunaan: "Koneksi sensor fisik lokal ke Edge AI Node" },
              { Layer: "Safety Network", Media: "Serat Optik Ring", Protokol: "IEC 61850 GOOSE", Latensi: "<3 ms", Penggunaan: "Relai proteksi kelistrikan inter-IED gardu" },
              { Layer: "Operation Network", Media: "Serat Optik Ring / Ethernet", Protokol: "OPC-UA", Latensi: "<20 ms", Penggunaan: "Sinkronisasi data antar PLC, inverter, desalinasi" },
              { Layer: "Information Network", Media: "LoRaWAN Nirkabel / WiFi", Protokol: "MQTT (Secure JSON)", Latensi: "<100 ms", Penggunaan: "Sensor lingkungan, tangki air, tracking meteran warga" },
              { Layer: "AI Network", Media: "Serat Optik / Starlink WAN", Protokol: "HTTPS / gRPC API", Latensi: "<200 ms", Penggunaan: "Sinkronisasi platform Digital Twin 3D dan Cloud AI" }
            ]
          }
        ]
      },
      {
        title: "Sinkronisasi Waktu & Keamanan Jaringan",
        id: "comm-security",
        content: "<b>1. Sinkronisasi Waktu Mikrodetik (IEEE 1588 PTP):</b> Deteksi retak mikro akustik emisi dan sinkronisasi sudut fasa inverter memerlukan keselarasan waktu yang sangat presisi. Kami mengimplementasikan protokol Precision Time Protocol (PTP) IEEE 1588v2, mencapai keselarasan waktu antar-simpul sensor di bawah 250 nanodetik.<br/><br/><b>2. Pengamanan Jaringan Siber:</b> Seluruh sistem operasi menggunakan teknik segmentasi jaringan kaku (VLAN). Semua lalu lintas data nirkabel LoRaWAN wajib melewati enkripsi berlapis ganda (AppSKey dan NwkSKey AES-128) menggunakan chip kriptografi eksternal di dalam perangkat keras sensor untuk menghindari penyadapan atau pembajakan gerbang katup."
      }
    ]
  },
  {
    id: "VOL-J",
    code: "J",
    title: "Water & Hydro-Engineering",
    category: "Infrastructure & Resources",
    description: "Sirkulasi air bersih sirkuler (closed-loop) mengintegrasikan pemanenan air hujan, desalinasi Reverse Osmosis bertenaga surya, dan wetland buatan.",
    sections: [
      {
        title: "Neraca Air Bersih & Sirkulasi",
        id: "water-balance",
        content: "Kebutuhan air tawar total untuk konsumsi warga, fasilitas umum, dan pariwisata diperkirakan sebesar 120 m³/hari. Pasokan air diperoleh dari penyeimbangan 3 sumber utama:",
        subsections: [
          {
            title: "Alur Sirkulasi Air Bersih (Closed-Loop)",
            content: "Skema pemisahan jalur pengolahan air berdasarkan tingkat pencemaran:",
            diagram: `
[ Curah Hujan ] ──> Pemanenan Atap Mbaru Niang ──> Tangki Filtrasi ──> [ Tangki Air Bersih ]
                                                                             ▲
[ Air Laut ] ─────> RO Desalinasi (Surya) ───────────────────────────────────┘
                                                                             │ (Penggunaan Warga)
                                                                             ▼
                                                                     [ Air Bekas Pakai ]
                                                                             │
                    ┌────────────────────────────────────────────────────────┴────────────────────────────────────────────────────────┐
                    ▼ (Greywater - Wastafel, Mandi)                                                                                   ▼ (Blackwater - Toilet)
          Wetland Buatan (Filter Alami)                                                                                      Bioreaktor Anaerobik
                    │                                                                                                                 │ (Pengurai Bakteri)
                    ▼                                                                                                                 ▼
         Penyiraman & Cuci Baju                                                                                             Biochar Filtrasi Air Kotor
`
          }
        ]
      },
      {
        title: "Unit Desalinasi Reverse Osmosis Surya",
        id: "desalination-specs",
        content: "Unit desalinasi air laut ditempatkan dalam kontainer standar 40-kaki terisolasi termal. Menggunakan membran poliamida semi-permeabel berefisiensi tinggi dengan penukar tekanan energi rotasi (Energy Recovery Device - ERD) tipe PX-300 yang mampu mengembalikan hingga 96% energi hidrolis aliran limbah pelepasan garam (brine water).<br/><br/>Lumpur limbah pelepasan garam pekat (brine) hasil desalinasi dilarang keras langsung dibuang ke laut pantai karena dapat menaikkan salinitas lokal yang membunuh terumbu karang. Lumpur pekat ini dialihkan ke kolam kristalisasi evaporasi darat bertenaga surya untuk diolah menjadi garam kristal kualitas premium siap jual sebagai produk sampingan ekonomi sirkuler."
      }
    ]
  },
  {
    id: "VOL-K",
    code: "K",
    title: "Waste & Circular Economy",
    category: "Infrastructure & Resources",
    description: "Pengelolaan limbah terpadu berkelanjutan melalui teknologi bioreaktor anaerobik, pirolisis termokimia penghasil biochar, dan daur ulang komposit material.",
    sections: [
      {
        title: "Aliran Pengolahan Sampah Kawasan",
        id: "waste-flow",
        content: "Target penanganan sampah di Neurosphere Flores adalah <b>Zero Waste to Landfill</b>. Semua jenis sampah dikategorikan dan disalurkan ke sistem daur ulang sirkuler terdedikasi:",
        subsections: [
          {
            title: "Matriks Pengolahan Sampah Sirkuler",
            content: "Metode pemrosesan akhir berdasarkan tipe limbah:",
            table: [
              { "Tipe Sampah": "Organik Rumah Tangga", Kuantitas: "180 kg/hari", "Teknologi Pemrosesan": "Digester Anaerobik Basah", Output: "Gas metana (biogas) & pupuk cair organik" },
              { "Tipe Sampah": "Kotoran Manusia / Tinja", Kuantitas: "95 kg/hari", "Teknologi Pemrosesan": "Termokimia Dewatering & Pirolisis", Output: "Biochar karbon padat stabil penyerap racun" },
              { "Tipe Sampah": "Komposit Bambu Bekas", Kuantitas: "40 kg/hari", "Teknologi Pemrosesan": "Pirolisis Lambat (Slow Pyrolysis)", Output: "Gas sintesis bakar (syngas) & arang bambu aktif" },
              { "Tipe Sampah": "Plastik Non-Recyclable", Kuantitas: "15 kg/hari", "Teknologi Pemrosesan": "Termokimia Depolimerisasi Katalitik", Output: "Bio-oil bahan bakar pembakar cair industri" },
              { "Tipe Sampah": "Baterai & Elektronik (B3)", Kuantitas: "2 kg/hari", "Teknologi Pemrosesan": "Penyortiran Khusus & Ekstraksi Hydrometal", Output: "Pengembalian logam nikel-kobalt berharga" }
            ]
          }
        ]
      },
      {
        title: "Pirolisis Lambat & Sekuestrasi Karbon Biochar",
        id: "pyrolysis-biochar",
        content: "Limbah serat bambu sisa konstruksi dan lumpur tinja kering dimasukkan ke dalam unit reaktor pirolisis lambat (suhu 450°C - 550°C tanpa oksigen). Proses ini menghasilkan <b>Biochar</b>—arang berpori sangat tinggi dengan kandungan karbon stabil yang sangat tinggi.<br/><br/>Biochar ini kemudian dicampurkan ke dalam tanah perkebunan hortikultura pemukiman. Sifat pori biochar bertindak sebagai spons alami yang mengikat molekul air, menahan pupuk agar tidak tercuci hujan deras, dan menyuburkan mikrobia tanah menguntungkan. Secara sains material, biochar mengunci karbon secara permanen di dalam tanah selama ratusan tahun, menciptakan mekanisme sekuestrasi karbon (carbon offset) terverifikasi bagi kawasan."
      }
    ]
  },
  {
    id: "VOL-L",
    code: "L",
    title: "Disaster Engineering & Mitigation",
    category: "Structural & Material Science",
    description: "Sistem mitigasi bencana otonom terintegrasi menghadapi gempa megathrust patahan Flores, tsunami pantai, siklon tropis, dan kebakaran pemukiman.",
    sections: [
      {
        title: "Perencanaan Desain Multi-Bahaya (Multi-Hazard Design)",
        id: "disaster-mitigation",
        content: "Lokasi geografi Flores memiliki indeks risiko kebencanaan seismik dan atmosferik yang tinggi. Seluruh rancangan sipil mengikuti batas toleransi ketahanan ekstrim:",
        subsections: [
          {
            title: "Ketentuan Desain Rekayasa Kebencanaan",
            content: "Parameter dan metode mitigasi untuk tiap potensi bencana:",
            table: [
              { Bencana: "Gempa Bumi Tektonik", "Kondisi Ekstrim": "Percepatan PGA 0.45g (Sesar Naik Flores)", "Solusi Desain Rekayasa": "Struktur sendi fleksibel komposit bambu, peredam massal (TMD) air" },
              { Bencana: "Tsunami", "Kondisi Ekstrim": "Limpasan air laut setinggi 5.5 meter di pantai", "Solusi Desain Rekayasa": "Elevasi lantai hunian pertama setinggi 6.0m dpl, pemecah ombak batu pecah" },
              { Bencana: "Siklon / Badai", "Kondisi Ekstrim": "Kecepatan angin terus menerus 185 km/jam", "Solusi Desain Rekayasa": "Atap kerucut aerodinamis sirkuler Mbaru Niang, jangkar kabel sling baja" },
              { Bencana: "Kebakaran Pemukiman", "Kondisi Ekstrim": "Penyalaan simultan pada struktur atap ilalang", "Solusi Desain Rekayasa": "Treatment retardant api pada atap, pipa sprinkler gravitasi Tingkat 5" }
            ]
          }
        ]
      },
      {
        title: "Prosedur Evakuasi & Utilitas Darurat Otonom",
        id: "emergency-ops",
        content: "Begitu sensor gempa MEMS atau sensor FBG mengindikasikan gempa bumi di atas Skala VI MMI, sistem AI Core di edge lokal mengaktifkan mode darurat otonom:<br/>1. <b>Sistem Komunikasi Suara Darurat:</b> Antena LoRaWAN stasiun pangkalan menyebarkan instruksi evakuasi suara otomatis ke seluruh penunjuk arah digital jalan dan speaker hunian warga menggunakan frekuensi radio darurat terlindung.<br/>2. <b>Sistem Listrik Darurat:</b> Sistem kelistrikan utama diisolasi untuk menghindari hubungan singkat pemicu kebakaran. Aliran daya darurat dialihkan langsung dari baterai BESS LFP khusus ke sistem penerangan jalur evakuasi layang berkapasitas daya minimal 48 jam kerja kontinu."
      }
    ]
  }
];
