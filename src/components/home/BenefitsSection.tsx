
import { Star, Rocket, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BenefitsSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Manfaat Sertifikasi" 
                className="rounded-lg shadow-xl w-full object-cover"
                style={{ height: "500px" }}
              />
              <div className="absolute -top-6 -left-6 bg-sertifa-purple p-4 rounded-lg shadow-xl text-white">
                <p className="font-bold text-xl">Kualitas Terjamin</p>
                <p className="text-sm">Standar BNSP</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-sertifa-purple">Manfaat Sertifikasi Profesi</h2>
            <p className="text-gray-600 mb-8">
              Sertifikasi profesi memberikan berbagai keuntungan untuk pengembangan karir dan profesionalitas Anda
              di bidang teknologi informasi.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple mr-4 flex-shrink-0">
                  <Star size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pengakuan Kompetensi</h3>
                  <p className="text-gray-600">
                    Sertifikasi BNSP memberikan bukti formal atas kompetensi yang Anda miliki, diakui secara nasional dan sesuai
                    dengan standar industri terkini.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple mr-4 flex-shrink-0">
                  <Rocket size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Peningkatan Karir</h3>
                  <p className="text-gray-600">
                    Sertifikasi membantu Anda mendapatkan promosi, kenaikan gaji, dan membuka peluang karir baru yang lebih baik
                    di perusahaan dalam dan luar negeri.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple mr-4 flex-shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Keunggulan Kompetitif</h3>
                  <p className="text-gray-600">
                    Memberi Anda keunggulan dibanding kandidat lain saat melamar pekerjaan dan memenuhi persyaratan kualifikasi
                    untuk proyek-proyek tertentu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
