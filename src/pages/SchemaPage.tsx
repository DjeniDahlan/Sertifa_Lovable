
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, ChevronRight, Filter, Book, Folder, Award, BadgeCheck } from "lucide-react";
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

  // Generate a deterministic image for each scheme based on its ID
  const getSchemeImage = (scheme: CertificationScheme) => {
    const keywords = `certification,${scheme.type},${scheme.title.split(' ')[0].toLowerCase()}`;
    return `https://source.unsplash.com/featured/600x400/?${keywords}&sig=${scheme.id}`;
  };

  return (
    <>
      <Navbar />
      
      <div className="bg-gradient-to-r from-sertifa-purple to-sertifa-darkpurple text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">
              <Award className="inline-block mr-2 mb-1" />
              Skema Sertifikasi
            </h1>
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
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div className="flex items-center">
              <Filter size={20} className="text-sertifa-purple mr-2" />
              <h2 className="text-xl font-semibold">Filter Skema</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant={activeTab === "all" ? "default" : "outline"}
                onClick={() => setActiveTab("all")}
                className={activeTab === "all" ? "bg-sertifa-purple hover:bg-sertifa-darkpurple" : ""}
              >
                <BadgeCheck size={16} className="mr-2" />
                Semua Skema
              </Button>
              <Button 
                variant={activeTab === "okupasi" ? "default" : "outline"}
                onClick={() => setActiveTab("okupasi")}
                className={activeTab === "okupasi" ? "bg-sertifa-purple hover:bg-sertifa-darkpurple" : ""}
              >
                <Book size={16} className="mr-2" />
                Skema Okupasi
              </Button>
              <Button 
                variant={activeTab === "klaster" ? "default" : "outline"}
                onClick={() => setActiveTab("klaster")}
                className={activeTab === "klaster" ? "bg-sertifa-purple hover:bg-sertifa-darkpurple" : ""}
              >
                <Folder size={16} className="mr-2" />
                Skema Klaster
              </Button>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-600">
                  Menampilkan <span className="font-semibold text-sertifa-purple">{filteredSchemes.length}</span> dari {certificationSchemes.length} skema sertifikasi
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                  <span className="text-sm text-gray-600">Okupasi</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                  <span className="text-sm text-gray-600">Klaster</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {filteredSchemes.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <Search size={36} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-600 mb-2">Tidak ada skema yang ditemukan</h3>
            <p className="text-gray-500 mb-4">Coba ubah pencarian atau filter Anda</p>
            <Button 
              variant="outline"
              onClick={() => {setSearchQuery(""); setActiveTab("all");}}
              className="border-sertifa-purple text-sertifa-purple hover:bg-sertifa-purple hover:text-white"
            >
              Reset Filter
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSchemes.map((scheme) => (
              <Card key={scheme.id} className="border-none shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 h-full">
                <CardContent className="pt-6 pb-6 flex flex-col h-full">
                  <div className="mb-4 flex justify-between items-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      scheme.type === "okupasi" 
                        ? "bg-blue-100 text-blue-800" 
                        : "bg-green-100 text-green-800"
                    }`}>
                      {scheme.type === "okupasi" ? (
                        <>
                          <Book size={12} className="mr-1" />
                          Okupasi
                        </>
                      ) : (
                        <>
                          <Folder size={12} className="mr-1" />
                          Klaster
                        </>
                      )}
                    </span>
                    <span className="text-sm font-medium text-gray-500">{scheme.duration}</span>
                  </div>
                  
                  <div className="w-full h-40 mb-4 bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={getSchemeImage(scheme)} 
                      alt={scheme.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{scheme.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{scheme.description}</p>
                  
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <span className="text-sm font-medium text-sertifa-purple">{scheme.price}</span>
                    <Link 
                      to={`/skema/${scheme.id}`} 
                      className="inline-flex items-center text-sertifa-purple hover:text-sertifa-darkpurple"
                    >
                      Lihat Detail <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        {filteredSchemes.length > 0 && (
          <div className="mt-10 flex justify-center">
            <nav aria-label="Pagination" className="inline-flex">
              <Button variant="outline" className="mr-2" disabled>
                Sebelumnya
              </Button>
              <Button className="mr-2 bg-sertifa-purple">1</Button>
              <Button variant="outline" className="mr-2">2</Button>
              <Button variant="outline" className="mr-2">3</Button>
              <Button variant="outline">Selanjutnya</Button>
            </nav>
          </div>
        )}
      </div>
      
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-aadb801c60ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Sertifikasi" 
                  className="rounded-lg shadow-lg w-full h-72 object-cover"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
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
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default SchemaPage;
