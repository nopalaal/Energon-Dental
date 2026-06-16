import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, ShieldCheck, Award, HeartHandshake, Target, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import dentalTools1 from "@/assets/dental-tools-1.jpg";
import dentalTools2 from "@/assets/dental-tools-2.jpg";
import { useSEO, addStructuredData, getCurrentUrl } from "@/hooks/useSEO";
import { SEO_CONFIG, SITE_URL, generateOrganizationSchema, generateBreadcrumbSchema, BREADCRUMB_ITEMS } from "@/lib/seoConfig";

const AboutUs = () => {
    // Set SEO meta tags untuk halaman About Us
    useSEO({
        title: SEO_CONFIG.aboutUs.title,
        description: SEO_CONFIG.aboutUs.description,
        keywords: SEO_CONFIG.aboutUs.keywords,
        canonical: SITE_URL + '/about-us',
        ogTitle: 'Tentang Energon Dental - Distributor Alat Dokter Gigi Terpercaya',
        ogDescription: 'Pelajari misi, visi, dan komitmen Energon Dental dalam menyediakan alat dokter gigi berkualitas tinggi untuk praktisi kesehatan gigi di Indonesia',
        ogImage: SEO_CONFIG.aboutUs.ogImage,
        ogType: 'website',
        twitterCard: 'summary_large_image',
    });

    // Tambahkan structured data Organization dan BreadcrumbList
    useEffect(() => {
        const cleanupOrg = addStructuredData(generateOrganizationSchema());
        const cleanupBreadcrumb = addStructuredData(generateBreadcrumbSchema(BREADCRUMB_ITEMS.aboutUs));
        return () => {
            cleanupOrg();
            cleanupBreadcrumb();
        };
    }, []);

    const handleContactWhatsApp = () => {
        const message = "Halo, saya ingin konsultasi produk dental.";
        const whatsappUrl = `https://wa.me/6285717796330?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    const values = [
        {
            icon: ShieldCheck,
            title: "Integritas",
            description: "Menjunjung tinggi kejujuran, transparansi, dan etika dalam setiap aspek bisnis kami."
        },
        {
            icon: Award,
            title: "Kualitas",
            description: "Berkomitmen menyediakan produk dental berkualitas tinggi dan terpercaya untuk setiap pelanggan."
        },
        {
            icon: HeartHandshake,
            title: "Pelayanan Prima",
            description: "Mengutamakan kepuasan pelanggan melalui layanan cepat, responsif, dan profesional."
        },
        {
            icon: Target,
            title: "Inovasi",
            description: "Terus mengikuti perkembangan teknologi dental dan menghadirkan solusi modern."
        },
        {
            icon: BadgeCheck,
            title: "Komitmen",
            description: "Berdedikasi memberikan yang terbaik dalam mendukung pelayanan kesehatan gigi Indonesia."
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-hero" aria-labelledby="about-hero-heading">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center animate-fade-in">
                        {/* H1 - Main heading untuk halaman About */}
                        <h1 id="about-hero-heading" className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                            Tentang <span className="text-primary">Energon Dental</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Mitra terpercaya Anda dalam keunggulan layanan dental dan penyediaan alat dokter gigi berkualitas di Indonesia
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 bg-background" aria-labelledby="story-heading">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="animate-slide-in">
                            {/* H2 - Cerita kami section */}
                            <h2 id="story-heading" className="text-4xl font-bold text-foreground mb-6">
                                Cerita Kami - Distributor Alat Dokter Gigi Berpengalaman
                            </h2>
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                               Energon Bintang Mulia adalah perusahaan distributor dan supplier alat dokter gigi yang bergerak di bidang impor dan distribusi produk dental berkualitas tinggi. Kami melayani klinik dokter gigi, rumah sakit swasta maupun pemerintah, dan jaringan distributor di seluruh Indonesia. 
                            </p>
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                               Perusahaan ini didirikan oleh sosok berpengalaman lebih dari 20 tahun di industri dental, dengan pemahaman mendalam terhadap kebutuhan praktisi kesehatan gigi dan tantangan distribusi alat dental di Indonesia.
                            </p>
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                               Berangkat dari pengalaman tersebut, Energon Dental hadir dengan komitmen memberikan solusi terbaik bagi klinik dan tenaga medis. Kami menyediakan alat dan bahan dental berkualitas tinggi dengan harga kompetitif dan terjangkau. Seiring waktu, perusahaan terus berkembang dan dipercaya sebagai mitra dalam mendukung pelayanan kesehatan gigi di Indonesia.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 animate-scale-in">
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-large bg-gray-100">
                                <img
                                    src={dentalTools1}
                                    alt="Peralatan dental profesional dan berkualitas tinggi"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-large mt-8 bg-gray-100">
                                <img
                                    src={dentalTools2}
                                    alt="Koleksi lengkap alat dokter gigi dari supplier terpercaya"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-24 bg-gradient-hero" aria-labelledby="vision-heading">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center animate-fade-in">
                        {/* H2 - Vision heading */}
                        <h2 id="vision-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Visi Kami
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Menjadi mitra terpercaya klinik gigi dan rumah sakit di <span className="text-primary font-semibold">seluruh Indonesia</span> dalam menyediakan produk dental berkualitas tinggi, inovatif, dan terjangkau.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 bg-background" aria-labelledby="mission-heading">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center animate-fade-in">
                        {/* H2 - Mission heading */}
                        <h2 id="mission-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Misi Kami
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                         Menghadirkan produk dental terbaik dengan harga yang kompetitif,
                            mendukung dokter gigi melalui <span className="text-primary font-semibold">solusi praktis dan inovatif</span>,
                            memperluas distribusi agar produk mudah dijangkau di seluruh Indonesia,
                            memberikan pelayanan yang cepat, ramah, dan dapat diandalkan,
                            serta tumbuh bersama mitra dan pelanggan untuk kemajuan layanan kesehatan gigi.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-gradient-hero" aria-labelledby="values-heading">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 animate-fade-in">
                        {/* H2 - Values section heading */}
                        <h2 id="values-heading" className="text-4xl font-bold text-foreground mb-4">
                            Nilai-Nilai Perusahaan
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Prinsip utama yang menjadi pedoman kami dalam setiap langkah bisnis dan layanan kepada pelanggan
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-card p-6 rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 animate-scale-in border border-border"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    {/* H3 - Value title */}
                                    <h3 className="text-xl font-bold text-foreground mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-background" aria-labelledby="cta-heading">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center animate-fade-in">
                        {/* H2 - CTA heading */}
                        <h2 id="cta-heading" className="text-4xl font-bold text-foreground mb-6">
                            Mari Bekerja Sama Untuk Kesehatan Gigi Lebih Baik
                        </h2>
                        <p className="text-muted-foreground mb-8 text-lg">
                            Punya pertanyaan tentang produk alat dokter gigi atau layanan kami?
                            Tim profesional kami siap membantu Anda menemukan solusi terbaik untuk praktik dental Anda.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button 
                                className="bg-primary hover:bg-primary/90" 
                                onClick={handleContactWhatsApp}
                                aria-label="Hubungi kami melalui WhatsApp untuk konsultasi produk dental"
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                Hubungi Kami Sekarang
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUs;