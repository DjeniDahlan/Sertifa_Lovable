
import { Award, Users, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SchemeBenefits = () => {
  const { t } = useLanguage();
  
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-6 text-sertifa-purple">{t("Keunggulan Sertifikasi", "Certification Benefits")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple mb-4">
            <Award size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Diakui Secara Nasional</h3>
          <p className="text-gray-600">
            Sertifikasi dari LSP Sertifa diakui secara nasional dan sesuai dengan Standar Kompetensi Kerja Nasional Indonesia (SKKNI).
          </p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple mb-4">
            <Users size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Asesor Profesional</h3>
          <p className="text-gray-600">
            Uji kompetensi dilakukan oleh asesor yang berpengalaman di bidangnya dan telah tersertifikasi oleh BNSP.
          </p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple mb-4">
            <BookOpen size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Materi Komprehensif</h3>
          <p className="text-gray-600">
            Materi uji kompetensi disusun berdasarkan kebutuhan industri terkini dan mencakup aspek pengetahuan, keterampilan, dan sikap kerja.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SchemeBenefits;
