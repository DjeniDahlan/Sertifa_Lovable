
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, PhoneCall, LinkedinIcon, UserCog } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  specialization: string;
  imageUrl: string;
  email: string;
  phone?: string;
  linkedin?: string;
  type: "management" | "assessor" | "staff";
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Budi Santoso, M.Kom",
    position: "Ketua LSP Sertifa",
    description: "Berpengalaman lebih dari 20 tahun di industri teknologi informasi dan terlibat aktif dalam pengembangan standar kompetensi nasional.",
    specialization: "Information Technology Management, Digital Transformation",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    email: "budi.santoso@lspsertifa.id",
    phone: "(021) 1234-5678 ext. 101",
    linkedin: "budisantoso",
    type: "management"
  },
  {
    id: 2,
    name: "Ir. Siti Rahayu, M.T.",
    position: "Manajer Sertifikasi",
    description: "Ahli dalam pengembangan skema sertifikasi dan manajemen asesmen dengan pengalaman 15 tahun di bidang sertifikasi profesi.",
    specialization: "Certification Management, Assessment Design",
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    email: "siti.rahayu@lspsertifa.id",
    phone: "(021) 1234-5678 ext. 102",
    linkedin: "sitirahayu",
    type: "management"
  },
  {
    id: 3,
    name: "Hendra Wijaya, M.Sc.",
    position: "Manajer Mutu",
    description: "Bertanggung jawab atas penjaminan mutu proses sertifikasi sesuai dengan standar nasional dan internasional.",
    specialization: "Quality Assurance, Standardization",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    email: "hendra.wijaya@lspsertifa.id",
    phone: "(021) 1234-5678 ext. 103",
    linkedin: "hendrawijaya",
    type: "management"
  },
  {
    id: 4,
    name: "Drs. Ahmad Fauzi, MBA.",
    position: "Manajer Kerjasama & Hubungan Industri",
    description: "Memiliki jaringan luas di industri teknologi informasi dan berperan dalam membangun kemitraan strategis.",
    specialization: "Strategic Partnership, Industry Relations",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    email: "ahmad.fauzi@lspsertifa.id",
    phone: "(021) 1234-5678 ext. 104",
    linkedin: "ahmadfauzi",
    type: "management"
  },
  {
    id: 5,
    name: "Prof. Dr. Indra Kusuma, Ph.D",
    position: "Lead Asesor - Data Science & AI",
    description: "Profesor di bidang Kecerdasan Buatan dengan lebih dari 50 publikasi internasional. Berpengalaman sebagai asesor sejak 2017.",
    specialization: "Machine Learning, Deep Learning, Big Data",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    email: "indra.kusuma@lspsertifa.id",
    type: "assessor"
  },
  {
    id: 6,
    name: "Dr. Maya Putri, S.Kom, M.T",
    position: "Senior Asesor - Software Development",
    description: "Praktisi dan akademisi di bidang pengembangan perangkat lunak dengan pengalaman industri 12 tahun.",
    specialization: "Software Architecture, Agile Methodologies, Quality Assurance",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    email: "maya.putri@lspsertifa.id",
    type: "assessor"
  },
  {
    id: 7,
    name: "Ir. Denny Setiawan, CISSP",
    position: "Senior Asesor - Cybersecurity",
    description: "Pakar keamanan siber dengan sertifikasi internasional dan pengalaman 15 tahun di industri keamanan informasi.",
    specialization: "Information Security, Penetration Testing, Security Compliance",
    imageUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    email: "denny.setiawan@lspsertifa.id",
    type: "assessor"
  },
  {
    id: 8,
    name: "Sarah Wijaya, M.M.",
    position: "Asesor - IT Service Management",
    description: "Konsultan ITSM dengan pengalaman implementasi ITIL di berbagai perusahaan nasional dan multinasional.",
    specialization: "ITIL, Service Delivery, IT Governance",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    email: "sarah.wijaya@lspsertifa.id",
    type: "assessor"
  },
  {
    id: 9,
    name: "Rudi Hartono, PMP",
    position: "Asesor - Project Management",
    description: "Project manager bersertifikasi dengan pengalaman mengelola proyek TI berskala besar.",
    specialization: "IT Project Management, Agile, Project Portfolio Management",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    email: "rudi.hartono@lspsertifa.id",
    type: "assessor"
  },
  {
    id: 10,
    name: "Anita Dewi",
    position: "Koordinator Administrasi",
    description: "Bertanggung jawab atas administrasi dan koordinasi jadwal uji kompetensi.",
    specialization: "Administrative Management, Customer Service",
    imageUrl: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    email: "anita.dewi@lspsertifa.id",
    phone: "(021) 1234-5678 ext. 201",
    type: "staff"
  },
  {
    id: 11,
    name: "Rizki Ramadhan",
    position: "Administrator TUK",
    description: "Mengelola operasional Tempat Uji Kompetensi dan memastikan kesiapan sarana prasarana uji.",
    specialization: "Facility Management, Assessment Administration",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    email: "rizki.ramadhan@lspsertifa.id",
    phone: "(021) 1234-5678 ext. 202",
    type: "staff"
  },
  {
    id: 12,
    name: "Diana Puspita",
    position: "Koordinator Pemasaran",
    description: "Bertanggung jawab atas strategi pemasaran dan komunikasi LSP Sertifa.",
    specialization: "Digital Marketing, Event Management",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    email: "diana.puspita@lspsertifa.id",
    phone: "(021) 1234-5678 ext. 203",
    type: "staff"
  }
];

const TeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filterTeam = (type: string) => {
    if (type === "all") return teamMembers;
    return teamMembers.filter(member => member.type === type);
  };

  return (
    <>
      <Navbar />
      
      <div className="bg-gradient-to-r from-sertifa-purple to-sertifa-darkpurple text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Tim dan Asesor</h1>
          <p className="text-lg">Kenali lebih dekat tim profesional di balik LSP Sertifa</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-sertifa-purple">Tim Profesional Kami</h2>
          <p className="text-gray-600">
            LSP Sertifa didukung oleh tim manajemen, asesor, dan staf yang berpengalaman
            dan berkompeten di bidangnya masing-masing. Seluruh asesor kami telah memiliki
            sertifikat kompetensi metodologi asesmen dari BNSP dan sertifikat kompetensi
            teknis sesuai bidang yang diases.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto mb-8 grid-cols-4">
            <TabsTrigger value="all" className="text-xs md:text-sm">Semua</TabsTrigger>
            <TabsTrigger value="management" className="text-xs md:text-sm">Manajemen</TabsTrigger>
            <TabsTrigger value="assessor" className="text-xs md:text-sm">Asesor</TabsTrigger>
            <TabsTrigger value="staff" className="text-xs md:text-sm">Staf</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterTeam("all").map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="management">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterTeam("management").map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="assessor">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterTeam("assessor").map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="staff">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterTeam("staff").map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple mr-3 mt-1">
                <UserCog size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Menjadi Asesor LSP Sertifa</h3>
                <p className="text-gray-600 mb-4">
                  LSP Sertifa selalu membuka kesempatan bagi profesional di bidang teknologi informasi yang memiliki
                  pengalaman dan kompetensi untuk bergabung sebagai asesor. Untuk menjadi asesor LSP Sertifa,
                  Anda harus memenuhi persyaratan berikut:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                  <li>Memiliki latar belakang pendidikan yang relevan dengan skema sertifikasi</li>
                  <li>Memiliki pengalaman kerja minimal 5 tahun di bidang yang relevan</li>
                  <li>Bersedia mengikuti pelatihan metodologi asesmen dari BNSP</li>
                  <li>Memiliki sertifikat kompetensi di bidang yang akan diases</li>
                  <li>Memiliki komitmen untuk mengembangkan sistem sertifikasi profesi di Indonesia</li>
                </ul>
                <p className="text-gray-600">
                  Untuk informasi lebih lanjut tentang rekrutmen asesor, silakan hubungi kami melalui email di
                  <a href="mailto:recruitment@lspsertifa.id" className="text-sertifa-purple hover:underline ml-1">recruitment@lspsertifa.id</a>
                </p>
              </div>
            </div>
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
    <Card className="border-none shadow-md overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img 
          src={member.imageUrl} 
          alt={member.name} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
        <p className="text-sertifa-purple text-sm font-medium mb-3">{member.position}</p>
        <p className="text-gray-600 text-sm mb-4">{member.description}</p>
        <div className="text-sm text-gray-600">
          <p className="font-medium mb-1">Spesialisasi:</p>
          <p className="mb-3">{member.specialization}</p>
        </div>
        <div className="flex flex-col space-y-2 mt-4">
          <a href={`mailto:${member.email}`} className="flex items-center text-sm text-gray-600 hover:text-sertifa-purple">
            <Mail size={14} className="mr-2" />{member.email}
          </a>
          {member.phone && (
            <a href={`tel:${member.phone}`} className="flex items-center text-sm text-gray-600 hover:text-sertifa-purple">
              <PhoneCall size={14} className="mr-2" />{member.phone}
            </a>
          )}
          {member.linkedin && (
            <a href={`https://linkedin.com/in/${member.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gray-600 hover:text-sertifa-purple">
              <LinkedinIcon size={14} className="mr-2" />linkedin.com/in/{member.linkedin}
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamPage;
