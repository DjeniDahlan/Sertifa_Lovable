
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";

const SchemeCompetencyUnits = () => {
  const { t } = useLanguage();
  
  return (
    <section className="mb-12">
      <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-sertifa-purple">{t("Unit Kompetensi", "Competency Units")}</h2>
          <p className="text-gray-600 mb-4">
            {t(
              "Skema sertifikasi ini terdiri dari beberapa unit kompetensi yang harus dikuasai oleh peserta untuk mendapatkan sertifikat kompetensi.",
              "This certification scheme consists of several competency units that must be mastered by participants to obtain a competency certificate."
            )}
          </p>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/lovable-uploads/412b768d-9b28-448d-a8b7-c416179ae543.png" 
            alt="Unit Kompetensi"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-5">
            <p className="font-medium">J.620100.001.01</p>
            <p className="text-gray-600">Mengimplementasikan pemrograman terstruktur</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-5">
            <p className="font-medium">J.620100.002.01</p>
            <p className="text-gray-600">Menggunakan struktur data</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-5">
            <p className="font-medium">J.620100.005.01</p>
            <p className="text-gray-600">Mengimplementasikan user interface</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-5">
            <p className="font-medium">J.620100.011.01</p>
            <p className="text-gray-600">Melakukan instalasi software tools pemrograman</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SchemeCompetencyUnits;
