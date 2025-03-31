
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const SchemaCallToAction = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src="/lovable-uploads/5237ea6b-60c9-4c9f-9d97-f89b25bd7bf4.png" 
                alt="Sertifikasi" 
                className="rounded-lg shadow-lg w-full h-72 object-cover"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 text-sertifa-purple">{t("Siap Untuk Ambil Sertifikasi?", "Ready to Get Certified?")}</h2>
              <p className="text-lg mb-8 text-gray-600">
                {t(
                  "Segera daftarkan diri Anda untuk mengikuti sertifikasi dan tingkatkan kompetensi profesional Anda.",
                  "Register yourself now to participate in certification and enhance your professional competence."
                )}
              </p>
              <Button
                asChild
                size="lg"
                className="bg-sertifa-purple hover:bg-sertifa-darkpurple"
              >
                <Link to="/pendaftaran">{t("Daftar Sekarang", "Register Now")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemaCallToAction;
