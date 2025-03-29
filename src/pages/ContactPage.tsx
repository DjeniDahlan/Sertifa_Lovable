
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock, Globe, Send } from "lucide-react";
import SocialMediaLinks from "@/components/SocialMediaLinks";
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
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple">
                        <MapPin size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Alamat Kantor</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-sertifa-purple mb-1">Kantor Pusat:</h4>
                          <p className="text-gray-600">
                            Jl. Teknologi Informasi No. 123<br />
                            Jakarta Selatan 12345<br />
                            Indonesia
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-sertifa-purple mb-1">Kantor Cabang:</h4>
                          <p className="text-gray-600">
                            Jl. Merdeka No. 45<br />
                            Bandung 40115<br />
                            Indonesia
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
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
                        Telepon: <a href="tel:+62211234578" className="text-sertifa-purple hover:underline">(021) 1234-5678</a>
                      </p>
                      <p className="text-gray-600 mb-1">
                        Hotline: <a href="tel:08001234578" className="text-sertifa-purple hover:underline">0800-1234-5678</a> (Bebas Pulsa)
                      </p>
                      <p className="text-gray-600">
                        Fax: (021) 1234-5679
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
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
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
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
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex">
                    <div className="mr-4">
                      <SocialMediaLinks />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Media Sosial</h3>
                      <p className="text-gray-600">
                        Klik icon di samping untuk melihat daftar media sosial resmi LSP Sertifa.
                        Ikuti media sosial kami untuk informasi terbaru seputar sertifikasi.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
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
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
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
                      className="border-gray-300 focus:border-sertifa-purple focus:ring-sertifa-purple"
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
                      className="border-gray-300 focus:border-sertifa-purple focus:ring-sertifa-purple"
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
                      className="border-gray-300 focus:border-sertifa-purple focus:ring-sertifa-purple"
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
                      className="border-gray-300 focus:border-sertifa-purple focus:ring-sertifa-purple"
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
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="LSP Sertifa Office Map" 
                  className="w-full h-80 object-cover"
                />
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
