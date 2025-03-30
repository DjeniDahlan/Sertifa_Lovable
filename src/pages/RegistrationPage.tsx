
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
import { Progress } from "@/components/ui/progress";
import { 
  ChevronLeft, 
  ChevronRight, 
  FileCheck, 
  UserCheck, 
  BookOpen, 
  ClipboardCheck, 
  CheckCircle 
} from "lucide-react";

// Define validation schemas for each step
const personalInfoSchema = z.object({
  fullName: z.string().min(3, { message: "Nama lengkap minimal 3 karakter" }),
  email: z.string().email({ message: "Email tidak valid" }),
  phone: z.string().min(10, { message: "Nomor telepon minimal 10 digit" }),
  address: z.string().min(10, { message: "Alamat minimal 10 karakter" }),
  city: z.string().min(2, { message: "Nama kota minimal 2 karakter" }),
  province: z.string().min(2, { message: "Nama provinsi minimal 2 karakter" }),
  postalCode: z.string().min(5, { message: "Kode pos minimal 5 karakter" }),
});

const educationSchema = z.object({
  institution: z.string().min(3, { message: "Nama institusi minimal 3 karakter" }),
  education: z.string({ required_error: "Pilih pendidikan terakhir" }),
  graduationYear: z.string().min(4, { message: "Tahun kelulusan harus 4 digit" }).max(4),
  major: z.string().min(2, { message: "Jurusan minimal 2 karakter" }),
  specialization: z.string().optional(),
});

const certificationSchema = z.object({
  schemeId: z.string({ required_error: "Pilih skema sertifikasi" }),
  experience: z.string().min(10, { message: "Pengalaman minimal 10 karakter" }),
  motivation: z.string().min(20, { message: "Motivasi minimal 20 karakter" }),
  preferredDate: z.string().min(5, { message: "Pilih tanggal yang diinginkan" }),
});

const documentsSchema = z.object({
  idCard: z.any().refine((file) => file?.length > 0, "KTP wajib diunggah"),
  photo: z.any().refine((file) => file?.length > 0, "Pas foto wajib diunggah"),
  diploma: z.any().refine((file) => file?.length > 0, "Ijazah wajib diunggah"),
  cv: z.any().refine((file) => file?.length > 0, "CV wajib diunggah"),
  workCertificate: z.any().optional(),
});

const termsSchema = z.object({
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "Anda harus menyetujui syarat dan ketentuan",
  }),
  agreeDataUse: z.boolean().refine((val) => val === true, {
    message: "Anda harus menyetujui penggunaan data",
  }),
});

// Combine all schemas
const allSchemas = {
  0: personalInfoSchema,
  1: educationSchema,
  2: certificationSchema,
  3: documentsSchema,
  4: termsSchema,
};

