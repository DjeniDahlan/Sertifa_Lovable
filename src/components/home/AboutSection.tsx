
import { Award, Users, BookOpen, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-sertifa-purple">{t("Tentang LSP Sertifa", "About LSP Sertifa")}</h2>
          <p className="text-gray-600 mb-6">
            {t(
              "LSP Sertifa adalah Lembaga Sertifikasi Profesi yang telah mendapatkan lisensi dari Badan Nasional Sertifikasi Profesi (BNSP) untuk menyelenggarakan sertifikasi kompetensi kerja di bidang teknologi informasi. Kami berkomitmen untuk meningkatkan kualitas dan daya saing tenaga kerja Indonesia melalui sertifikasi yang diakui secara nasional.",
              "LSP Sertifa is a Professional Certification Institution that has been licensed by the National Professional Certification Agency (BNSP) to organize work competency certification in the field of information technology. We are committed to improving the quality and competitiveness of the Indonesian workforce through nationally recognized certification."
            )}
          </p>
          <p className="text-gray-600">
            {t(
              "Dengan pengalaman lebih dari 7 tahun dan didukung oleh tim asesor yang profesional, LSP Sertifa telah mensertifikasi ribuan profesional IT dari berbagai latar belakang dan level kompetensi.",
              "With more than 7 years of experience and supported by a team of professional assessors, LSP Sertifa has certified thousands of IT professionals from various backgrounds and competency levels."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <Card className="border-none shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-sertifa-purple rounded-full flex items-center justify-center text-white mb-4">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t("Sertifikasi Berstandar BNSP", "BNSP Standard Certification")}</h3>
                <p className="text-gray-600">
                  {t(
                    "Sertifikasi yang diakui secara nasional dan sesuai dengan SKKNI untuk meningkatkan daya saing di dunia kerja.",
                    "Nationally recognized certification in accordance with SKKNI to increase competitiveness in the workforce."
                  )}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-sertifa-purple rounded-full flex items-center justify-center text-white mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t("Asesor Profesional", "Professional Assessors")}</h3>
                <p className="text-gray-600">
                  {t(
                    "Tim asesor berpengalaman dan tersertifikasi BNSP dengan latar belakang industri dan akademis yang kuat.",
                    "Experienced and BNSP-certified assessor team with strong industry and academic backgrounds."
                  )}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-sertifa-purple rounded-full flex items-center justify-center text-white mb-4">
                  <BookOpen size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t("15 Skema Sertifikasi", "15 Certification Schemes")}</h3>
                <p className="text-gray-600">
                  {t(
                    "Beragam skema sertifikasi yang relevan dengan kebutuhan industri, dari Data Science hingga IT Management.",
                    "Various certification schemes relevant to industry needs, from Data Science to IT Management."
                  )}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-sertifa-purple rounded-full flex items-center justify-center text-white mb-4">
                  <Calendar size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t("Jadwal Fleksibel", "Flexible Schedule")}</h3>
                <p className="text-gray-600">
                  {t(
                    "Pilihan jadwal yang fleksibel untuk kenyamanan peserta, termasuk opsi sertifikasi di akhir pekan.",
                    "Flexible schedule options for participant convenience, including weekend certification options."
                  )}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
