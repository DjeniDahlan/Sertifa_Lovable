
import { Button } from "@/components/ui/button";
import { Filter, BadgeCheck, Book, Folder } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CertificationScheme } from "@/data/certificationSchemes";

interface SchemaFilterProps {
  activeTab: "all" | "okupasi" | "klaster";
  setActiveTab: (tab: "all" | "okupasi" | "klaster") => void;
  filteredSchemes: CertificationScheme[];
  totalSchemes: number;
}

const SchemaFilter = ({ 
  activeTab, 
  setActiveTab, 
  filteredSchemes, 
  totalSchemes 
}: SchemaFilterProps) => {
  const { t } = useLanguage();

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <div className="flex items-center">
          <Filter size={20} className="text-sertifa-purple mr-2" />
          <h2 className="text-xl font-semibold">{t("Filter Skema", "Filter Schemes")}</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            variant={activeTab === "all" ? "default" : "outline"}
            onClick={() => setActiveTab("all")}
            className={activeTab === "all" ? "bg-sertifa-purple hover:bg-sertifa-darkpurple" : ""}
          >
            <BadgeCheck size={16} className="mr-2" />
            {t("Semua Skema", "All Schemes")}
          </Button>
          <Button 
            variant={activeTab === "okupasi" ? "default" : "outline"}
            onClick={() => setActiveTab("okupasi")}
            className={activeTab === "okupasi" ? "bg-sertifa-purple hover:bg-sertifa-darkpurple" : ""}
          >
            <Book size={16} className="mr-2" />
            {t("Skema Okupasi", "Occupation Schemes")}
          </Button>
          <Button 
            variant={activeTab === "klaster" ? "default" : "outline"}
            onClick={() => setActiveTab("klaster")}
            className={activeTab === "klaster" ? "bg-sertifa-purple hover:bg-sertifa-darkpurple" : ""}
          >
            <Folder size={16} className="mr-2" />
            {t("Skema Klaster", "Cluster Schemes")}
          </Button>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">
              {t(
                `Menampilkan `,
                `Showing `
              )}
              <span className="font-semibold text-sertifa-purple">{filteredSchemes.length}</span>
              {t(
                ` dari ${totalSchemes} skema sertifikasi`,
                ` of ${totalSchemes} certification schemes`
              )}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
              <span className="text-sm text-gray-600">{t("Okupasi", "Occupation")}</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
              <span className="text-sm text-gray-600">{t("Klaster", "Cluster")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemaFilter;
