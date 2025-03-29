
import { useEffect } from "react";
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
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-sertifa-purple">Visi & Misi</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3">Visi</h3>
              <p className="text-gray-700">
                Menjadi lembaga sertifikasi profesi terdepan yang menghasilkan tenaga kerja 
                kompeten dan berdaya saing global di bidang teknologi informasi.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Misi</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Menyelenggarakan sertifikasi profesi yang berkualitas dan diakui secara nasional</li>
                <li>Mengembangkan skema sertifikasi yang relevan dengan kebutuhan industri</li>
                <li>Menyediakan asesor kompeten yang profesional dan berintegritas</li>
                <li>Membangun kemitraan dengan industri, akademisi, dan pemerintah</li>
                <li>Berkontribusi pada pengembangan standar kompetensi nasional</li>
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
                <h3 className="text-xl font-semibold mb-3">Akreditasi</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Badan Nasional Sertifikasi Profesi (BNSP)</li>
                  <li>Kementerian Komunikasi dan Informatika</li>
                  <li>Asosiasi Pendidikan Tinggi Informatika dan Komputer (APTIKOM)</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Keanggotaan</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Forum Lembaga Sertifikasi Profesi Indonesia</li>
                  <li>Asosiasi Industri Teknologi Informasi Indonesia (AITII)</li>
                  <li>Indonesia Digital Technology Association (IDTA)</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ProfilePage;
