
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock, MessageSquare, Globe, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Pesan terkirim!",
        description: "Terima kasih telah menghubungi kami. Tim kami akan segera menindaklanjuti pesan Anda.",
      });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      
      <div className="bg-gradient-to-r from-sertifa-purple to-sertifa-darkpurple text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-lg">Kami siap membantu menjawab pertanyaan dan informasi seputar sertifikasi</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-sertifa-purple">Informasi Kontak</h2>
            
            <div className="space-y-6">
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple">
                        <MapPin size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Alamat Kantor</h3>
                      <p className="text-gray-600 mb-2">
                        Kantor Pusat:<br />
                        Jl. Teknologi Informasi No. 123<br />
                        Jakarta Selatan 12345<br />
                        Indonesia
                      </p>
                      <p className="text-gray-600">
                        Kantor Cabang:<br />
                        Jl. Merdeka No. 45<br />
                        Bandung 40115<br />
                        Indonesia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple">
                        <Phone size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Telepon & Fax</h3>
                      <p className="text-gray-600 mb-1">
                        Telepon: (021) 1234-5678
                      </p>
                      <p className="text-gray-600 mb-1">
                        Hotline: 0800-1234-5678 (Bebas Pulsa)
                      </p>
                      <p className="text-gray-600">
                        Fax: (021) 1234-5679
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple">
                        <Mail size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Email</h3>
                      <p className="text-gray-600 mb-1">
                        Informasi Umum: <a href="mailto:info@lspsertifa.id" className="text-sertifa-purple hover:underline">info@lspsertifa.id</a>
                      </p>
                      <p className="text-gray-600 mb-1">
                        Pendaftaran: <a href="mailto:daftar@lspsertifa.id" className="text-sertifa-purple hover:underline">daftar@lspsertifa.id</a>
                      </p>
                      <p className="text-gray-600">
                        Keluhan & Saran: <a href="mailto:feedback@lspsertifa.id" className="text-sertifa-purple hover:underline">feedback@lspsertifa.id</a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple">
                        <Clock size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Jam Operasional</h3>
                      <p className="text-gray-600 mb-1">
                        Senin - Jumat: 08.00 - 16.00 WIB
                      </p>
                      <p className="text-gray-600 mb-1">
                        Sabtu: 08.00 - 12.00 WIB (hanya untuk sesi uji kompetensi terjadwal)
                      </p>
                      <p className="text-gray-600">
                        Minggu & Hari Libur: Tutup
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple">
                        <MessageSquare size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Media Sosial</h3>
                      <div className="grid grid-cols-2 gap-2">
                        <a href="#" className="text-gray-600 hover:text-sertifa-purple flex items-center">
                          <span className="inline-block w-6 text-center mr-2">
                            <i className="fab fa-facebook-f"></i>
                          </span>
                          Facebook
                        </a>
                        <a href="#" className="text-gray-600 hover:text-sertifa-purple flex items-center">
                          <span className="inline-block w-6 text-center mr-2">
                            <i className="fab fa-twitter"></i>
                          </span>
                          Twitter
                        </a>
                        <a href="#" className="text-gray-600 hover:text-sertifa-purple flex items-center">
                          <span className="inline-block w-6 text-center mr-2">
                            <i className="fab fa-instagram"></i>
                          </span>
                          Instagram
                        </a>
                        <a href="#" className="text-gray-600 hover:text-sertifa-purple flex items-center">
                          <span className="inline-block w-6 text-center mr-2">
                            <i className="fab fa-linkedin-in"></i>
                          </span>
                          LinkedIn
                        </a>
                        <a href="#" className="text-gray-600 hover:text-sertifa-purple flex items-center">
                          <span className="inline-block w-6 text-center mr-2">
                            <i className="fab fa-youtube"></i>
                          </span>
                          YouTube
                        </a>
                        <a href="#" className="text-gray-600 hover:text-sertifa-purple flex items-center">
                          <span className="inline-block w-6 text-center mr-2">
                            <i className="fab fa-whatsapp"></i>
                          </span>
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple">
                        <Globe size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Website</h3>
                      <p className="text-gray-600">
                        <a href="https://www.lspsertifa.id" target="_blank" rel="noopener noreferrer" className="text-sertifa-purple hover:underline">www.lspsertifa.id</a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6 text-sertifa-purple">Kirim Pesan</h2>
            
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Masukkan nama lengkap Anda"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Masukkan email Anda"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subjek</label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Masukkan subjek pesan"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                    <Textarea
                      id="message"
                      placeholder="Tulis pesan Anda di sini"
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-sertifa-purple hover:bg-sertifa-darkpurple"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">Mengirim... <span className="ml-2 animate-spin">⏳</span></span>
                    ) : (
                      <span className="flex items-center">Kirim Pesan <Send size={16} className="ml-2" /></span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-sertifa-purple">Lokasi Kami</h3>
              <div className="rounded-lg overflow-hidden h-80 bg-gray-200">
                {/* This would be a Google Maps embed in a real implementation */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-500">Peta Lokasi LSP Sertifa</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                * Klik pada peta untuk membuka Google Maps
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ContactPage;
