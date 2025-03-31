
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CertificationScheme } from "@/data/certificationSchemes";
import SchemaCard from "./SchemaCard";

interface SchemaListProps {
  filteredSchemes: CertificationScheme[];
  resetFilters: () => void;
}

const SchemaList = ({ filteredSchemes, resetFilters }: SchemaListProps) => {
  const { t } = useLanguage();
  
  if (filteredSchemes.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
          <Search size={36} className="text-gray-400" />
        </div>
        <h3 className="text-xl font-medium text-gray-600 mb-2">{t("Tidak ada skema yang ditemukan", "No schemes found")}</h3>
        <p className="text-gray-500 mb-4">{t("Coba ubah pencarian atau filter Anda", "Try changing your search or filter")}</p>
        <Button 
          variant="outline"
          onClick={resetFilters}
          className="border-sertifa-purple text-sertifa-purple hover:bg-sertifa-purple hover:text-white"
        >
          {t("Reset Filter", "Reset Filter")}
        </Button>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredSchemes.map((scheme) => (
        <SchemaCard key={scheme.id} scheme={scheme} />
      ))}
    </div>
  );
};

export default SchemaList;
