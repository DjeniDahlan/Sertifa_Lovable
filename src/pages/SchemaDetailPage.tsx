
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { certificationSchemes } from "@/data/certificationSchemes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemeDetailHeader from "@/components/scheme-detail/SchemeDetailHeader";
import SchemeRequirements from "@/components/scheme-detail/SchemeRequirements";
import SchemeCompetencyUnits from "@/components/scheme-detail/SchemeCompetencyUnits";
import SchemeCertificationProcess from "@/components/scheme-detail/SchemeCertificationProcess";
import SchemeBenefits from "@/components/scheme-detail/SchemeBenefits";
import SchemeCtaSection from "@/components/scheme-detail/SchemeCtaSection";
import SchemeRelated from "@/components/scheme-detail/SchemeRelated";
import SchemeNotFound from "@/components/scheme-detail/SchemeNotFound";
import { Calendar, Clock } from "lucide-react";

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
        <SchemeNotFound />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      <SchemeDetailHeader scheme={scheme} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <SchemeRequirements scheme={scheme} />
          <SchemeCompetencyUnits />
          <SchemeCertificationProcess />
          <SchemeBenefits />
          <SchemeCtaSection />
          <SchemeRelated currentSchemeId={scheme.id} schemes={certificationSchemes} />
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default SchemaDetailPage;
