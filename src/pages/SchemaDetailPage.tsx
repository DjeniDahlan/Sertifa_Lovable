import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, DollarSign, FileCheck, Award, Users, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import { certificationSchemes } from "@/data/certificationSchemes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const SchemaDetailPage = () => {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const scheme = certificationSchemes.find(s => s.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getSchemeImage = (id: number) => {
    const images = [
      "/lovable-uploads/1ba3c4f7-159e-4f9c-92b5-99f286cdafab.png",
      "/lovable-uploads/412b768d-9b28-448d-a8b7-c416179ae543.png",
      "/lovable-uploads/5237ea6b-60c9-4c9f-9d97-f89b25bd7bf4.png",
      "/lovable-uploads/ae245acb-ef35-4248-aa1a-93acd8128f7a.png",
    ];
    
    return images[id % images.length];
  };

  if (!scheme) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">{t("Skema tidak ditemukan", "Scheme not found")}</h1>
          <p className="mb-8">{t("Maaf, skema sertifikasi yang Anda cari tidak ditemukan.", "Sorry, the certification scheme you are looking for was not found.")}</p>
          <Button asChild className="bg-sertifa-purple hover:bg-sertifa-darkpurple">
            <Link to="/skema">{t("Kembali ke Daftar Skema", "Back to Scheme List")}</Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      <div className="bg-gradient-to-r from-sertifa-purple to-sertifa-darkpurple text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/skema" 
              className="inline-flex items-center text-white/80 hover:text-white mb-6"
            >
              <ArrowLeft size={16} className="mr-2" /> {t("Kembali ke Daftar Skema", "Back to Scheme List")}
            </Link>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    scheme.type === "okupasi" 
                      ? "bg-blue-100 text-blue-800" 
                      : "bg-green-100 text-green-800"
                  }`}>
                    {scheme.type === "okupasi" ? t("Okupasi", "Occupation") : t("Klaster", "Cluster")}
                  </span>
                </div>
                <h1 className="text-4xl font-bold mb-4">{scheme.title}</h1>
                <p className="text-lg">{scheme.description}</p>
              </div>
              <div className="md:w-1/3">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold">{t("Biaya Sertifikasi", "Certification Fee")}</span>
                    <span className="text-xl font-bold">{scheme.price}</span>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Calendar size={18} className="mr-2" />
                      <span>{scheme.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={18} className="mr-2" />
                      <span>{t("Tertulis, Praktik, Wawancara", "Written, Practice, Interview")}</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-white text-sertifa-purple hover:bg-gray-100"
                  >
                    <Link to="/pendaftaran">{t("Daftar Sekarang", "Register Now")}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
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
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-8 text-sertifa-purple text-center">{t("Proses Sertifikasi", "Certification Process")}</h2>
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center relative">
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm z-10">
                  <div className="w-16 h-16 bg-sertifa-purple rounded-full flex items-center justify-center text-white mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Pendaftaran</h3>
                  <p className="text-sm text-gray-600">Daftar dan pilih skema sertifikasi</p>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm z-10">
                  <div className="w-16 h-16 bg-sertifa-purple rounded-full flex items-center justify-center text-white mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Asesmen Mandiri</h3>
                  <p className="text-sm text-gray-600">Evaluasi diri terhadap unit kompetensi</p>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm z-10">
                  <div className="w-16 h-16 bg-sertifa-purple rounded-full flex items-center justify-center text-white mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Uji Kompetensi</h3>
                  <p className="text-sm text-gray-600">Tes tertulis, praktik dan wawancara</p>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm z-10">
                  <div className="w-16 h-16 bg-sertifa-purple rounded-full flex items-center justify-center text-white mb-4">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">Sertifikasi</h3>
                  <p className="text-sm text-gray-600">Penerbitan sertifikat kompetensi</p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-sertifa-purple">{t("Keunggulan Sertifikasi", "Certification Benefits")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple mb-4">
                  <Award size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Diakui Secara Nasional</h3>
                <p className="text-gray-600">
                  Sertifikasi dari LSP Sertifa diakui secara nasional dan sesuai dengan Standar Kompetensi Kerja Nasional Indonesia (SKKNI).
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Asesor Profesional</h3>
                <p className="text-gray-600">
                  Uji kompetensi dilakukan oleh asesor yang berpengalaman di bidangnya dan telah tersertifikasi oleh BNSP.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple mb-4">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Materi Komprehensif</h3>
                <p className="text-gray-600">
                  Materi uji kompetensi disusun berdasarkan kebutuhan industri terkini dan mencakup aspek pengetahuan, keterampilan, dan sikap kerja.
                </p>
              </div>
            </div>
          </section>
          
          <div className="bg-gradient-to-r from-sertifa-purple to-sertifa-darkpurple text-white p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold mb-2">{t("Mulai Perjalanan Sertifikasi Anda", "Start Your Certification Journey")}</h3>
                <p className="text-lg">
                  {t(
                    "Tingkatkan kualifikasi profesional Anda dengan sertifikasi kompetensi dari LSP Sertifa.",
                    "Enhance your professional qualifications with competency certification from LSP Sertifa."
                  )}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
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
          
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-6 text-sertifa-purple">{t("Skema Sertifikasi Lainnya", "Other Certification Schemes")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificationSchemes
                .filter(s => s.id !== scheme.id)
                .slice(0, 2)
                .map(otherScheme => (
                  <Card key={otherScheme.id} className="border-none shadow-md hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                          <img 
                            src={getSchemeImage(otherScheme.id)} 
                            alt={otherScheme.title}
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
                              otherScheme.type === "okupasi" 
                                ? "bg-blue-100 text-blue-800" 
                                : "bg-green-100 text-green-800"
                            }`}>
                              {otherScheme.type === "okupasi" ? t("Okupasi", "Occupation") : t("Klaster", "Cluster")}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold mb-1">{otherScheme.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{otherScheme.duration}</p>
                          <Link 
                            to={`/skema/${otherScheme.id}`} 
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
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default SchemaDetailPage;
