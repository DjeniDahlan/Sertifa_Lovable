
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Award, Users, Calendar, ChevronRight, Star, CheckCircle2, Rocket } from "lucide-react";
import { certificationSchemes } from "@/data/certificationSchemes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
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
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tingkatkan Profesionalitas dengan Sertifikasi Nasional BNSP
            </h1>
            <p className="text-lg mb-8">
              LSP Sertifa adalah lembaga sertifikasi profesi berstandar nasional BNSP di
              bidang teknologi informasi. Dapatkan sertifikasi yang diakui secara nasional untuk meningkatkan karir Anda.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-sertifa-purple hover:bg-gray-100"
              >
                <Link to="/skema">Lihat Skema Sertifikasi</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-sertifa-purple"
              >
                <Link to="/pendaftaran">Daftar Sekarang</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white clip-path-triangle"></div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-sertifa-purple">Tentang LSP Sertifa</h2>
            <p className="text-gray-600 mb-6">
              LSP Sertifa adalah Lembaga Sertifikasi Profesi yang telah mendapatkan lisensi dari Badan Nasional Sertifikasi Profesi (BNSP)
              untuk menyelenggarakan sertifikasi kompetensi kerja di bidang teknologi informasi. Kami berkomitmen untuk meningkatkan
              kualitas dan daya saing tenaga kerja Indonesia melalui sertifikasi yang diakui secara nasional.
            </p>
            <p className="text-gray-600">
              Dengan pengalaman lebih dari 7 tahun dan didukung oleh tim asesor yang profesional, LSP Sertifa telah mensertifikasi
              ribuan profesional IT dari berbagai latar belakang dan level kompetensi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-sertifa-purple rounded-full flex items-center justify-center text-white mb-4">
                    <Award size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Sertifikasi Berstandar BNSP</h3>
                  <p className="text-gray-600">
                    Sertifikasi yang diakui secara nasional dan sesuai dengan SKKNI untuk meningkatkan daya saing di dunia kerja.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-sertifa-purple rounded-full flex items-center justify-center text-white mb-4">
                    <Users size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Asesor Profesional</h3>
                  <p className="text-gray-600">
                    Tim asesor berpengalaman dan tersertifikasi BNSP dengan latar belakang industri dan akademis yang kuat.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-sertifa-purple rounded-full flex items-center justify-center text-white mb-4">
                    <BookOpen size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">15 Skema Sertifikasi</h3>
                  <p className="text-gray-600">
                    Beragam skema sertifikasi yang relevan dengan kebutuhan industri, dari Data Science hingga IT Management.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-sertifa-purple rounded-full flex items-center justify-center text-white mb-4">
                    <Calendar size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Jadwal Fleksibel</h3>
                  <p className="text-gray-600">
                    Pilihan jadwal yang fleksibel untuk kenyamanan peserta, termasuk opsi sertifikasi di akhir pekan.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-sertifa-purple">Manfaat Sertifikasi Profesi</h2>
            <p className="text-gray-600">
              Sertifikasi profesi memberikan berbagai keuntungan untuk pengembangan karir dan profesionalitas Anda
              di bidang teknologi informasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple mb-4">
                <Star size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pengakuan Kompetensi</h3>
              <p className="text-gray-600">
                Sertifikasi BNSP memberikan bukti formal atas kompetensi yang Anda miliki, diakui secara nasional dan sesuai
                dengan standar industri terkini.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple mb-4">
                <Rocket size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Peningkatan Karir</h3>
              <p className="text-gray-600">
                Sertifikasi membantu Anda mendapatkan promosi, kenaikan gaji, dan membuka peluang karir baru yang lebih baik
                di perusahaan dalam dan luar negeri.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple mb-4">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Keunggulan Kompetitif</h3>
              <p className="text-gray-600">
                Memberi Anda keunggulan dibanding kandidat lain saat melamar pekerjaan dan memenuhi persyaratan kualifikasi
                untuk proyek-proyek tertentu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Schemes Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-sertifa-purple">Skema Sertifikasi Unggulan</h2>
            <p className="text-gray-600">
              LSP Sertifa menawarkan 15 skema sertifikasi berbeda, dari skema okupasi hingga skema klaster untuk
              meningkatkan kompetensi profesional Anda di bidang teknologi informasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSchemes.map((scheme) => (
              <Card key={scheme.id} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        scheme.type === "okupasi" 
                          ? "bg-blue-100 text-blue-800" 
                          : "bg-green-100 text-green-800"
                      }`}>
                        {scheme.type === "okupasi" ? "Okupasi" : "Klaster"}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{scheme.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{scheme.description}</p>
                    <div className="mt-auto">
                      <Link 
                        to={`/skema/${scheme.id}`} 
                        className="inline-flex items-center text-sertifa-purple hover:text-sertifa-darkpurple"
                      >
                        Lihat Detail <ChevronRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-sertifa-purple hover:bg-sertifa-darkpurple">
              <Link to="/skema">Lihat Semua Skema</Link>
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
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
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

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
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

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
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
            <h2 className="text-3xl font-bold mb-4">Siap Untuk Meningkatkan Karir Anda?</h2>
            <p className="text-lg mb-8">
              Dapatkan sertifikasi profesional yang diakui secara nasional untuk meningkatkan kompetensi dan daya saing Anda di dunia kerja.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-sertifa-purple hover:bg-gray-100"
              >
                <Link to="/pendaftaran">Daftar Sekarang</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-sertifa-purple"
              >
                <Link to="/kontak">Hubungi Kami</Link>
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
