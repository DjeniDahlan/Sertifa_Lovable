
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, ArrowRight, Bell, BookOpen, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const InformationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      
      <div className="bg-gradient-to-r from-sertifa-purple to-sertifa-darkpurple text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Informasi</h1>
            <p className="text-lg">Informasi terkini seputar LSP Sertifa dan kegiatan sertifikasi</p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3 space-y-8">
              <Card className="border-none shadow-md hover:shadow-lg transition-all overflow-hidden">
                <div className="w-full h-64 bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1560439513-74b037a25d84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Pendaftaran Batch 12"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center text-gray-500 mb-3">
                    <CalendarDays size={16} className="mr-2" />
                    <span>12 Juni 2023</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-sertifa-purple">Pendaftaran Batch 12 Telah Dibuka</h2>
                  <p className="text-gray-700 mb-4">
                    LSP Sertifa membuka pendaftaran batch 12 untuk seluruh skema sertifikasi. Pendaftaran dapat dilakukan
                    melalui website resmi kami mulai tanggal 15 Juni hingga 30 Juni 2023. Uji kompetensi akan dilaksanakan
                    pada tanggal 10-15 Juli 2023.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Kami menawarkan 15 skema sertifikasi yang dapat dipilih sesuai dengan kebutuhan dan minat Anda. Setiap peserta akan mendapatkan bimbingan persiapan uji kompetensi dan materi pendukung untuk memaksimalkan hasil sertifikasi.
                  </p>
                  <Button asChild variant="outline" className="text-sertifa-purple border-sertifa-purple hover:bg-sertifa-purple hover:text-white">
                    <Link to="/pendaftaran">Daftar Sekarang</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-all overflow-hidden">
                <div className="w-full h-64 bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Kerjasama LSP Sertifa dengan Industri Teknologi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center text-gray-500 mb-3">
                    <CalendarDays size={16} className="mr-2" />
                    <span>5 Mei 2023</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-sertifa-purple">Kerjasama LSP Sertifa dengan Industri Teknologi</h2>
                  <p className="text-gray-700 mb-4">
                    LSP Sertifa menandatangani nota kesepahaman (MoU) dengan beberapa perusahaan teknologi terkemuka
                    untuk program pengembangan kompetensi dan sertifikasi SDM bidang teknologi informasi. Kerjasama ini
                    mencakup penyelarasan kurikulum sertifikasi dengan kebutuhan industri dan rekrutmen tenaga kerja
                    tersertifikasi.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Dengan kerjasama ini, LSP Sertifa berharap dapat menghasilkan sertifikasi yang semakin relevan dengan kebutuhan industri dan meningkatkan penyerapan tenaga kerja tersertifikasi di sektor teknologi.
                  </p>
                  <Button variant="outline" className="text-sertifa-purple border-sertifa-purple hover:bg-sertifa-purple hover:text-white">
                    Baca Selengkapnya
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-all overflow-hidden">
                <div className="w-full h-64 bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Sertifikasi Data Scientist"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center text-gray-500 mb-3">
                    <CalendarDays size={16} className="mr-2" />
                    <span>20 April 2023</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-sertifa-purple">Sertifikasi Data Scientist Kini Tersedia</h2>
                  <p className="text-gray-700 mb-4">
                    LSP Sertifa dengan bangga mengumumkan bahwa skema sertifikasi baru "Associate Data Scientist" kini
                    tersedia. Skema ini dirancang untuk memenuhi kebutuhan industri akan tenaga kerja yang kompeten
                    dalam bidang data science. Pendaftaran sertifikasi sudah dapat dilakukan melalui website resmi kami.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Kami bekerjasama dengan para praktisi data science terkemuka untuk mengembangkan materi uji kompetensi yang komprehensif dan relevan dengan praktik industri terkini.
                  </p>
                  <Button asChild variant="outline" className="text-sertifa-purple border-sertifa-purple hover:bg-sertifa-purple hover:text-white">
                    <Link to="/skema/1">Lihat Detail Skema</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:w-1/3">
              <div className="sticky top-6">
                <Card className="border-none shadow-md mb-6">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Bell size={18} className="text-sertifa-purple mr-2" />
                      <h3 className="text-lg font-semibold">Pengumuman Terbaru</h3>
                    </div>
                    <ul className="space-y-4">
                      <li>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-sertifa-purple rounded-full mt-2 mr-2"></div>
                          <div>
                            <p className="text-sm font-medium">Jadwal Asesmen Batch 11 Telah Dirilis</p>
                            <p className="text-xs text-gray-500">18 Juni 2023</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-sertifa-purple rounded-full mt-2 mr-2"></div>
                          <div>
                            <p className="text-sm font-medium">Libur Hari Raya Idul Adha</p>
                            <p className="text-xs text-gray-500">25 Mei 2023</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-sertifa-purple rounded-full mt-2 mr-2"></div>
                          <div>
                            <p className="text-sm font-medium">Tambahan Slot Sertifikasi Junior Web Developer</p>
                            <p className="text-xs text-gray-500">10 Mei 2023</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-md mb-6">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <BookOpen size={18} className="text-sertifa-purple mr-2" />
                      <h3 className="text-lg font-semibold">Artikel Populer</h3>
                    </div>
                    <ul className="space-y-4">
                      <li className="border-b border-gray-100 pb-3">
                        <Link to="#" className="text-sm font-medium hover:text-sertifa-purple transition-colors">
                          5 Alasan Mengapa Sertifikasi Penting untuk Karir IT
                        </Link>
                      </li>
                      <li className="border-b border-gray-100 pb-3">
                        <Link to="#" className="text-sm font-medium hover:text-sertifa-purple transition-colors">
                          Panduan Lengkap Persiapan Uji Kompetensi
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="text-sm font-medium hover:text-sertifa-purple transition-colors">
                          Tips Sukses Interview Sertifikasi Profesi
                        </Link>
                      </li>
                    </ul>
                    <div className="mt-4 text-right">
                      <Link to="#" className="text-xs text-sertifa-purple hover:underline inline-flex items-center">
                        Lihat semua artikel <ArrowRight size={12} className="ml-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-md mb-6 bg-gradient-to-br from-sertifa-purple/10 to-sertifa-purple/5">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <User size={18} className="text-sertifa-purple mr-2" />
                      <h3 className="text-lg font-semibold">Testimonial</h3>
                    </div>
                    <div className="italic text-gray-600 text-sm mb-3">
                      "Sertifikasi dari LSP Sertifa sangat membantu karir saya. Proses sertifikasi yang profesional dan materi yang relevan dengan kebutuhan industri."
                    </div>
                    <div className="flex items-center">
                      <img 
                        src="https://randomuser.me/api/portraits/women/65.jpg" 
                        alt="Dewi Anggraini"
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <div>
                        <p className="text-xs font-medium">Dewi Anggraini</p>
                        <p className="text-xs text-gray-500">System Analyst</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="bg-gradient-to-r from-sertifa-purple to-sertifa-darkpurple text-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-2">Mulai Perjalanan Karir Anda</h3>
                  <p className="text-sm mb-4">
                    Tingkatkan kompetensi Anda dengan sertifikasi profesi yang diakui secara nasional.
                  </p>
                  <Button asChild className="w-full bg-white text-sertifa-purple hover:bg-gray-100">
                    <Link to="/pendaftaran">Daftar Sekarang</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default InformationPage;
