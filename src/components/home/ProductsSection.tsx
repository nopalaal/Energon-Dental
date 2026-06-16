import { Button } from "@/components/ui/button.tsx";
import { Card } from "@/components/ui/card.tsx";
import { Link } from "react-router-dom";
import dentalTools1 from "@/assets/dental-tools-1.jpg";
import dentalTools2 from "@/assets/dental-tools-2.jpg";
import dentalTools3 from "@/assets/dental-tools-3.jpg";

const products = [
  {
    title: "Instrumen Bedah Dental",
    description: "Instrumen bedah kami menyediakan beragam alat khusus berkualitas premium untuk memenuhi kebutuhan bedah dental Anda dengan presisi tinggi.",
    image: dentalTools1,
  },
  {
    title: "Peralatan Diagnostik Canggih",
    description: "Kami menyediakan pilihan lengkap peralatan diagnostik canggih termasuk dental x-ray digital dan solusi teknologi modern untuk diagnosis akurat.",
    image: dentalTools2,
  },
  {
    title: "Handpiece Presisi Profesional",
    description: "Koleksi handpiece dental kami menghadirkan berbagai peralatan dental berkualitas tinggi untuk performa optimal dan kenyamanan praktisi.",
    image: dentalTools3,
  },
];

const ProductsSection = () => {
  return (
    <section 
      id="products" 
      className="py-24 bg-muted/30"
      aria-labelledby="products-heading"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          {/* H2 - Heading dengan keyword density natural */}
          <h2 
            id="products-heading"
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Jelajahi Beragam
            <br />
            <span className="text-primary">Peralatan Dental Berkualitas Tinggi</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Katalog lengkap alat dokter gigi profesional dari supplier terpercaya
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="overflow-hidden border-0 shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-2 animate-scale-in bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                {/* H3 - Heading untuk setiap product card */}
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                <Link to="/products">
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary/80 p-0 h-auto font-semibold"
                    aria-label={`Lihat selengkapnya tentang ${product.title}`}
                  >
                    Lihat selengkapnya →
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
