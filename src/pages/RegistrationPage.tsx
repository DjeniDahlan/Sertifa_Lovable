
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { certificationSchemes } from "@/data/certificationSchemes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Define the validation schema
const formSchema = z.object({
  fullName: z.string().min(3, { message: "Nama lengkap minimal 3 karakter" }),
  email: z.string().email({ message: "Email tidak valid" }),
  phone: z.string().min(10, { message: "Nomor telepon minimal 10 digit" }),
  institution: z.string().min(3, { message: "Nama institusi minimal 3 karakter" }),
  schemeId: z.string({ required_error: "Pilih skema sertifikasi" }),
  education: z.string({ required_error: "Pilih pendidikan terakhir" }),
  experience: z.string().min(10, { message: "Pengalaman minimal 10 karakter" }),
  motivation: z.string().min(20, { message: "Motivasi minimal 20 karakter" }),
});

const RegistrationPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      institution: "",
      schemeId: "",
      education: "",
      experience: "",
      motivation: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate form submission with delay
    setTimeout(() => {
      toast({
        title: "Pendaftaran Berhasil!",
        description: "Data pendaftaran Anda telah kami terima. Tim kami akan menghubungi Anda dalam 1-3 hari kerja.",
      });
      console.log(values);
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      
      <div className="bg-gradient-to-r from-sertifa-purple to-sertifa-darkpurple text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Pendaftaran Sertifikasi</h1>
          <p className="text-lg">Isi formulir di bawah ini untuk mendaftar program sertifikasi kompetensi</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="order-2 lg:order-1">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nama Lengkap</FormLabel>
                            <FormControl>
                              <Input placeholder="Masukkan nama lengkap Anda" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="contoh@email.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nomor Telepon</FormLabel>
                              <FormControl>
                                <Input placeholder="08xxxxxxxxxx" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="institution"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Institusi/Perusahaan</FormLabel>
                            <FormControl>
                              <Input placeholder="Nama institusi atau perusahaan tempat Anda bekerja/belajar" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="schemeId"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Skema Sertifikasi</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Pilih skema sertifikasi" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {certificationSchemes.map((scheme) => (
                                    <SelectItem key={scheme.id} value={scheme.id.toString()}>
                                      {scheme.title}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="education"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Pendidikan Terakhir</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Pilih pendidikan terakhir" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="sma">SMA/SMK/Sederajat</SelectItem>
                                  <SelectItem value="d3">D3</SelectItem>
                                  <SelectItem value="s1">S1</SelectItem>
                                  <SelectItem value="s2">S2</SelectItem>
                                  <SelectItem value="s3">S3</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="experience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Pengalaman Kerja</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Jelaskan pengalaman kerja Anda yang relevan dengan skema sertifikasi yang dipilih" 
                                className="min-h-24"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="motivation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Motivasi Mengikuti Sertifikasi</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Jelaskan motivasi dan tujuan Anda mengikuti program sertifikasi ini" 
                                className="min-h-24"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="w-full bg-sertifa-purple hover:bg-sertifa-darkpurple"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">Mengirim... <span className="ml-2 animate-spin">⏳</span></span>
                        ) : (
                          "Kirim Pendaftaran"
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold mb-6 text-sertifa-purple">Informasi Pendaftaran</h2>
              
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-md overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Pendaftaran Sertifikasi" 
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Persyaratan Dokumen</h3>
                  <p className="text-gray-600 mb-4">
                    Setelah mengisi formulir pendaftaran, Anda perlu menyiapkan dokumen berikut untuk diunggah melalui email yang akan kami kirimkan:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Scan KTP/Kartu Identitas</li>
                    <li>Scan Ijazah Pendidikan Terakhir</li>
                    <li>CV Terbaru</li>
                    <li>Pas Foto Berwarna (4x6)</li>
                    <li>Surat Keterangan Kerja (bila ada)</li>
                    <li>Portofolio Kerja (untuk skema tertentu)</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Tahapan Sertifikasi" 
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Tahapan Sertifikasi</h3>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                    <li>Pendaftaran dan pengisian formulir</li>
                    <li>Verifikasi data dan pembayaran</li>
                    <li>Asesmen Mandiri</li>
                    <li>Penjadwalan uji kompetensi</li>
                    <li>Uji kompetensi (teori dan praktik)</li>
                    <li>Pengumuman hasil uji kompetensi</li>
                    <li>Penerbitan sertifikat (bagi yang kompeten)</li>
                  </ol>
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

export default RegistrationPage;
