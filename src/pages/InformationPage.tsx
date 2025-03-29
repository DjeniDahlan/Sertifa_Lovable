
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialMediaLinks from "@/components/SocialMediaLinks";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  image: string;
  link?: string;
  linkType: "read" | "detail" | "register";
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Pendaftaran Batch 12 Telah Dibuka",
    date: "12 Juni 2023",
    summary: "LSP Sertifa membuka pendaftaran batch 12 untuk seluruh skema sertifikasi. Pendaftaran dapat dilakukan melalui website resmi kami mulai tanggal 15 Juni hingga 30 Juni 2023. Uji kompetensi akan dilaksanakan pada tanggal 10-15 Juli 2023.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    link: "/pendaftaran",
    linkType: "register"
  },
  {
    id: 2,
    title: "Kerjasama LSP Sertifa dengan Industri Teknologi",
    date: "5 Mei 2023",
    summary: "LSP Sertifa menandatangani nota kesepahaman (MoU) dengan beberapa perusahaan teknologi terkemuka untuk program pengembangan kompetensi dan sertifikasi SDM bidang teknologi informasi. Kerjasama ini mencakup penyelarasan kurikulum sertifikasi dengan kebutuhan industri dan rekrutmen tenaga kerja tersertifikasi.",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    linkType: "read"
  },
  {
    id: 3,
    title: "Sertifikasi Data Scientist Kini Tersedia",
    date: "20 April 2023",
    summary: "LSP Sertifa dengan bangga mengumumkan bahwa skema sertifikasi baru "Associate Data Scientist" kini tersedia. Skema ini dirancang untuk memenuhi kebutuhan industri akan tenaga kerja yang kompeten dalam bidang data science. Pendaftaran sertifikasi sudah dapat dilakukan melalui website resmi kami.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    link: "/skema/1",
    linkType: "detail"
  },
  {
    id: 4,
    title: "Workshop Persiapan Sertifikasi",
    date: "10 Maret 2023",
    summary: "LSP Sertifa akan menyelenggarakan workshop persiapan sertifikasi untuk skema "IT Service Manager" dan "ICT Project Manager" pada tanggal 25-26 Maret 2023. Workshop ini bertujuan untuk mempersiapkan peserta menghadapi uji kompetensi dengan pembahasan materi dan simulasi ujian. Pendaftaran workshop dapat dilakukan melalui website resmi kami.",
    image: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    linkType: "read"
  },
  {
    id: 5,
    title: "Penandatanganan Kerjasama dengan BNSP",
    date: "28 Februari 2023",
    summary: "LSP Sertifa melakukan penandatanganan kerjasama dengan Badan Nasional Sertifikasi Profesi (BNSP) untuk perpanjangan lisensi sebagai lembaga sertifikasi profesi di bidang teknologi informasi. Kerjasama ini menegaskan komitmen LSP Sertifa dalam menyediakan sertifikasi kompetensi yang berkualitas dan diakui secara nasional.",
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    linkType: "read"
  }
];

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-sertifa-purple">Pengumuman Terbaru</h2>
            <ul className="space-y-4">
              {newsItems.slice(0, 3).map((item) => (
                <li key={item.id} className="border-b pb-3">
                  <div className="flex items-center text-gray-500 mb-1">
                    <CalendarIcon size={14} className="mr-2" />
                    <span className="text-sm">{item.date}</span>
                  </div>
                  <h3 className="font-medium text-gray-800">{item.title}</h3>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-2">
              <Button variant="outline" size="sm" className="text-sertifa-purple border-sertifa-purple hover:bg-sertifa-purple hover:text-white">
                Lihat Semua Pengumuman
              </Button>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-sertifa-purple">Jadwal Sertifikasi</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between border-b pb-3">
                <div>
                  <h3 className="font-medium text-gray-800">Batch 12 - Junior Web Developer</h3>
                  <p className="text-sm text-gray-600">Pendaftaran: 15 - 30 Juni 2023</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-sertifa-purple">10-12 Juli 2023</p>
                  <p className="text-sm text-gray-600">Online</p>
                </div>
              </div>
              
              <div className="flex justify-between border-b pb-3">
                <div>
                  <h3 className="font-medium text-gray-800">Batch 12 - IT Project Manager</h3>
                  <p className="text-sm text-gray-600">Pendaftaran: 15 - 30 Juni 2023</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-sertifa-purple">12-14 Juli 2023</p>
                  <p className="text-sm text-gray-600">Hybrid</p>
                </div>
              </div>
              
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium text-gray-800">Batch 12 - Associate Data Scientist</h3>
                  <p className="text-sm text-gray-600">Pendaftaran: 15 - 30 Juni 2023</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-sertifa-purple">14-15 Juli 2023</p>
                  <p className="text-sm text-gray-600">Offline</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-2">
              <Button asChild variant="outline" size="sm" className="text-sertifa-purple border-sertifa-purple hover:bg-sertifa-purple hover:text-white">
                <Link to="/pendaftaran">Daftar Sekarang</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-8 text-center text-sertifa-purple">Berita & Informasi Terkini</h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <p className="text-gray-500 mb-2 flex items-center">
                    <CalendarIcon size={14} className="mr-2" />
                    <span>{item.date}</span>
                  </p>
                  <h3 className="text-xl font-bold mb-3 text-sertifa-purple">{item.title}</h3>
                  <p className="text-gray-700 mb-4">{item.summary}</p>
                  
                  {item.linkType === "read" && (
                    <Button variant="outline" className="text-sertifa-purple border-sertifa-purple hover:bg-sertifa-purple hover:text-white">
                      Baca Selengkapnya
                    </Button>
                  )}
                  
                  {item.linkType === "detail" && item.link && (
                    <Button asChild variant="outline" className="text-sertifa-purple border-sertifa-purple hover:bg-sertifa-purple hover:text-white">
                      <Link to={item.link}>Lihat Detail Skema</Link>
                    </Button>
                  )}
                  
                  {item.linkType === "register" && item.link && (
                    <Button asChild className="bg-sertifa-purple hover:bg-sertifa-darkpurple text-white">
                      <Link to={item.link}>Daftar Sekarang</Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="fixed bottom-8 right-8 z-10">
          <SocialMediaLinks />
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default InformationPage;
