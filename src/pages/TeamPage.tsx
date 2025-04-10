
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Linkedin, Mail, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  education: string;
  experience: string;
  expertise: string[];
  email: string;
  phone: string;
  linkedin: string;
  type: "management" | "assessor" | "komite";
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Lukman Khoiruddin",
    position: "Direktur",
    image: "/lovable-uploads/252bf99e-e07e-4040-b243-41390dab7b75.png",
    education: "S1 Teknik Informatika",
    experience: "9+ tahun pengalaman di bidang IT",
    expertise: ["DevOps", "CI/CD", "Automation"],
    email: "lukman.khoiruddin@lspsertifa.id",
    phone: "+62 821-0000-0009",
    linkedin: "linkedin.com/in/lukmankhoiruddin",
    type: "management"
  },
  {
    id: 2,
    name: "Djeni Dahlan",
    position: "Manajer Sertifikasi",
    image: "/lovable-uploads/b633abfc-a1a4-4c53-80d9-2b42f5e4a26d.png",
    education: "S2 Teknik Komputer",
    experience: "13+ tahun pengalaman di bidang IT",
    expertise: ["IoT", "Embedded Systems", "Hardware Integration"],
    email: "djeni.dahlan@lspsertifa.id",
    phone: "+62 821-0000-0010",
    linkedin: "linkedin.com/in/djenidahlan",
    type: "management"
  },
  {
    id: 3,
    name: "Ardiyan Rofiq",
    position: "Manajer Mutu",
    image: "/lovable-uploads/59056277-c292-41d4-a38c-01208b4ad3b3.png",    
    education: "S1 Sistem Informasi",
    experience: "8+ tahun pengalaman di bidang IT",
    expertise: ["Backend Development", "API Design", "Microservices"],
    email: "ardiyan.rofiq@lspsertifa.id",
    phone: "+62 821-0000-0012",
    linkedin: "linkedin.com/in/ardiyanrofiq",
    type: "management"
  },
  {
    id: 4,
    name: "Anda Kurnianto",
    position: "Manajer Administrasi & Keuangan",
    image: "/lovable-uploads/f19a6c84-551b-4db6-9cd3-42327068d5a2.png",    
    education: "S1 Teknik Informatika",
    experience: "7+ tahun pengalaman di bidang IT",
    expertise: ["Frontend Development", "UI/UX Design", "Web Accessibility"],
    email: "anda.kurnianto@lspsertifa.id",
    phone: "+62 821-0000-0011",
    linkedin: "linkedin.com/in/andakurnianto",
    type: "management"
  },
  {
    id: 5,
    name: "Yanuar Hadiyanto",
    position: "Asesor IT",
    image: "/lovable-uploads/1adebbc2-f264-459d-b8c7-d7c4013e30d9.png",
    education: "S2 Teknologi Informasi",
    experience: "10+ tahun pengalaman di bidang IT",
    expertise: ["Cloud Computing", "System Integration", "IT Architecture"],
    email: "yanuar.hadiyanto@lspsertifa.id",
    phone: "+62 821-0000-0001",
    linkedin: "linkedin.com/in/yanuarhadiyanto",
    type: "assessor"
  },
  {
    id: 6,
    name: "Andrian The",
    position: "Asesor IT",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S2 Ilmu Komputer",
    experience: "12+ tahun pengalaman di industri IT",
    expertise: ["Data Science", "Machine Learning", "Software Development"],
    email: "andrian.the@lspsertifa.id",
    phone: "+62 821-0000-0002",
    linkedin: "linkedin.com/in/andrianthe",
    type: "assessor"
  },
  {
    id: 7,
    name: "Arindra Saktiawan",
    position: "Asesor IT",
    image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S1 Teknik Informatika",
    experience: "8+ tahun pengalaman di bidang IT",
    expertise: ["Networking", "Infrastructure", "System Administration"],
    email: "arindra.saktiawan@lspsertifa.id",
    phone: "+62 821-0000-0003",
    linkedin: "linkedin.com/in/arindrasaktiawan",
    type: "assessor"
  },
  {
    id: 8,
    name: "Nuzul Fauzan Mustova",
    position: "Asesor IT",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S1 Sistem Informasi",
    experience: "7+ tahun pengalaman di bidang IT",
    expertise: ["Web Development", "Mobile Development", "UI/UX Design"],
    email: "nuzul.fauzan@lspsertifa.id",
    phone: "+62 821-0000-0004",
    linkedin: "linkedin.com/in/nuzulfauzan",
    type: "assessor"
  },
  {
    id: 9,
    name: "Citra Arfanudin",
    position: "Asesor IT",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S2 Teknik Informatika",
    experience: "9+ tahun pengalaman di bidang IT",
    expertise: ["Database Management", "Big Data", "Data Engineering"],
    email: "citra.arfanudin@lspsertifa.id",
    phone: "+62 821-0000-0005",
    linkedin: "linkedin.com/in/citraarfanudin",
    type: "assessor"
  },
  {
    id: 10,
    name: "Arinal Hak",
    position: "Asesor IT",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S1 Teknik Informatika",
    experience: "10+ tahun pengalaman di bidang IT",
    expertise: ["Cloud Security", "Network Security", "Information Security"],
    email: "arinal.hak@lspsertifa.id",
    phone: "+62 821-0000-0006",
    linkedin: "linkedin.com/in/arinalhak",
    type: "assessor"
  },
  {
    id: 11,
    name: "Andu Hari Sutaryo",
    position: "Asesor IT",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S1 Sistem Informasi",
    experience: "8+ tahun pengalaman di bidang IT",
    expertise: ["IT Service Management", "ITIL", "IT Operations"],
    email: "andu.hari@lspsertifa.id",
    phone: "+62 821-0000-0007",
    linkedin: "linkedin.com/in/anduhari",
    type: "assessor"
  },
  {
    id: 12,
    name: "Umar Efendi",
    position: "Asesor IT",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S2 Informatika",
    experience: "11+ tahun pengalaman di bidang IT",
    expertise: ["Software Architecture", "Enterprise Architecture", "Solution Architecture"],
    email: "umar.efendi@lspsertifa.id",
    phone: "+62 821-0000-0008",
    linkedin: "linkedin.com/in/umarefendi",
    type: "assessor"
  },
  {
    id: 13,
    name: "Lukman Khoiruddin",
    position: "Asesor IT",
    image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S1 Teknik Informatika",
    experience: "9+ tahun pengalaman di bidang IT",
    expertise: ["DevOps", "CI/CD", "Automation"],
    email: "lukman.khoiruddin@lspsertifa.id",
    phone: "+62 821-0000-0009",
    linkedin: "linkedin.com/in/lukmankhoiruddin",
    type: "assessor"
  },
  {
    id: 14,
    name: "Djeni Dahlan",
    position: "Asesor IT",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S2 Teknik Komputer",
    experience: "13+ tahun pengalaman di bidang IT",
    expertise: ["IoT", "Embedded Systems", "Hardware Integration"],
    email: "djeni.dahlan@lspsertifa.id",
    phone: "+62 821-0000-0010",
    linkedin: "linkedin.com/in/djenidahlan",
    type: "assessor"
  },
  {
    id: 15,
    name: "Anda Kurnianto",
    position: "Asesor IT",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S1 Teknik Informatika",
    experience: "7+ tahun pengalaman di bidang IT",
    expertise: ["Frontend Development", "UI/UX Design", "Web Accessibility"],
    email: "anda.kurnianto@lspsertifa.id",
    phone: "+62 821-0000-0011",
    linkedin: "linkedin.com/in/andakurnianto",
    type: "assessor"
  },
  {
    id: 16,
    name: "Ardiyan Rofiq",
    position: "Asesor IT",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S1 Sistem Informasi",
    experience: "8+ tahun pengalaman di bidang IT",
    expertise: ["Backend Development", "API Design", "Microservices"],
    email: "ardiyan.rofiq@lspsertifa.id",
    phone: "+62 821-0000-0012",
    linkedin: "linkedin.com/in/ardiyanrofiq",
    type: "assessor"
  },
  {
    id: 17,
    name: "Herawati Oktavani",
    position: "Asesor IT",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S2 Informatika",
    experience: "10+ tahun pengalaman di bidang IT",
    expertise: ["Project Management", "IT Governance", "COBIT"],
    email: "herawati.oktavani@lspsertifa.id",
    phone: "+62 821-0000-0013",
    linkedin: "linkedin.com/in/herawatoktavani",
    type: "assessor"
  },
  {
    id: 18,
    name: "Taufan Ramadhan",
    position: "Asesor IT",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S1 Teknik Informatika",
    experience: "9+ tahun pengalaman di bidang IT",
    expertise: ["Software Testing", "Quality Assurance", "Test Automation"],
    email: "taufan.ramadhan@lspsertifa.id",
    phone: "+62 821-0000-0014",
    linkedin: "linkedin.com/in/taufanramadhan",
    type: "assessor"
  },
  {
    id: 19,
    name: "Miftah Rahman",
    position: "Asesor IT",
    image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S2 Teknik Informatika",
    experience: "11+ tahun pengalaman di bidang IT",
    expertise: ["Cybersecurity", "Penetration Testing", "Security Audit"],
    email: "miftah.rahman@lspsertifa.id",
    phone: "+62 821-0000-0015",
    linkedin: "linkedin.com/in/miftahrahman",
    type: "assessor"
  },
  {
    id: 20,
    name: "Triyono",
    position: "Asesor IT",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S1 Teknik Komputer",
    experience: "7+ tahun pengalaman di bidang IT",
    expertise: ["Network Infrastructure", "Routing & Switching", "Network Security"],
    email: "triyono@lspsertifa.id",
    phone: "+62 821-0000-0016",
    linkedin: "linkedin.com/in/triyono",
    type: "assessor"
  },
  {
    id: 21,
    name: "Dani Ampriyanto",
    position: "Asesor IT",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S1 Sistem Informasi",
    experience: "8+ tahun pengalaman di bidang IT",
    expertise: ["Business Intelligence", "Data Visualization", "Data Analytics"],
    email: "dani.ampriyanto@lspsertifa.id",
    phone: "+62 821-0000-0017",
    linkedin: "linkedin.com/in/daniampriyanto",
    type: "assessor"
  },
  {
    id: 22,
    name: "Aisyah Ami Wardhani",
    position: "Asesor IT",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S2 Informatika",
    experience: "9+ tahun pengalaman di bidang IT",
    expertise: ["UI/UX Research", "Product Design", "Interaction Design"],
    email: "aisyah.ami@lspsertifa.id",
    phone: "+62 821-0000-0018",
    linkedin: "linkedin.com/in/aisyahami",
    type: "assessor"
  },
  {
    id: 23,
    name: "Fauzivy Regiswarashari",
    position: "Asesor IT",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S1 Teknik Informatika",
    experience: "7+ tahun pengalaman di bidang IT",
    expertise: ["Mobile App Development", "React Native", "Flutter"],
    email: "fauzivy.regis@lspsertifa.id",
    phone: "+62 821-0000-0019",
    linkedin: "linkedin.com/in/fauzivyregis",
    type: "assessor"
  },
  {
    id: 24,
    name: "Adinda Hita",
    position: "Asesor IT",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S2 Teknik Informatika",
    experience: "8+ tahun pengalaman di bidang IT",
    expertise: ["Digital Marketing", "SEO/SEM", "Content Strategy"],
    email: "adinda.hita@lspsertifa.id",
    phone: "+62 821-0000-0020",
    linkedin: "linkedin.com/in/adindahita",
    type: "assessor"
  },
  {
    id: 25,
    name: "Yusuf Rizal",
    position: "Asesor IT",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S1 Sistem Informasi",
    experience: "9+ tahun pengalaman di bidang IT",
    expertise: ["ERP Systems", "Business Process Management", "System Integration"],
    email: "yusuf.rizal@lspsertifa.id",
    phone: "+62 821-0000-0021",
    linkedin: "linkedin.com/in/yusufrizal",
    type: "assessor"
  },
  {
    id: 26,
    name: "Arman Satari",
    position: "Asesor IT",
    image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S1 Teknik Informatika",
    experience: "10+ tahun pengalaman di bidang IT",
    expertise: ["Game Development", "Computer Graphics", "3D Modeling"],
    email: "arman.satari@lspsertifa.id",
    phone: "+62 821-0000-0022",
    linkedin: "linkedin.com/in/armansatari",
    type: "assessor"
  },
  {
    id: 27,
    name: "Wahyu Tri Setiawan",
    position: "Asesor IT",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S2 Teknik Elektro",
    experience: "11+ tahun pengalaman di bidang IT",
    expertise: ["Blockchain", "Cryptocurrency", "Smart Contracts"],
    email: "wahyu.tri@lspsertifa.id",
    phone: "+62 821-0000-0023",
    linkedin: "linkedin.com/in/wahyutri",
    type: "assessor"
  },
  {
    id: 28,
    name: "Luki Prasetyo",
    position: "Asesor IT",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S1 Teknik Informatika",
    experience: "8+ tahun pengalaman di bidang IT",
    expertise: ["AI Ethics", "Responsible AI", "AI Governance"],
    email: "luki.prasetyo@lspsertifa.id",
    phone: "+62 821-0000-0024",
    linkedin: "linkedin.com/in/lukiprasetyo",
    type: "assessor"
  },
  {
    id: 29,
    name: "Adkhan Soleh",
    position: "Asesor IT",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S1 Sistem Informasi",
    experience: "9+ tahun pengalaman di bidang IT",
    expertise: ["Cloud Architecture", "AWS", "Azure"],
    email: "adkhan.soleh@lspsertifa.id",
    phone: "+62 821-0000-0025",
    linkedin: "linkedin.com/in/adkhansoleh",
    type: "assessor"
  },
  {
    id: 30,
    name: "Taufan Ramadhan",
    position: "Ketua Komite Sertifikasi",
    image: "/lovable-uploads/e16654f7-c507-4cde-b264-69d673360b9e.png",
    education: "S1 Teknik Informatika",
    experience: "9+ tahun pengalaman di bidang IT",
    expertise: ["Software Testing", "Quality Assurance", "Test Automation"],
    email: "taufan.ramadhan@lspsertifa.id",
    phone: "+62 821-0000-0014",
    linkedin: "linkedin.com/in/taufanramadhan",
    type: "komite"
  },
  {
    id: 31,
    name: "Adkhan Soleh",
    position: "Sekretaris Komite Sertifikasi",
    image: "/lovable-uploads/067bd115-ebb1-414e-b0ca-4832093d7ce3.png",
    education: "S1 Sistem Informasi",
    experience: "9+ tahun pengalaman di bidang IT",
    expertise: ["Cloud Architecture", "AWS", "Azure"],
    email: "adkhan.soleh@lspsertifa.id",
    phone: "+62 821-0000-0025",
    linkedin: "linkedin.com/in/adkhansoleh",
    type: "komite"
  },
  {
    id: 32,
    name: "Rondi Hidayat",
    position: "Anggota Komite Sertifikasi",
    image: "/lovable-uploads/21ef9171-ab94-44f3-8f8e-1f3fa9cb35d6.png",
    education: "S2 Teknik Informatika",
    experience: "10+ tahun pengalaman di bidang IT",
    expertise: ["Information Security", "Risk Management", "Compliance"],
    email: "rondi.hidayat@lspsertifa.id",
    phone: "+62 821-0000-0026",
    linkedin: "linkedin.com/in/rondihidayat",
    type: "komite"
  }
];

const TeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const managementMembers = teamMembers.filter(member => member.type === "management");
  const assessorMembers = teamMembers.filter(member => member.type === "assessor");
  const komiteMembers = teamMembers.filter(member => member.type === "komite");

  return (
    <>
      <Navbar />
      
      <div className="bg-gradient-to-r from-sertifa-purple to-sertifa-darkpurple text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Tim dan Asesor</h1>
          <p className="text-lg">Berkenalan dengan tim profesional dan asesor LSP Sertifa</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="management" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="management">Manajemen</TabsTrigger>
              <TabsTrigger value="assessor">Asesor</TabsTrigger>
              <TabsTrigger value="komite">Komite Sertifikasi</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="management">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {managementMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="assessor">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {assessorMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="komite">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {komiteMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-20 mb-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-sertifa-purple">Mau Menjadi Bagian dari Tim Kami?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            LSP Sertifa selalu terbuka untuk profesional yang ingin berkontribusi dalam pengembangan sertifikasi
            profesi di bidang teknologi informasi di Indonesia. Jika Anda memiliki pengalaman dan kompetensi
            yang relevan, kami mengundang Anda untuk bergabung dengan tim kami.
          </p>
          <div className="bg-gray-50 p-8 max-w-3xl mx-auto rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-sertifa-purple">Posisi yang Kami Butuhkan:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Asesor Bidang AI & Machine Learning</h4>
                <p className="text-gray-600 text-sm">Persyaratan: Minimal 5 tahun pengalaman di bidang AI & ML, memiliki sertifikasi terkait, dan bersedia mengikuti pelatihan asesor BNSP.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Asesor Bidang Cloud Computing</h4>
                <p className="text-gray-600 text-sm">Persyaratan: Minimal 5 tahun pengalaman di bidang Cloud Computing, memiliki sertifikasi Cloud terkemuka, dan bersedia mengikuti pelatihan asesor BNSP.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Manajer Pengembangan Skema</h4>
                <p className="text-gray-600 text-sm">Persyaratan: Minimal 7 tahun pengalaman di bidang pengembangan kurikulum atau standar kompetensi, memahami SKKNI, dan memiliki jaringan di industri IT.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Business Development Officer</h4>
                <p className="text-gray-600 text-sm">Persyaratan: Minimal 3 tahun pengalaman di bidang business development, memiliki network yang luas di industri IT, dan kemampuan komunikasi yang baik.</p>
              </div>
            </div>
            <p className="mt-6 text-center text-gray-600">
              Kirim CV dan surat lamaran Anda ke <a href="mailto:recruitment@lspsertifa.id" className="text-sertifa-purple hover:underline">recruitment@lspsertifa.id</a>
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-sertifa-purple font-medium mb-3">{member.position}</p>
        
        <div className="text-sm text-gray-600 mb-4">
          <p><span className="font-medium">Pendidikan:</span> {member.education}</p>
          <p><span className="font-medium">Pengalaman:</span> {member.experience}</p>
        </div>
        
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Bidang Keahlian:</p>
          <div className="flex flex-wrap gap-2">
            {member.expertise.map((skill, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 bg-sertifa-purple/10 text-sertifa-purple rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="border-t pt-4 mt-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <Mail size={14} className="text-sertifa-purple" />
            <a href={`mailto:${member.email}`} className="hover:text-sertifa-purple">{member.email}</a>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <Phone size={14} className="text-sertifa-purple" />
            <a href={`tel:${member.phone}`} className="hover:text-sertifa-purple">{member.phone}</a>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Linkedin size={14} className="text-sertifa-purple" />
            <a 
              href={`https://${member.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-sertifa-purple"
            >
              {member.linkedin}
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamPage;
