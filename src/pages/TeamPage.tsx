
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  imageUrl: string;
  description: string;
}

const directors: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Ahmad Suryadi",
    position: "Direktur Utama",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    description: "Dr. Ahmad memiliki pengalaman lebih dari 15 tahun di bidang IT dan sertifikasi profesional. Beliau juga aktif sebagai konsultan IT dan pembicara di berbagai konferensi teknologi."
  },
  {
    id: 2,
    name: "Ir. Budi Santoso, M.T.",
    position: "Direktur Operasional",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    description: "Ir. Budi memiliki latar belakang kuat dalam manajemen operasional dan pengembangan bisnis. Beliau bertanggung jawab atas kelancaran operasional LSP Sertifa."
  },
  {
    id: 3,
    name: "Dr. Siti Nurhaliza, M.Kom.",
    position: "Direktur Pengembangan",
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    description: "Dr. Siti fokus pada pengembangan skema sertifikasi yang relevan dengan kebutuhan industri IT terkini. Beliau memiliki pengalaman luas di bidang penelitian IT."
  }
];

const assessors: TeamMember[] = [
  {
    id: 1,
    name: "Drs. Hadi Wijaya, M.Sc.",
    position: "Lead Asesor - Data Science",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    description: "Drs. Hadi adalah pakar di bidang data science dengan pengalaman lebih dari 10 tahun. Beliau memiliki sertifikasi internasional di bidang data analytics dan AI."
  },
  {
    id: 2,
    name: "Ir. Dewi Safitri, M.T.",
    position: "Lead Asesor - IT Service Management",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    description: "Ir. Dewi memiliki pengalaman luas dalam implementasi ITIL dan manajemen layanan IT di berbagai perusahaan multinasional."
  },
  {
    id: 3,
    name: "Dr. Reza Pratama, M.Kom.",
    position: "Lead Asesor - Software Development",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    description: "Dr. Reza adalah praktisi dan peneliti di bidang pengembangan perangkat lunak dengan keahlian khusus dalam metodologi Agile dan DevOps."
  },
  {
    id: 4,
    name: "Indah Permatasari, M.Sc.",
    position: "Asesor - Cybersecurity",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    description: "Indah adalah pakar keamanan siber dengan sertifikasi CISSP dan CEH. Beliau aktif dalam komunitas keamanan IT dan sebagai pembicara di berbagai konferensi."
  },
  {
    id: 5,
    name: "Dr. Eko Nugroho, M.T.",
    position: "Asesor - Network Infrastructure",
    imageUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    description: "Dr. Eko adalah pakar di bidang infrastruktur jaringan dengan pengalaman lebih dari 15 tahun. Beliau memiliki berbagai sertifikasi Cisco dan Juniper."
  },
  {
    id: 6,
    name: "Ratna Sari, M.Kom.",
    position: "Asesor - Project Management",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    description: "Ratna memiliki sertifikasi PMP dan pengalaman sebagai project manager di berbagai proyek IT skala besar. Beliau juga merupakan trainer untuk metodologi manajemen proyek."
  }
];

const TeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      
      <div className="bg-gradient-to-r from-sertifa-purple to-sertifa-darkpurple text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Tim dan Asesor</h1>
          <p className="text-lg">Kenali para profesional dan asesor berpengalaman di LSP Sertifa</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="directors" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="directors" className="text-sm md:text-base">Tim Manajemen</TabsTrigger>
            <TabsTrigger value="assessors" className="text-sm md:text-base">Asesor</TabsTrigger>
          </TabsList>
          
          <TabsContent value="directors">
            <div className="max-w-4xl mx-auto mb-8">
              <h2 className="text-2xl font-bold mb-4 text-sertifa-purple">Tim Manajemen</h2>
              <p className="text-gray-600 mb-8">
                Tim manajemen LSP Sertifa terdiri dari para profesional berpengalaman yang berkomitmen untuk 
                mengembangkan standar kompetensi di bidang teknologi informasi dan memberikan layanan sertifikasi 
                berkualitas.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {directors.map((member) => (
                  <Card key={member.id} className="border-none shadow-md overflow-hidden">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={member.imageUrl} 
                        alt={member.name} 
                        className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-sertifa-purple font-medium mb-3">{member.position}</p>
                      <p className="text-gray-600 text-sm">{member.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="assessors">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-sertifa-purple">Tim Asesor</h2>
              <p className="text-gray-600 mb-8">
                Tim asesor LSP Sertifa terdiri dari para ahli dan praktisi di bidang teknologi informasi yang telah tersertifikasi 
                BNSP sebagai asesor kompetensi. Mereka memiliki pengalaman luas di industri dan komitmen untuk menjaga 
                standar kompetensi tertinggi.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {assessors.map((assessor) => (
                  <Card key={assessor.id} className="border-none shadow-md overflow-hidden">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={assessor.imageUrl} 
                        alt={assessor.name} 
                        className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold">{assessor.name}</h3>
                      <p className="text-sertifa-purple font-medium mb-3">{assessor.position}</p>
                      <p className="text-gray-600 text-sm">{assessor.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-sertifa-purple">Bergabung dengan Tim Kami</h2>
            <p className="text-lg mb-6 text-gray-600">
              LSP Sertifa selalu terbuka untuk profesional berpengalaman yang ingin bergabung sebagai asesor.
              Jika Anda memiliki expertise di bidang teknologi informasi dan tertarik menjadi bagian dari tim kami,
              silakan hubungi kami.
            </p>
            <a href="/kontak" className="inline-block px-6 py-3 bg-sertifa-purple text-white rounded-md hover:bg-sertifa-darkpurple transition-colors">
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default TeamPage;
