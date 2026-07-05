import { RiskItem } from '../types';

export const riskRegister: RiskItem[] = [
  // CATEGORY: Structural (1 - 25)
  {
    id: "RSK-001",
    category: "Structural",
    risk: "Delaminasi pada balok komposit bambu (bamboo scrimber) akibat penetrasi kelembapan ekstrem",
    probability: 3,
    impact: 4,
    mitigation: "Penerapan double-coating bio-epoxy resin anti-UV tahan air laut dan penambahan lapisan serat karbon (carbon wrap)",
    residualRisk: "Low",
    owner: "Chief Structural Engineer"
  },
  {
    id: "RSK-002",
    category: "Structural",
    risk: "Kegagalan geser pada sambungan baut baja galvanis akibat korosi korosif atmosferik laut",
    probability: 4,
    impact: 4,
    mitigation: "Menggunakan sambungan pin komposit titanium-bambu atau baja tahan karat tipe 316L dengan isolator isolasi nilon",
    residualRisk: "Low",
    owner: "Marine Engineer"
  },
  {
    id: "RSK-003",
    category: "Structural",
    risk: "Degradasi biologis bambu akibat serangan jamur pelapuk putih (White Rot) pada area pondasi basah",
    probability: 3,
    impact: 5,
    mitigation: "Perlakuan impregnasi borat tekanan tinggi terstandarisasi AWPA sebelum proses laminasi komposit",
    residualRisk: "Low",
    owner: "Bamboo Composite Specialist"
  },
  {
    id: "RSK-004",
    category: "Structural",
    risk: "Resonansi struktural Mbaru Niang akibat beban angin siklon yang melampaui frekuensi alami struktur",
    probability: 2,
    impact: 5,
    mitigation: "Desain aerodinamis kerucut aerofoil 360 derajat dan kalibrasi Tuned Mass Damper (TMD) cair di puncak struktur",
    residualRisk: "Low",
    owner: "Chief Structural Engineer"
  },
  {
    id: "RSK-005",
    category: "Structural",
    risk: "Rayap tanah (Coptotermes formosanus) memakan serat selulosa bambu struktural",
    probability: 3,
    impact: 4,
    mitigation: "Pemasangan penghalang fisik tembaga (termite shield) pada pondasi beton dan sirkulasi udara aktif bawah lantai",
    residualRisk: "Low",
    owner: "Bamboo Composite Specialist"
  },
  {
    id: "RSK-006",
    category: "Structural",
    risk: "Kelelahan bahan (fatigue) pada elemen sambungan utama akibat siklus beban gelombang pasang surut kontinu",
    probability: 4,
    impact: 3,
    mitigation: "Siklus inspeksi berbasis Structural Health Monitoring (SHM) real-time menggunakan sensor serat optik FBG",
    residualRisk: "Low",
    owner: "SHM Specialist"
  },
  {
    id: "RSK-007",
    category: "Structural",
    risk: "Kegagalan rekat lem bio-epoxy akibat paparan radiasi UV indeks ekstrim Flores (>11 UVI)",
    probability: 3,
    impact: 4,
    mitigation: "Pencampuran nano-partikel silika (SiO2) ke dalam formula bio-epoxy untuk menyerap radiasi UV-A dan UV-B",
    residualRisk: "Low",
    owner: "Bamboo Composite Specialist"
  },
  {
    id: "RSK-008",
    category: "Structural",
    risk: "Keretakan mikro pada pondasi tiang pancang komposit bambu-beton prategang akibat salinitas tinggi air laut",
    probability: 3,
    impact: 4,
    mitigation: "Pemberian proteksi katodik tipe anoda korban (sacrificial zinc anode) di sepanjang area penetrasi air laut",
    residualRisk: "Low",
    owner: "Marine Engineer"
  },
  {
    id: "RSK-009",
    category: "Structural",
    risk: "Deformasi rangkak (creep) jangka panjang pada balok bentang lebar laminasi bambu horizontal",
    probability: 3,
    impact: 3,
    mitigation: "Membatasi tegangan izin jangka panjang hingga maksimal 40% dari MOR (Modulus of Rupture) material",
    residualRisk: "Low",
    owner: "Chief Structural Engineer"
  },
  {
    id: "RSK-010",
    category: "Structural",
    risk: "Buckling lokalan pada dinding silinder tipis bambu scrimber akibat beban tekan aksial gempa bumi",
    probability: 2,
    impact: 4,
    mitigation: "Pengisian rongga internal dengan bio-polyurethane foam kepadatan tinggi untuk stabilitas geometris penampang",
    residualRisk: "Low",
    owner: "Chief Structural Engineer"
  },
  {
    id: "RSK-011",
    category: "Structural",
    risk: "Kegagalan tarik belah (splitting) bambu laminasi pada area baut pemasangan sambungan kaku",
    probability: 4,
    impact: 4,
    mitigation: "Pemasangan ring baja kompresi lebar dan plat pengapit eksternal fiber-reinforced polymer (FRP)",
    residualRisk: "Low",
    owner: "Chief Structural Engineer"
  },
  {
    id: "RSK-012",
    category: "Structural",
    risk: "Kerusakan struktur atap ilalang tradisional akibat erosi air hujan deras dengan intensitas ekstrim",
    probability: 4,
    impact: 3,
    mitigation: "Substitusi material atap dengan kombinasi anyaman komposit bambu kedap air dan serat kelapa hidrofobik",
    residualRisk: "Low",
    owner: "Bamboo Composite Specialist"
  },
  {
    id: "RSK-013",
    category: "Structural",
    risk: "Penurunan pondasi dangkal akibat kompresibilitas tanah lempung Flores yang tidak merata",
    probability: 3,
    impact: 4,
    mitigation: "Penerapan tiang pancang mikro (micropile) bamboo composite hingga menyentuh lapisan batuan kompak",
    residualRisk: "Low",
    owner: "Chief Structural Engineer"
  },
  {
    id: "RSK-014",
    category: "Structural",
    risk: "Pembengkakan volume (swelling) bambu akibat kelembapan udara konstan di atas 90%",
    probability: 4,
    impact: 3,
    mitigation: "Proses modifikasi termal bambu (torrefaction) suhu 180°C sebelum laminasi untuk menurunkan sifat higroskopis",
    residualRisk: "Low",
    owner: "Bamboo Composite Specialist"
  },
  {
    id: "RSK-015",
    category: "Structural",
    risk: "Abrasi fisik eksternal struktur tiang pantai akibat hantaman puing-puing apung laut saat gelombang pasang",
    probability: 3,
    impact: 3,
    mitigation: "Pemasangan pelindung abrasi HDPE berserat daur ulang di zona pasang surut setinggi 1.5 meter",
    residualRisk: "Low",
    owner: "Marine Engineer"
  },
  {
    id: "RSK-016",
    category: "Structural",
    risk: "Kurangnya adhesi antar-serat bambu pada proses laminasi akibat kandungan minyak bambu alami yang tinggi",
    probability: 3,
    impact: 3,
    mitigation: "Ekstraksi minyak dan getah (degumming) menggunakan rendaman larutan natrium hidroksida (NaOH) 1-2% sebelum pengeleman",
    residualRisk: "Low",
    owner: "Bamboo Composite Specialist"
  },
  {
    id: "RSK-017",
    category: "Structural",
    risk: "Kegagalan mekanis sambungan geser sendi akibat puntiran torsi angin pada sayap Mbaru Niang modern",
    probability: 2,
    impact: 4,
    mitigation: "Menambahkan kabel penegang (tension tie rod) komposit karbon di sepanjang kerangka luar diagonal",
    residualRisk: "Low",
    owner: "Chief Structural Engineer"
  },
  {
    id: "RSK-018",
    category: "Structural",
    risk: "Suhu ekstrim ruang atap menyebabkan degradasi termal lokal kekuatan tarik bambu scrimber",
    probability: 2,
    impact: 3,
    mitigation: "Penyediaan ventilasi konveksi pasif (efek cerobong) alami di puncak kerucut Mbaru Niang",
    residualRisk: "Low",
    owner: "Chief Structural Engineer"
  },
  {
    id: "RSK-019",
    category: "Structural",
    risk: "Pelepasan delaminasi epoksi sambungan geser akrilik karena vibrasi frekuensi tinggi",
    probability: 3,
    impact: 3,
    mitigation: "Pengujian dinamik non-destruktif ultrasonik pada sambungan kritis secara periodik pasca-instalasi",
    residualRisk: "Low",
    owner: "SHM Specialist"
  },
  {
    id: "RSK-020",
    category: "Structural",
    risk: "Kegagalan penjangkaran (anchor bolt shear) antara struktur kayu bambu dengan balok sloof beton di permukaan tanah",
    probability: 2,
    impact: 5,
    mitigation: "Menggunakan pelat dasar baja 3D tertanam (embedded 3D baseplate) dengan pasak vertikal ganda berkekuatan tinggi",
    residualRisk: "Low",
    owner: "Chief Structural Engineer"
  },
  {
    id: "RSK-021",
    category: "Structural",
    risk: "Deformasi tekuk torsi lateral balok bambu laminasi silang pada kondisi pembebanan penuh",
    probability: 2,
    impact: 4,
    mitigation: "Instalasi lateral bracing berkala di setiap jarak 1.8 meter searah bentang balok utama",
    residualRisk: "Low",
    owner: "Chief Structural Engineer"
  },
  {
    id: "RSK-022",
    category: "Structural",
    risk: "Erosi tanah penyangga di bawah kaki pondasi akibat limpasan aliran air hujan permukaan",
    probability: 3,
    impact: 4,
    mitigation: "Pemasangan bronjong batu berlapis kelapa berserat dilingkari vegetasi akar wangi (vetiver) penahan erosi",
    residualRisk: "Low",
    owner: "Environmental Engineer"
  },
  {
    id: "RSK-023",
    category: "Structural",
    risk: "Distorsi puntir struktur akibat distribusi beban asimetris ruang dalam Mbaru Niang",
    probability: 2,
    impact: 3,
    mitigation: "Desain distribusi tata letak beban berputar simetris radial di sekeliling pilar utama (Tiang Agung)",
    residualRisk: "Low",
    owner: "Chief Structural Engineer"
  },
  {
    id: "RSK-024",
    category: "Structural",
    risk: "Penurunan modulus elastisitas (MOE) komposit bambu akibat fluktuasi basah-kering ekstrim monsun",
    probability: 3,
    impact: 4,
    mitigation: "Impregnasi furfuril alkohol (furfurylization) dari limbah pertanian untuk membentuk struktur seluler hidrofobik permanen",
    residualRisk: "Low",
    owner: "Bamboo Composite Specialist"
  },
  {
    id: "RSK-025",
    category: "Structural",
    risk: "Kegagalan geser horizontal pada antarmuka pelat lantai bambu laminasi silang (CLB - Cross Laminated Bamboo)",
    probability: 2,
    impact: 4,
    mitigation: "Penerapan sekrup miring (screw connection) penahan geser tambahan di sepanjang bidang antarmuka rekat",
    residualRisk: "Low",
    owner: "Chief Structural Engineer"
  },

  // CATEGORY: Environmental (26 - 45)
  {
    id: "RSK-026",
    category: "Environmental",
    risk: "Sedimentasi laut lokal dan kerusakan terumbu karang akibat konstruksi pondasi lepas pantai",
    probability: 3,
    impact: 5,
    mitigation: "Penggunaan tirai lumpur (silt curtain) geotextile selama pemancangan tiang mikro lepas pantai",
    residualRisk: "Low",
    owner: "Oceanographer"
  },
  {
    id: "RSK-027",
    category: "Environmental",
    risk: "Biofouling agresif oleh teritip dan alga pada turbin arus laut yang menurunkan efisiensi konversi daya",
    probability: 5,
    impact: 3,
    mitigation: "Pelapisan pisau turbin dengan cat non-toksik anti-fouling berbasis hidrogen-silikon licin (slick coating)",
    residualRisk: "Medium",
    owner: "Marine Engineer"
  },
  {
    id: "RSK-028",
    category: "Environmental",
    risk: "Kematian biota laut (mamalia dan kura-kura) akibat terjebak struktur turbin arus laut mikro",
    probability: 2,
    impact: 4,
    mitigation: "Instalasi jaring pelindung berbahan polimer elastis dan sensor sonar akustik pengusir mamalia laut",
    residualRisk: "Low",
    owner: "Oceanographer"
  },
  {
    id: "RSK-029",
    category: "Environmental",
    risk: "Peningkatan salinitas akuifer air tanah tawar akibat ekstraksi air berlebih di wilayah pesisir",
    probability: 4,
    impact: 4,
    mitigation: "Larangan sumur bor air tanah pesisir dan bergantung 100% pada desalinasi bertenaga surya dan tadah hujan",
    residualRisk: "Low",
    owner: "Water Engineer"
  },
  {
    id: "RSK-030",
    category: "Environmental",
    risk: "Akumulasi bahan kimia boron pengawet bambu yang hanyut mencemari tanah pekarangan lokal",
    probability: 2,
    impact: 3,
    mitigation: "Sistem pengawetan sirkulasi tertutup (closed-loop) dan transisi penuh ke minyak mimba alami jika memungkinkan",
    residualRisk: "Low",
    owner: "Environmental Engineer"
  },
  {
    id: "RSK-031",
    category: "Environmental",
    risk: "Gangguan jalur migrasi penyu bertelur di pasir pantai akibat instalasi pencahayaan luar ruangan pemukiman",
    probability: 3,
    impact: 4,
    mitigation: "Implementasi lampu LED bersuhu warna rendah amber (<590nm) yang diarahkan ke bawah (downshielded)",
    residualRisk: "Low",
    owner: "Environmental Engineer"
  },
  {
    id: "RSK-032",
    category: "Environmental",
    risk: "Eutrofikasi teluk lokal akibat kebocoran limbah cair rumah tangga kaya fosfat dan nitrat",
    probability: 3,
    impact: 4,
    mitigation: "Penyaluran semua limbah cair melalui constructed wetland bervegetasi Typha domingensis sebelum dilepas",
    residualRisk: "Low",
    owner: "Water Engineer"
  },
  {
    id: "RSK-033",
    category: "Environmental",
    risk: "Akumulasi mikroplastik di area pantai akibat erosi material komposit polimer luar ruangan non-biodegradable",
    probability: 2,
    impact: 3,
    mitigation: "Mewajibkan penggunaan matriks PLA bioplastik atau bio-resin berbasis kedelai untuk komposit non-struktural",
    residualRisk: "Low",
    owner: "Circular Economy Specialist"
  },
  {
    id: "RSK-034",
    category: "Environmental",
    risk: "Perubahan ekosistem estuari akibat modifikasi aliran air permukaan pasca-pembangunan jalan setapak",
    probability: 2,
    impact: 3,
    mitigation: "Membangun jalan setapak melayang di atas tiang pancang bambu mini, melestarikan hidrologi lahan basah asli",
    residualRisk: "Low",
    owner: "Environmental Engineer"
  },
  {
    id: "RSK-035",
    category: "Environmental",
    risk: "Pengurangan keanekaragaman hayati vegetasi akibat pembersihan lahan skala pemukiman",
    probability: 3,
    impact: 3,
    mitigation: "Kewajiban penanaman kembali jenis pohon endemik Flores (seperti eukaliptus ampupu) minimal 3x luas tebangan",
    residualRisk: "Low",
    owner: "Environmental Engineer"
  },
  {
    id: "RSK-036",
    category: "Environmental",
    risk: "Kebisingan bawah air dari getaran Marine Current Turbine mengganggu navigasi paus purba",
    probability: 2,
    impact: 4,
    mitigation: "Dudukan generator berperedam getaran akustik elastomer khusus kelas militer di bawah dasar laut",
    residualRisk: "Low",
    owner: "Oceanographer"
  },
  {
    id: "RSK-037",
    category: "Environmental",
    risk: "Emisi bau tak sedap dari instalasi bioreaktor biogas anaerobik pemukiman",
    probability: 3,
    impact: 3,
    mitigation: "Penggunaan biofilter karbon aktif bambu pada katup pelepasan gas pengaman biogas",
    residualRisk: "Low",
    owner: "Waste Specialist"
  },
  {
    id: "RSK-038",
    category: "Environmental",
    risk: "Polusi udara lokal akibat pembakaran gas sisa (flaring) pada bioreaktor pemukiman saat darurat",
    probability: 2,
    impact: 2,
    mitigation: "Pemasangan unit penangkap karbon (carbon capture unit) mini berbasis arang aktif bambu",
    residualRisk: "Low",
    owner: "Circular Economy Specialist"
  },
  {
    id: "RSK-039",
    category: "Environmental",
    risk: "Kematian massal karang akibat pemanasan suhu permukaan laut lokal (coral bleaching)",
    probability: 4,
    impact: 5,
    mitigation: "Implementasi teknologi restorasi karang arus mikro (Biorock) bertenaga listrik surya berlebih siang hari",
    residualRisk: "Medium",
    owner: "Oceanographer"
  },
  {
    id: "RSK-040",
    category: "Environmental",
    risk: "Over-harvesting bambu lokal yang mengganggu kelestarian rumpun bambu liar Flores",
    probability: 4,
    impact: 4,
    mitigation: "Sertifikasi bambu FSC (Forest Stewardship Council) dan kemitraan koperasi petani bambu terkelola berkelanjutan",
    residualRisk: "Low",
    owner: "Circular Economy Specialist"
  },
  {
    id: "RSK-041",
    category: "Environmental",
    risk: "Kehilangan fungsi tanah penyerap karbon akibat pemadatan tanah selama fase mobilisasi alat berat",
    probability: 3,
    impact: 3,
    mitigation: "Penggunaan jalur logistik sementara berlapis anyaman bambu tebal untuk mendistribusikan berat muatan",
    residualRisk: "Low",
    owner: "Environmental Engineer"
  },
  {
    id: "RSK-042",
    category: "Environmental",
    risk: "Timbulnya populasi nyamuk vektor penyakit pada penampungan air hujan terbuka",
    probability: 4,
    impact: 3,
    mitigation: "Penutupan tangki rapat menggunakan filter mesh stainless steel 0.2mm dan introduksi ikan pemakan jentik",
    residualRisk: "Low",
    owner: "Water Engineer"
  },
  {
    id: "RSK-043",
    category: "Environmental",
    risk: "Pengendapan abu vulkanik pada danau penampung air tawar setempat pasca letusan gunung api aktif Flores",
    probability: 2,
    impact: 4,
    mitigation: "Pemasangan atap penutup mekanis darurat otomatis pada unit intake penampungan utama",
    residualRisk: "Low",
    owner: "Water Engineer"
  },
  {
    id: "RSK-044",
    category: "Environmental",
    risk: "Gangguan medan elektromagnetik kabel bawah laut terhadap sensor navigasi ikan hiu",
    probability: 2,
    impact: 3,
    mitigation: "Selubung pelindung kabel lapis ganda baja armor-magnetic shielding untuk meredam kebocoran elektromagnetik",
    residualRisk: "Low",
    owner: "Marine Engineer"
  },
  {
    id: "RSK-045",
    category: "Environmental",
    risk: "Kerusakan tanah pertanian akibat pembuangan residu digestate biogas yang terlalu asam",
    probability: 3,
    impact: 3,
    mitigation: "Netralisasi keasaman digestat menggunakan kalsium karbonat (batu kapur lokal) sebelum diaplikasikan sebagai pupuk",
    residualRisk: "Low",
    owner: "Circular Economy Specialist"
  },

  // CATEGORY: Energy (46 - 65)
  {
    id: "RSK-046",
    category: "Energy",
    risk: "Thermal runaway pada sistem penyimpanan energi baterai LFP skala besar akibat suhu udara ekstrim pesisir",
    probability: 2,
    impact: 5,
    mitigation: "Sistem pendingin cair (liquid cooling) aktif bertenaga surya langsung dengan ruang isolasi beton tahan ledakan",
    residualRisk: "Low",
    owner: "Renewable Energy Engineer"
  },
  {
    id: "RSK-047",
    category: "Energy",
    risk: "Ketidakstabilan frekuensi mikrogrid akibat intermittency tinggi pembangkit listrik tenaga surya saat awan tebal tiba-tiba",
    probability: 4,
    impact: 4,
    mitigation: "Penerapan sistem superkapasitor respon cepat (<10ms) dan grid-forming inverter pintar",
    residualRisk: "Low",
    owner: "Smart Grid Engineer"
  },
  {
    id: "RSK-048",
    category: "Energy",
    risk: "Kegagalan komunikasi GOOSE (IEC 61850) antar-gardu pintar menyebabkan kegagalan sistem proteksi relai cepat",
    probability: 2,
    impact: 5,
    mitigation: "Membangun redundansi fisik jaringan serat optik topologi ring ganda dengan protokol PRP (Parallel Redundancy Protocol)",
    residualRisk: "Low",
    owner: "Smart Grid Engineer"
  },
  {
    id: "RSK-049",
    category: "Energy",
    risk: "Korosi garam ekstrim pada terminal inverter luar ruangan dan kabinet distribusi kelistrikan",
    probability: 5,
    impact: 3,
    mitigation: "Penyediaan kabinet berperingkat NEMA 4X / IP66 dengan sistem pendingin penukar panas loop tertutup kedap udara luar",
    residualRisk: "Low",
    owner: "Smart Grid Engineer"
  },
  {
    id: "RSK-050",
    category: "Energy",
    risk: "Kerusakan mekanis belitan generator arus laut akibat lilitan sampah plastik terapung samudera",
    probability: 3,
    impact: 4,
    mitigation: "Sistem alarm hambatan rotor mekanis otomatis dan pembalik putaran poros (reverse thrust) darurat dari jauh",
    residualRisk: "Low",
    owner: "Marine Engineer"
  },
  {
    id: "RSK-051",
    category: "Energy",
    risk: "Penurunan output solar PV akibat tertutup akumulasi lapisan debu vulkanik Flores",
    probability: 3,
    impact: 4,
    mitigation: "Pemasangan nozzle penyiram air bertenaga gravitasi otomatis untuk membersihkan debu secara instan dari jauh",
    residualRisk: "Low",
    owner: "Renewable Energy Engineer"
  },
  {
    id: "RSK-052",
    category: "Energy",
    risk: "Arus harmonik tinggi akibat dominasi beban elektronika daya inverter merusak transformator distribusi",
    probability: 3,
    impact: 3,
    mitigation: "Instalasi Active Harmonic Filter (AHF) di setiap pusat beban utama pemukiman",
    residualRisk: "Low",
    owner: "Smart Grid Engineer"
  },
  {
    id: "RSK-053",
    category: "Energy",
    risk: "Kegagalan islanding mikrogrid saat terputus dari pasokan listrik utama eksternal",
    probability: 2,
    impact: 4,
    mitigation: "Uji berkala fungsi auto-islanding sinkronisasi inverter berbasis relai sinkrosensitif",
    residualRisk: "Low",
    owner: "Smart Grid Engineer"
  },
  {
    id: "RSK-054",
    category: "Energy",
    risk: "Kebocoran gas hidrogen dari ruang penyimpanan silinder kompresi tinggi hasil elektrolisis",
    probability: 2,
    impact: 5,
    mitigation: "Sensor deteksi hidrogen ultrapensensitif, ventilasi otomatis atas, dan dinding pelepas ledakan terarah",
    residualRisk: "Low",
    owner: "Renewable Energy Engineer"
  },
  {
    id: "RSK-055",
    category: "Energy",
    risk: "Efisiensi solar panel menurun drastis akibat peningkatan suhu kerja panel di Flores (>50°C)",
    probability: 4,
    impact: 3,
    mitigation: "Pemasangan panel tipe bifacial dengan sirkulasi udara bawah atap terbuka yang optimal dan reflektor albedo",
    residualRisk: "Low",
    owner: "Renewable Energy Engineer"
  },
  {
    id: "RSK-056",
    category: "Energy",
    risk: "Kekurangan biomassa kering untuk umpan digester biogas selama musim kemarau Flores yang panjang",
    probability: 3,
    impact: 4,
    mitigation: "Diversifikasi bahan umpan menggunakan limbah organik rumah tangga dan alga laut kering yang diolah",
    residualRisk: "Low",
    owner: "Waste Specialist"
  },
  {
    id: "RSK-057",
    category: "Energy",
    risk: "Kerusakan isolator kabel distribusi tegangan menengah akibat sambaran petir tidak langsung di area pegunungan pesisir",
    probability: 3,
    impact: 4,
    mitigation: "Instalasi kawat tanah pelindung (shield wire) di sepanjang lintasan kabel atas tanah dan surge arrester logam oksida",
    residualRisk: "Low",
    owner: "Smart Grid Engineer"
  },
  {
    id: "RSK-058",
    category: "Energy",
    risk: "Penurunan kapasitas penyimpanan energi musiman akibat penuaan dini (cyclic degradation) sel baterai",
    probability: 3,
    impact: 3,
    mitigation: "Algoritma manajemen pengisian daya cerdas (Smart EMS) yang membatasi DoD (Depth of Discharge) maksimal 80%",
    residualRisk: "Low",
    owner: "Smart Grid Engineer"
  },
  {
    id: "RSK-059",
    category: "Energy",
    risk: "Kebocoran fluida amonia sirkulasi kerja tertutup pada sistem masa depan OTEC (roadmap)",
    probability: 2,
    impact: 5,
    mitigation: "Pemilihan baja tahan karat super duplex, katup isolasi darurat redundan ganda, dan sensor deteksi kimia air",
    residualRisk: "Low",
    owner: "Marine Engineer"
  },
  {
    id: "RSK-060",
    category: "Energy",
    risk: "Ketidakmampuan EMS (Energy Management System) memprediksi beban puncak saat festival adat berlangsung",
    probability: 3,
    impact: 3,
    mitigation: "Integrasi kalender adat Flores ke dalam model AI beban prediktif EMS berbasis LSTM",
    residualRisk: "Low",
    owner: "AI System Architect"
  },
  {
    id: "RSK-061",
    category: "Energy",
    risk: "Sirkuit pintas (short circuit) pada jaringan kabel distribusi bawah tanah akibat gigitan tikus atau kepiting darat",
    probability: 3,
    impact: 3,
    mitigation: "Mewajibkan pipa pelindung kabel dari PVC tebal berlapis jaring kawat baja antikarat (double armored)",
    residualRisk: "Low",
    owner: "Smart Grid Engineer"
  },
  {
    id: "RSK-062",
    category: "Energy",
    risk: "Fluktuasi tegangan akibat penyalaan pompa desalinasi berdaya besar di pulau satelit",
    probability: 3,
    impact: 3,
    mitigation: "Menggunakan inverter tipe soft-starter atau VFD (Variable Frequency Drive) pada setiap motor pompa besar",
    residualRisk: "Low",
    owner: "Smart Grid Engineer"
  },
  {
    id: "RSK-063",
    category: "Energy",
    risk: "Kerusakan fisik panel surya akibat hantaman dahan pohon saat badai angin kencang",
    probability: 3,
    impact: 3,
    mitigation: "Pemberlakuan jarak bebas (clearance zone) minimal 5 meter dari tajuk pohon terdekat ke area PV",
    residualRisk: "Low",
    owner: "Renewable Energy Engineer"
  },
  {
    id: "RSK-064",
    category: "Energy",
    risk: "Kehilangan kemampuan sinkronisasi fase antar generator inverter surya terdistribusi",
    probability: 2,
    impact: 4,
    mitigation: "Penerapan sinkronisasi waktu berbasis GPS berpresisi sub-mikrodetik (IEEE 1588 PTP)",
    residualRisk: "Low",
    owner: "Smart Grid Engineer"
  },
  {
    id: "RSK-065",
    category: "Energy",
    risk: "Kelebihan pasokan energi pada tengah hari saat beban pemukiman sangat rendah",
    probability: 4,
    impact: 3,
    mitigation: "AI mengarahkan sisa energi otomatis untuk desalinasi air cadangan, pengisian tangki hidrogen, atau pembuatan es",
    residualRisk: "Low",
    owner: "AI System Architect"
  },

  // CATEGORY: Water/Waste (66 - 85)
  {
    id: "RSK-066",
    category: "Water/Waste",
    risk: "Kegagalan desalinasi akibat penyumbatan membran Reverse Osmosis (RO) oleh ledakan alga merah (red tide)",
    probability: 3,
    impact: 4,
    mitigation: "Instalasi filter pembersih otomatis multi-media sand-gravel dan sistem dosing klorinasi aman sebelum membran",
    residualRisk: "Low",
    owner: "Water Engineer"
  },
  {
    id: "RSK-067",
    category: "Water/Waste",
    risk: "Pencemaran mikroba Coliform pada tangki penyimpanan air hujan utama pemukiman",
    probability: 3,
    impact: 4,
    mitigation: "Instalasi desinfeksi lampu ultraviolet (UV) inline ganda dan filter karbon aktif sebelum didistribusikan",
    residualRisk: "Low",
    owner: "Water Engineer"
  },
  {
    id: "RSK-068",
    category: "Water/Waste",
    risk: "Kebocoran pipa air limbah hitam (blackwater) mencemari air permukaan pekarangan Mbaru Niang",
    probability: 2,
    impact: 5,
    mitigation: "Penggunaan pipa las pantat butt-fused HDPE kualitas tinggi yang tahan deformasi tektonik tanah pesisir",
    residualRisk: "Low",
    owner: "Water Engineer"
  },
  {
    id: "RSK-069",
    category: "Water/Waste",
    risk: "Kandungan tar tinggi dalam gas sintesis hasil termokimia sampah komposit yang merusak mesin turbin",
    probability: 3,
    impact: 4,
    mitigation: "Pemasangan reaktor tar cracking temperatur tinggi (>900°C) dengan katalis dolomit alami lokal",
    residualRisk: "Medium",
    owner: "Waste Specialist"
  },
  {
    id: "RSK-070",
    category: "Water/Waste",
    risk: "Penumpukan abu sisa pirolisis sampah komposit yang mengandung sisa logam pengawet bambu",
    probability: 3,
    impact: 3,
    mitigation: "Pencampuran abu ke dalam adukan semen paving block beton non-struktural (solidifikasi aman)",
    residualRisk: "Low",
    owner: "Circular Economy Specialist"
  },
  {
    id: "RSK-071",
    category: "Water/Waste",
    risk: "Penyumbatan pipa distribusi air minum akibat pengendapan kalsit (kerak kapur) tinggi air pegunungan pesisir",
    probability: 4,
    impact: 3,
    mitigation: "Pemasangan unit pelunak air (water softener) magnetis ramah lingkungan di stasiun pompa induk",
    residualRisk: "Low",
    owner: "Water Engineer"
  },
  {
    id: "RSK-072",
    category: "Water/Waste",
    risk: "Kebocoran kontaminan dari unit pemrosesan sampah baterai litium bekas",
    probability: 2,
    impact: 5,
    mitigation: "Wadah penyimpanan kedap air sekunder dengan lapisan resin polietilen tebal khusus tahan asam",
    residualRisk: "Low",
    owner: "Waste Specialist"
  },
  {
    id: "RSK-073",
    category: "Water/Waste",
    risk: "Kejenuhan lahan basah buatan (constructed wetland) sehingga gagal menyerap sisa nitrat-fosfat greywater",
    probability: 3,
    impact: 3,
    mitigation: "Panen dan peremajaan berkala tanaman air pembersih (cattail) setiap 6 bulan untuk mencegah pembusukan biologis",
    residualRisk: "Low",
    owner: "Water Engineer"
  },
  {
    id: "RSK-074",
    category: "Water/Waste",
    risk: "Kegagalan pompa vakum sistem penyaluran air limbah terpusat saat listrik padam total",
    probability: 2,
    impact: 4,
    mitigation: "Penyediaan genset cadangan otomatis bertenaga biogas siap pakai dan tangki akumulasi vakum bertekanan",
    residualRisk: "Low",
    owner: "Water Engineer"
  },
  {
    id: "RSK-075",
    category: "Water/Waste",
    risk: "Kejenuhan kapasitas tangki penampung lumpur tinja (septic tank) pemukiman",
    probability: 3,
    impact: 3,
    mitigation: "Instalasi detektor level ketinggian lumpur berbasis ultrasonik IoT yang terintegrasi ke City Dashboard",
    residualRisk: "Low",
    owner: "Waste Specialist"
  },
  {
    id: "RSK-076",
    category: "Water/Waste",
    risk: "Keracunan mikroba pengurai pada reaktor biogas akibat deterjen kimia berlebih dari laundry pemukiman",
    probability: 3,
    impact: 4,
    mitigation: "Kewajiban penggunaan deterjen ramah lingkungan biodegradable (ecolabel) bagi seluruh warga",
    residualRisk: "Low",
    owner: "Waste Specialist"
  },
  {
    id: "RSK-077",
    category: "Water/Waste",
    risk: "Kekeringan tangki air hujan pemukiman akibat kemarau Flores ekstrem melampaui 6 bulan",
    probability: 4,
    impact: 4,
    mitigation: "AI mengaktifkan mode desalinasi air laut kapasitas penuh bertenaga surya untuk suplai interkoneksi utama",
    residualRisk: "Low",
    owner: "Water Engineer"
  },
  {
    id: "RSK-078",
    category: "Water/Waste",
    risk: "Korosi asam sulfat biologis (microbiologically induced corrosion) di dalam pipa beton saluran limbah",
    probability: 3,
    impact: 3,
    mitigation: "Pelapisan dinding bagian dalam pipa dengan epoxy coal-tar tebal atau beralih ke pipa plastik polietilena",
    residualRisk: "Low",
    owner: "Water Engineer"
  },
  {
    id: "RSK-079",
    category: "Water/Waste",
    risk: "Terbuangnya nutrisi berharga urin manusia tanpa dimanfaatkan ulang",
    probability: 3,
    impact: 2,
    mitigation: "Implementasi toilet pemisah urin (urine-diverting toilet) untuk pembuatan pupuk kaya fosfor (struvite)",
    residualRisk: "Low",
    owner: "Circular Economy Specialist"
  },
  {
    id: "RSK-080",
    category: "Water/Waste",
    risk: "Hilangnya tekanan aliran air minum bersih pada titik elevasi pemukiman tertinggi",
    probability: 3,
    impact: 3,
    mitigation: "Pemasangan tangki menara air gravitasi di puncak bukit terdekat dengan pompa booster cerdas variabel",
    residualRisk: "Low",
    owner: "Water Engineer"
  },
  {
    id: "RSK-081",
    category: "Water/Waste",
    risk: "Tercampurnya sampah elektronik B3 ke dalam tempat sampah organik warga",
    probability: 4,
    impact: 3,
    mitigation: "Penyediaan tempat pembuangan khusus sampah elektronik berinsentif poin digital (reward token)",
    residualRisk: "Low",
    owner: "Circular Economy Specialist"
  },
  {
    id: "RSK-082",
    category: "Water/Waste",
    risk: "Ledakan mikroba patogen pada limbah kompos organik akibat pemanasan tumpukan kurang merata",
    probability: 3,
    impact: 3,
    mitigation: "Sistem aerasi paksa dengan pemantauan sensor suhu nirkabel IoT memastikan suhu tumpukan konstan di atas 55°C",
    residualRisk: "Low",
    owner: "Waste Specialist"
  },
  {
    id: "RSK-083",
    category: "Water/Waste",
    risk: "Erosi pinggiran pantai akibat debit aliran air limpasan drainase makro saat badai hujan deras",
    probability: 3,
    impact: 3,
    mitigation: "Instalasi bak pengendap pasir lambat dan pemecah energi air limpasan dari susunan batu kali berongga",
    residualRisk: "Low",
    owner: "Water Engineer"
  },
  {
    id: "RSK-084",
    category: "Water/Waste",
    risk: "Kontaminasi zat kimia berbahaya dari aspal jalan konvensional ke limpasan air hujan sekitar",
    probability: 3,
    impact: 3,
    mitigation: "Transisi penuh menggunakan jalan paving blok berpori (permeable pavement) berbahan dasar limbah keramik lokal",
    residualRisk: "Low",
    owner: "Circular Economy Specialist"
  },
  {
    id: "RSK-085",
    category: "Water/Waste",
    risk: "Bau hidrogen sulfida (H2S) yang menyengat dari area pengeringan biochar limbah lumpur tinja",
    probability: 3,
    impact: 2,
    mitigation: "Pengeringan di rumah kaca tertutup dengan scrubber filter gas asam berbasis limbah abu pembakaran sekam padi",
    residualRisk: "Low",
    owner: "Waste Specialist"
  },

  // CATEGORY: AI & IoT (86 - 105)
  {
    id: "RSK-086",
    category: "AI & IoT",
    risk: "Pergeseran akurasi (drift) model AI prediksi kesehatan struktur bambu akibat perubahan iklim ekstrim Flores",
    probability: 3,
    impact: 4,
    mitigation: "Implementasi continuous learning pipeline di edge cloud dengan kalibrasi ulang model otomatis bulanan",
    residualRisk: "Low",
    owner: "AI System Architect"
  },
  {
    id: "RSK-087",
    category: "AI & IoT",
    risk: "Kerusakan fisik sensor serat optik FBG struktural akibat tekukan berlebih saat pemasangan beton precast",
    probability: 4,
    impact: 4,
    mitigation: "Menggunakan selubung pelindung pipa kapiler baja tahan karat sebelum proses pengecoran beton",
    residualRisk: "Low",
    owner: "SHM Specialist"
  },
  {
    id: "RSK-088",
    category: "AI & IoT",
    risk: "Serangan siber Man-in-the-Middle pada protokol nirkabel LoRaWAN pengumpul data sensor lingkungan",
    probability: 3,
    impact: 4,
    mitigation: "Mewajibkan enkripsi AES-128 end-to-end tingkat perangkat keras dengan kunci keamanan unik per perangkat",
    residualRisk: "Low",
    owner: "IoT Architect"
  },
  {
    id: "RSK-089",
    category: "AI & IoT",
    risk: "Kehilangan koneksi internet satelit backup Starlink akibat badai awan badai petir tebal",
    probability: 4,
    impact: 3,
    mitigation: "Desain sistem operasi otonom penuh di edge server lokal dengan sinkronisasi tunda saat satelit aktif kembali",
    residualRisk: "Low",
    owner: "IoT Architect"
  },
  {
    id: "RSK-090",
    category: "AI & IoT",
    risk: "Miskalibrasi geometri Digital Twin akibat perubahan deformasi seismik mikro tanah sekitar",
    probability: 2,
    impact: 4,
    mitigation: "Sistem kalibrasi otomatis harian menggunakan sensor laser LIDAR stasioner referensi koordinat tetap GPS RTK",
    residualRisk: "Low",
    owner: "Digital Twin Architect"
  },
  {
    id: "RSK-091",
    category: "AI & IoT",
    risk: "Konsumsi daya listrik komputer Edge AI berlebih menguras baterai darurat nodal sensor jarak jauh",
    probability: 3,
    impact: 3,
    mitigation: "Penggunaan mikrokontroler ultra low power (seperti ESP32-S3 atau STM32U5) dengan akselerator neural terpadu",
    residualRisk: "Low",
    owner: "IoT Architect"
  },
  {
    id: "RSK-092",
    category: "AI & IoT",
    risk: "Kegagalan sensor korosi nirkabel akibat kehabisan baterai sel koin dalam wadah kedap air",
    probability: 4,
    impact: 3,
    mitigation: "Mengintegrasikan pemanen energi getaran gelombang laut mikro (ocean wave vibration energy harvester)",
    residualRisk: "Low",
    owner: "IoT Architect"
  },
  {
    id: "RSK-093",
    category: "AI & IoT",
    risk: "Serangan injeksi data palsu pada model AI kontrol grid listrik pintar",
    probability: 2,
    impact: 5,
    mitigation: "Validasi data silang menggunakan algoritma konsensus toleransi kesalahan Bizantium (Byzantine fault tolerance)",
    residualRisk: "Low",
    owner: "AI System Architect"
  },
  {
    id: "RSK-094",
    category: "AI & IoT",
    risk: "Mati mendadak pada stasiun pangkalan LoRaWAN akibat sambaran petir langsung pada antena tinggi",
    probability: 3,
    impact: 4,
    mitigation: "Pemasangan batang penangkal petir tipe ESE (Early Streamer Emission) 10 meter di atas tiang antena LoRa",
    residualRisk: "Low",
    owner: "IoT Architect"
  },
  {
    id: "RSK-095",
    category: "AI & IoT",
    risk: "Miskomunikasi perintah aktuator katup air otomatis akibat interferensi sinyal radio di area lembap",
    probability: 3,
    impact: 3,
    mitigation: "Protokol konfirmasi balik dua arah (handshake) dan mode fail-safe menutup katup jika putus komunikasi",
    residualRisk: "Low",
    owner: "IoT Architect"
  },
  {
    id: "RSK-096",
    category: "AI & IoT",
    risk: "Ketidakmampuan visualisasi 3D Digital Twin merender data dalam waktu nyata akibat beban rendering berat",
    probability: 3,
    impact: 3,
    mitigation: "Penerapan teknik Level of Detail (LoD) geometris dinamis dan pengolahan grafis berbasis cloud (WebGPU)",
    residualRisk: "Low",
    owner: "Digital Twin Architect"
  },
  {
    id: "RSK-097",
    category: "AI & IoT",
    risk: "Sensor getaran MEMS mendeteksi aktivitas gempa palsu akibat getaran mesin genset tetangga",
    probability: 4,
    impact: 3,
    mitigation: "Model filter AI spasial-temporal untuk membedakan getaran lokal terisolasi dari pergerakan tektonik regional",
    residualRisk: "Low",
    owner: "AI System Architect"
  },
  {
    id: "RSK-098",
    category: "AI & IoT",
    risk: "Paparan kelembapan garam ekstrim merusak sirkuit elektronik internal sensor drone inspeksi",
    probability: 4,
    impact: 3,
    mitigation: "Penyemprotan seluruh papan sirkuit drone dengan bahan pelapis konformal (conformal coating) poliuretan hidrofilik",
    residualRisk: "Low",
    owner: "SHM Specialist"
  },
  {
    id: "RSK-099",
    category: "AI & IoT",
    risk: "Saturasi memori basis data deret waktu (time-series database) akibat frekuensi pengambilan sampel terlalu tinggi",
    probability: 3,
    impact: 3,
    mitigation: "Kebijakan kompresi data deret waktu otomatis (seperti algoritma Gorilla) dan retensi data mentah maksimal 30 hari",
    residualRisk: "Low",
    owner: "Digital Twin Architect"
  },
  {
    id: "RSK-100",
    category: "AI & IoT",
    risk: "Kesalahan pengambilan keputusan otomatis oleh AI otonom yang merugikan keselamatan fisik warga",
    probability: 1,
    impact: 5,
    mitigation: "Sistem gerbang verifikasi manusia wajib (human-in-the-loop) untuk semua tindakan pengendalian tingkat kritis",
    residualRisk: "Low",
    owner: "AI System Architect"
  },
  {
    id: "RSK-101",
    category: "AI & IoT",
    risk: "Sensor kebocoran air nirkabel tertutup pertumbuhan jamur, menyebabkan pembacaan palsu",
    probability: 3,
    impact: 3,
    mitigation: "Desain probe kontak berlapis emas antikarat dengan siklus pembersihan manual terjadwal",
    residualRisk: "Low",
    owner: "IoT Architect"
  },
  {
    id: "RSK-102",
    category: "AI & IoT",
    risk: "Kerusakan mekanis kabel serat optik bawah tanah akibat penggalian tanah manual saat bercocok tanam",
    probability: 3,
    impact: 4,
    mitigation: "Pemasangan pita penanda warna merah mencolok setinggi 20cm di atas pipa proteksi kabel serat optik",
    residualRisk: "Low",
    owner: "IoT Architect"
  },
  {
    id: "RSK-103",
    category: "AI & IoT",
    risk: "Hilangnya sinkronisasi waktu jaringan sensor menyebabkan kesalahan analisis perambatan gelombang akustik gempa",
    probability: 2,
    impact: 4,
    mitigation: "Menerapkan protokol sinkronisasi NTP redundan dengan fallback sinkronisasi eksternal penerima GNSS lokal",
    residualRisk: "Low",
    owner: "SHM Specialist"
  },
  {
    id: "RSK-104",
    category: "AI & IoT",
    risk: "Ketergantungan berlebih pada komputasi awan yang memicu kelambanan respon sistem darurat",
    probability: 2,
    impact: 5,
    mitigation: "Mengalihkan semua logika logika darurat proteksi ke simpul lokal edge otonom tanpa tergantung WAN",
    residualRisk: "Low",
    owner: "AI System Architect"
  },
  {
    id: "RSK-105",
    category: "AI & IoT",
    risk: "Kerentanan keamanan API City Dashboard terhadap eksploitasi peretas eksternal",
    probability: 2,
    impact: 5,
    mitigation: "Implementasi autentikasi API berbasis OAuth2 standar industri dengan rotasi token enkripsi periodik",
    residualRisk: "Low",
    owner: "IoT Architect"
  },

  // CATEGORY: Social & Cultural (106 - 125)
  {
    id: "RSK-106",
    category: "Social & Cultural",
    risk: "Penolakan tokoh adat lokal terhadap desain Mbaru Niang modern yang dinilai melanggar aturan sakral",
    probability: 3,
    impact: 5,
    mitigation: "Konsultasi intensif dengan Lembaga Adat Flores, mempertahankan rasio sakral pembagian ruang tradisional",
    residualRisk: "Low",
    owner: "Cultural Heritage Architect"
  },
  {
    id: "RSK-107",
    category: "Social & Cultural",
    risk: "Gentrifikasi pariwisata yang menyingkirkan mata pencaharian nelayan tradisional Flores",
    probability: 4,
    impact: 4,
    mitigation: "Membentuk koperasi nelayan pintar pesisir dengan kepemilikan saham kolektif pariwisata hingga 40%",
    residualRisk: "Low",
    owner: "Smart City Planner"
  },
  {
    id: "RSK-108",
    category: "Social & Cultural",
    risk: "Keengganan pengrajin bambu lokal beralih ke material Engineered Bamboo Composite yang memerlukan mesin khusus",
    probability: 4,
    impact: 3,
    mitigation: "Program pelatihan sertifikasi vokasi pengolahan bambu komposit dengan hibah alat pres kompak untuk komunitas",
    residualRisk: "Low",
    owner: "Circular Economy Specialist"
  },
  {
    id: "RSK-109",
    category: "Social & Cultural",
    risk: "Kesenjangan digital antara turis dengan warga lokal Flores usia lanjut dalam penggunaan utilitas pintar",
    probability: 4,
    impact: 3,
    mitigation: "Penyediaan antarmuka kontrol suara berlogat lokal, tombol fisik mekanis redundan, dan pendampingan warga",
    residualRisk: "Low",
    owner: "Human-Centered Design Specialist"
  },
  {
    id: "RSK-110",
    category: "Social & Cultural",
    risk: "Komparasi sosial akibat penempatan fasilitas wisata yang dianggap menguntungkan desa tertentu",
    probability: 3,
    impact: 4,
    mitigation: "Perencanaan pembagian manfaat ekonomi yang seimbang antar-desa lingkar proyek secara transparan",
    residualRisk: "Low",
    owner: "Smart City Planner"
  },
  {
    id: "RSK-111",
    category: "Social & Cultural",
    risk: "Hilangnya privasi kehidupan domestik warga akibat arus kunjungan wisatawan tanpa batas",
    probability: 4,
    impact: 4,
    mitigation: "Pemisahan zona spasial ketat antara area hunian sakral lokal (Sacred Zone) dengan area komersil publik",
    residualRisk: "Low",
    owner: "Smart City Planner"
  },
  {
    id: "RSK-112",
    category: "Social & Cultural",
    risk: "Ketiadaan penerus tradisi menenun tenun ikat Flores akibat pengaruh modernisasi ekstrim",
    probability: 3,
    impact: 4,
    mitigation: "Membangun sanggar tenun pintar terintegrasi dalam skema ecotourism, menjamin gaji layak bagi penenun muda",
    residualRisk: "Low",
    owner: "Cultural Heritage Architect"
  },
  {
    id: "RSK-113",
    category: "Social & Cultural",
    risk: "Sengketa kepemilikan tanah adat (tanah ulayat) dalam pembangunan fasilitas umum",
    probability: 3,
    impact: 5,
    mitigation: "Menerapkan sistem pinjam pakai hak sewa lahan adat melalui mekanisme bagi hasil koperasi jangka panjang",
    residualRisk: "Low",
    owner: "Smart City Planner"
  },
  {
    id: "RSK-114",
    category: "Social & Cultural",
    risk: "Kekhawatiran hilangnya makna ritual 'Mbaru Niang' akibat pengerjaan menggunakan beton precast",
    probability: 3,
    impact: 4,
    mitigation: "Mengintegrasikan ritual adat peletakan pilar pertama (Compang) di setiap fase konstruksi fabrikasi sipil",
    residualRisk: "Low",
    owner: "Cultural Heritage Architect"
  },
  {
    id: "RSK-115",
    category: "Social & Cultural",
    risk: "Kurangnya pemahaman wisatawan terhadap etika adat sopan santun lokal Flores",
    probability: 4,
    impact: 3,
    mitigation: "Penyediaan buku panduan digital etika (Adat code of conduct) wajib dibaca saat memesan tiket lewat portal",
    residualRisk: "Low",
    owner: "Smart City Planner"
  },
  {
    id: "RSK-116",
    category: "Social & Cultural",
    risk: "Eksploitasi sumber daya alam hutan tanpa kompensasi nyata bagi marga pemilik ulayat hutan",
    probability: 3,
    impact: 4,
    mitigation: "Skema Direct Royalty Transfer dari setiap kubik bambu komposit langsung ke rekening kas desa ulayat",
    residualRisk: "Low",
    owner: "Circular Economy Specialist"
  },
  {
    id: "RSK-117",
    category: "Social & Cultural",
    risk: "Komersialisasi berlebihan pada tarian adat yang menurunkan kesakralan pertunjukan ritual asli",
    probability: 4,
    impact: 3,
    mitigation: "Pembatasan jadwal pementasan pertunjukan wisata hanya untuk versi sekuler tarian, melarang tarian sakral",
    residualRisk: "Low",
    owner: "Cultural Heritage Architect"
  },
  {
    id: "RSK-118",
    category: "Social & Cultural",
    risk: "Konflik sosial akibat perebutan posisi pemandu wisata atau pengelola akomodasi wisata",
    probability: 3,
    impact: 3,
    mitigation: "Sistem giliran tugas pemanduan wisata teratur yang adil dikelola secara transparan oleh aplikasi koperasi",
    residualRisk: "Low",
    owner: "Smart City Planner"
  },
  {
    id: "RSK-119",
    category: "Social & Cultural",
    risk: "Hilangnya bahasa daerah adat karena dominasi bahasa asing pariwisata global",
    probability: 3,
    impact: 3,
    mitigation: "Kewajiban penggunaan tanda papan informasi dwibahasa (Bahasa Inggris dan Bahasa Daerah Manggarai/Flores)",
    residualRisk: "Low",
    owner: "Cultural Heritage Architect"
  },
  {
    id: "RSK-120",
    category: "Social & Cultural",
    risk: "Pembagian air bersih yang tidak adil antara komplek wisata mewah dengan perkampungan nelayan",
    probability: 3,
    impact: 5,
    mitigation: "Prioritas pasokan hidrolis utama (first priority loop) dialokasikan untuk pemukiman warga lokal",
    residualRisk: "Low",
    owner: "Water Engineer"
  },
  {
    id: "RSK-121",
    category: "Social & Cultural",
    risk: "Masuknya gaya hidup konsumerisme ekstrem yang merusak karakter gotong royong warga asli",
    probability: 3,
    impact: 3,
    mitigation: "Sistem insentif komunitas berbasis poin gotong royong digital (Lonto Leok coin) untuk aktivitas sosial",
    residualRisk: "Low",
    owner: "Smart City Planner"
  },
  {
    id: "RSK-122",
    category: "Social & Cultural",
    risk: "Penolakan pengobatan medis modern oleh warga pedalaman yang terbiasa ramuan herbal tradisional",
    probability: 3,
    impact: 3,
    mitigation: "Mengintegrasikan klinik medis pintar dengan kebun tanaman obat tradisional (TOS) terkurasi",
    residualRisk: "Low",
    owner: "Human-Centered Design Specialist"
  },
  {
    id: "RSK-123",
    category: "Social & Cultural",
    risk: "Kekecewaan warga akibat janji penghematan tagihan listrik pintar tidak tercapai",
    probability: 3,
    impact: 3,
    mitigation: "Edukasi hemat energi melalui dasbor rumah yang menampilkan visualisasi sisa konsumsi harian sederhana",
    residualRisk: "Low",
    owner: "Human-Centered Design Specialist"
  },
  {
    id: "RSK-124",
    category: "Social & Cultural",
    risk: "Kecemburuan pemuda desa akibat lapangan pekerjaan didominasi tenaga ahli dari luar daerah",
    probability: 4,
    impact: 4,
    mitigation: "Kewajiban kuota magang minimal 50% bagi pemuda lokal Flores di seluruh divisi pengerjaan teknologi tinggi",
    residualRisk: "Medium",
    owner: "Smart City Planner"
  },
  {
    id: "RSK-125",
    category: "Social & Cultural",
    risk: "Sikap ketidakpedulian merawat infrastruktur pengolahan sampah karena dianggap tugas operator luar",
    probability: 4,
    impact: 3,
    mitigation: "Kampanye pengelolaan sampah mandiri berbasis rukun tetangga dan kompetisi kebersihan lingkungan berhadiah",
    residualRisk: "Low",
    owner: "Waste Specialist"
  },

  // CATEGORY: Disaster (126 - 140)
  {
    id: "RSK-126",
    category: "Disaster",
    risk: "Gempa bumi tektonik megathrust patahan Flores (>Mw 7.8) menyebabkan runtuhnya seluruh hunian sipil",
    probability: 2,
    impact: 5,
    mitigation: "Desain struktur fleksibel bambu komposit berkemampuan menahan goyangan hingga percepatan tanah 1.2g",
    residualRisk: "Low",
    owner: "Disaster Mitigation Engineer"
  },
  {
    id: "RSK-127",
    category: "Disaster",
    risk: "Limpasan gelombang tsunami pantai Flores menyapu bersih pemukiman pesisir rendah",
    probability: 2,
    impact: 5,
    mitigation: "Penempatan pilar hunian melayang setinggi minimal 6 meter di atas permukaan laut dan dinding pemecah tsunami modular",
    residualRisk: "Medium",
    owner: "Disaster Mitigation Engineer"
  },
  {
    id: "RSK-128",
    category: "Disaster",
    risk: "Hantaman angin kencang badai siklon tropis (>150 km/jam) menerbangkan seluruh material atap",
    probability: 3,
    impact: 4,
    mitigation: "Sistem pengikat atap menggunakan sling jaring kawat baja berkekuatan tinggi terjangkar langsung ke pondasi batu",
    residualRisk: "Low",
    owner: "Chief Structural Engineer"
  },
  {
    id: "RSK-129",
    category: "Disaster",
    risk: "Kebakaran hebat melalap komplek bangunan bambu akibat korsleting instalasi kelistrikan dalam ruang",
    probability: 3,
    impact: 5,
    mitigation: "Kabel listrik tipe isolasi tahan api (FRNC) dan pemasangan sprinkler air otomatis bertenaga gravitasi mandiri",
    residualRisk: "Low",
    owner: "Systems Safety Engineer"
  },
  {
    id: "RSK-130",
    category: "Disaster",
    risk: "Banjir bandang limpasan sungai pegunungan mengikis tumpuan pondasi jembatan penyeberang utama",
    probability: 3,
    impact: 4,
    mitigation: "Struktur jembatan bentang tunggal melengkung di atas elevasi banjir puncak 100 tahunan (Q100)",
    residualRisk: "Low",
    owner: "Chief Structural Engineer"
  },
  {
    id: "RSK-131",
    category: "Disaster",
    risk: "Paparan hujan debu vulkanik tebal menyumbat filter asupan udara generator biogas dan mesin cadangan",
    probability: 2,
    impact: 4,
    mitigation: "Filter udara tipe cyclone sentrifugal dua tahap berkemampuan pembersihan mandiri otomatis debu",
    residualRisk: "Low",
    owner: "Systems Safety Engineer"
  },
  {
    id: "RSK-132",
    category: "Disaster",
    risk: "Kekeringan panjang musiman memicu kebakaran hutan bambu liar di sekitar pemukiman pintar",
    probability: 3,
    impact: 4,
    mitigation: "Sabuk hijau (greenbelt) selebar 30 meter ditanami vegetasi basah tahan api sekeliling batas luar wilayah",
    residualRisk: "Low",
    owner: "Disaster Mitigation Engineer"
  },
  {
    id: "RSK-133",
    category: "Disaster",
    risk: "Tanah longsor tebing bukit menimbun pemukiman Mbaru Niang di area kaki lereng pesisir",
    probability: 3,
    impact: 5,
    mitigation: "Dinding penahan tanah bertingkat bersistem jangkar tanah dalam (earth anchor) dan vegetasi penambat akar",
    residualRisk: "Low",
    owner: "Disaster Mitigation Engineer"
  },
  {
    id: "RSK-134",
    category: "Disaster",
    risk: "Sambaran petir ekstrim merusak perangkat server data lokal Edge AI pemukiman",
    probability: 4,
    impact: 4,
    mitigation: "Instalasi sangkar Faraday pelindung bangunan server dan sistem pembumian pentanahan impedansi rendah (<1 Ohm)",
    residualRisk: "Low",
    owner: "Systems Safety Engineer"
  },
  {
    id: "RSK-135",
    category: "Disaster",
    risk: "Korosivitas tinggi hujan asam vulkanik merusak eksterior komposit bambu",
    probability: 2,
    impact: 3,
    mitigation: "Pemberian pelindung eksterior berbasis nano-keramik hidrofobik yang tahan terhadap zat asam pH rendah",
    residualRisk: "Low",
    owner: "Bamboo Composite Specialist"
  },
  {
    id: "RSK-136",
    category: "Disaster",
    risk: "Kenaikan permukaan air laut akibat perubahan iklim global menenggelamkan area pantai pemukiman",
    probability: 4,
    impact: 4,
    mitigation: "Hunian pesisir didesain dengan konsep terapung adaptif (amphibious architecture) menggunakan ponton bambu",
    residualRisk: "Medium",
    owner: "Marine Engineer"
  },
  {
    id: "RSK-137",
    category: "Disaster",
    risk: "Arus balik laut berbahaya (rip current) menyeret wisatawan yang berenang di pantai pemukiman",
    probability: 4,
    impact: 3,
    mitigation: "Pemasangan pelampung batas renang cerdas dilengkapi sonar peringatan rip-current otomatis waktu nyata",
    residualRisk: "Low",
    owner: "Oceanographer"
  },
  {
    id: "RSK-138",
    category: "Disaster",
    risk: "Keracunan gas beracun karbon monoksida di dalam ruang bawah tanah akibat kebocoran pembuangan genset darurat",
    probability: 2,
    impact: 5,
    mitigation: "Detektor gas nirkabel terintegrasi alarm evakuasi suara otomatis dan kipas pembuangan hisap darurat",
    residualRisk: "Low",
    owner: "Systems Safety Engineer"
  },
  {
    id: "RSK-139",
    category: "Disaster",
    risk: "Patahnya jembatan dermaga terapung akibat dihantam badai laut ekstrem",
    probability: 3,
    impact: 4,
    mitigation: "Menggunakan rantai mooring tipe elastis polimer tinggi (Seaflex) yang dapat memanjang saat gelombang besar",
    residualRisk: "Low",
    owner: "Marine Engineer"
  },
  {
    id: "RSK-140",
    category: "Disaster",
    risk: "Gelombang badai ekstrim membawa serbuan ubur-ubur beracun ke area pelabuhan",
    probability: 3,
    impact: 2,
    mitigation: "Pemasangan jaring pelindung ubur-ubur mekanis terapung di sekitar garis air masuk pelabuhan",
    residualRisk: "Low",
    owner: "Oceanographer"
  },

  // CATEGORY: Financial & Operational (141 - 150)
  {
    id: "RSK-141",
    category: "Financial & Operational",
    risk: "Lonjakan biaya produksi Engineered Bamboo akibat kenaikan harga bahan kimia pengawet impor",
    probability: 3,
    impact: 3,
    mitigation: "Substitusi bertahap menggunakan bio-resin lokal hasil olahan tandan kosong kelapa sawit",
    residualRisk: "Low",
    owner: "Cost Engineer"
  },
  {
    id: "RSK-142",
    category: "Financial & Operational",
    risk: "Keterlambatan pengiriman modul struktural pracetak akibat cuaca buruk di Selat Sape",
    probability: 4,
    impact: 4,
    mitigation: "Pembangunan gudang buffer logistik di Labuan Bajo berkapasitas penyimpanan modul hingga 1 bulan pasokan",
    residualRisk: "Low",
    owner: "Risk Engineer"
  },
  {
    id: "RSK-143",
    category: "Financial & Operational",
    risk: "Kurangnya tenaga tukang bambu berketerampilan tinggi di Flores menyebabkan kesalahan perakitan",
    probability: 4,
    impact: 4,
    mitigation: "Pendampingan langsung instruktur ahli dari Pusat Bambu selama 6 bulan pertama fase perakitan struktural",
    residualRisk: "Low",
    owner: "Construction Engineer"
  },
  {
    id: "RSK-144",
    category: "Financial & Operational",
    risk: "Biaya perawatan sensor SHM serat optik melambung tinggi melebihi anggaran operasional awal",
    probability: 3,
    impact: 3,
    mitigation: "Pemberlakuan kontrak garansi performa jangka panjang 5 tahun bersama vendor produsen sensor serat optik",
    residualRisk: "Low",
    owner: "Cost Engineer"
  },
  {
    id: "RSK-145",
    category: "Financial & Operational",
    risk: "Kegagalan mendapatkan sertifikasi keselamatan kebakaran gedung internasional untuk bahan komposit bambu",
    probability: 3,
    impact: 5,
    mitigation: "Pengujian skala laboratorium ASTM E84 di awal fase desain bersama lembaga uji keselamatan independen terakreditasi",
    residualRisk: "Low",
    owner: "FEED Consultant"
  },
  {
    id: "RSK-146",
    category: "Financial & Operational",
    risk: "Fluktuasi nilai tukar valuta asing mengacaukan skema pembelian komponen mikrogrid impor",
    probability: 3,
    impact: 3,
    mitigation: "Penerapan lindung nilai (hedging) mata uang dan klausul harga tetap dengan pemasok utama",
    residualRisk: "Low",
    owner: "Cost Engineer"
  },
  {
    id: "RSK-147",
    category: "Financial & Operational",
    risk: "Ketidakmampuan koperasi pengelola pemukiman mencapai profitabilitas operasional tahun pertama",
    probability: 3,
    impact: 4,
    mitigation: "Penyusunan model bisnis berpendapatan ganda (pariwisata, penjualan kredit karbon, sertifikasi vokasi)",
    residualRisk: "Low",
    owner: "Cost Engineer"
  },
  {
    id: "RSK-148",
    category: "Financial & Operational",
    risk: "Klaim ganti rugi dari wisatawan akibat kecelakaan tergelincir di jembatan bambu basah",
    probability: 4,
    impact: 3,
    mitigation: "Penerapan alur jalan anti-selip (anti-slip strip) berkala dan asuransi tanggung gugat hukum pihak ketiga",
    residualRisk: "Low",
    owner: "Risk Engineer"
  },
  {
    id: "RSK-149",
    category: "Financial & Operational",
    risk: "Pencurian kabel tembaga sistem penangkal petir di gardu distribusi yang sunyi",
    probability: 3,
    impact: 3,
    mitigation: "Pemasangan kamera CCTV bertenaga surya mandiri dengan sensor gerak inframerah IoT di sekeliling gardu",
    residualRisk: "Low",
    owner: "Risk Engineer"
  },
  {
    id: "RSK-150",
    category: "Financial & Operational",
    risk: "Terjadinya perselisihan hukum hak paten material bambu scrimber dengan perusahaan asing",
    probability: 2,
    impact: 4,
    mitigation: "Pendaftaran paten formulasi komposit bambu Flores secara resmi ke Ditjen KI Kemenkumham sejak pra-FEED",
    residualRisk: "Low",
    owner: "FEED Consultant"
  }
];
