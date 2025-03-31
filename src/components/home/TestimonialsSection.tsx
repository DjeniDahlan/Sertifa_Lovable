
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-sertifa-purple">Testimoni Peserta</h2>
          <p className="text-gray-600">
            Apa kata peserta yang telah mengikuti program sertifikasi di LSP Sertifa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-none shadow-md hover:shadow-lg transition-all">
            <CardContent className="pt-6">
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Ahmad Fauzi" 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">Ahmad Fauzi</h4>
                    <p className="text-sm text-gray-500">IT Manager di Perusahaan Fintech</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Sertifikasi IT Service Manager dari LSP Sertifa sangat membantu karir saya. Materi uji kompetensi yang komprehensif dan asesor yang profesional membuat proses sertifikasi menjadi pengalaman pembelajaran yang berharga."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-all">
            <CardContent className="pt-6">
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Lina Mariani" 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">Lina Mariani</h4>
                    <p className="text-sm text-gray-500">Data Analyst di Perusahaan E-commerce</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Berkat sertifikasi Associate Data Analyst, saya mendapatkan promosi dan peningkatan gaji yang signifikan. Proses sertifikasi yang fleksibel memungkinkan saya tetap bekerja sambil mempersiapkan ujian."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-all">
            <CardContent className="pt-6">
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/76.jpg" 
                    alt="Budi Santoso" 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">Budi Santoso</h4>
                    <p className="text-sm text-gray-500">Software Engineer di Startup Teknologi</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Sertifikasi dari LSP Sertifa memberi saya keunggulan kompetitif saat melamar pekerjaan. Banyak perusahaan yang mencari kandidat dengan sertifikasi yang diakui BNSP, dan ini membuka banyak peluang karir baru."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
