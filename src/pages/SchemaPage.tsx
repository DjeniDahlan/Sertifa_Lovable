
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, ChevronRight } from "lucide-react";
import { certificationSchemes, CertificationScheme } from "@/data/certificationSchemes";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SchemaPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "okupasi" | "klaster">("all");
  const [filteredSchemes, setFilteredSchemes] = useState<CertificationScheme[]>(certificationSchemes);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const filterSchemes = () => {
      let filtered = certificationSchemes;
      
      if (activeTab !== "all") {
        filtered = filtered.filter(scheme => scheme.type === activeTab);
      }
      
      if (searchQuery) {
        filtered = filtered.filter(scheme => 
          scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          scheme.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      
      setFilteredSchemes(filtered);
    };
    
    filterSchemes();
  }, [searchQuery, activeTab]);

  return (
    <>
      <Navbar />
      
      <div className="bg-gradient-to-r from-sertifa-purple to-sertifa-darkpurple text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Skema Sertifikasi</h1>
            <p className="text-lg mb-6">
              Pilih skema sertifikasi yang sesuai dengan kebutuhan karir dan pengembangan profesional Anda.
              LSP Sertifa menawarkan 15 skema sertifikasi yang diakui secara nasional.
            </p>
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Cari skema sertifikasi..."
                className="pl-10 py-6 bg-white/90 text-gray-800 rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button 
            variant={activeTab === "all" ? "default" : "outline"}
            onClick={() => setActiveTab("all")}
            className={activeTab === "all" ? "bg-sertifa-purple hover:bg-sertifa-darkpurple" : ""}
          >
            Semua Skema
          </Button>
          <Button 
            variant={activeTab === "okupasi" ? "default" : "outline"}
            onClick={() => setActiveTab("okupasi")}
            className={activeTab === "okupasi" ? "bg-sertifa-purple hover:bg-sertifa-darkpurple" : ""}
          >
            Skema Okupasi
          </Button>
          <Button 
            variant={activeTab === "klaster" ? "default" : "outline"}
            onClick={() => setActiveTab("klaster")}
            className={activeTab === "klaster" ? "bg-sertifa-purple hover:bg-sertifa-darkpurple" : ""}
          >
            Skema Klaster
          </Button>
        </div>
        
        {filteredSchemes.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600 mb-2">Tidak ada skema yang ditemukan</h3>
            <p className="text-gray-500">Coba ubah pencarian atau filter Anda</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSchemes.map((scheme) => (
              <Card key={scheme.id} className="border-none shadow-md hover:shadow-lg transition-shadow h-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        scheme.type === "okupasi" 
                          ? "bg-blue-100 text-blue-800" 
                          : "bg-green-100 text-green-800"
                      }`}>
                        {scheme.type === "okupasi" ? "Okupasi" : "Klaster"}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{scheme.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{scheme.description}</p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-sm font-medium text-gray-500">{scheme.duration}</span>
                      <Link 
                        to={`/skema/${scheme.id}`} 
                        className="inline-flex items-center text-sertifa-purple hover:text-sertifa-darkpurple"
                      >
                        Lihat Detail <ChevronRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
      
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-sertifa-purple">Siap Untuk Ambil Sertifikasi?</h2>
            <p className="text-lg mb-8 text-gray-600">
              Segera daftarkan diri Anda untuk mengikuti sertifikasi dan tingkatkan kompetensi profesional Anda.
            </p>
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

export default SchemaPage;
