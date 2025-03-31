
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const SchemeCtaSection = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-gradient-to-r from-sertifa-purple to-sertifa-darkpurple text-white p-8 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 md:mr-8">
          <h3 className="text-2xl font-bold mb-2">{t("Mulai Perjalanan Sertifikasi Anda", "Start Your Certification Journey")}</h3>
          <p className="text-lg">
            {t(
              "Tingkatkan kualifikasi profesional Anda dengan sertifikasi kompetensi dari LSP Sertifa.",
              "Enhance your professional qualifications with competency certification from LSP Sertifa."
            )}
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-sertifa-purple hover:bg-gray-100"
          >
            <Link to="/pendaftaran">{t("Daftar Sekarang", "Register Now")}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-sertifa-purple"
          >
            <Link to="/kontak">{t("Hubungi Kami", "Contact Us")}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SchemeCtaSection;
