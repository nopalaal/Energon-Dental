import { Button } from "@/components/ui/button.tsx";
import { Menu, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleContactWhatsApp = () => {
    const message = "Halo, saya ingin konsultasi produk dental.";
    const whatsappUrl = `https://wa.me/6285717796330?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" role="navigation" aria-label="Navigasi utama">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
              <Link to="/" aria-label="Energon Dental - Distributor Alat Dokter Gigi">
                <img src={logo} alt="Logo Energon Dental" className="w-full h-10" />
              </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              aria-label="Halaman beranda"
            >
              Beranda
            </Link>
            <Link 
              to="/products" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              aria-label="Halaman katalog produk"
            >
              Produk
            </Link>
            <Link 
              to="/about-us" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              aria-label="Tentang Energon Dental"
            >
              Tentang Kami
            </Link>
            <Link 
              to="/events" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              aria-label="Event dan promosi"
            >
              Event
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-foreground" 
              onClick={handleContactWhatsApp}
              aria-label="Hubungi kami melalui WhatsApp"
            >
              <Mail className="w-4 h-4 mr-2" />
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary transition-colors font-medium" 
                onClick={() => setIsOpen(false)}
              >
                Beranda
              </Link>
              <Link 
                to="/products" 
                className="text-foreground hover:text-primary transition-colors font-medium" 
                onClick={() => setIsOpen(false)}
              >
                Produk
              </Link>
              <Link 
                to="/about-us" 
                className="text-foreground hover:text-primary transition-colors font-medium" 
                onClick={() => setIsOpen(false)}
              >
                Tentang Kami
              </Link>
              <Link 
                to="/events" 
                className="text-foreground hover:text-primary transition-colors font-medium" 
                onClick={() => setIsOpen(false)}
              >
                Event
              </Link>
              <Button
                variant="default"
                size="sm"
                className="w-full"
                onClick={() => {
                  handleContactWhatsApp();
                  setIsOpen(false);
                }}
                aria-label="Hubungi kami melalui WhatsApp"
              >
                <Mail className="w-4 h-4 mr-2" />
                Hubungi Kami
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
