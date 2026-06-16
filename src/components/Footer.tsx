import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Logo Energon Dental - Distributor Alat Dokter Gigi" className="w-32 h-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Energon Dental adalah distributor dan supplier terpercaya alat dokter gigi berkualitas tinggi dengan harga kompetitif untuk klinik gigi, rumah sakit, dan distributor di seluruh Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors" aria-label="Kembali ke beranda">Beranda</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors" aria-label="Lihat katalog produk">Produk</Link></li>
              <li><Link to="/about-us" className="text-gray-400 hover:text-white transition-colors" aria-label="Tentang Energon Dental">Tentang</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors" aria-label="Lihat event dan promosi">Event</Link></li>
              <li>
                <Link to="/admin/login" className="text-gray-400 hover:text-white transition-colors" aria-label="Halaman login admin">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-bold mb-4 text-white">Kategori Produk</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/products?search=dental unit" className="hover:text-white transition-colors">Dental Unit</a></li>
              <li><a href="/products?search=autoclave" className="hover:text-white transition-colors">Autoclave Sterilizer</a></li>
              <li><a href="/products?search=handpiece" className="hover:text-white transition-colors">Handpiece</a></li>
              <li><a href="/products?search=x-ray" className="hover:text-white transition-colors">Dental X-Ray</a></li>
              <li><a href="/products?search=scaler" className="hover:text-white transition-colors">Ultrasonic Scaler</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-white">Hubungi Kami</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <span className="font-semibold">Email:</span><br />
                <a href="mailto:energonbintangmulia@gmail.com" className="hover:text-white transition-colors">
                  energonbintangmulia@gmail.com
                </a>
              </li>
              <li>
                <span className="font-semibold">WhatsApp:</span><br />
                <a href="https://wa.me/6285717796330" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +62 857 1779 6330
                </a>
              </li>
              <li>
                <span className="font-semibold">Alamat:</span><br />
                Mutiara Taman Palem, Jakarta Barat, Indonesia
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Copyright & Social */}
          <div className="text-center text-sm text-gray-400">
            <p>&copy; 2026 Energon Dental - Distributor Alat Dokter Gigi Indonesia. Hak cipta dilindungi.</p>
            <p className="mt-4 text-xs">
              Kami melayani kebutuhan alat dental untuk dokter gigi, klinik gigi, rumah sakit, dan institusi pendidikan kedokteran gigi di seluruh Indonesia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
