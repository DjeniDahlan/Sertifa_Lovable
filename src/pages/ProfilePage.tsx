
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
            <p className="mb-4 text-gray-700">
              Selama perjalanannya, LSP Sertifa telah menjalin kerjasama dengan berbagai institusi 
              pendidikan, perusahaan teknologi, dan asosiasi profesi untuk meningkatkan kualitas 
              sertifikasi dan memperluas jangkauan layanan. Komitmen terhadap kualitas dan 
              integritas telah menjadikan LSP Sertifa sebagai salah satu lembaga sertifikasi 
              pilihan bagi profesional IT di Indonesia.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-sertifa-purple">Visi & Misi</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
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
            
            <div className="bg-gray-50 p-6 rounded-lg">
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
                <li>Mendorong peningkatan kualitas sumber daya manusia di bidang teknologi informasi</li>
                <li>Memperluas akses sertifikasi profesi bagi seluruh lapisan masyarakat</li>
              </ul>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-sertifa-purple">Legalitas</h2>
            <p className="mb-4 text-gray-700">
              LSP Sertifa telah mendapatkan lisensi resmi dari Badan Nasional Sertifikasi Profesi (BNSP) 
              dengan nomor lisensi BNSP-LSP-XXX-ID yang berlaku hingga tahun 2025. Lisensi ini 
              menjamin bahwa LSP Sertifa telah memenuhi persyaratan dan ketentuan sebagai lembaga 
              sertifikasi profesi yang diakui secara nasional.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-sertifa-purple rounded-full flex items-center justify-center text-white mr-3">
                    <Award size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">Akreditasi</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Badan Nasional Sertifikasi Profesi (BNSP)</li>
                  <li>Kementerian Komunikasi dan Informatika</li>
                  <li>Asosiasi Pendidikan Tinggi Informatika dan Komputer (APTIKOM)</li>
                  <li>Asosiasi Profesi Teknologi Informasi Indonesia (APTIKINDO)</li>
                  <li>International Certification of Digital Literacy (ICDL Asia)</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-sertifa-purple rounded-full flex items-center justify-center text-white mr-3">
                    <Building size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">Keanggotaan</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Forum Lembaga Sertifikasi Profesi Indonesia</li>
                  <li>Asosiasi Industri Teknologi Informasi Indonesia (AITII)</li>
                  <li>Indonesia Digital Technology Association (IDTA)</li>
                  <li>Masyarakat Telematika Indonesia (MASTEL)</li>
                  <li>Indonesia Information and Communication Technology Society (IICS)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-sertifa-purple">Struktur Organisasi</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="mb-6 text-gray-700">
                LSP Sertifa dipimpin oleh profesional berpengalaman di bidang teknologi informasi dan 
                sertifikasi profesi, dengan struktur organisasi yang komprehensif untuk mendukung 
                pelaksanaan sertifikasi yang profesional dan berkualitas.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold mb-2">Dr. Budi Santoso, M.Kom</h4>
                  <p className="text-gray-600 text-sm mb-1">Ketua LSP Sertifa</p>
                  <p className="text-gray-600 text-sm">
                    Berpengalaman lebih dari 20 tahun di industri teknologi informasi dan terlibat aktif dalam pengembangan standar kompetensi nasional.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold mb-2">Ir. Siti Rahayu, M.T.</h4>
                  <p className="text-gray-600 text-sm mb-1">Manajer Sertifikasi</p>
                  <p className="text-gray-600 text-sm">
                    Ahli dalam pengembangan skema sertifikasi dan manajemen asesmen dengan pengalaman 15 tahun di bidang sertifikasi profesi.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold mb-2">Hendra Wijaya, M.Sc.</h4>
                  <p className="text-gray-600 text-sm mb-1">Manajer Mutu</p>
                  <p className="text-gray-600 text-sm">
                    Bertanggung jawab atas penjaminan mutu proses sertifikasi sesuai dengan standar nasional dan internasional.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold mb-2">Drs. Ahmad Fauzi, MBA.</h4>
                  <p className="text-gray-600 text-sm mb-1">Manajer Kerjasama & Hubungan Industri</p>
                  <p className="text-gray-600 text-sm">
                    Memiliki jaringan luas di industri teknologi informasi dan berperan dalam membangun kemitraan strategis.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-sertifa-purple">Kantor & Fasilitas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="h-60 bg-gray-200 rounded-lg mb-4"></div>
                <div className="flex items-start mb-3">
                  <div className="w-10 h-10 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple mr-3 mt-0.5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Kantor Pusat Jakarta</h3>
                    <p className="text-gray-600">
                      Jl. Teknologi Informasi No. 123, Jakarta Selatan 12345<br />
                      Telp: (021) 1234-5678<br />
                      Email: info@lspsertifa.id
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="h-60 bg-gray-200 rounded-lg mb-4"></div>
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

          <div className="bg-gray-50 p-6 rounded-lg mb-6 text-center">
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
