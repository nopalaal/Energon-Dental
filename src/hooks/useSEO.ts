/**
 * SEO Hook untuk mengelola meta tags dan structured data
 * Digunakan untuk menetapkan title, description, Open Graph, dan Twitter Card
 * di setiap halaman aplikasi React
 */

import { useEffect } from 'react';

export interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  keywords?: string;
  author?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

/**
 * Hook untuk mengatur SEO meta tags pada halaman
 * @param config - Konfigurasi SEO untuk halaman
 */
export const useSEO = (config: SEOConfig) => {
  useEffect(() => {
    // Set title tag
    if (config.title) {
      document.title = config.title;
      
      const ogTitleTag = document.querySelector('meta[property="og:title"]');
      if (ogTitleTag) {
        ogTitleTag.setAttribute('content', config.ogTitle || config.title);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:title');
        meta.setAttribute('content', config.ogTitle || config.title);
        document.head.appendChild(meta);
      }
    }

    // Set description
    if (config.description) {
      let descTag = document.querySelector('meta[name="description"]');
      if (descTag) {
        descTag.setAttribute('content', config.description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = config.description;
        document.head.appendChild(meta);
      }

      const ogDescTag = document.querySelector('meta[property="og:description"]');
      if (ogDescTag) {
        ogDescTag.setAttribute('content', config.ogDescription || config.description);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:description');
        meta.setAttribute('content', config.ogDescription || config.description);
        document.head.appendChild(meta);
      }
    }

    // Set canonical URL
    if (config.canonical) {
      let canonicalTag = document.querySelector('link[rel="canonical"]');
      if (canonicalTag) {
        canonicalTag.setAttribute('href', config.canonical);
      } else {
        const link = document.createElement('link');
        link.rel = 'canonical';
        link.href = config.canonical;
        document.head.appendChild(link);
      }

      const ogUrlTag = document.querySelector('meta[property="og:url"]');
      if (ogUrlTag) {
        ogUrlTag.setAttribute('content', config.canonical);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:url');
        meta.setAttribute('content', config.canonical);
        document.head.appendChild(meta);
      }
    }

    // Set Open Graph image
    if (config.ogImage) {
      let ogImageTag = document.querySelector('meta[property="og:image"]');
      if (ogImageTag) {
        ogImageTag.setAttribute('content', config.ogImage);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:image');
        meta.setAttribute('content', config.ogImage);
        document.head.appendChild(meta);
      }
    }

    // Set Open Graph type
    if (config.ogType) {
      let ogTypeTag = document.querySelector('meta[property="og:type"]');
      if (ogTypeTag) {
        ogTypeTag.setAttribute('content', config.ogType);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:type');
        meta.setAttribute('content', config.ogType);
        document.head.appendChild(meta);
      }
    }

    // Set Twitter Card
    if (config.twitterCard) {
      let twitterCardTag = document.querySelector('meta[name="twitter:card"]');
      if (twitterCardTag) {
        twitterCardTag.setAttribute('content', config.twitterCard);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'twitter:card';
        meta.content = config.twitterCard;
        document.head.appendChild(meta);
      }
    }

    if (config.twitterTitle) {
      let twitterTitleTag = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitleTag) {
        twitterTitleTag.setAttribute('content', config.twitterTitle);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'twitter:title';
        meta.content = config.twitterTitle;
        document.head.appendChild(meta);
      }
    }

    if (config.twitterDescription) {
      let twitterDescTag = document.querySelector('meta[name="twitter:description"]');
      if (twitterDescTag) {
        twitterDescTag.setAttribute('content', config.twitterDescription);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'twitter:description';
        meta.content = config.twitterDescription;
        document.head.appendChild(meta);
      }
    }

    if (config.twitterImage) {
      let twitterImageTag = document.querySelector('meta[name="twitter:image"]');
      if (twitterImageTag) {
        twitterImageTag.setAttribute('content', config.twitterImage);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'twitter:image';
        meta.content = config.twitterImage;
        document.head.appendChild(meta);
      }
    }

    // Set keywords
    if (config.keywords) {
      let keywordsTag = document.querySelector('meta[name="keywords"]');
      if (keywordsTag) {
        keywordsTag.setAttribute('content', config.keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = config.keywords;
        document.head.appendChild(meta);
      }
    }

    // Set noindex/nofollow
    if (config.noindex || config.nofollow) {
      const robotsContent = [
        config.noindex ? 'noindex' : 'index',
        config.nofollow ? 'nofollow' : 'follow'
      ].join(', ');
      
      let robotsTag = document.querySelector('meta[name="robots"]');
      if (robotsTag) {
        robotsTag.setAttribute('content', robotsContent);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'robots';
        meta.content = robotsContent;
        document.head.appendChild(meta);
      }
    }

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [config]);
};

/**
 * Helper untuk menambahkan structured data JSON-LD
 * @param data - Objek structured data
 */
export const addStructuredData = (data: object) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);

  return () => {
    document.head.removeChild(script);
  };
};

/**
 * Helper untuk mendapatkan URL saat ini (digunakan untuk canonical URL)
 */
export const getCurrentUrl = (): string => {
  return window.location.origin + window.location.pathname;
};

/**
 * Helper untuk mendapatkan image URL dengan fallback
 */
export const getImageUrl = (path: string | undefined, fallback = '/logo.png'): string => {
  if (!path) return fallback;
  if (path.startsWith('http')) return path;
  return path;
};
