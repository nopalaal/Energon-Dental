import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/seoConfig";

const NotFound = () => {
  const location = useLocation();

  // Set SEO meta tags untuk halaman 404
  useSEO({
    title: "404 - Halaman Tidak Ditemukan | Energon Dental",
    description: "Halaman yang Anda cari tidak ditemukan. Kembali ke beranda Energon Dental untuk melihat katalog produk alat dokter gigi.",
    keywords: "404, halaman tidak ditemukan",
    canonical: SITE_URL + location.pathname,
    noindex: true, // Jangan index halaman 404
  });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-6">
        <h1 className="mb-4 text-6xl md:text-7xl font-bold text-primary">404</h1>
        <p className="mb-6 text-2xl font-semibold text-foreground">Oops! Halaman Tidak Ditemukan</p>
        <p className="mb-8 text-lg text-muted-foreground max-w-md mx-auto">
          Halaman yang Anda cari tidak ada. Mungkin telah dipindahkan atau dihapus. 
          Silakan kembali ke beranda untuk melanjutkan menjelajahi produk alat dokter gigi kami.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Kembali ke Beranda
          </Link>
          <Link 
            to="/products" 
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-semibold"
          >
            Lihat Produk
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
