
import { useState, useEffect } from "react";
import { Award } from "lucide-react";
import { certificationSchemes } from "@/data/certificationSchemes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaHeader from "@/components/schema/SchemaHeader";
import SchemaFilter from "@/components/schema/SchemaFilter";
import SchemaList from "@/components/schema/SchemaList";
import SchemaPagination from "@/components/schema/SchemaPagination";
import SchemaCallToAction from "@/components/schema/SchemaCallToAction";

const SchemaPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "okupasi" | "klaster">("all");
  const [filteredSchemes, setFilteredSchemes] = useState(certificationSchemes);

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

  const resetFilters = () => {
    setSearchQuery("");
    setActiveTab("all");
  };

  return (
    <>
      <Navbar />
      
      <SchemaHeader 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <div className="container mx-auto px-4 py-12">
        <SchemaFilter 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          filteredSchemes={filteredSchemes}
          totalSchemes={certificationSchemes.length}
        />
        
        <SchemaList 
          filteredSchemes={filteredSchemes}
          resetFilters={resetFilters}
        />
        
        <SchemaPagination visible={filteredSchemes.length > 0} />
      </div>
      
      <SchemaCallToAction />
      
      <Footer />
    </>
  );
};

export default SchemaPage;
