
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CertificationScheme } from "@/data/certificationSchemes";
import { useLanguage } from "@/contexts/LanguageContext";
import { getSchemeImage } from "@/utils/schemeImageMapping";

interface SchemeRelatedProps {
  currentSchemeId: number;
  schemes: CertificationScheme[];
}

const SchemeRelated = ({ currentSchemeId, schemes }: SchemeRelatedProps) => {
  const { t } = useLanguage();
  
  const relatedSchemes = schemes
    .filter(s => s.id !== currentSchemeId)
    .slice(0, 2);
  
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6 text-sertifa-purple">{t("Skema Sertifikasi Lainnya", "Other Certification Schemes")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {relatedSchemes.map(scheme => (
          <Card key={scheme.id} className="border-none shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                  <img 
                    src={getSchemeImage(scheme.id)} 
                    alt={scheme.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <div>
                  <div className="mb-1">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                      scheme.type === "okupasi" 
                        ? "bg-blue-100 text-blue-800" 
                        : "bg-green-100 text-green-800"
                    }`}>
                      {scheme.type === "okupasi" ? t("Okupasi", "Occupation") : t("Klaster", "Cluster")}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{scheme.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{scheme.duration}</p>
                  <Link 
                    to={`/skema/${scheme.id}`} 
                    className="inline-flex items-center text-sm text-sertifa-purple hover:text-sertifa-darkpurple"
                  >
                    {t("Lihat Detail", "View Details")} <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button asChild variant="outline" className="border-sertifa-purple text-sertifa-purple hover:bg-sertifa-purple hover:text-white">
          <Link to="/skema">{t("Lihat Semua Skema", "View All Schemes")}</Link>
        </Button>
      </div>
    </div>
  );
};

export default SchemeRelated;
