
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
  Phone
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { name: "Home", path: "/", icon: <Home size={16} className="mr-1" /> },
    { name: "Profile", path: "/profile", icon: <User size={16} className="mr-1" /> },
    { name: "Skema Sertifikasi", path: "/skema", icon: <Award size={16} className="mr-1" /> },
    { name: "Informasi", path: "/informasi", icon: <Info size={16} className="mr-1" /> },
    { name: "Tim dan Asesor", path: "/tim", icon: <Users size={16} className="mr-1" /> },
    { name: "Galery", path: "/galery", icon: <Image size={16} className="mr-1" /> },
    { name: "FAQ", path: "/faq", icon: <HelpCircle size={16} className="mr-1" /> },
    { name: "Kontak", path: "/kontak", icon: <Phone size={16} className="mr-1" /> }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-sertifa-purple">LSP Sertifa</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
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
            <Link to="/pendaftaran">Pendaftaran</Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
              <Link to="/pendaftaran" onClick={() => setIsMenuOpen(false)}>Pendaftaran</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
