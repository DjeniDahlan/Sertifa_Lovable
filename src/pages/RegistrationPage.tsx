
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { certificationSchemes } from "@/data/certificationSchemes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RegistrationPage = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Pendaftaran Berhasil",
        description: "Terima kasih telah mendaftar. Tim kami akan segera menghubungi Anda.",
      });
    }, 1500);
  };

  return (
    <>
      <Navbar />
      
      <div className="bg-gradient-to-r from-sertifa-purple to-sertifa-darkpurple text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Pendaftaran Sertifikasi</h1>
            <p className="text-lg">
              Isi formulir di bawah ini untuk mendaftar sertifikasi profesi. Tim kami akan segera menghubungi Anda.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-sertifa-purple">Data Pribadi</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Nama Lengkap</Label>
                        <Input id="fullName" placeholder="Masukkan nama lengkap" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Masukkan email" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Nomor Telepon</Label>
                        <Input id="phone" placeholder="Masukkan nomor telepon" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="nik">NIK (No. KTP)</Label>
                        <Input id="nik" placeholder="Masukkan nomor KTP" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Alamat</Label>
                      <Textarea id="address" placeholder="Masukkan alamat lengkap" rows={3} required />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-sertifa-purple">Data Pendidikan & Pekerjaan</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="lastEducation">Pendidikan Terakhir</Label>
                        <Select required>
                          <SelectTrigger id="lastEducation">
                            <SelectValue placeholder="Pilih pendidikan terakhir" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sma">SMA/SMK</SelectItem>
                            <SelectItem value="d3">D3</SelectItem>
                            <SelectItem value="s1">S1</SelectItem>
                            <SelectItem value="s2">S2</SelectItem>
                            <SelectItem value="s3">S3</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="institution">Institusi/Universitas</Label>
                        <Input id="institution" placeholder="Masukkan institusi/universitas" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Perusahaan (Opsional)</Label>
                        <Input id="company" placeholder="Masukkan nama perusahaan" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="position">Jabatan (Opsional)</Label>
                        <Input id="position" placeholder="Masukkan jabatan" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-sertifa-purple">Skema Sertifikasi</h2>
                    
                    <div className="space-y-2">
                      <Label htmlFor="scheme">Pilih Skema Sertifikasi</Label>
                      <Select required>
                        <SelectTrigger id="scheme">
                          <SelectValue placeholder="Pilih skema sertifikasi" />
                        </SelectTrigger>
                        <SelectContent className="max-h-80">
                          <SelectItem value="0">-- Pilih Skema Sertifikasi --</SelectItem>
                          {certificationSchemes.map((scheme) => (
                            <SelectItem key={scheme.id} value={scheme.id.toString()}>
                              {scheme.title} ({scheme.type === "okupasi" ? "Okupasi" : "Klaster"})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="experience">Pengalaman di Bidang Terkait</Label>
                      <Textarea 
                        id="experience" 
                        placeholder="Jelaskan pengalaman Anda di bidang terkait skema sertifikasi" 
                        rows={4} 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox id="agreement" required />
                      <Label htmlFor="agreement" className="text-sm leading-tight">
                        Dengan ini saya menyatakan bahwa data yang saya berikan adalah benar dan saya setuju dengan 
                        <a href="#" className="text-sertifa-purple hover:underline"> syarat dan ketentuan</a> LSP Sertifa.
                      </Label>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-sertifa-purple hover:bg-sertifa-darkpurple"
                    disabled={loading}
                  >
                    {loading ? "Memproses..." : "Kirim Pendaftaran"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-sertifa-purple">Proses Setelah Pendaftaran</h3>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              <li>Tim kami akan melakukan verifikasi data pendaftaran Anda.</li>
              <li>Anda akan menerima email konfirmasi pendaftaran dengan detail pembayaran.</li>
              <li>Setelah pembayaran terkonfirmasi, Anda akan menerima jadwal sertifikasi.</li>
              <li>Persiapkan diri Anda dengan mempelajari materi sesuai skema yang dipilih.</li>
              <li>Ikuti proses sertifikasi sesuai jadwal yang telah ditentukan.</li>
            </ol>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default RegistrationPage;
