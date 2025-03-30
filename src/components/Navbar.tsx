
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Award, 
  Info, 
  Users, 
  Image, 
  HelpCircle, 
  Phone,
  Globe
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  
  const navItems = [
    { name: t("Home", "Home"), path: "/", icon: <Home size={16} className="mr-1" /> },
    { name: t("Profile", "Profile"), path: "/profile", icon: <User size={16} className="mr-1" /> },
    { name: t("Skema Sertifikasi", "Certification Schemes"), path: "/skema", icon: <Award size={16} className="mr-1" /> },
    { name: t("Informasi", "Information"), path: "/informasi", icon: <Info size={16} className="mr-1" /> },
    { name: t("Tim dan Asesor", "Team and Assessors"), path: "/tim", icon: <Users size={16} className="mr-1" /> },
    { name: t("Galery", "Gallery"), path: "/galery", icon: <Image size={16} className="mr-1" /> },
    { name: t("FAQ", "FAQ"), path: "/faq", icon: <HelpCircle size={16} className="mr-1" /> },
    { name: t("Kontak", "Contact"), path: "/kontak", icon: <Phone size={16} className="mr-1" /> }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/412b768d-9b28-448d-a8b7-c416179ae543.png" 
            alt="LSP Sertifa Logo" 
            className="h-10 mr-2"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <nav className="flex items-center space-x-1 mr-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-sertifa-purple transition-colors flex items-center"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="ml-4 bg-sertifa-purple hover:bg-sertifa-darkpurple text-white"
            >
              <Link to="/pendaftaran">{t("Pendaftaran", "Registration")}</Link>
            </Button>
          </nav>
          
          {/* Language selector */}
          <div className="flex items-center space-x-2 ml-4 border-l pl-4">
            <button 
              onClick={() => setLanguage('id')}
              className={`p-1 rounded-full ${language === 'id' ? 'bg-gray-200' : ''}`}
              aria-label="Bahasa Indonesia"
            >
              <span className="flex items-center">
                <span className="text-sm font-medium">ID</span>
              </span>
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={`p-1 rounded-full ${language === 'en' ? 'bg-gray-200' : ''}`}
              aria-label="English"
            >
              <span className="flex items-center">
                <span className="text-sm font-medium">EN</span>
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          {/* Language selector for mobile */}
          <div className="flex items-center space-x-1 mr-2">
            <button 
              onClick={() => setLanguage('id')}
              className={`p-1 ${language === 'id' ? 'text-sertifa-purple font-bold' : 'text-gray-500'}`}
              aria-label="Bahasa Indonesia"
            >
              ID
            </button>
            <span className="text-gray-300">|</span>
            <button 
              onClick={() => setLanguage('en')}
              className={`p-1 ${language === 'en' ? 'text-sertifa-purple font-bold' : 'text-gray-500'}`}
              aria-label="English"
            >
              EN
            </button>
          </div>
          
          <button
            className="p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-sertifa-purple transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 bg-sertifa-purple hover:bg-sertifa-darkpurple text-white"
            >
              <Link to="/pendaftaran" onClick={() => setIsMenuOpen(false)}>
                {t("Pendaftaran", "Registration")}
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
