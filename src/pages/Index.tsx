
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import FeaturedSchemesSection from "@/components/home/FeaturedSchemesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <FeaturedSchemesSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </>
  );
};

export default Index;
