
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar as CalendarIcon, Clock as ClockIcon, Book, Folder } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CertificationScheme } from "@/data/certificationSchemes";
import { getSchemeImage } from "@/utils/schemeImageMapping";

interface SchemeDetailHeaderProps {
  scheme: CertificationScheme;
}

const SchemeDetailHeader = ({ scheme }: SchemeDetailHeaderProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-gradient-to-r from-sertifa-purple to-sertifa-darkpurple text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-2/5 mb-8 lg:mb-0">
            <div className="bg-white p-2 rounded-lg shadow-lg">
              <img 
                src={getSchemeImage(scheme.id)} 
                alt={scheme.title}
                className="w-full h-64 object-cover rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.svg";
                }}
              />
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <div className="flex items-center mb-4">
              <Badge className={`${
                scheme.type === "okupasi" 
                  ? "bg-blue-600" 
                  : "bg-green-600"
              }`}>
                {scheme.type === "okupasi" ? (
                  <span className="flex items-center">
                    <Book size={12} className="mr-1" />
                    {t("Okupasi", "Occupation")}
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Folder size={12} className="mr-1" />
                    {t("Klaster", "Cluster")}
                  </span>
                )}
              </Badge>
              {/* Removing the reference to the non-existent 'code' property */}
            </div>
            
            <h1 className="text-3xl font-bold mb-4">{scheme.title}</h1>
            <p className="text-white/90 mb-6 text-lg">{scheme.description}</p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center">
                <CalendarIcon size={20} className="mr-2" />
                <span>{scheme.duration}</span>
              </div>
              <div className="flex items-center">
                <ClockIcon size={20} className="mr-2" />
                <span>{t("Jadwal Fleksibel", "Flexible Schedule")}</span>
              </div>
              <div className="px-3 py-1 bg-white/20 rounded-lg">
                <span className="font-semibold">{scheme.price}</span>
              </div>
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
                <Link to="/kontak">{t("Hubungi Admin", "Contact Admin")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemeDetailHeader;
