
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { CertificationScheme } from "@/data/certificationSchemes";

interface SchemeDetailHeaderProps {
  scheme: CertificationScheme;
}

const SchemeDetailHeader = ({ scheme }: SchemeDetailHeaderProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-gradient-to-r from-sertifa-purple to-sertifa-darkpurple text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/skema" 
            className="inline-flex items-center text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft size={16} className="mr-2" /> {t("Kembali ke Daftar Skema", "Back to Scheme List")}
          </Link>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  scheme.type === "okupasi" 
                    ? "bg-blue-100 text-blue-800" 
                    : "bg-green-100 text-green-800"
                }`}>
                  {scheme.type === "okupasi" ? t("Okupasi", "Occupation") : t("Klaster", "Cluster")}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4">{scheme.title}</h1>
              <p className="text-lg">{scheme.description}</p>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold">{t("Biaya Sertifikasi", "Certification Fee")}</span>
                  <span className="text-xl font-bold">{scheme.price}</span>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Calendar size={18} className="mr-2" />
                    <span>{scheme.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={18} className="mr-2" />
                    <span>{t("Tertulis, Praktik, Wawancara", "Written, Practice, Interview")}</span>
                  </div>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-white text-sertifa-purple hover:bg-gray-100"
                >
                  <Link to="/pendaftaran">{t("Daftar Sekarang", "Register Now")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemeDetailHeader;
