
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { certificationSchemes } from "@/data/certificationSchemes";
import { FileCog, CalendarDays, Upload, ClipboardCheck, DollarSign, User, Mail, Phone, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RegistrationPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [education, setEducation] = useState("");
  const [institution, setInstitution] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [selectedScheme, setSelectedScheme] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [gender, setGender] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [currentTab, setCurrentTab] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNext = () => {
    if (currentTab === 1 && (!fullName || !email || !phone || !gender || !idNumber || !birthPlace || !birthDate)) {
      toast({
        title: "Data tidak lengkap",
        description: "Mohon lengkapi semua data pribadi yang wajib diisi.",
        variant: "destructive",
      });
      return;
    }
    
    if (currentTab === 2 && (!education || !workExperience)) {
      toast({
        title: "Data tidak lengkap",
        description: "Mohon lengkapi informasi pendidikan dan pengalaman kerja.",
        variant: "destructive",
      });
      return;
    }
    
    if (currentTab === 3 && !selectedScheme) {
      toast({
        title: "Skema belum dipilih",
        description: "Mohon pilih skema sertifikasi yang ingin diikuti.",
        variant: "destructive",
      });
      return;
    }
    
    setCurrentTab(currentTab + 1);
    window.scrollTo(0, 0);
  };

  const handlePrevious = () => {
    setCurrentTab(currentTab - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreeTerms) {
      toast({
        title: "Persetujuan diperlukan",
        description: "Anda harus menyetujui syarat dan ketentuan untuk melanjutkan pendaftaran.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Pendaftaran berhasil!",
        description: "Data pendaftaran Anda telah kami terima. Tim kami akan segera menghubungi Anda untuk verifikasi dan konfirmasi.",
      });
      
      // Reset form
      setFullName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setEducation("");
      setInstitution("");
      setWorkExperience("");
      setSelectedScheme("");
      setPreferredDate("");
      setGender("");
      setIdNumber("");
      setBirthPlace("");
      setBirthDate("");
      setAgreeTerms(false);
      setCurrentTab(1);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <>
      <Navbar />
      
      <div className="bg-gradient-to-r from-sertifa-purple to-sertifa-darkpurple text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Pendaftaran Sertifikasi</h1>
          <p className="text-lg">
            Lengkapi formulir pendaftaran untuk mengikuti program sertifikasi di LSP Sertifa
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <div className="relative flex items-center justify-between">
              <div className="w-full absolute h-1 bg-gray-200"></div>
              
              <div className={`relative z-10 flex flex-col items-center ${currentTab >= 1 ? "text-sertifa-purple" : "text-gray-400"}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentTab >= 1 ? "bg-sertifa-purple text-white" : "bg-gray-200"}`}>
                  <User size={20} />
                </div>
                <span className="mt-2 text-sm font-medium">Data Pribadi</span>
              </div>
              
              <div className={`relative z-10 flex flex-col items-center ${currentTab >= 2 ? "text-sertifa-purple" : "text-gray-400"}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentTab >= 2 ? "bg-sertifa-purple text-white" : "bg-gray-200"}`}>
                  <FileText size={20} />
                </div>
                <span className="mt-2 text-sm font-medium">Latar Belakang</span>
              </div>
              
              <div className={`relative z-10 flex flex-col items-center ${currentTab >= 3 ? "text-sertifa-purple" : "text-gray-400"}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentTab >= 3 ? "bg-sertifa-purple text-white" : "bg-gray-200"}`}>
                  <FileCog size={20} />
                </div>
                <span className="mt-2 text-sm font-medium">Skema</span>
              </div>
              
              <div className={`relative z-10 flex flex-col items-center ${currentTab >= 4 ? "text-sertifa-purple" : "text-gray-400"}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentTab >= 4 ? "bg-sertifa-purple text-white" : "bg-gray-200"}`}>
                  <ClipboardCheck size={20} />
                </div>
                <span className="mt-2 text-sm font-medium">Konfirmasi</span>
              </div>
            </div>
          </div>
          
          <Card className="border-none shadow-lg">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Information */}
                {currentTab === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-sertifa-purple">Data Pribadi</h2>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                            Nama Lengkap <span className="text-red-500">*</span>
                          </label>
                          <Input
                            id="fullName"
                            type="text"
                            placeholder="Masukkan nama lengkap"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700 mb-1">
                            Nomor KTP <span className="text-red-500">*</span>
                          </label>
                          <Input
                            id="idNumber"
                            type="text"
                            placeholder="Masukkan nomor KTP"
                            value={idNumber}
                            onChange={(e) => setIdNumber(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="birthPlace" className="block text-sm font-medium text-gray-700 mb-1">
                            Tempat Lahir <span className="text-red-500">*</span>
                          </label>
                          <Input
                            id="birthPlace"
                            type="text"
                            placeholder="Masukkan tempat lahir"
                            value={birthPlace}
                            onChange={(e) => setBirthPlace(e.target.value)}
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-1">
                            Tanggal Lahir <span className="text-red-500">*</span>
                          </label>
                          <Input
                            id="birthDate"
                            type="date"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Jenis Kelamin <span className="text-red-500">*</span>
                        </label>
                        <RadioGroup value={gender} onValueChange={setGender} className="flex space-x-6">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="male" id="male" />
                            <Label htmlFor="male">Laki-laki</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="female" id="female" />
                            <Label htmlFor="female">Perempuan</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                          Alamat Lengkap
                        </label>
                        <Textarea
                          id="address"
                          placeholder="Masukkan alamat lengkap"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          rows={3}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <div className="flex">
                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                              <Mail size={16} />
                            </span>
                            <Input
                              id="email"
                              type="email"
                              className="rounded-l-none"
                              placeholder="nama@email.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Nomor Telepon <span className="text-red-500">*</span>
                          </label>
                          <div className="flex">
                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                              <Phone size={16} />
                            </span>
                            <Input
                              id="phone"
                              type="tel"
                              className="rounded-l-none"
                              placeholder="08xxxxxxxxxx"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-end">
                      <Button 
                        type="button" 
                        className="bg-sertifa-purple hover:bg-sertifa-darkpurple"
                        onClick={handleNext}
                      >
                        Selanjutnya
                      </Button>
                    </div>
                  </div>
                )}
                
                {/* Step 2: Background Information */}
                {currentTab === 2 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-sertifa-purple">Latar Belakang</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                          Pendidikan Terakhir <span className="text-red-500">*</span>
                        </label>
                        <Select
                          value={education}
                          onValueChange={setEducation}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih jenjang pendidikan" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sma">SMA/SMK/Sederajat</SelectItem>
                            <SelectItem value="d3">Diploma (D3)</SelectItem>
                            <SelectItem value="s1">Sarjana (S1)</SelectItem>
                            <SelectItem value="s2">Magister (S2)</SelectItem>
                            <SelectItem value="s3">Doktor (S3)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-1">
                          Institusi Pendidikan
                        </label>
                        <Input
                          id="institution"
                          type="text"
                          placeholder="Nama institusi pendidikan"
                          value={institution}
                          onChange={(e) => setInstitution(e.target.value)}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="workExperience" className="block text-sm font-medium text-gray-700 mb-1">
                          Pengalaman Kerja <span className="text-red-500">*</span>
                        </label>
                        <Textarea
                          id="workExperience"
                          placeholder="Tuliskan pengalaman kerja Anda yang relevan dengan skema sertifikasi yang akan diambil (Posisi, Perusahaan, Durasi, Deskripsi Tugas)"
                          value={workExperience}
                          onChange={(e) => setWorkExperience(e.target.value)}
                          rows={5}
                          required
                        />
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-gray-700 mb-2">
                          Dokumen Pendukung <span className="text-xs text-gray-500">(akan diminta setelah pendaftaran)</span>
                        </h3>
                        <ul className="list-disc text-sm text-gray-600 pl-5 space-y-1">
                          <li>Scan KTP</li>
                          <li>Scan Ijazah terakhir</li>
                          <li>Curriculum Vitae (CV)</li>
                          <li>Pas foto berwarna (4x6)</li>
                          <li>Surat keterangan pengalaman kerja (jika ada)</li>
                          <li>Sertifikat pelatihan yang relevan (jika ada)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-between">
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={handlePrevious}
                      >
                        Sebelumnya
                      </Button>
                      <Button 
                        type="button" 
                        className="bg-sertifa-purple hover:bg-sertifa-darkpurple"
                        onClick={handleNext}
                      >
                        Selanjutnya
                      </Button>
                    </div>
                  </div>
                )}
                
                {/* Step 3: Certification Scheme */}
                {currentTab === 3 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-sertifa-purple">Pilih Skema Sertifikasi</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="certification-scheme" className="block text-sm font-medium text-gray-700 mb-3">
                          Skema Sertifikasi <span className="text-red-500">*</span>
                        </label>
                        <Select
                          value={selectedScheme}
                          onValueChange={setSelectedScheme}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih skema sertifikasi" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="">Pilih skema sertifikasi</SelectItem>
                            <SelectItem value="group-okupasi" disabled className="font-semibold">-- Skema Okupasi --</SelectItem>
                            {certificationSchemes
                              .filter(scheme => scheme.type === "okupasi")
                              .map(scheme => (
                                <SelectItem key={scheme.id} value={String(scheme.id)}>
                                  {scheme.title}
                                </SelectItem>
                              ))
                            }
                            <SelectItem value="group-klaster" disabled className="font-semibold">-- Skema Klaster --</SelectItem>
                            {certificationSchemes
                              .filter(scheme => scheme.type === "klaster")
                              .map(scheme => (
                                <SelectItem key={scheme.id} value={String(scheme.id)}>
                                  {scheme.title}
                                </SelectItem>
                              ))
                            }
                          </SelectContent>
                        </Select>
                      </div>
                      
                      {selectedScheme && (
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <h3 className="font-semibold mb-2">Detail Skema Terpilih</h3>
                          <div className="space-y-2">
                            <p>
                              <span className="font-medium">Nama Skema:</span>{" "}
                              {certificationSchemes.find(s => String(s.id) === selectedScheme)?.title}
                            </p>
                            <p>
                              <span className="font-medium">Jenis:</span>{" "}
                              {certificationSchemes.find(s => String(s.id) === selectedScheme)?.type === "okupasi" ? "Okupasi" : "Klaster"}
                            </p>
                            <p>
                              <span className="font-medium">Durasi:</span>{" "}
                              {certificationSchemes.find(s => String(s.id) === selectedScheme)?.duration}
                            </p>
                            <p>
                              <span className="font-medium">Biaya:</span>{" "}
                              {certificationSchemes.find(s => String(s.id) === selectedScheme)?.price}
                            </p>
                          </div>
                        </div>
                      )}
                      
                      <div>
                        <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                          Tanggal Uji Kompetensi yang Diinginkan
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                            <CalendarDays size={16} />
                          </span>
                          <Input
                            id="preferredDate"
                            type="date"
                            className="rounded-l-none"
                            value={preferredDate}
                            onChange={(e) => setPreferredDate(e.target.value)}
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          * Jadwal uji kompetensi akan dikonfirmasi oleh tim kami sesuai dengan ketersediaan
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h3 className="font-semibold text-sertifa-purple mb-2 flex items-center">
                          <Upload size={18} className="mr-2" /> Dokumen Pendukung
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Untuk melengkapi proses pendaftaran, Anda perlu menyiapkan dokumen pendukung sesuai
                          dengan persyaratan skema sertifikasi yang dipilih.
                        </p>
                        <p className="text-sm text-gray-600">
                          Dokumen pendukung dapat diunggah melalui tautan yang akan kami kirimkan ke email Anda
                          setelah proses pendaftaran selesai.
                        </p>
                      </div>
                      
                      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <h3 className="font-semibold text-amber-700 mb-2 flex items-center">
                          <DollarSign size={18} className="mr-2" /> Informasi Pembayaran
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Setelah pendaftaran Anda diverifikasi, kami akan mengirimkan informasi pembayaran
                          dan instruksi selanjutnya melalui email yang terdaftar.
                        </p>
                        <p className="text-sm text-gray-600">
                          Pembayaran dapat dilakukan melalui transfer bank atau metode pembayaran lainnya
                          sesuai dengan informasi yang akan kami berikan.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-between">
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={handlePrevious}
                      >
                        Sebelumnya
                      </Button>
                      <Button 
                        type="button" 
                        className="bg-sertifa-purple hover:bg-sertifa-darkpurple"
                        onClick={handleNext}
                      >
                        Selanjutnya
                      </Button>
                    </div>
                  </div>
                )}
                
                {/* Step 4: Confirmation */}
                {currentTab === 4 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-sertifa-purple">Konfirmasi Pendaftaran</h2>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-5 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Ringkasan Data Pendaftaran</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">Data Pribadi</h4>
                            <ul className="space-y-1 text-sm text-gray-600">
                              <li><span className="font-medium">Nama:</span> {fullName}</li>
                              <li><span className="font-medium">No. KTP:</span> {idNumber}</li>
                              <li><span className="font-medium">TTL:</span> {birthPlace}, {birthDate}</li>
                              <li><span className="font-medium">Jenis Kelamin:</span> {gender === "male" ? "Laki-laki" : gender === "female" ? "Perempuan" : "-"}</li>
                              <li><span className="font-medium">Email:</span> {email}</li>
                              <li><span className="font-medium">Telepon:</span> {phone}</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">Latar Belakang & Skema</h4>
                            <ul className="space-y-1 text-sm text-gray-600">
                              <li>
                                <span className="font-medium">Pendidikan:</span> {
                                  education === "sma" ? "SMA/SMK/Sederajat" :
                                  education === "d3" ? "Diploma (D3)" :
                                  education === "s1" ? "Sarjana (S1)" :
                                  education === "s2" ? "Magister (S2)" :
                                  education === "s3" ? "Doktor (S3)" : "-"
                                }
                              </li>
                              <li><span className="font-medium">Institusi:</span> {institution || "-"}</li>
                              <li>
                                <span className="font-medium">Skema:</span> {
                                  certificationSchemes.find(s => String(s.id) === selectedScheme)?.title || "-"
                                }
                              </li>
                              <li><span className="font-medium">Tanggal Uji:</span> {preferredDate || "Menyesuaikan"}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-5 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Syarat dan Ketentuan</h3>
                        <div className="text-sm text-gray-600 mb-4 h-40 overflow-y-auto p-3 border border-gray-200 rounded bg-white">
                          <p className="mb-3">
                            Dengan mendaftar di LSP Sertifa, Anda menyetujui syarat dan ketentuan berikut:
                          </p>
                          <ol className="list-decimal pl-5 space-y-2">
                            <li>Seluruh data yang diberikan adalah benar dan dapat dipertanggungjawabkan.</li>
                            <li>Bersedia mengikuti seluruh proses asesmen sesuai dengan jadwal yang ditentukan.</li>
                            <li>Bersedia membayar biaya sertifikasi sesuai dengan ketentuan yang berlaku.</li>
                            <li>Bersedia mematuhi kode etik dan aturan yang berlaku selama proses asesmen.</li>
                            <li>Biaya pendaftaran yang telah dibayarkan tidak dapat dikembalikan apabila terjadi pembatalan dari pihak peserta.</li>
                            <li>LSP Sertifa berhak membatalkan atau menunda jadwal uji kompetensi dengan pemberitahuan sebelumnya.</li>
                            <li>LSP Sertifa akan menjaga kerahasiaan data pribadi peserta sesuai dengan peraturan yang berlaku.</li>
                            <li>Sertifikat kompetensi akan diterbitkan apabila peserta dinyatakan kompeten dalam seluruh unit kompetensi yang diujikan.</li>
                          </ol>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Checkbox 
                            id="agreeTerms" 
                            checked={agreeTerms}
                            onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                          />
                          <Label htmlFor="agreeTerms" className="text-sm">
                            Saya menyatakan bahwa data yang saya berikan adalah benar dan saya menyetujui
                            syarat dan ketentuan yang berlaku di LSP Sertifa.
                          </Label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-between">
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={handlePrevious}
                      >
                        Sebelumnya
                      </Button>
                      <Button 
                        type="submit" 
                        className="bg-sertifa-purple hover:bg-sertifa-darkpurple"
                        disabled={isSubmitting || !agreeTerms}
                      >
                        {isSubmitting ? "Mengirim..." : "Daftar Sekarang"}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default RegistrationPage;