const RegistrationPage = () => {
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({});
  const [progress, setProgress] = useState(0);

  // Define steps
  const steps = [
    { title: "Informasi Pribadi", icon: UserCheck },
    { title: "Pendidikan", icon: BookOpen },
    { title: "Skema Sertifikasi", icon: ClipboardCheck },
    { title: "Dokumen", icon: FileCheck },
    { title: "Konfirmasi", icon: CheckCircle },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    // Calculate progress based on step
    setProgress(((step) / (steps.length - 1)) * 100);
  }, [step, steps.length]);

  const currentSchema = allSchemas[step];

  const form = useForm<z.infer<typeof currentSchema>>({
    resolver: zodResolver(currentSchema),
    defaultValues: formData[step] || {},
  });

  const next = (data: any) => {
    // Save form data
    setFormData({
      ...formData,
      [step]: data,
    });

    // Move to the next step
    setStep((prev) => prev + 1);
  };

  const prev = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmit = (values: z.infer<typeof currentSchema>) => {
    if (step === steps.length - 1) {
      // Final step - submit everything
      setIsSubmitting(true);
      
      // Combine all form data
      const completeFormData = {
        ...formData[0],
        ...formData[1],
        ...formData[2],
        ...formData[3],
        ...values,
      };
      
      // Simulate form submission with delay
      setTimeout(() => {
        toast({
          title: "Pendaftaran Berhasil!",
          description: "Data pendaftaran Anda telah kami terima. Tim kami akan menghubungi Anda dalam 1-3 hari kerja.",
        });
        console.log(completeFormData);
        setFormData({});
        setStep(0);
        form.reset();
        setIsSubmitting(false);
      }, 1500);
    } else {
      // Go to next step
      next(values);
    }
  };

  // Render form based on current step
  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Informasi Pribadi</h3>
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
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alamat</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Alamat lengkap tempat tinggal Anda saat ini" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kota</FormLabel>
                    <FormControl>
                      <Input placeholder="Nama kota" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="province"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Provinsi</FormLabel>
                    <FormControl>
                      <Input placeholder="Nama provinsi" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="postalCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kode Pos</FormLabel>
                    <FormControl>
                      <Input placeholder="Kode pos" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        );
      
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Informasi Pendidikan</h3>
            <FormField
              control={form.control}
              name="institution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Institusi/Perguruan Tinggi</FormLabel>
                  <FormControl>
                    <Input placeholder="Nama institusi pendidikan terakhir" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              
              <FormField
                control={form.control}
                name="graduationYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tahun Kelulusan</FormLabel>
                    <FormControl>
                      <Input placeholder="Contoh: 2022" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="major"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Jurusan/Program Studi</FormLabel>
                    <FormControl>
                      <Input placeholder="Jurusan atau program studi" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="specialization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Peminatan/Konsentrasi (Opsional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Peminatan atau konsentrasi" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Informasi Sertifikasi</h3>
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
            
            <FormField
              control={form.control}
              name="preferredDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Jadwal Sertifikasi yang Diinginkan</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Unggah Dokumen</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6">
              <p className="text-yellow-800 text-sm">
                <span className="font-medium">Catatan penting:</span> Dokumen yang diunggah harus dalam format PDF atau gambar (JPG, PNG) dengan ukuran maksimal 2MB per file.
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="idCard"
              render={({ field: { value, onChange, ...field } }) => (
                <FormItem>
                  <FormLabel>KTP</FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-4">
                      <Input 
                        type="file" 
                        accept=".pdf,.jpg,.jpeg,.png" 
                        onChange={(e) => onChange(e.target.files)}
                        {...field}
                      />
                      {value && value[0] && (
                        <div className="text-sm text-green-600 flex items-center">
                          <FileCheck className="h-4 w-4 mr-1" />
                          {value[0].name}
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="photo"
              render={({ field: { value, onChange, ...field } }) => (
                <FormItem>
                  <FormLabel>Pas Foto Berwarna (4x6)</FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-4">
                      <Input 
                        type="file" 
                        accept=".jpg,.jpeg,.png" 
                        onChange={(e) => onChange(e.target.files)}
                        {...field}
                      />
                      {value && value[0] && (
                        <div className="text-sm text-green-600 flex items-center">
                          <FileCheck className="h-4 w-4 mr-1" />
                          {value[0].name}
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="diploma"
              render={({ field: { value, onChange, ...field } }) => (
                <FormItem>
                  <FormLabel>Ijazah Pendidikan Terakhir</FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-4">
                      <Input 
                        type="file" 
                        accept=".pdf,.jpg,.jpeg,.png" 
                        onChange={(e) => onChange(e.target.files)}
                        {...field}
                      />
                      {value && value[0] && (
                        <div className="text-sm text-green-600 flex items-center">
                          <FileCheck className="h-4 w-4 mr-1" />
                          {value[0].name}
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="cv"
              render={({ field: { value, onChange, ...field } }) => (
                <FormItem>
                  <FormLabel>CV Terbaru</FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-4">
                      <Input 
                        type="file" 
                        accept=".pdf" 
                        onChange={(e) => onChange(e.target.files)}
                        {...field}
                      />
                      {value && value[0] && (
                        <div className="text-sm text-green-600 flex items-center">
                          <FileCheck className="h-4 w-4 mr-1" />
                          {value[0].name}
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="workCertificate"
              render={({ field: { value, onChange, ...field } }) => (
                <FormItem>
                  <FormLabel>Surat Keterangan Kerja (opsional)</FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-4">
                      <Input 
                        type="file" 
                        accept=".pdf" 
                        onChange={(e) => onChange(e.target.files)}
                        {...field}
                      />
                      {value && value[0] && (
                        <div className="text-sm text-green-600 flex items-center">
                          <FileCheck className="h-4 w-4 mr-1" />
                          {value[0].name}
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Konfirmasi Pendaftaran</h3>
            
            <div className="bg-green-50 border border-green-200 rounded-md p-6 mb-6">
              <h4 className="font-semibold text-green-800 mb-2">Ringkasan Pendaftaran</h4>
              
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-gray-600">Nama Lengkap:</p>
                  <p className="font-medium">{formData[0]?.fullName}</p>
                </div>
                
                <div>
                  <p className="text-gray-600">Email:</p>
                  <p className="font-medium">{formData[0]?.email}</p>
                </div>
                
                <div>
                  <p className="text-gray-600">Pendidikan Terakhir:</p>
                  <p className="font-medium">{formData[1]?.education === 'sma' ? 'SMA/SMK/Sederajat' : 
                    formData[1]?.education === 'd3' ? 'D3' : 
                    formData[1]?.education === 's1' ? 'S1' : 
                    formData[1]?.education === 's2' ? 'S2' : 
                    formData[1]?.education === 's3' ? 'S3' : ''}</p>
                </div>
                
                <div>
                  <p className="text-gray-600">Skema Sertifikasi:</p>
                  <p className="font-medium">
                    {certificationSchemes.find(scheme => 
                      scheme.id.toString() === formData[2]?.schemeId
                    )?.title || ''}
                  </p>
                </div>
                
                <div>
                  <p className="text-gray-600">Dokumen Diunggah:</p>
                  <ul className="list-disc pl-5">
                    {formData[3]?.idCard && <li>KTP</li>}
                    {formData[3]?.photo && <li>Pas Foto</li>}
                    {formData[3]?.diploma && <li>Ijazah</li>}
                    {formData[3]?.cv && <li>CV</li>}
                    {formData[3]?.workCertificate && <li>Surat Keterangan Kerja</li>}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="agreeTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <div className="pt-1">
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="w-4 h-4 text-sertifa-purple border-gray-300 rounded focus:ring-sertifa-purple"
                        />
                      </div>
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Saya telah membaca dan menyetujui <a href="#" className="text-sertifa-purple underline">Syarat dan Ketentuan</a> sertifikasi
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="agreeDataUse"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <div className="pt-1">
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="w-4 h-4 text-sertifa-purple border-gray-300 rounded focus:ring-sertifa-purple"
                        />
                      </div>
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Saya menyetujui penggunaan data saya untuk keperluan sertifikasi dan komunikasi terkait
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
              <p className="text-sm text-gray-600">
                Dengan mengklik tombol "Kirim Pendaftaran", Anda menyetujui bahwa seluruh informasi yang diberikan adalah benar dan dapat dipertanggungjawabkan.
                Pihak LSP Sertifa berhak membatalkan proses sertifikasi jika ditemukan informasi yang tidak sesuai.
              </p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
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
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <div className="w-full bg-gray-100 h-2 rounded-full mb-6 overflow-hidden">
              <Progress value={progress} className="h-full" />
            </div>
            
            <div className="grid grid-cols-5 gap-4">
              {steps.map((s, i) => (
                <div key={i} className={`flex flex-col items-center text-center ${
                  i === step ? 'text-sertifa-purple' : 
                  i < step ? 'text-green-600' : 'text-gray-400'
                }`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    i === step ? 'bg-sertifa-purple text-white' :
                    i < step ? 'bg-green-100 text-green-600' : 'bg-gray-100'
                  }`}>
                    {i < step ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <s.icon className="h-5 w-5" />
                    )}
                  </div>
                  <span className="text-xs md:text-sm font-medium hidden md:block">{s.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {renderStepContent()}
                  
                  <div className="flex justify-between pt-4">
                    <Button
                      type="button"
                      onClick={prev}
                      disabled={step === 0}
                      variant="outline"
                      className="flex items-center"
                    >
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Sebelumnya
                    </Button>
                    
                    <Button 
                      type="submit" 
                      className="bg-sertifa-purple hover:bg-sertifa-darkpurple"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">Mengirim... <span className="ml-2 animate-spin">⏳</span></span>
                      ) : step === steps.length - 1 ? (
                        "Kirim Pendaftaran"
                      ) : (
                        <>
                          Selanjutnya
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Sertifikasi Profesional" 
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Informasi Biaya Sertifikasi</h3>
              <p className="text-gray-600 mb-4">
                Biaya sertifikasi bervariasi tergantung pada skema yang dipilih. Setelah pendaftaran, 
                tim kami akan menghubungi Anda untuk konfirmasi dan memberikan detail pembayaran.
              </p>
              <div className="border-t pt-4 mt-4">
                <h4 className="font-semibold mb-2">Metode Pembayaran:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Transfer Bank</li>
                  <li>Kartu Kredit/Debit</li>
                  <li>QRIS (OVO, GoPay, Dana, dll)</li>
                  <li>Cicilan 0% (untuk bank tertentu)</li>
                </ul>
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
