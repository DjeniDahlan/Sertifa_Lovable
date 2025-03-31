
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const CtaSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-sertifa-purple text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{t("Siap Untuk Meningkatkan Karir Anda?", "Ready to Advance Your Career?")}</h2>
          <p className="text-lg mb-8">
            {t(
              "Dapatkan sertifikasi profesional yang diakui secara nasional untuk meningkatkan kompetensi dan daya saing Anda di dunia kerja.",
              "Get nationally recognized professional certification to enhance your competence and competitiveness in the workplace."
            )}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
    </section>
  );
};

export default CtaSection;
