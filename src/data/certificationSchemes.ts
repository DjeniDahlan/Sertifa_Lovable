
export interface CertificationScheme {
  id: number;
  title: string;
  type: 'okupasi' | 'klaster';
  description: string;
  requirements: string[];
  duration: string;
  price: string;
}

export const certificationSchemes: CertificationScheme[] = [
  {
    id: 1,
    title: "Associate Data Scientist",
    type: "okupasi",
    description: "Sertifikasi untuk profesional yang memiliki kemampuan dasar dalam menganalisis dan menginterpretasikan data kompleks untuk menghasilkan insight yang bernilai bagi bisnis.",
    requirements: [
      "Pendidikan minimal D3/S1 bidang relevan",
      "Memiliki pengalaman project data minimal 1 tahun",
      "Menguasai bahasa pemrograman Python/R",
      "Memahami konsep statistik dan machine learning"
    ],
    duration: "3 hari",
    price: "Rp 2.500.000"
  },
  {
    id: 2,
    title: "AI Engineer",
    type: "okupasi",
    description: "Sertifikasi untuk profesional yang dapat mendesain, mengembangkan dan mengimplementasikan solusi berbasis Artificial Intelligence.",
    requirements: [
      "Pendidikan minimal S1 bidang IT atau relevan",
      "Memiliki pengalaman dalam pengembangan AI minimal 2 tahun",
      "Menguasai framework AI seperti TensorFlow/PyTorch",
      "Memahami konsep deep learning dan neural network"
    ],
    duration: "4 hari",
    price: "Rp 3.000.000"
  },
  {
    id: 3,
    title: "Associate Data Analyst",
    type: "okupasi",
    description: "Sertifikasi untuk profesional yang mampu mengolah dan menganalisis data untuk menghasilkan insight dan mendukung pengambilan keputusan bisnis.",
    requirements: [
      "Pendidikan minimal D3/S1",
      "Memiliki pengalaman analisis data minimal 1 tahun",
      "Menguasai SQL dan tools visualisasi data",
      "Memahami konsep statistik dasar"
    ],
    duration: "2 hari",
    price: "Rp 1.800.000"
  },
  {
    id: 4,
    title: "IoT Operator",
    type: "okupasi",
    description: "Sertifikasi untuk profesional yang mampu mengoperasikan, memelihara, dan mengelola infrastruktur Internet of Things.",
    requirements: [
      "Pendidikan minimal D3 bidang IT/Elektronika",
      "Memahami konsep dasar IoT dan jaringan",
      "Menguasai pemrograman mikrokontroler",
      "Memiliki pengalaman proyek IoT minimal 1 tahun"
    ],
    duration: "3 hari",
    price: "Rp 2.200.000"
  },
  {
    id: 5,
    title: "Associate Data Center Technician",
    type: "okupasi",
    description: "Sertifikasi untuk profesional yang mampu mengelola dan memelihara infrastruktur data center, termasuk hardware, jaringan, dan keamanan fisik.",
    requirements: [
      "Pendidikan minimal D3 bidang IT/Jaringan",
      "Memiliki pengalaman minimal 1 tahun di bidang data center",
      "Memahami konsep jaringan dan keamanan",
      "Mengerti standar operasional data center"
    ],
    duration: "3 hari",
    price: "Rp 2.300.000"
  },
  {
    id: 6,
    title: "Machine Learning Engineer",
    type: "okupasi",
    description: "Sertifikasi untuk profesional yang mampu membangun dan men-deploy model machine learning ke dalam aplikasi produksi.",
    requirements: [
      "Pendidikan minimal S1 bidang IT atau relevan",
      "Memiliki pengalaman minimal 2 tahun dalam pengembangan ML",
      "Menguasai Python dan framework ML",
      "Memahami konsep MLOps dan deployment"
    ],
    duration: "4 hari",
    price: "Rp 3.200.000"
  },
  {
    id: 7,
    title: "IT Service Manager",
    type: "okupasi",
    description: "Sertifikasi untuk profesional yang mampu mengelola layanan IT berdasarkan best practice ITIL dan metodologi service management.",
    requirements: [
      "Pendidikan minimal S1",
      "Memiliki pengalaman minimal 3 tahun di bidang IT service management",
      "Memahami framework ITIL",
      "Memiliki kemampuan leadership"
    ],
    duration: "3 hari",
    price: "Rp 2.800.000"
  },
  {
    id: 8,
    title: "IT Auditor",
    type: "okupasi",
    description: "Sertifikasi untuk profesional yang mampu melakukan audit sistem informasi dan menilai kepatuhan terhadap standar keamanan dan regulasi.",
    requirements: [
      "Pendidikan minimal S1 bidang IT/Akuntansi",
      "Memiliki pengalaman minimal 3 tahun di bidang IT audit",
      "Memahami framework COBIT, ISO 27001",
      "Memiliki pengetahuan tentang regulasi IT"
    ],
    duration: "4 hari",
    price: "Rp 3.500.000"
  },
  {
    id: 9,
    title: "ICT Project Manager",
    type: "okupasi",
    description: "Sertifikasi untuk profesional yang mampu merencanakan, melaksanakan, dan menyelesaikan proyek IT sesuai dengan scope, waktu, dan anggaran.",
    requirements: [
      "Pendidikan minimal S1",
      "Memiliki pengalaman minimal 3 tahun sebagai project manager",
      "Memahami metodologi manajemen proyek",
      "Memiliki kemampuan leadership dan komunikasi yang baik"
    ],
    duration: "3 hari",
    price: "Rp 3.000.000"
  },
  {
    id: 10,
    title: "Chief Information Officer (CIO)",
    type: "okupasi",
    description: "Sertifikasi untuk profesional senior yang mampu menyelaraskan strategi IT dengan strategi bisnis dan memimpin transformasi digital organisasi.",
    requirements: [
      "Pendidikan minimal S2",
      "Memiliki pengalaman minimal 8 tahun di bidang IT, dengan 3 tahun di posisi manajerial",
      "Memahami strategi bisnis dan IT",
      "Memiliki track record dalam transformasi digital"
    ],
    duration: "5 hari",
    price: "Rp 5.000.000"
  },
  {
    id: 11,
    title: "Data Protection Officer",
    type: "klaster",
    description: "Sertifikasi untuk profesional yang mampu mengawasi dan memastikan kepatuhan organisasi terhadap regulasi perlindungan data.",
    requirements: [
      "Pendidikan minimal S1",
      "Memiliki pengetahuan tentang regulasi perlindungan data",
      "Memahami prinsip-prinsip keamanan informasi",
      "Memiliki kemampuan komunikasi yang baik"
    ],
    duration: "2 hari",
    price: "Rp 2.000.000"
  },
  {
    id: 12,
    title: "Pengelolaan Pemikiran Kreatif dan Inovatif di Lingkup Profesional",
    type: "klaster",
    description: "Sertifikasi untuk profesional yang mampu menerapkan dan mengelola proses berpikir kreatif dan inovatif dalam lingkungan kerja.",
    requirements: [
      "Pendidikan minimal D3/S1",
      "Memiliki pengalaman minimal 2 tahun di bidang profesional",
      "Terbuka untuk semua latar belakang profesional"
    ],
    duration: "2 hari",
    price: "Rp 1.500.000"
  },
  {
    id: 13,
    title: "Pengelolaan komunkasi efektif untuk meningkatkan produktifitas tim",
    type: "klaster",
    description: "Sertifikasi untuk profesional yang mampu menerapkan teknik komunikasi efektif untuk meningkatkan kolaborasi dan produktivitas tim.",
    requirements: [
      "Pendidikan minimal D3/S1",
      "Memiliki pengalaman bekerja dalam tim minimal 1 tahun",
      "Terbuka untuk semua latar belakang profesional"
    ],
    duration: "2 hari",
    price: "Rp 1.500.000"
  },
  {
    id: 14,
    title: "Penerapan kesadaran keamanan informasi dalam lingkungan kerja",
    type: "klaster",
    description: "Sertifikasi untuk profesional yang mampu menerapkan dan mempromosikan kesadaran keamanan informasi di tempat kerja.",
    requirements: [
      "Pendidikan minimal D3/S1",
      "Memiliki pemahaman dasar tentang keamanan informasi",
      "Terbuka untuk semua latar belakang profesional"
    ],
    duration: "2 hari",
    price: "Rp 1.700.000"
  },
  {
    id: 15,
    title: "Problem Solving dengan pendekatan analisa data",
    type: "klaster",
    description: "Sertifikasi untuk profesional yang mampu menerapkan pendekatan analitis dan berbasis data dalam pemecahan masalah bisnis.",
    requirements: [
      "Pendidikan minimal D3/S1",
      "Memiliki kemampuan dasar analisis data",
      "Terbuka untuk semua latar belakang profesional"
    ],
    duration: "2 hari",
    price: "Rp 1.800.000"
  }
];
