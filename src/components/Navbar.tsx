
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Skema Sertifikasi", path: "/skema" },
    { name: "Informasi", path: "/informasi" },
    { name: "Tim dan Asesor", path: "/tim" },
    { name: "Galery", path: "/galery" },
    { name: "FAQ", path: "/faq" },
    { name: "Kontak", path: "/kontak" }
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
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-sertifa-purple transition-colors"
            >
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
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-sertifa-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
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
