
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const SchemeNotFound = () => {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-bold mb-4">{t("Skema tidak ditemukan", "Scheme not found")}</h1>
      <p className="mb-8">{t("Maaf, skema sertifikasi yang Anda cari tidak ditemukan.", "Sorry, the certification scheme you are looking for was not found.")}</p>
      <Button asChild className="bg-sertifa-purple hover:bg-sertifa-darkpurple">
        <Link to="/skema">{t("Kembali ke Daftar Skema", "Back to Scheme List")}</Link>
      </Button>
    </div>
  );
};

export default SchemeNotFound;
