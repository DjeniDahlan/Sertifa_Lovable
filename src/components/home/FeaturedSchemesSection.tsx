
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { certificationSchemes } from "@/data/certificationSchemes";
import { useLanguage } from "@/contexts/LanguageContext";
import { getSchemeImage } from "@/utils/schemeImageMapping";

const FeaturedSchemesSection = () => {
  const { t } = useLanguage();
  const featuredSchemes = certificationSchemes.slice(0, 3);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-sertifa-purple">{t("Skema Sertifikasi Unggulan", "Featured Certification Schemes")}</h2>
          <p className="text-gray-600">
            {t(
              "LSP Sertifa menawarkan 15 skema sertifikasi berbeda, dari skema okupasi hingga skema klaster untuk meningkatkan kompetensi profesional Anda di bidang teknologi informasi.",
              "LSP Sertifa offers 15 different certification schemes, from occupation schemes to cluster schemes to enhance your professional competence in the field of information technology."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredSchemes.map((scheme) => (
            <Card key={scheme.id} className="border-none shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
              <CardContent className="pt-6 pb-6 flex flex-col h-full">
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    scheme.type === "okupasi" 
                      ? "bg-blue-100 text-blue-800" 
                      : "bg-green-100 text-green-800"
                  }`}>
                    {scheme.type === "okupasi" ? t("Okupasi", "Occupation") : t("Klaster", "Cluster")}
                  </span>
                </div>
                
                <div className="w-full h-40 mb-4 bg-gray-100 rounded-lg overflow-hidden">
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
                
                <h3 className="text-xl font-semibold mb-2">{scheme.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{scheme.description}</p>
                <div className="mt-auto">
                  <Link 
                    to={`/skema/${scheme.id}`} 
                    className="inline-flex items-center text-sertifa-purple hover:text-sertifa-darkpurple"
                  >
                    {t("Lihat Detail", "View Details")} <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-sertifa-purple hover:bg-sertifa-darkpurple">
            <Link to="/skema">{t("Lihat Semua Skema", "View All Schemes")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSchemesSection;
