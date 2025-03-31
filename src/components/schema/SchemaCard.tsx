
import { Card, CardContent } from "@/components/ui/card";
import { Book, Folder, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { CertificationScheme } from "@/data/certificationSchemes";
import { getSchemeImage } from "@/utils/schemeImageMapping";

interface SchemaCardProps {
  scheme: CertificationScheme;
}

const SchemaCard = ({ scheme }: SchemaCardProps) => {
  const { t } = useLanguage();
  
  return (
    <Card key={scheme.id} className="border-none shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 h-full">
      <CardContent className="pt-6 pb-6 flex flex-col h-full">
        <div className="mb-4 flex justify-between items-center">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
            scheme.type === "okupasi" 
              ? "bg-blue-100 text-blue-800" 
              : "bg-green-100 text-green-800"
          }`}>
            {scheme.type === "okupasi" ? (
              <>
                <Book size={12} className="mr-1" />
                {t("Okupasi", "Occupation")}
              </>
            ) : (
              <>
                <Folder size={12} className="mr-1" />
                {t("Klaster", "Cluster")}
              </>
            )}
          </span>
          <span className="text-sm font-medium text-gray-500">{scheme.duration}</span>
        </div>
        
        <div className="w-full h-40 mb-4 bg-gray-100 rounded-lg overflow-hidden">
          <img 
            src={getSchemeImage(scheme.id)} 
            alt={scheme.title}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
            onError={(e) => {
              // Fallback if image fails to load
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder.svg";
            }}
          />
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{scheme.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{scheme.description}</p>
        
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
          <span className="text-sm font-medium text-sertifa-purple">{scheme.price}</span>
          <Link 
            to={`/skema/${scheme.id}`} 
            className="inline-flex items-center text-sertifa-purple hover:text-sertifa-darkpurple"
          >
            {t("Lihat Detail", "View Details")} <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default SchemaCard;
