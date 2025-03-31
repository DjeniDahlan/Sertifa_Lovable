
import { Input } from "@/components/ui/input";
import { Search, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface SchemaHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SchemaHeader = ({ searchQuery, setSearchQuery }: SchemaHeaderProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-gradient-to-r from-sertifa-purple to-sertifa-darkpurple text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            <Award className="inline-block mr-2 mb-1" />
            {t("Skema Sertifikasi", "Certification Schemes")}
          </h1>
          <p className="text-lg mb-6">
            {t(
              "Pilih skema sertifikasi yang sesuai dengan kebutuhan karir dan pengembangan profesional Anda. LSP Sertifa menawarkan 15 skema sertifikasi yang diakui secara nasional.",
              "Choose a certification scheme that suits your career needs and professional development. LSP Sertifa offers 15 nationally recognized certification schemes."
            )}
          </p>
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder={t("Cari skema sertifikasi...", "Search certification schemes...")}
              className="pl-10 py-6 bg-white/90 text-gray-800 rounded-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemaHeader;
