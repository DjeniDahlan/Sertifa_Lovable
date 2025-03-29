
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
          <h1 className="text-4xl font-bold mb-4">Informasi</h1>
          <p className="text-lg">Informasi terkini seputar LSP Sertifa dan kegiatan sertifikasi</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="border-b pb-8">
            <h2 className="text-2xl font-bold mb-4 text-sertifa-purple">Pendaftaran Batch 12 Telah Dibuka</h2>
            <p className="text-gray-500 mb-4">12 Juni 2023</p>
            <p className="text-gray-700 mb-4">
              LSP Sertifa membuka pendaftaran batch 12 untuk seluruh skema sertifikasi. Pendaftaran dapat dilakukan
              melalui website resmi kami mulai tanggal 15 Juni hingga 30 Juni 2023. Uji kompetensi akan dilaksanakan
              pada tanggal 10-15 Juli 2023.
            </p>
            <Button asChild variant="outline" className="text-sertifa-purple border-sertifa-purple hover:bg-sertifa-purple hover:text-white">
              <Link to="/pendaftaran">Daftar Sekarang</Link>
            </Button>
          </div>
          
          <div className="border-b pb-8">
            <h2 className="text-2xl font-bold mb-4 text-sertifa-purple">Kerjasama LSP Sertifa dengan Industri Teknologi</h2>
            <p className="text-gray-500 mb-4">5 Mei 2023</p>
            <p className="text-gray-700 mb-4">
              LSP Sertifa menandatangani nota kesepahaman (MoU) dengan beberapa perusahaan teknologi terkemuka
              untuk program pengembangan kompetensi dan sertifikasi SDM bidang teknologi informasi. Kerjasama ini
              mencakup penyelarasan kurikulum sertifikasi dengan kebutuhan industri dan rekrutmen tenaga kerja
              tersertifikasi.
            </p>
            <Button variant="outline" className="text-sertifa-purple border-sertifa-purple hover:bg-sertifa-purple hover:text-white">
              Baca Selengkapnya
            </Button>
          </div>
          
          <div className="border-b pb-8">
            <h2 className="text-2xl font-bold mb-4 text-sertifa-purple">Sertifikasi Data Scientist Kini Tersedia</h2>
            <p className="text-gray-500 mb-4">20 April 2023</p>
            <p className="text-gray-700 mb-4">
              LSP Sertifa dengan bangga mengumumkan bahwa skema sertifikasi baru "Associate Data Scientist" kini
              tersedia. Skema ini dirancang untuk memenuhi kebutuhan industri akan tenaga kerja yang kompeten
              dalam bidang data science. Pendaftaran sertifikasi sudah dapat dilakukan melalui website resmi kami.
            </p>
            <Button asChild variant="outline" className="text-sertifa-purple border-sertifa-purple hover:bg-sertifa-purple hover:text-white">
              <Link to="/skema/1">Lihat Detail Skema</Link>
            </Button>
          </div>
          
          <div className="border-b pb-8">
            <h2 className="text-2xl font-bold mb-4 text-sertifa-purple">Workshop Persiapan Sertifikasi</h2>
            <p className="text-gray-500 mb-4">10 Maret 2023</p>
            <p className="text-gray-700 mb-4">
              LSP Sertifa akan menyelenggarakan workshop persiapan sertifikasi untuk skema "IT Service Manager" dan
              "ICT Project Manager" pada tanggal 25-26 Maret 2023. Workshop ini bertujuan untuk mempersiapkan peserta
              menghadapi uji kompetensi dengan pembahasan materi dan simulasi ujian. Pendaftaran workshop dapat
              dilakukan melalui website resmi kami.
            </p>
            <Button variant="outline" className="text-sertifa-purple border-sertifa-purple hover:bg-sertifa-purple hover:text-white">
              Baca Selengkapnya
            </Button>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4 text-sertifa-purple">Penandatanganan Kerjasama dengan BNSP</h2>
            <p className="text-gray-500 mb-4">28 Februari 2023</p>
            <p className="text-gray-700 mb-4">
              LSP Sertifa melakukan penandatanganan kerjasama dengan Badan Nasional Sertifikasi Profesi (BNSP)
              untuk perpanjangan lisensi sebagai lembaga sertifikasi profesi di bidang teknologi informasi. Kerjasama
              ini menegaskan komitmen LSP Sertifa dalam menyediakan sertifikasi kompetensi yang berkualitas dan
              diakui secara nasional.
            </p>
            <Button variant="outline" className="text-sertifa-purple border-sertifa-purple hover:bg-sertifa-purple hover:text-white">
              Baca Selengkapnya
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default InformationPage;
