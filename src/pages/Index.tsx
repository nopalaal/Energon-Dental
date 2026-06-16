import { useEffect } from 'react';
import Navbar from "@/components/Navbar.tsx";
import Hero from "@/components/home/Hero.tsx";
import ProductsSection from "@/components/home/ProductsSection.tsx";
import AboutSection from "@/components/home/AboutSection.tsx";
import MissionSection from "@/components/home/MissionSection.tsx";
import FeaturesSection from "@/components/home/FeaturesSection.tsx";
import Footer from "@/components/Footer.tsx";
import { useSEO, addStructuredData, getCurrentUrl } from "@/hooks/useSEO";
import { SEO_CONFIG, generateOrganizationSchema, SITE_URL } from "@/lib/seoConfig";

const Index = () => {
  // Set SEO meta tags untuk halaman homepage
  useSEO({
    title: SEO_CONFIG.home.title,
    description: SEO_CONFIG.home.description,
    keywords: SEO_CONFIG.home.keywords,
    canonical: SITE_URL + '/',
    ogTitle: 'Energon Dental - Distributor Alat Dokter Gigi Berkualitas',
    ogDescription: 'Supplier alat dokter gigi terpercaya dengan koleksi lengkap dental equipment dan harga kompetitif',
    ogImage: SEO_CONFIG.home.ogImage,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Energon Dental - Distributor Alat Dokter Gigi',
    twitterDescription: 'Supplier alat dokter gigi berkualitas tinggi untuk klinik dan rumah sakit',
  });

  // Tambahkan structured data Organization
  useEffect(() => {
    return addStructuredData(generateOrganizationSchema());
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProductsSection />
      <AboutSection />
      <MissionSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
