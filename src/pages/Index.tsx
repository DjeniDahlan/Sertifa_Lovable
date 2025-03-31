
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Award, Users, Calendar, ChevronRight, Star, CheckCircle2, Rocket } from "lucide-react";
import { certificationSchemes } from "@/data/certificationSchemes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { getSchemeImage } from "@/utils/schemeImageMapping";

const Index = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredSchemes = certificationSchemes.slice(0, 3);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sertifa-purple to-sertifa-darkpurple text-white py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 max-w-3xl mb-8 md:mb-0 md:pr-8">
              <div className="flex items-center mb-6">
                <img 
                  src="/lovable-uploads/1ba3c4f7-159e-4f9c-92b5-99f286cdafab.png" 
                  alt="LSP Sertifa Logo" 
                  className="h-16 mr-4"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t(
                  "Tingkatkan Profesionalitas dengan Sertifikasi Nasional BNSP",
                  "Enhance Your Professionalism with BNSP National Certification"
                )}
              </h1>
              <p className="text-lg mb-8">
                {t(
                  "LSP Sertifa adalah lembaga sertifikasi profesi berstandar nasional BNSP di bidang teknologi informasi. Dapatkan sertifikasi yang diakui secara nasional untuk meningkatkan karir Anda.",
                  "LSP Sertifa is a professional certification institution with BNSP national standards in the field of information technology. Get nationally recognized certification to enhance your career."
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-sertifa-purple hover:bg-gray-100"
                >
                  <Link to="/skema">{t("Lihat Skema Sertifikasi", "View Certification Schemes")}</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-sertifa-purple"
                >
                  <Link to="/pendaftaran">{t("Daftar Sekarang", "Register Now")}</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="/lovable-uploads/00338526-9ff1-4dbe-af94-053b712249af.png" 
                  alt="Sertifikasi Profesional" 
                  className="rounded-lg shadow-2xl w-full object-cover"
                  style={{ height: "450px" }}
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-sertifa-purple rounded-full flex items-center justify-center text-white mr-4">
                      <Award size={24} />
                    </div>
                    <div>
                      <p className="text-gray-800 font-bold">5000+</p>
                      <p className="text-gray-600 text-sm">{t("Profesional Tersertifikasi", "Certified Professionals")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white clip-path-triangle"></div>
      </section>

      {/* About Section */}
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

      {/* Benefits Section with Image */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Manfaat Sertifikasi" 
                  className="rounded-lg shadow-xl w-full object-cover"
                  style={{ height: "500px" }}
                />
                <div className="absolute -top-6 -left-6 bg-sertifa-purple p-4 rounded-lg shadow-xl text-white">
                  <p className="font-bold text-xl">Kualitas Terjamin</p>
                  <p className="text-sm">Standar BNSP</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-sertifa-purple">Manfaat Sertifikasi Profesi</h2>
              <p className="text-gray-600 mb-8">
                Sertifikasi profesi memberikan berbagai keuntungan untuk pengembangan karir dan profesionalitas Anda
                di bidang teknologi informasi.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple mr-4 flex-shrink-0">
                    <Star size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Pengakuan Kompetensi</h3>
                    <p className="text-gray-600">
                      Sertifikasi BNSP memberikan bukti formal atas kompetensi yang Anda miliki, diakui secara nasional dan sesuai
                      dengan standar industri terkini.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple mr-4 flex-shrink-0">
                    <Rocket size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Peningkatan Karir</h3>
                    <p className="text-gray-600">
                      Sertifikasi membantu Anda mendapatkan promosi, kenaikan gaji, dan membuka peluang karir baru yang lebih baik
                      di perusahaan dalam dan luar negeri.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple mr-4 flex-shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Keunggulan Kompetitif</h3>
                    <p className="text-gray-600">
                      Memberi Anda keunggulan dibanding kandidat lain saat melamar pekerjaan dan memenuhi persyaratan kualifikasi
                      untuk proyek-proyek tertentu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Schemes Section */}
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-sertifa-purple">Testimoni Peserta</h2>
            <p className="text-gray-600">
              Apa kata peserta yang telah mengikuti program sertifikasi di LSP Sertifa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <img 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt="Ahmad Fauzi" 
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">Ahmad Fauzi</h4>
                      <p className="text-sm text-gray-500">IT Manager di Perusahaan Fintech</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Sertifikasi IT Service Manager dari LSP Sertifa sangat membantu karir saya. Materi uji kompetensi yang komprehensif dan asesor yang profesional membuat proses sertifikasi menjadi pengalaman pembelajaran yang berharga."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <img 
                      src="https://randomuser.me/api/portraits/women/44.jpg" 
                      alt="Lina Mariani" 
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">Lina Mariani</h4>
                      <p className="text-sm text-gray-500">Data Analyst di Perusahaan E-commerce</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Berkat sertifikasi Associate Data Analyst, saya mendapatkan promosi dan peningkatan gaji yang signifikan. Proses sertifikasi yang fleksibel memungkinkan saya tetap bekerja sambil mempersiapkan ujian."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <img 
                      src="https://randomuser.me/api/portraits/men/76.jpg" 
                      alt="Budi Santoso" 
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">Budi Santoso</h4>
                      <p className="text-sm text-gray-500">Software Engineer di Startup Teknologi</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Sertifikasi dari LSP Sertifa memberi saya keunggulan kompetitif saat melamar pekerjaan. Banyak perusahaan yang mencari kandidat dengan sertifikasi yang diakui BNSP, dan ini membuka banyak peluang karir baru."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sertifa-purple text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{t("Siap Untuk Meningkatkan Karir Anda?", "Ready to Advance Your Career?")}</h2>
            <p className="text-lg mb-8">
              {t(
                "Dapatkan sertifikasi profesional yang diakui secara nasional untuk meningkatkan kompetensi dan daya saing Anda di dunia kerja.",
                "Get nationally recognized professional certification to enhance your competence and competitiveness in the workplace."
              )}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
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
                <Link to="/kontak">{t("Hubungi Kami", "Contact Us")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
