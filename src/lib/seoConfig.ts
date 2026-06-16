/**
 * SEO Constants dan Konfigurasi
 * Digunakan untuk menyimpan informasi SEO yang konsisten di seluruh aplikasi
 */

export const SITE_URL = 'https://energondental.com';
export const SITE_NAME = 'Energon Dental';
export const WHATSAPP_NUMBER = '6285717796330';
export const COMPANY_EMAIL = 'info@energondental.com';

export const DEFAULT_KEYWORDS = 'jual alat dokter gigi, supplier alat dokter gigi, distributor alat dokter gigi Indonesia, dental unit, autoclave dokter gigi';

export const TARGET_KEYWORDS = {
  main: 'jual alat dokter gigi',
  supplier: 'supplier alat dokter gigi',
  distributor: 'distributor alat dokter gigi Indonesia',
  dentalUnit: 'dental unit dokter gigi',
  autoclave: 'autoclave sterilizer dokter gigi',
  scaler: 'scaler ultrasonic gigi',
  xray: 'dental x ray digital',
  handpiece: 'handpiece dokter gigi',
  tools: 'alat praktik dokter gigi',
  equipment: 'peralatan dental profesional',
};

export const SEO_CONFIG = {
  home: {
    title: 'Energon Dental - Distributor Alat Dokter Gigi Berkualitas di Indonesia',
    description: 'Energon Dental adalah supplier dan distributor terpercaya alat dokter gigi berkualitas tinggi dengan harga kompetitif. Melayani klinik gigi, rumah sakit, dan distributor di seluruh Indonesia.',
    keywords: `${DEFAULT_KEYWORDS}, dental equipment berkualitas, bahan dental profesional`,
    ogImage: `${SITE_URL}/og-home.jpg`,
  },
  products: {
    title: 'Produk Alat Dokter Gigi - Katalog Lengkap | Energon Dental',
    description: 'Jelajahi katalog lengkap alat dokter gigi berkualitas tinggi dari Energon Dental. Dari dental unit, autoclave, handpiece, hingga berbagai peralatan dental profesional dengan harga kompetitif.',
    keywords: `${DEFAULT_KEYWORDS}, katalog produk dental, peralatan gigi lengkap`,
    ogImage: `${SITE_URL}/og-products.jpg`,
  },
  aboutUs: {
    title: 'Tentang Energon Dental - Distributor Alat Dokter Gigi Terpercaya',
    description: 'Pelajari lebih lanjut tentang Energon Dental, misi, visi, dan komitmen kami dalam menyediakan alat dokter gigi berkualitas tinggi untuk praktisi kesehatan gigi di Indonesia.',
    keywords: `${DEFAULT_KEYWORDS}, tentang energon dental, distributor dental terpercaya`,
    ogImage: `${SITE_URL}/og-about.jpg`,
  },
  events: {
    title: 'Event dan Promo - Energon Dental',
    description: 'Ikuti event, webinar, dan promosi spesial dari Energon Dental untuk pelanggan setia. Dapatkan informasi terbaru tentang produk dan penawaran eksklusif.',
    keywords: `${DEFAULT_KEYWORDS}, event dental, promo alat dokter gigi`,
    ogImage: `${SITE_URL}/og-events.jpg`,
  },
};

export const BREADCRUMB_ITEMS = {
  home: [
    { label: 'Beranda', url: '/' }
  ],
  products: [
    { label: 'Beranda', url: '/' },
    { label: 'Produk', url: '/products' }
  ],
  aboutUs: [
    { label: 'Beranda', url: '/' },
    { label: 'Tentang Kami', url: '/about-us' }
  ],
  events: [
    { label: 'Beranda', url: '/' },
    { label: 'Event', url: '/events' }
  ],
};

/**
 * Generate structured data untuk Organization
 */
export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': SITE_NAME,
  'url': SITE_URL,
  'logo': `${SITE_URL}/logo.png`,
  'description': 'Distributor dan supplier alat dokter gigi berkualitas tinggi di Indonesia',
  'telephone': `+${WHATSAPP_NUMBER}`,
  'email': COMPANY_EMAIL,
  'address': {
    '@type': 'PostalAddress',
    'addressCountry': 'ID',
    'addressLocality': 'Indonesia'
  },
  'sameAs': [
    'https://www.facebook.com/energondental',
    'https://www.instagram.com/energondental'
  ],
  'contactPoint': {
    '@type': 'ContactPoint',
    'contactType': 'Customer Support',
    'telephone': `+${WHATSAPP_NUMBER}`,
    'email': COMPANY_EMAIL
  }
});

/**
 * Generate structured data untuk Product
 */
export const generateProductSchema = (product: {
  id: number;
  name: string;
  description: string;
  price?: string | number;
  image?: string;
  brand?: string;
  category?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  'name': product.name,
  'description': product.description,
  'image': product.image || `${SITE_URL}/product-default.jpg`,
  'brand': {
    '@type': 'Brand',
    'name': product.brand || SITE_NAME
  },
  'category': product.category || 'Alat Dokter Gigi',
  'offers': {
    '@type': 'Offer',
    'url': `${SITE_URL}/products`,
    'priceCurrency': 'IDR',
    'price': product.price ? String(product.price) : 'Contact for pricing',
    'availability': 'https://schema.org/InStock',
    'seller': {
      '@type': 'Organization',
      'name': SITE_NAME,
      'url': SITE_URL
    }
  }
});

/**
 * Generate structured data untuk LocalBusiness
 */
export const generateLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': SITE_NAME,
  'url': SITE_URL,
  'telephone': `+${WHATSAPP_NUMBER}`,
  'email': COMPANY_EMAIL,
  'address': {
    '@type': 'PostalAddress',
    'addressCountry': 'ID',
    'addressLocality': 'Indonesia'
  },
  'serviceArea': {
    '@type': 'Country',
    'name': 'Indonesia'
  },
  'image': `${SITE_URL}/logo.png`,
  'description': 'Distributor alat dokter gigi berkualitas tinggi dan harga kompetitif'
});

/**
 * Generate structured data untuk BreadcrumbList
 */
export const generateBreadcrumbSchema = (items: Array<{ label: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': items.map((item, index) => ({
    '@type': 'ListItem',
    'position': index + 1,
    'name': item.label,
    'item': `${SITE_URL}${item.url}`
  }))
});

/**
 * Generate structured data untuk FAQPage
 */
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faqs.map(faq => ({
    '@type': 'Question',
    'name': faq.question,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': faq.answer
    }
  }))
});
