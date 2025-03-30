
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Target, FileCheck, Award, Clock, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProfilePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      
      <div className="bg-gradient-to-r from-sertifa-purple to-sertifa-darkpurple text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Profil LSP Sertifa</h1>
          <p className="text-lg">Lembaga Sertifikasi Profesi di bidang Teknologi Informasi</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4 text-sertifa-purple">Sejarah</h2>
                <p className="mb-4 text-gray-700">
                  LSP Sertifa didirikan pada tahun 2015 sebagai respons terhadap kebutuhan akan 
                  sertifikasi profesi yang berkualitas di bidang teknologi informasi di Indonesia. 
                  Berawal dari visi untuk meningkatkan daya saing tenaga kerja Indonesia di era 
                  digital, LSP Sertifa telah berkembang menjadi lembaga sertifikasi terkemuka yang 
                  diakui secara nasional.
                </p>
                <p className="mb-4 text-gray-700">
                  Pada tahun 2016, LSP Sertifa mendapatkan lisensi resmi dari Badan Nasional 
                  Sertifikasi Profesi (BNSP) untuk menyelenggarakan uji kompetensi dan sertifikasi 
                  di bidang teknologi informasi. Sejak itu, kami telah mensertifikasi ribuan 
                  profesional IT dan terus mengembangkan skema sertifikasi yang relevan dengan 
                  kebutuhan industri.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/ae245acb-ef35-4248-aa1a-93acd8128f7a.png" 
                    alt="Sejarah LSP Sertifa" 
                    className="rounded-lg shadow-lg w-full h-96 object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-sertifa-purple text-white px-4 py-2 rounded-lg shadow-md">
                    <p className="font-bold">Sejak 2015</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-sertifa-purple">Visi & Misi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-sertifa-purple/10 to-sertifa-purple/5 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-sertifa-purple rounded-full flex items-center justify-center text-white mr-3">
                    <Target size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">Visi</h3>
                </div>
                <p className="text-gray-700">
                  Menjadi lembaga sertifikasi profesi terdepan yang menghasilkan tenaga kerja 
                  kompeten dan berdaya saing global di bidang teknologi informasi.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-sertifa-purple/10 to-sertifa-purple/5 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-sertifa-purple rounded-full flex items-center justify-center text-white mr-3">
                    <FileCheck size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">Misi</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Menyelenggarakan sertifikasi profesi yang berkualitas dan diakui secara nasional</li>
                  <li>Mengembangkan skema sertifikasi yang relevan dengan kebutuhan industri</li>
                  <li>Menyediakan asesor kompeten yang profesional dan berintegritas</li>
                  <li>Membangun kemitraan dengan industri, akademisi, dan pemerintah</li>
                  <li>Berkontribusi pada pengembangan standar kompetensi nasional</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-sertifa-purple">Legalitas</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Legalitas LSP Sertifa" 
                  className="rounded-lg shadow-lg w-full object-cover"
                  style={{ height: "350px" }}
                />
              </div>
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-700">
                  LSP Sertifa telah mendapatkan lisensi resmi dari Badan Nasional Sertifikasi Profesi (BNSP) 
                  dengan nomor lisensi BNSP-LSP-XXX-ID yang berlaku hingga tahun 2025. Lisensi ini 
                  menjamin bahwa LSP Sertifa telah memenuhi persyaratan dan ketentuan sebagai lembaga 
                  sertifikasi profesi yang diakui secara nasional.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple mr-2">
                        <Award size={16} />
                      </div>
                      <h3 className="text-lg font-semibold">Akreditasi</h3>
                    </div>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>Badan Nasional Sertifikasi Profesi (BNSP)</li>
                      <li>Kementerian Komunikasi dan Informatika</li>
                      <li>Asosiasi Pendidikan Tinggi Informatika dan Komputer (APTIKOM)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple mr-2">
                        <Building size={16} />
                      </div>
                      <h3 className="text-lg font-semibold">Keanggotaan</h3>
                    </div>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>Forum Lembaga Sertifikasi Profesi Indonesia</li>
                      <li>Asosiasi Industri Teknologi Informasi Indonesia (AITII)</li>
                      <li>Indonesia Digital Technology Association (IDTA)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-sertifa-purple">Struktur Organisasi</h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
              <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
                <div className="md:w-1/3">
                  <img 
                    src="/lovable-uploads/5237ea6b-60c9-4c9f-9d97-f89b25bd7bf4.png" 
                    alt="Struktur Organisasi" 
                    className="rounded-lg shadow-md w-full object-cover"
                    style={{ height: "200px" }}
                  />
                </div>
                <div className="md:w-2/3">
                  <p className="mb-4 text-gray-700">
                    LSP Sertifa dipimpin oleh profesional berpengalaman di bidang teknologi informasi dan 
                    sertifikasi profesi, dengan struktur organisasi yang komprehensif untuk mendukung 
                    pelaksanaan sertifikasi yang profesional dan berkualitas.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <img 
                    src="https://randomuser.me/api/portraits/men/41.jpg" 
                    alt="Dr. Budi Santoso" 
                    className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h4 className="font-semibold mb-1 text-center">Dr. Budi Santoso, M.Kom</h4>
                  <p className="text-gray-600 text-sm mb-1 text-center">Ketua LSP Sertifa</p>
                  <p className="text-gray-600 text-xs text-center">
                    Berpengalaman lebih dari 20 tahun di industri teknologi informasi.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <img 
                    src="https://randomuser.me/api/portraits/women/41.jpg" 
                    alt="Ir. Siti Rahayu" 
                    className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h4 className="font-semibold mb-1 text-center">Ir. Siti Rahayu, M.T.</h4>
                  <p className="text-gray-600 text-sm mb-1 text-center">Manajer Sertifikasi</p>
                  <p className="text-gray-600 text-xs text-center">
                    Ahli dalam pengembangan skema sertifikasi dan manajemen asesmen.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Hendra Wijaya" 
                    className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h4 className="font-semibold mb-1 text-center">Hendra Wijaya, M.Sc.</h4>
                  <p className="text-gray-600 text-sm mb-1 text-center">Manajer Mutu</p>
                  <p className="text-gray-600 text-xs text-center">
                    Bertanggung jawab atas penjaminan mutu proses sertifikasi.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <img 
                    src="https://randomuser.me/api/portraits/men/62.jpg" 
                    alt="Drs. Ahmad Fauzi" 
                    className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h4 className="font-semibold mb-1 text-center">Drs. Ahmad Fauzi, MBA.</h4>
                  <p className="text-gray-600 text-sm mb-1 text-center">Manajer Hubungan Industri</p>
                  <p className="text-gray-600 text-xs text-center">
                    Memiliki jaringan luas di industri teknologi informasi.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-sertifa-purple">Kantor & Fasilitas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Kantor LSP Sertifa" 
                  className="h-60 rounded-lg shadow-md w-full object-cover mb-4"
                />
                <div className="flex items-start mb-3">
                  <div className="w-10 h-10 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple mr-3 mt-0.5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Kantor Pusat Yogyakarta</h3>
                    <p className="text-gray-600">
                      Jl. A.M. Sangaji No.62 02, Cokrodiningratan, Jetis, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55233<br />
                      Telp: (021) 1234-5678<br />
                      Email: info@lspsertifa.id
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Fasilitas Pelatihan" 
                  className="h-60 rounded-lg shadow-md w-full object-cover mb-4"
                />
                <div className="flex items-start mb-3">
                  <div className="w-10 h-10 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple mr-3 mt-0.5">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Jam Operasional</h3>
                    <p className="text-gray-600">
                      Senin - Jumat: 08.00 - 16.00 WIB<br />
                      Sabtu: 08.00 - 12.00 WIB (hanya untuk sesi uji kompetensi terjadwal)<br />
                      Minggu & Hari Libur: Tutup
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-gradient-to-r from-sertifa-purple/10 to-sertifa-purple/5 p-6 rounded-lg shadow-md mb-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Ingin Mengetahui Lebih Lanjut Tentang LSP Sertifa?</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-sertifa-purple hover:bg-sertifa-darkpurple">
                <Link to="/kontak">Hubungi Kami</Link>
              </Button>
              <Button asChild variant="outline" className="border-sertifa-purple text-sertifa-purple hover:bg-sertifa-purple hover:text-white">
                <Link to="/tim">Lihat Tim Kami</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ProfilePage;
