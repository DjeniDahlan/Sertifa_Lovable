
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqGeneral = [
    {
      question: "Apa itu LSP Sertifa?",
      answer: "LSP Sertifa adalah Lembaga Sertifikasi Profesi yang telah mendapatkan lisensi dari Badan Nasional Sertifikasi Profesi (BNSP) untuk menyelenggarakan sertifikasi kompetensi kerja di bidang teknologi informasi."
    },
    {
      question: "Apakah sertifikasi dari LSP Sertifa diakui secara nasional?",
      answer: "Ya, sertifikasi yang dikeluarkan oleh LSP Sertifa telah diakui secara nasional karena merupakan lembaga yang telah mendapatkan lisensi resmi dari BNSP (Badan Nasional Sertifikasi Profesi)."
    },
    {
      question: "Berapa lama masa berlaku sertifikat yang diterbitkan?",
      answer: "Sertifikat kompetensi yang diterbitkan oleh LSP Sertifa berlaku selama 3 tahun. Setelah masa berlaku habis, pemegang sertifikat dapat melakukan re-sertifikasi untuk memperbarui sertifikatnya."
    },
    {
      question: "Bagaimana cara memeriksa keaslian sertifikat?",
      answer: "Keaslian sertifikat dapat diperiksa melalui website resmi LSP Sertifa dengan memasukkan nomor registrasi sertifikat pada halaman verifikasi sertifikat. Anda juga dapat menghubungi kantor LSP Sertifa untuk konfirmasi."
    }
  ];

  const faqRegistration = [
    {
      question: "Bagaimana cara mendaftar sertifikasi di LSP Sertifa?",
      answer: "Pendaftaran dapat dilakukan secara online melalui website resmi LSP Sertifa atau langsung datang ke kantor LSP Sertifa. Untuk pendaftaran online, Anda perlu mengisi formulir pendaftaran dan mengunggah dokumen yang diperlukan."
    },
    {
      question: "Dokumen apa saja yang perlu disiapkan untuk pendaftaran?",
      answer: "Dokumen yang perlu disiapkan antara lain: KTP, ijazah pendidikan terakhir, CV, pas foto terbaru, bukti pengalaman kerja (jika diperlukan sesuai skema), dan dokumen pendukung lainnya sesuai persyaratan skema sertifikasi."
    },
    {
      question: "Berapa biaya untuk mengikuti sertifikasi?",
      answer: "Biaya sertifikasi bervariasi tergantung pada skema sertifikasi yang dipilih. Informasi lengkap mengenai biaya dapat dilihat pada halaman detail skema sertifikasi di website resmi LSP Sertifa."
    },
    {
      question: "Apakah ada program beasiswa atau diskon untuk sertifikasi?",
      answer: "LSP Sertifa menyediakan program beasiswa dan diskon khusus untuk mahasiswa, fresh graduate, dan kelompok tertentu. Informasi mengenai program ini diumumkan secara berkala melalui website dan media sosial resmi LSP Sertifa."
    }
  ];

  const faqCertification = [
    {
      question: "Apa saja tahapan dalam proses sertifikasi?",
      answer: "Tahapan sertifikasi meliputi: pendaftaran, asesmen mandiri, verifikasi portofolio, uji kompetensi (tes tertulis, praktik, dan wawancara), dan penerbitan sertifikat bagi peserta yang dinyatakan kompeten."
    },
    {
      question: "Berapa lama proses sertifikasi hingga mendapatkan sertifikat?",
      answer: "Proses sertifikasi dari pendaftaran hingga penerbitan sertifikat biasanya memakan waktu 4-6 minggu, tergantung jadwal asesmen dan kelengkapan dokumen peserta. Hasil uji kompetensi akan diumumkan 7-14 hari setelah asesmen."
    },
    {
      question: "Apa yang terjadi jika saya gagal dalam uji kompetensi?",
      answer: "Jika dinyatakan belum kompeten, peserta dapat mengajukan banding atau mengikuti uji kompetensi ulang sesuai dengan prosedur yang berlaku. Biasanya, peserta diberi kesempatan untuk mengulang unit kompetensi yang belum tercapai."
    },
    {
      question: "Apakah ada persiapan khusus sebelum mengikuti uji kompetensi?",
      answer: "LSP Sertifa menyediakan materi persiapan dan workshop bagi peserta sertifikasi. Kami menyarankan peserta untuk mempelajari materi yang diberikan dan mengikuti workshop persiapan jika tersedia."
    }
  ];

  return (
    <>
      <Navbar />
      
      <div className="bg-gradient-to-r from-sertifa-purple to-sertifa-darkpurple text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg">Jawaban untuk pertanyaan umum seputar LSP Sertifa dan proses sertifikasi</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-sertifa-purple">Umum</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqGeneral.map((faq, index) => (
                <AccordionItem key={index} value={`general-item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-sertifa-purple">Pendaftaran</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqRegistration.map((faq, index) => (
                <AccordionItem key={index} value={`registration-item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-sertifa-purple">Sertifikasi</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqCertification.map((faq, index) => (
                <AccordionItem key={index} value={`certification-item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
          
          <div className="bg-gray-50 p-6 rounded-lg mt-12">
            <h3 className="text-xl font-semibold mb-4 text-sertifa-purple">Masih Ada Pertanyaan?</h3>
            <p className="text-gray-600 mb-6">
              Jika Anda memiliki pertanyaan lain yang belum terjawab di atas, jangan ragu untuk menghubungi tim kami. 
              Kami siap membantu Anda untuk mendapatkan informasi lebih lanjut mengenai sertifikasi di LSP Sertifa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-sertifa-purple hover:bg-sertifa-darkpurple">
                <Link to="/kontak">Hubungi Kami</Link>
              </Button>
              <Button asChild variant="outline" className="border-sertifa-purple text-sertifa-purple hover:bg-sertifa-purple hover:text-white">
                <Link to="/pendaftaran">Daftar Sertifikasi</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default FAQPage;
