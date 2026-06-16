import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { useSEO, addStructuredData } from '@/hooks/useSEO';
import { SEO_CONFIG, SITE_URL, generateBreadcrumbSchema, BREADCRUMB_ITEMS } from '@/lib/seoConfig';

const Events = () => {
    // Set SEO meta tags untuk halaman Events
    useSEO({
        title: SEO_CONFIG.events.title,
        description: SEO_CONFIG.events.description,
        keywords: SEO_CONFIG.events.keywords,
        canonical: SITE_URL + '/events',
        ogTitle: 'Event dan Promo - Energon Dental',
        ogDescription: 'Ikuti event, webinar, dan promosi spesial dari Energon Dental',
        ogImage: SEO_CONFIG.events.ogImage,
        ogType: 'website',
        twitterCard: 'summary_large_image',
    });

    // Tambahkan structured data BreadcrumbList
    useEffect(() => {
        const cleanupBreadcrumb = addStructuredData(generateBreadcrumbSchema(BREADCRUMB_ITEMS.events));
        return cleanupBreadcrumb;
    }, []);

    useEffect(() => {
        const existing = document.querySelector<HTMLScriptElement>('script[src^="https://www.instagram.com/embed.js"]');
        const script = existing ?? document.createElement('script');

        if (!existing) {
            script.src = 'https://www.instagram.com/embed.js';
            script.async = true;
            document.body.appendChild(script);
        }

        const handleLoad = () => {
            window.instgrm?.Embeds?.process();
        };

        if (!existing) {
            script.addEventListener('load', handleLoad);
        } else {
            handleLoad();
        }

        return () => {
            if (!existing) {
                script.removeEventListener('load', handleLoad);
            }
        };
    }, []);

    const events = [
        {
            id: 1,
            title: "Foril 2025",
            date: "15 Maret 2025",
            description: "Forum internasional untuk profesional kesehatan gigi dan perolehan produk dental terbaru",
            instagramUrl: "https://www.instagram.com/reel/DOGw9kmEm3Z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
        {
            id: 2,
            title: "IDS 2025",
            date: "20 April 2025",
            description: "International Dental Show 2025 - Pameran alat dokter gigi terbesar di kawasan Asia",
            instagramUrl: "https://www.instagram.com/reel/DMNSLAbScYh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
        {
            id: 3,
            title: "Lokakarya Kesehatan Gigi",
            date: "10 Mei 2025",
            description: "Workshop dan pelatihan penggunaan alat dental modern untuk praktisi kesehatan gigi",
            instagramUrl: "https://www.instagram.com/reel/DPdkT-FD5BW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="pt-24 pb-16" aria-labelledby="events-heading">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-16">
                        {/* H1 - Main heading untuk Events page */}
                        <h1 
                            id="events-heading"
                            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                        >
                            Event dan Promosi Energon Dental
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Tetap update dengan event, lokakarya, pameran, dan promosi spesial terbaru dari Energon Dental untuk pelanggan setia
                        </p>
                    </div>

                    {/* Events Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {events.map((event) => (
                            <Card 
                                key={event.id} 
                                className="overflow-hidden hover:shadow-lg transition-shadow"
                                itemScope
                                itemType="https://schema.org/Event"
                            >
                                <CardContent className="p-6">
                                    <div className="mb-4">
                                        {/* H2 - Event title */}
                                        <h2 
                                            className="text-xl font-semibold mb-2"
                                            itemProp="name"
                                        >
                                            {event.title}
                                        </h2>
                                        <p 
                                            className="text-sm text-muted-foreground mb-4"
                                            itemProp="startDate"
                                        >
                                            📅 {event.date}
                                        </p>
                                        <p 
                                            className="text-sm text-muted-foreground mb-4"
                                            itemProp="description"
                                        >
                                            {event.description}
                                        </p>
                                    </div>

                                    {/* Instagram Embed */}
                                    <div className="instagram-embed-wrapper">
                                        <blockquote
                                            className="instagram-media"
                                            data-instgrm-captioned
                                            data-instgrm-permalink={event.instagramUrl}
                                            data-instgrm-version="14"
                                            style={{
                                                background: '#FFF',
                                                border: 0,
                                                borderRadius: '3px',
                                                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                                                margin: '1px',
                                                maxWidth: '540px',
                                                minWidth: '326px',
                                                padding: 0,
                                                width: '100%'
                                            }}
                                        >
                                            <div style={{ padding: '16px' }}>
                                                <a
                                                    href={event.instagramUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`Lihat postingan ${event.title} di Instagram`}
                                                    style={{
                                                        background: '#FFFFFF',
                                                        lineHeight: 0,
                                                        padding: '0 0',
                                                        textAlign: 'center',
                                                        textDecoration: 'none',
                                                        width: '100%'
                                                    }}
                                                >
                                                    Lihat postingan ini di Instagram
                                                </a>
                                            </div>
                                        </blockquote>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Events;