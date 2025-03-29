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
  type: "management" | "assessor" | "staff";
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Budi Santoso, M.Kom",
    position: "Ketua LSP Sertifa",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S3 Ilmu Komputer, Universitas Indonesia",
    experience: "20+ tahun pengalaman di industri teknologi informasi",
    expertise: ["IT Governance", "Project Management", "Information Security"],
    email: "budi.santoso@lspsertifa.id",
    phone: "+62 812-1234-5678",
    linkedin: "linkedin.com/in/budisantoso",
    type: "management"
  },
  {
    id: 2,
    name: "Ir. Siti Rahayu, M.T.",
    position: "Manajer Sertifikasi",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S2 Teknik Informatika, Institut Teknologi Bandung",
    experience: "15+ tahun pengalaman di bidang sertifikasi profesi",
    expertise: ["Assessment Management", "SKKNI Development", "Quality Assurance"],
    email: "siti.rahayu@lspsertifa.id",
    phone: "+62 813-2345-6789",
    linkedin: "linkedin.com/in/sitirahayu",
    type: "management"
  },
  {
    id: 3,
    name: "Hendra Wijaya, M.Sc.",
    position: "Manajer Mutu",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S2 Information Systems, Universitas Gadjah Mada",
    experience: "12+ tahun pengalaman di bidang QA dan standardisasi",
    expertise: ["Quality Management", "Standardization", "Audit Systems"],
    email: "hendra.wijaya@lspsertifa.id",
    phone: "+62 819-8765-4321",
    linkedin: "linkedin.com/in/hendrawijaya",
    type: "management"
  },
  {
    id: 4,
    name: "Drs. Ahmad Fauzi, MBA.",
    position: "Manajer Kerjasama & Hubungan Industri",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "MBA Business Administration, Universitas Indonesia",
    experience: "18+ tahun pengalaman di bidang kemitraan strategis",
    expertise: ["Business Development", "Strategic Partnership", "Industry Networking"],
    email: "ahmad.fauzi@lspsertifa.id",
    phone: "+62 817-5432-1098",
    linkedin: "linkedin.com/in/ahmadfauzi",
    type: "management"
  },
  {
    id: 5,
    name: "Dr. Maya Indira, M.Cs.",
    position: "Lead Asesor Data Science",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S3 Computer Science, MIT",
    experience: "15+ tahun pengalaman di bidang Data Science & AI",
    expertise: ["Machine Learning", "Data Analytics", "Statistical Modeling"],
    email: "maya.indira@lspsertifa.id",
    phone: "+62 821-8765-4321",
    linkedin: "linkedin.com/in/mayaindira",
    type: "assessor"
  },
  {
    id: 6,
    name: "Prof. Reza Pratama, Ph.D.",
    position: "Lead Asesor Software Engineering",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "Ph.D. Software Engineering, Stanford University",
    experience: "20+ tahun pengalaman di bidang Software Engineering",
    expertise: ["Software Architecture", "Agile Methodologies", "DevOps"],
    email: "reza.pratama@lspsertifa.id",
    phone: "+62 822-6543-2109",
    linkedin: "linkedin.com/in/rezapratama",
    type: "assessor"
  },
  {
    id: 7,
    name: "Dewi Anggraini, M.Sc.",
    position: "Asesor IT Service Management",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "M.Sc. IT Service Management, University of London",
    experience: "10+ tahun pengalaman di bidang ITSM & ITIL",
    expertise: ["ITIL Framework", "Service Desk Management", "IT Operations"],
    email: "dewi.anggraini@lspsertifa.id",
    phone: "+62 811-1234-5678",
    linkedin: "linkedin.com/in/dewianggraini",
    type: "assessor"
  },
  {
    id: 8,
    name: "Ir. Arief Rahman, CISSP",
    position: "Asesor Cybersecurity",
    image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S1 Teknik Elektro, Institut Teknologi Bandung",
    experience: "12+ tahun pengalaman di bidang Cybersecurity",
    expertise: ["Network Security", "Penetration Testing", "Security Governance"],
    email: "arief.rahman@lspsertifa.id",
    phone: "+62 812-9876-5432",
    linkedin: "linkedin.com/in/ariefrahman",
    type: "assessor"
  },
  {
    id: 9,
    name: "Anita Kusuma, M.T.",
    position: "Asesor IoT & Data Center",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "M.T. Teknik Elektro, Universitas Gadjah Mada",
    experience: "8+ tahun pengalaman di bidang IoT & Data Center",
    expertise: ["IoT Architecture", "Data Center Operations", "Network Infrastructure"],
    email: "anita.kusuma@lspsertifa.id",
    phone: "+62 813-8765-4321",
    linkedin: "linkedin.com/in/anitakusuma",
    type: "assessor"
  },
  {
    id: 10,
    name: "Diana Puspita",
    position: "Admin Sertifikasi",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S1 Administrasi Bisnis, Universitas Brawijaya",
    experience: "5+ tahun pengalaman di bidang administrasi",
    expertise: ["Document Management", "Customer Service", "Administrative Support"],
    email: "diana.puspita@lspsertifa.id",
    phone: "+62 818-1234-5678",
    linkedin: "linkedin.com/in/dianapuspita",
    type: "staff"
  },
  {
    id: 11,
    name: "Andi Firmansyah",
    position: "IT Support",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S1 Teknik Informatika, Universitas Indonesia",
    experience: "3+ tahun pengalaman di bidang IT support",
    expertise: ["Technical Support", "System Administration", "Network Troubleshooting"],
    email: "andi.firmansyah@lspsertifa.id",
    phone: "+62 819-8765-4321",
    linkedin: "linkedin.com/in/andifirmansyah",
    type: "staff"
  },
  {
    id: 12,
    name: "Putri Rahmadhani",
    position: "Marketing & Public Relations",
    image: "https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    education: "S1 Komunikasi, Universitas Padjadjaran",
    experience: "4+ tahun pengalaman di bidang marketing & PR",
    expertise: ["Digital Marketing", "Public Relations", "Content Creation"],
    email: "putri.rahmadhani@lspsertifa.id",
    phone: "+62 822-1234-5678",
    linkedin: "linkedin.com/in/putrirahmadhani",
    type: "staff"
  }
];

const TeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const managementMembers = teamMembers.filter(member => member.type === "management");
  const assessorMembers = teamMembers.filter(member => member.type === "assessor");
  const staffMembers = teamMembers.filter(member => member.type === "staff");

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
              <TabsTrigger value="staff">Staff</TabsTrigger>
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
          
          <TabsContent value="staff">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {staffMembers.map((member) => (
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
