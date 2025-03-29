
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, DollarSign, FileCheck } from "lucide-react";
import { certificationSchemes } from "@/data/certificationSchemes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SchemaDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const scheme = certificationSchemes.find(s => s.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!scheme) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Skema tidak ditemukan</h1>
          <p className="mb-8">Maaf, skema sertifikasi yang Anda cari tidak ditemukan.</p>
          <Button asChild className="bg-sertifa-purple hover:bg-sertifa-darkpurple">
            <Link to="/skema">Kembali ke Daftar Skema</Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      <div className="bg-gradient-to-r from-sertifa-purple to-sertifa-darkpurple text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/skema" 
              className="inline-flex items-center text-white/80 hover:text-white mb-6"
            >
              <ArrowLeft size={16} className="mr-2" /> Kembali ke Daftar Skema
            </Link>
            <div className="mb-6">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                scheme.type === "okupasi" 
                  ? "bg-blue-100 text-blue-800" 
                  : "bg-green-100 text-green-800"
              }`}>
                {scheme.type === "okupasi" ? "Okupasi" : "Klaster"}
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{scheme.title}</h1>
            <p className="text-lg">{scheme.description}</p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-sertifa-purple mb-4">
                    <Calendar size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Durasi</h3>
                  <p className="text-gray-600">{scheme.duration}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-sertifa-purple mb-4">
                    <Clock size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Metode Uji</h3>
                  <p className="text-gray-600">Tertulis, Praktik, Wawancara</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-sertifa-purple mb-4">
                    <DollarSign size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Biaya</h3>
                  <p className="text-gray-600">{scheme.price}</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-sertifa-purple">Persyaratan Peserta</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-3">
                {scheme.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-sertifa-purple rounded-full flex items-center justify-center text-white mr-3 mt-0.5">
                      <FileCheck size={14} />
                    </span>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-sertifa-purple">Unit Kompetensi</h2>
            <div className="space-y-4">
              <Card className="border-none shadow-sm">
                <CardContent className="p-5">
                  <p className="font-medium">J.620100.001.01</p>
                  <p className="text-gray-600">Mengimplementasikan pemrograman terstruktur</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm">
                <CardContent className="p-5">
                  <p className="font-medium">J.620100.002.01</p>
                  <p className="text-gray-600">Menggunakan struktur data</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm">
                <CardContent className="p-5">
                  <p className="font-medium">J.620100.005.01</p>
                  <p className="text-gray-600">Mengimplementasikan user interface</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm">
                <CardContent className="p-5">
                  <p className="font-medium">J.620100.011.01</p>
                  <p className="text-gray-600">Melakukan instalasi software tools pemrograman</p>
                </CardContent>
              </Card>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-sertifa-purple">Proses Sertifikasi</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center p-4">
                <div className="w-16 h-16 bg-sertifa-purple rounded-full flex items-center justify-center text-white mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Pendaftaran</h3>
                <p className="text-sm text-gray-600">Daftar dan pilih skema sertifikasi</p>
              </div>
              
              <div className="flex flex-col items-center p-4">
                <div className="w-16 h-16 bg-sertifa-purple rounded-full flex items-center justify-center text-white mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Asesmen Mandiri</h3>
                <p className="text-sm text-gray-600">Evaluasi diri terhadap unit kompetensi</p>
              </div>
              
              <div className="flex flex-col items-center p-4">
                <div className="w-16 h-16 bg-sertifa-purple rounded-full flex items-center justify-center text-white mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Uji Kompetensi</h3>
                <p className="text-sm text-gray-600">Tes tertulis, praktik dan wawancara</p>
              </div>
              
              <div className="flex flex-col items-center p-4">
                <div className="w-16 h-16 bg-sertifa-purple rounded-full flex items-center justify-center text-white mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="font-semibold mb-2">Sertifikasi</h3>
                <p className="text-sm text-gray-600">Penerbitan sertifikat kompetensi</p>
              </div>
            </div>
          </section>
          
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-sertifa-purple hover:bg-sertifa-darkpurple"
            >
              <Link to="/pendaftaran">Daftar Sekarang</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default SchemaDetailPage;
