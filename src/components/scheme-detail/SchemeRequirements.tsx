
import { FileCheck } from "lucide-react";
import { CertificationScheme } from "@/data/certificationSchemes";
import { useLanguage } from "@/contexts/LanguageContext";
import { getSchemeImage } from "@/utils/schemeImageMapping";

interface SchemeRequirementsProps {
  scheme: CertificationScheme;
}

const SchemeRequirements = ({ scheme }: SchemeRequirementsProps) => {
  const { t } = useLanguage();
  
  return (
    <section className="mb-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img 
            src={getSchemeImage(scheme.id)}
            alt={scheme.title}
            className="w-full h-80 object-cover rounded-lg shadow-md"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder.svg";
            }}
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-6 text-sertifa-purple">{t("Persyaratan Peserta", "Participant Requirements")}</h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <ul className="space-y-3">
              {scheme.requirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-sertifa-purple rounded-full flex items-center justify-center text-white mr-3 mt-0.5">
                    <FileCheck size={14} />
                  </span>
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchemeRequirements;
