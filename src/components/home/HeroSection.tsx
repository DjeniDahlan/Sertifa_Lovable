
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative bg-gradient-to-r from-sertifa-purple to-sertifa-darkpurple text-white py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 max-w-3xl mb-8 md:mb-0 md:pr-8">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/1ba3c4f7-159e-4f9c-92b5-99f286cdafab.png" 
                alt="LSP Sertifa Logo" 
                className="h-16 mr-4"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t(
                "Tingkatkan Profesionalitas dengan Sertifikasi Nasional BNSP",
                "Enhance Your Professionalism with BNSP National Certification"
              )}
            </h1>
            <p className="text-lg mb-8">
              {t(
                "LSP Sertifa adalah lembaga sertifikasi profesi berstandar nasional BNSP di bidang teknologi informasi. Dapatkan sertifikasi yang diakui secara nasional untuk meningkatkan karir Anda.",
                "LSP Sertifa is a professional certification institution with BNSP national standards in the field of information technology. Get nationally recognized certification to enhance your career."
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-sertifa-purple hover:bg-gray-100"
              >
                <Link to="/skema">{t("Lihat Skema Sertifikasi", "View Certification Schemes")}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-sertifa-purple"
              >
                <Link to="/pendaftaran">{t("Daftar Sekarang", "Register Now")}</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="/lovable-uploads/00338526-9ff1-4dbe-af94-053b712249af.png" 
                alt="Sertifikasi Profesional" 
                className="rounded-lg shadow-2xl w-full object-cover"
                style={{ height: "450px" }}
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-sertifa-purple rounded-full flex items-center justify-center text-white mr-4">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="text-gray-800 font-bold">5000+</p>
                    <p className="text-gray-600 text-sm">{t("Profesional Tersertifikasi", "Certified Professionals")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white clip-path-triangle"></div>
    </section>
  );
};

export default HeroSection;
