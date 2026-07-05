import { Volume } from '../types';

export const volumesA_C: Volume[] = [
  {
    id: "VOL-A",
    code: "A",
    title: "Constitution & System Vision",
    category: "General & Governance",
    description: "Visi dasar, misi, filosofi rekayasa, batas-batas proyek, serta prinsip tata kelola otonom berbasis AI untuk pembangunan Neurosphere Flores.",
    sections: [
      {
        title: "Visi & Misi Proyek",
        id: "vision-mission",
        content: "<b>Visi:</b> Mewujudkan kawasan hunian otonom regeneratif pintar (smart regenerative settlement) kelas dunia pertama di wilayah pesisir Flores, Nusa Tenggara Timur, yang memadukan secara utuh kearifan arsitektur lokal (Mbaru Niang), sains material bambu lanjut (Engineered Bamboo Composite), dan sistem saraf kecerdasan buatan (Digital Twin & AI Core) untuk mencapai kemandirian mutlak pada sektor energi, air, pangan, dan sirkulasi material.<br/><br/><b>Misi:</b><br/>1. <b>Meningkatkan Kedaulatan Kebudayaan Flores:</b> Mereformasi tradisi lokal Manggarai ke dalam sistem konstruksi berstandar rekayasa industri tingkat lanjut tanpa merusak nilai-nilai sakral adat.<br/>2. <b>Sirkulasi Material Tanpa Emisi (Net-Zero Circularity):</b> Menggunakan material komposit bambu struktural berefisiensi karbon negatif yang dikombinasikan dengan sistem pirolisis dan pengolahan limbah tertutup.<br/>3. <b>Otonomi Energi & Ketahanan Iklim:</b> Mengamankan pasokan listrik dan air secara kontinu dari sumber energi hibrida surya dan arus laut, serta merancang sistem mitigasi bencana multi-bahaya otonom."
      },
      {
        title: "Filosofi Desain & Rekayasa",
        id: "philosophies",
        content: "<b>Engineering Philosophy:</b> Mengikuti pendekatan Systems Engineering (ISO/IEC/IEEE 15288) di mana setiap elemen fisik (dari pilar bambu hingga sensor optik) dianggap sebagai simpul terintegrasi dalam sistem fisik-kiber (Cyber-Physical System). Kami mengusung prinsip <i>Architectural Honesty</i>—setiap material diekspos sesuai karakter aslinya tanpa manipulasi kosmetik tiruan.<br/><br/><b>Cultural Philosophy:</b> Mbaru Niang bukan sekadar geometri atap kerucut, melainkan sistem kosmologi Manggarai yang membagi ruang hidup menjadi 5 tingkatan spiritual dan fungsional. Desain modern mempertahankan struktur lima lapis ini:<br/>- <i>Tingkat 1 (Lutur):</i> Hunian keluarga dan pusat aktivitas komunal.<br/>- <i>Tingkat 2 (Lobo):</i> Penyimpanan bahan pangan cadangan.<br/>- <i>Tingkat 3 (Lentar):</i> Penyimpanan benih tanaman untuk pemulihan ekologi.<br/>- <i>Tingkat 4 (Lempa Rae):</i> Ruang utilitas pintar, server Edge AI lokal, dan baterai cadangan.<br/>- <i>Tingkat 5 (Hekang Kode):</i> Puncak atap berisikan sensor optik atmosferik dan Tuned Mass Damper air."
      },
      {
        title: "Batasan & Asumsi FEED (Scope & Constraints)",
        id: "scope-constraints",
        content: "Dokumen FEED ini disusun berdasarkan batasan dan asumsi tervalidasi sebagai berikut:",
        subsections: [
          {
            title: "Ruang Lingkup Pekerjaan (In-Scope)",
            content: "- Desain struktur hunian Mbaru Niang modern bentang lebar berbasis bambu scrimber komposit.<br/>- Desain terperinci sistem pemantauan kesehatan struktur (SHM) real-time menggunakan sensor FBG optik.<br/>- Arsitektur sistem mikrogrid otonom hibrida dengan EMS berbasis algoritma pembelajaran mesin.<br/>- Pengembangan lima model Digital Twin yang disinkronisasi dalam protokol OPC-UA industri."
          },
          {
            title: "Di Luar Ruang Lingkup (Non-Scope)",
            content: "- Penyediaan infrastruktur jaringan seluler publik 5G nasional oleh operator komersial eksternal.<br/>- Konstruksi jalan raya antar-kota di luar area pemukiman pintar Neurosphere Flores.<br/>- Pemrosesan logam berat bekas selain baterai internal pemukiman."
          },
          {
            title: "Daftar Asumsi & Status Validasi",
            content: "Asumsi-asumsi rekayasa berikut digunakan dalam proses perhitungan matematis FEED:",
            table: [
              { No: "ASM-01", "Asumsi Rekayasa": "Percepatan tanah maksimum (PGA) gempa Flores", Nilai: "0.45g (Periode ulang 2500 tahun)", Status: "TERVALIDASI (USGS & BMKG)" },
              { No: "ASM-02", "Asumsi Rekayasa": "Kecepatan angin badai siklon tropis ekstrim", Nilai: "185 km/jam (Kategori 3 Saffir-Simpson)", Status: "TERVALIDASI (Climatology Study)" },
              { No: "ASM-03", "Asumsi Rekayasa": "Kecepatan arus pasang surut selat sempit", Nilai: "2.8 m/s pada kondisi pasang puncak", Status: "TERVALIDASI (Oceanographic Survey)" },
              { No: "ASM-04", "Asumsi Rekayasa": "Kerapatan serat bambu scrimber terkompresi", Nilai: "1.15 g/cm³ setelah proses hot-press", Status: "TERVALIDASI (Lab ASTM Test)" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "VOL-B",
    code: "B",
    title: "System Requirement Specification",
    category: "Requirements & Traceability",
    description: "Daftar spesifikasi kebutuhan fungsional (FR), non-fungsional (NFR), keselamatan (Safety), keamanan siber (Security), dan sirkularitas material proyek.",
    sections: [
      {
        title: "Spesifikasi Kebutuhan Fungsional (FR)",
        id: "functional-reqs",
        content: "Kebutuhan fungsional utama mendefinisikan apa saja aksi dan kapabilitas yang harus disediakan oleh sistem pemukiman pintar:",
        subsections: [
          {
            title: "Daftar Kebutuhan Fungsional Utama (FR)",
            content: "Setiap kebutuhan fungsional diidentifikasi secara unik untuk memastikan keterlacakan:",
            table: [
              { ID: "REQ-FR-001", Kategori: "Struktur", Deskripsi: "Struktur harus mampu mendistribusikan beban angin siklon 180 km/jam secara aerodinamis ke pilar pondasi." },
              { ID: "REQ-FR-002", Kategori: "SHM", Deskripsi: "Sistem sensor optik harus mendeteksi perubahan regangan struktur mikro hingga tingkat 1 microstrain." },
              { ID: "REQ-FR-003", Kategori: "Energi", Deskripsi: "Sistem mikrogrid harus mampu mendeteksi pemadaman grid utama dan beralih ke mode otonom (islanding) dalam waktu <15ms." },
              { ID: "REQ-FR-004", Kategori: "Water", Deskripsi: "Unit desalinasi air laut harus menghasilkan minimal 150 meter kubik air minum bersih per hari bertenaga surya penuh." },
              { ID: "REQ-FR-005", Kategori: "Digital Twin", Deskripsi: "Digital twin harus menyinkronkan data sensor getaran fisik dalam waktu nyata dengan latensi kurang dari 100 milidetik." }
            ]
          }
        ]
      },
      {
        title: "Spesifikasi Kebutuhan Non-Fungsional (NFR)",
        id: "non-functional-reqs",
        content: "Spesifikasi kualitas operasi, performa, dan batasan teknis sistem pemukiman pintar:",
        subsections: [
          {
            title: "Daftar Kebutuhan Non-Fungsional (NFR)",
            content: "Setiap kebutuhan non-fungsional didefinisikan dengan parameter kuantitatif yang jelas:",
            table: [
              { ID: "REQ-NFR-001", Parameter: "Reliabilitas Daya", "Kriteria Keberhasilan": "Ketersediaan daya listrik berkelanjutan minimal 99.99% sepanjang tahun (N-1 redundancy)." },
              { ID: "REQ-NFR-002", Parameter: "Keamanan Siber", "Kriteria Keberhasilan": "Semua transmisi data nirkabel wajib dienkripsi penuh menggunakan AES-128 berbasis hardware secure element." },
              { ID: "REQ-NFR-003", Parameter: "Daya Tahan Struktur", "Kriteria Keberhasilan": "Bahan komposit bambu terolah harus memiliki masa pakai bebas perawatan struktural minimal 50 tahun di pesisir." },
              { ID: "REQ-NFR-004", Parameter: "Skalabilitas IoT", "Kriteria Keberhasilan": "Jaringan komunikasi gateway LoRaWAN harus mampu menangani hingga 10,000 node sensor simultan." }
            ]
          }
        ]
      },
      {
        title: "Safety & Security Requirements",
        id: "safety-security-reqs",
        content: "<b>Safety Requirements:</b><br/>1. <b>Sistem Pemadam Api Gravitasi:</b> Setiap Mbaru Niang wajib memiliki tangki air pemadam darurat di Tingkat 5 yang terhubung langsung ke jaringan pipa sprinkler bermulut termal otomatis tanpa mengandalkan pompa listrik.<br/>2. <b>Sistem Evakuasi Tsunami:</b> Seluruh area hunian pantai harus terhubung ke jembatan evakuasi layang berlandasan komposit bambu yang menuntun langsung ke titik kumpul aman bukit (Compang) di ketinggian >25 meter dpl.<br/><br/><b>Security Requirements:</b><br/>1. <b>Firewall Jaringan Operasional:</b> Jaringan SCADA industri energi (IEC 61850) harus terisolasi secara fisik (air-gapped) dari jaringan internet publik WiFi wisatawan.<br/>2. <b>Autentikasi Digital Twin:</b> Akses penulisan kontrol aktuator lewat Digital Twin wajib melalui autentikasi multi-faktor (MFA) berbasis sertifikat digital unik yang dikeluarkan oleh Otoritas Keamanan Settlement."
      }
    ]
  },
  {
    id: "VOL-C",
    code: "C",
    title: "System Architecture",
    category: "General & Governance",
    description: "Arsitektur berlapis (16 Layer) sistem fisik-kiber Neurosphere Flores dari geologi bumi hingga tata kelola otonom.",
    sections: [
      {
        title: "Arsitektur Berlapis (16-Layer Stack)",
        id: "layer-stack",
        content: "Neurosphere Flores dirancang menggunakan arsitektur 16-lapisan vertikal terintegrasi untuk menjamin koordinasi fungsional menyeluruh dari fondasi bumi hingga tata kelola kedaulatan warga:",
        subsections: [
          {
            title: "Visualisasi Layer Arsitektur",
            content: "Berikut adalah susunan modular 16-layer stack proyek:",
            diagram: `
+-------------------------------------------------------------+
| Layer 16: GOVERNANCE (Koperasi Adat & AI Rules)             |
+-------------------------------------------------------------+
| Layer 15: CITY DASHBOARD (Visualisasi & Kontrol Spasial)    |
+-------------------------------------------------------------+
| Layer 14: AI CORE (Optimasi Jaringan & RUL Predictive AI)   |
+-------------------------------------------------------------+
| Layer 13: COMMUNITY (Aplikasi Lonto Leok & Ekonomi Sirkuler)|
+-------------------------------------------------------------+
| Layer 12: TRANSPORTATION (Dermaga Terapung & EV Smart Path) |
+-------------------------------------------------------------+
| Layer 11: WASTE (Pirolisis Komposit & Bioreaktor Biogas)    |
+-------------------------------------------------------------+
| Layer 10: WATER (Tadah Hujan, RO Desalinasi, Wetland)       |
+-------------------------------------------------------------+
| Layer 09: ENERGY (Solar PV, Turbin Arus Laut, BESS LFP)     |
+-------------------------------------------------------------+
| Layer 08: DIGITAL TWIN (Visualisasi WebGL & Sinkronisasi DB)|
+-------------------------------------------------------------+
| Layer 07: EDGE AI (Komputasi Nodal ESP32-S3 & Deteksi Cepat)|
+-------------------------------------------------------------+
| Layer 06: SENSORS (Serat Optik FBG, MEMS, DFOS, Akustik Emis)|
+-------------------------------------------------------------+
| Layer 05: ENVELOPE (Atap Anyaman Komposit & Kaca Low-E)     |
+-------------------------------------------------------------+
| Layer 04: STRUCTURE (Bamboo Scrimber & Carbon Wrap Joints)  |
+-------------------------------------------------------------+
| Layer 03: FOUNDATION (Tiang Pancang Mikro Komposit Beton)   |
+-------------------------------------------------------------+
| Layer 02: OCEAN (Dermaga, Pemecah Ombak, Arus Pasang Surut) |
+-------------------------------------------------------------+
| Layer 01: EARTH (Geologi Batuan Kompak Flores, Geoteknik)   |
+-------------------------------------------------------------+
`
          },
          {
            title: "Hubungan Antar-Layer (Interface Matrix)",
            content: "Setiap layer berinteraksi menggunakan antarmuka standar industri:",
            table: [
              { "Layer Pengirim": "06: Sensors", "Layer Penerima": "07: Edge AI", "Antarmuka / Protokol": "SPI / I2C Bus Lokal" },
              { "Layer Pengirim": "07: Edge AI", "Layer Penerima": "08: Digital Twin", "Antarmuka / Protokol": "MQTT / Enkripsi AES-128" },
              { "Layer Pengirim": "09: Energy", "Layer Penerima": "14: AI Core", "Antarmuka / Protokol": "OPC-UA / IEC 61850 MMS" },
              { "Layer Pengirim": "14: AI Core", "Layer Penerima": "15: City Dashboard", "Antarmuka / Protokol": "REST API / WebGL JSON" }
            ]
          }
        ]
      }
    ]
  }
];
