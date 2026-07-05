import { Volume } from '../types';

export const volumesD_G: Volume[] = [
  {
    id: "VOL-D",
    code: "D",
    title: "Structural Engineering & Materials",
    category: "Structural & Material Science",
    description: "Spesifikasi mekanis bambu rekayasa (bamboo scrimber, laminated bamboo), sistem komposit serat karbon, ketahanan seismik, badai, serta sambungan kaku.",
    sections: [
      {
        title: "Karakteristik Mekanis Material Bambu Rekayasa",
        id: "mechanical-properties",
        content: "Proyek Neurosphere Flores menggunakan dua jenis material bambu rekayasa utama yang diproduksi di bawah standar ISO 22156 untuk menjamin kapasitas pikul beban struktural ekstrim:",
        subsections: [
          {
            title: "Tabel Spesifikasi Mekanis Bambu Rekayasa vs Kayu & Beton",
            content: "Pengujian kekuatan dilakukan pada kadar air terkondisi 12% sesuai standar ASTM D143:",
            table: [
              { Material: "Bamboo Scrimber", "Kerapatan (g/cm³)": "1.15", "MOR (MPa)": "155", "MOE (GPa)": "16.5", "Tekan Sejajar Serat (MPa)": "85", "Tarik Sejajar Serat (MPa)": "190" },
              { Material: "Laminated Bamboo", "Kerapatan (g/cm³)": "0.78", "MOR (MPa)": "85", "MOE (GPa)": "12.0", "Tekan Sejajar Serat (MPa)": "55", "Tarik Sejajar Serat (MPa)": "110" },
              { Material: "Kayu Jati Kelas I", "Kerapatan (g/cm³)": "0.68", "MOR (MPa)": "65", "MOE (GPa)": "11.5", "Tekan Sejajar Serat (MPa)": "45", "Tarik Sejajar Serat (MPa)": "80" },
              { Material: "Beton K-350", "Kerapatan (g/cm³)": "2.40", "MOR (MPa)": "3.5 (Tarik)", "MOE (GPa)": "27.0", "Tekan Sejajar Serat (MPa)": "29", "Tarik Sejajar Serat (MPa)": "0" }
            ]
          },
          {
            title: "Failure Mode (Modus Kegagalan)",
            content: "Kegagalan struktural diidentifikasi melalui pengujian beban tekan dan geser aksial:<br/>1. <b>Tarik Belah (Splitting Shear):</b> Kegagalan paling kritis pada bambu lurus, diatasi dengan anyaman serat silang silang (Cross-Laminated) pada penampang pelat lantai.<br/>2. <b>Delaminasi Perekat (Adhesive Delamination):</b> Kegagalan akibat degradasi resin karena siklus panas-basah ekstrim Flores. Diatasi dengan formula bio-resin poliuretan termodifikasi silika nano."
          }
        ]
      },
      {
        title: "Ketahanan Kimia & Lingkungan Pantai",
        id: "durability-resistance",
        content: "<b>1. Ketahanan Garam (Salt Resistance):</b> Udara pantai Flores mengandung konsentrasi klorida tinggi yang memicu korosi logam. Komposit bambu secara alami kebal korosi klorida. Namun untuk sambungan baut baja galvanis, kami menyertakan selongsong plastik nilon khusus (sleeve insulator) untuk memutus kontak sirkuit galvanis.<br/><br/><b>2. Ketahanan Kelembapan (Humidity Resistance):</b> Fluktuasi kelembapan di Labuan Bajo (45% - 95%) memicu kembang susut (swelling-shrinkage) ekstrim. Bambu mentah ditorifikasi (dipanaskan pada suhu 180°C dalam atmosfer minim oksigen) sebelum dipres. Proses ini menghancurkan gugus hidroksil (OH) bebas dalam selulosa bambu, merubahnya menjadi material hidrofobik permanen dengan persentase swelling <1.5%.<br/><br/><b>3. Ketahanan Api (Fire Resistance):</b> Komposit bambu scrimber dipadatkan di bawah tekanan tinggi sehingga memiliki indeks kerapatan oksigen tinggi (LOI >28%). Ini membuatnya tahan api secara alami (kategori kelas B1 sulit menyebar api). Pelapisan tambahan zat aditif flame-retardant ramah lingkungan berbahan dasar fosfat anorganik meningkatkan perlindungan hingga klasifikasi ASTM E84 Class A."
      },
      {
        title: "Desain Hubungan (Joint & Connection Design)",
        id: "joint-design",
        content: "Sambungan antar elemen balok dan kolom menggunakan konsep hibrida: pasak baja tahan karat SS316L yang dikombinasikan dengan pembungkusan komposit eksternal menggunakan serat karbon (carbon wrap) unidirectional. Metode ini memastikan distribusi tegangan merata tanpa tumpukan tegangan lokal pada lubang baut pemicu tarikan belah.",
        subsections: [
          {
            title: "Metode Konstruksi Sambungan Komposit",
            content: "Urutan perakitan sambungan kaku di lapangan dilakukan sebagai berikut:",
            diagram: `
[ Balok Bambu Scrimber ] ───> Pengeboran lubang presisi tinggi (toleransi <0.5mm)
        │
        ├───> Pemasangan selongsong isolasi nilon anti-korosi klorida
        │
        ├───> Penyelipan pasak pin titanium/baut SS316L grade tinggi
        │
        ├───> Injeksi celah sisa baut menggunakan bio-epoxy cair kaku
        │
        └───> Pembungkusan luar sambungan 3 lapis dengan Carbon Fiber Wrap (300 g/m²)
`
          }
        ]
      }
    ]
  },
  {
    id: "VOL-E",
    code: "E",
    title: "Structural Health Monitoring",
    category: "Monitoring & Digital Twin",
    description: "Sistem instrumentasi pemantauan kesehatan struktur (SHM) menggunakan sensor serat optik FBG terdistribusi, akselerometer MEMS, dan akustik emisi.",
    sections: [
      {
        title: "Arsitektur Sensor SHM Terdistribusi",
        id: "sensor-architecture",
        content: "Sistem SHM bertindak sebagai sistem saraf sensorik real-time yang memantau performa integritas mekanis seluruh bangunan Mbaru Niang modern:",
        subsections: [
          {
            title: "Tipe Sensor & Spesifikasi Teknis",
            content: "Semua instrumen sensor memenuhi standar kalibrasi industri militer:",
            table: [
              { "Tipe Sensor": "FBG Strain Sensor", Parameter: "Regangan mekanis mikro", Resolusi: "0.1 microstrain", "Sampling Rate": "100 Hz", Lokasi: "Tertanam di sepanjang serat balok scrimber utama" },
              { "Tipe Sensor": "Akselerometer MEMS", Parameter: "Akselerasi 3-sumbu getaran", Resolusi: "10 micro-g", "Sampling Rate": "500 Hz", Lokasi: "Pertengahan bentang lantai dan puncak atap" },
              { "Tipe Sensor": "Sensor Akustik Emisi (AE)", Parameter: "Perambatan crack mikro bambu", Resolusi: "20 kHz - 1 MHz", "Sampling Rate": "100 kHz", Lokasi: "Dekat area simpul sambungan baut kritis" },
              { "Tipe Sensor": "Sensor Korosi LPR", Parameter: "Laju penetrasi karat logam", Resolusi: "0.01 micrometer/year", "Sampling Rate": "1 kali/hari", Lokasi: "Tunggul angkur tiang pancang bawah laut" }
            ]
          }
        ]
      },
      {
        title: "Logika Alarm & Edge Processing",
        id: "alarm-logic",
        content: "Data sensor berkecepatan tinggi diproses terlebih dahulu di Edge AI Gateway lokal menggunakan algoritma transformasi cepat Fourier (FFT) untuk menyaring bising angin pantai.<br/><br/><b>Kriteria Logika Alarm Multitahap:</b><br/>1. <b>Level HIJAU (Normal):</b> Getaran struktur dan regangan FBG berada di bawah 40% batas elastisitas material. Sinyal dipantau biasa.<br/>2. <b>Level KUNING (Warning):</b> Getaran atau regangan melampaui 60% batas izin, atau terdeteksi 3 rentetan emisi akustik retak mikro dalam 10 menit. Sistem mengirim peringatan ke City Dashboard dan menjadwalkan drone inspection otomatis.<br/>3. <b>Level MERAH (Critical):</b> Regangan FBG melampaui 85% batas elastisitas, frekuensi alami struktur menurun >15% (menandakan kegagalan struktural kaku). Alarm suara evakuasi diaktifkan seketika di pemukiman, dan sistem menutup aliran listrik/gas sirkuler secara otomatis dalam waktu <50ms."
      }
    ]
  },
  {
    id: "VOL-F",
    code: "F",
    title: "Digital Twin",
    category: "Monitoring & Digital Twin",
    description: "Pemodelan dan integrasi 5 jenis Digital Twin (Geometri, Struktur, Energi, Ekologi, Aktivitas Manusia) dalam platform visual terpadu.",
    sections: [
      {
        title: "Lima Pilar Digital Twin",
        id: "five-twins",
        content: "Platform Digital Twin mengintegrasikan 5 pilar simulasi tersinkronisasi untuk memantau siklus hidup pemukiman:",
        subsections: [
          {
            title: "Matriks Peran & Basis Data 5 Pilar Digital Twin",
            content: "Pembagian peran dan teknologi penyimpanan data untuk tiap model twin:",
            table: [
              { Twin: "Geometry Twin", Deskripsi: "Representasi spasial 3D detail", "Basis Data": "PostgreSQL (PostGIS) + glTF", "Model Simulasi": "BIM Model Rendering" },
              { Twin: "Structural Twin", Deskripsi: "Pemodelan regangan & deformasi gempa", "Basis Data": "InfluxDB (Deret Waktu)", "Model Simulasi": "Finite Element Method (FEM) Real-time" },
              { Twin: "Energy Twin", Deskripsi: "Aliran daya microgrid & status baterai", "Basis Data": "TimescaleDB", "Model Simulasi": "Symmetrical Components Analysis" },
              { Twin: "Ecology Twin", Deskripsi: "Kondisi air tanah, terumbu karang, karbon", "Basis Data": "MongoDB Document", "Model Simulasi": "Ecosystem Dynamics Modeling" },
              { Twin: "Human Activity Twin", Deskripsi: "Navigasi pariwisata & okupansi hunian", "Basis Data": "Redis Cache In-Memory", "Model Simulasi": "Agent-Based Simulation (ABS)" }
            ]
          }
        ]
      },
      {
        title: "Siklus Aliran Data & Kalibrasi Twin",
        id: "data-flow-twin",
        content: "Data fisik dari simpul IoT lapangan dikirim ke server broker MQTT lokal di-publish dalam format JSON. Mesin visualisasi WebGL kemudian mengambil data deret waktu tersebut secara berkala untuk memperbarui visualisasi warna elemen struktur secara dinamis (misal: warna pilar berubah dari hijau ke kuning jika mendapat regangan berlebih).<br/><br/><b>Kalibrasi & Validasi Model:</b><br/>Setiap 24 jam, model simulasi elemen hingga (FEM) dikalibrasi ulang secara otomatis menggunakan data riwayat regangan aktual 1 hari sebelumnya. Proses optimasi numerik ini menggunakan metode pencarian gradien terkecil (Levenberg-Marquardt) untuk memastikan tingkat deviasi akurasi model Digital Twin tidak melebihi 3.2% dibanding kondisi fisik aslinya."
      }
    ]
  },
  {
    id: "VOL-G",
    code: "G",
    title: "AI Architecture",
    category: "General & Governance",
    description: "Hierarki pengambilan keputusan AI terdistribusi (Edge vs Cloud), koordinasi Multi-Agent, tata kelola etis, dan sirkuit interupsi manusia (Human Override).",
    sections: [
      {
        title: "Hierarki Keputusan AI Terdistribusi",
        id: "ai-hierarchy",
        content: "Sistem kecerdasan buatan dirancang secara desentralisasi untuk menjamin keandalan ekstrem saat terjadi kegagalan jaringan internet luar wilayah:",
        subsections: [
          {
            title: "Distribusi Komputasi AI",
            content: "Pembagian beban kerja komputasi cerdas berdasarkan latensi dan kompleksitas data:",
            table: [
              { Tingkatan: "Edge AI Nodes (ESP32-S3 / STM32)", Latensi: "<5 ms", Tugas: "Penyaringan sinyal sensor mentah, deteksi puncak getaran gempa, kendali relai daya darurat" },
              { Tingkatan: "Local Server AI (Edge Server - LAN)", Latensi: "<50 ms", Tugas: "Prediksi sisa umur pakai struktur (RUL), penyeimbangan beban mikrogrid lokal, kontrol desalinasi harian" },
              { Tingkatan: "Cloud AI (Server Pusat - WAN Backup)", Latensi: ">500 ms", Tugas: "Pelatihan ulang model AI berskala besar, optimasi makro ekonomi sirkuler, koordinasi logistik luar wilayah" }
            ]
          }
        ]
      },
      {
        title: "Sistem Multi-Agent & Hubungan Koordinasi",
        id: "multi-agent-coordination",
        content: "AI dioperasikan menggunakan arsitektur agen cerdas otonom (Multi-Agent System) yang saling berkomunikasi menggunakan protokol komunikasi agen FIPA-ACL:",
        subsections: [
          {
            title: "Alur Koordinasi Antar-Agen AI",
            content: "Skenario penanganan kelebihan daya surya siang hari oleh multi-agen:",
            diagram: `
[ Agen Solar PV ] ──(Kelebihan Daya 250 kW)──> [ Agen Grid Balance (EMS) ]
                                                       │
        ┌──────────────────────────────────────────────┴──────────────────────────────────────────────┐
        ▼                                              ▼                                              ▼
[ Agen Desalinasi ]                            [ Agen Hidrogen ]                              [ Agen Pompa Air ]
(Meningkatkan laju                             (Mengaktifkan elektroliser                     (Memompa air tawar bersih
 filter RO air tawar)                           pembuat gas H2 cadangan)                       ke tangki puncak bukit)
`
          }
        ]
      },
      {
        title: "Etika AI & Sirkuit Pengendali Manusia (Human Override)",
        id: "ai-ethics-override",
        content: "<b>1. Explainable AI (XAI):</b> Setiap keputusan kritis yang diambil oleh AI (misal: memutus pasokan listrik ke sebuah unit hunian) wajib disertai log penjelas logis berbasis teks (Decision Tree atau SHAP value) yang mudah dibaca oleh operator manusia.<br/><br/><b>2. Human Override (Sirkuit Interupsi):</b> AI otonom dilarang keras melakukan tindakan yang tidak dapat dibatalkan secara fisik tanpa persetujuan manusia. Pada panel City Dashboard disediakan tombol fisik pemutus darurat (Hardwired Kill Switch) yang jika ditekan akan mengisolasi semua gerbang kendali digital dan mengembalikan kontrol ke mode operasi manual manual seketika."
      }
    ]
  }
];
