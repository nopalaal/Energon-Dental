import { Button } from "@/components/ui/button.tsx";
import { Mail } from "lucide-react";
import dentalTools1 from "@/assets/dental-tools-1.jpg";

const AboutSection = () => {
  const handleContactWhatsApp = () => {
    const message = "Halo, saya ingin konsultasi produk dental.";
    const whatsappUrl = `https://wa.me/6285717796330?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section 
      id="about" 
      className="py-24 bg-background"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            {/* H2 - About section heading */}
            <h2 
              id="about-heading"
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Berdedikasi untuk
              <br />
              <span className="text-secondary">Keunggulan Dental Indonesia</span>
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Energon Dental berada di garis depan penyedia alat dental, menghadirkan
              solusi terbaik yang mendorong keberhasilan praktik Anda. Sebagai supplier dan distributor alat dokter gigi terpercaya, kami menyediakan dental unit, autoclave sterilizer, handpiece, dental x-ray, dan berbagai peralatan dental berkualitas tinggi dengan komitmen
              pada kepuasan dokter gigi, inovasi, dan pemanfaatan teknologi terkini.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Kami percaya bahwa keberhasilan ditentukan oleh kombinasi peralatan
              yang tepat dan teknik yang benar. Rasakan perjalanan praktik kedokteran
              gigi yang transformatif, selangkah demi selangkah. Dedikasi kami adalah
              meningkatkan layanan dental melalui perpaduan alat modern dan metode
              yang telah terbukti untuk hasil yang lebih baik.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={handleContactWhatsApp}
              aria-label="Hubungi kami untuk konsultasi lengkap tentang produk dental"
            >
              <Mail className="w-5 h-5 mr-2" />
              Konsultasi Gratis
            </Button>
          </div>  

          <div className="animate-scale-in">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-large bg-gray-100">
                <img
                  src={dentalTools1}
                  alt="Peralatan dental profesional berkualitas tinggi dari Energon Dental"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-primary rounded-2xl opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
