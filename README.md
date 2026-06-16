
## Daftar Isi

1. [Gambaran Umum Proyek](#1-gambaran-umum-proyek)
2. [Stack Teknologi](#2-stack-teknologi)
3. [Struktur Folder](#3-struktur-folder)
4. [Routing & Halaman](#4-routing--halaman)
5. [Arsitektur SEO](#5-arsitektur-seo)
6. [Komponen Halaman (Per-Page)](#6-komponen-halaman-per-page)
7. [Database & Data Produk](#7-database--data-produk)
8. [File SEO Statis](#8-file-seo-statis)
9. [Infrastruktur & Deployment](#9-infrastruktur--deployment)
10. [Ringkasan Aset](#10-ringkasan-aset)

---

## 1. Gambaran Umum Proyek

**Nama Website:** Energon Dental  
**Domain:** `https://energondental.com`  
**Jenis:** Website Company Profile + Katalog Produk B2B  
**Bahasa:** Indonesia (`lang="id"`)  

---

## 2. Stack Teknologi

| Komponen | Teknologi |
|---|---|
| Framework UI | React 18 (TypeScript) |
| Build Tool | Vite 5 + SWC |
| Styling | Tailwind CSS 3 |
| Komponen UI | shadcn/ui (Radix UI) |
| Routing | React Router DOM v6 |
| Backend/Database | Supabase (PostgreSQL) |
| Auth | Supabase Auth |
| State Management | TanStack Query (React Query v5) |
| Hosting | Vercel |
| CI/CD | GitHub Actions |


---

## 3. Struktur Folder

```
Energon-Dental-main/
├── public/                      # File statis yang langsung diakses browser
│   ├── robots.txt               # Instruksi untuk crawler
│   ├── sitemap.xml              # Peta halaman untuk search engine
│   ├── favicon.ico              # Icon browser
│   ├── barang1.jpeg             # Gambar produk (diakses via URL publik)
│   └── placeholder.svg          # Placeholder gambar produk
│
├── src/
│   ├── main.tsx                 # Entry point aplikasi React
│   ├── App.tsx                  # Definisi routing utama
│   ├── index.css                # CSS global + variabel Tailwind
│   │
│   ├── pages/                   # Komponen halaman (1 file = 1 URL)
│   │   ├── Index.tsx            # Halaman Beranda (/)
│   │   ├── Products.tsx         # Halaman Produk (/products)
│   │   ├── AboutUs.tsx          # Halaman Tentang Kami (/about-us)
│   │   ├── Events.tsx           # Halaman Event (/events)
│   │   ├── AdminLogin.tsx       # Login Admin (/admin/login)
│   │   ├── AdminDashboard.tsx   # Dashboard Admin (/admin)
│   │   ├── CreateProductsNew.tsx # Form buat produk baru (modal di admin)
│   │   └── NotFound.tsx         # Halaman 404
│   │
│   ├── components/
│   │   ├── Navbar.tsx           # Navigasi atas (global)
│   │   ├── Footer.tsx           # Footer (global)
│   │   ├── home/                # Komponen section di halaman beranda
│   │   │   ├── Hero.tsx         # Section hero (banner utama)
│   │   │   ├── ProductsSection.tsx  # Preview 3 kategori produk
│   │   │   ├── AboutSection.tsx     # Pengenalan perusahaan
│   │   │   ├── MissionSection.tsx   # Misi perusahaan
│   │   │   └── FeaturesSection.tsx  # Keunggulan layanan
│   │   ├── admin/               # Komponen khusus panel admin
│   │   │   ├── ManageBrands.tsx
│   │   │   ├── ManageCategories.tsx
│   │   │   └── ManageBrandLogos.tsx
│   │   └── ui/                  # Komponen shadcn/ui (library, jangan diubah)
│   │
│   ├── hooks/                   # Custom React hooks
│   │   ├── useSEO.ts            # Hook untuk set meta tags per halaman
│   │   ├── useProducts.ts       # Hook untuk fetch data produk dari Supabase
│   │   ├── useAuth.ts           # Hook untuk autentikasi admin
│   │   └── use-mobile.tsx       # Hook deteksi mobile
│   │
│   ├── lib/
│   │   ├── seoConfig.ts         # Konfigurasi SEO terpusat (title, desc, schema)
│   │   ├── supabase.ts          # Inisialisasi Supabase client
│   │   └── utils.ts             # Utility function (cn untuk Tailwind)
│   │
│   ├── data/
│   │   └── products.json        # Data produk fallback (statis, tidak dipakai di production)
│   │
│   └── assets/                  # Gambar yang di-bundle oleh Vite
│       ├── hero.jpg             # Gambar hero section
│       ├── dental-tools-1.jpg   # Gambar kategori produk
│       ├── dental-tools-2.jpg
│       ├── dental-tools-3.jpg
│       └── logo.png             # Logo perusahaan
│
├── index.html                   # Root HTML (berisi meta tags global & JSON-LD)
├── vite.config.ts               # Konfigurasi Vite
├── tailwind.config.ts           # Konfigurasi Tailwind CSS
├── package.json                 # Dependensi npm
├── vercel.json                  # Konfigurasi deployment Vercel
└── .env.example                 # Contoh environment variable yang dibutuhkan
```

---

## 4. Routing & Halaman

Routing diatur di `src/App.tsx` menggunakan React Router DOM v6.

| URL Path | Komponen | Deskripsi | Diindex? |
|---|---|---|---|
| `/` | `pages/Index.tsx` | Halaman beranda | ✅ Ya |
| `/products` | `pages/Products.tsx` | Katalog produk lengkap | ✅ Ya |
| `/about-us` | `pages/AboutUs.tsx` | Profil & sejarah perusahaan | ✅ Ya |
| `/events` | `pages/Events.tsx` | Event & promosi | ✅ Ya |
| `/admin/login` | `pages/AdminLogin.tsx` | Login admin | ❌ Tidak (diblokir robots.txt) |
| `/admin` | `pages/AdminDashboard.tsx` | Panel admin (protected) | ❌ Tidak (diblokir robots.txt) |
| `*` (lainnya) | `pages/NotFound.tsx` | Halaman 404 | ❌ Tidak |

**Legacy Redirect (backward compatibility):**
- `/AdminLogin` → redirect ke `/admin/login`
- `/AdminDashboard` → redirect ke `/admin`
- `/adminDashboard` → redirect ke `/admin`

**Konfigurasi SPA di Vercel (`vercel.json`):**
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
```
Semua request diarahkan ke `index.html` agar React Router bisa menangani routing di sisi client.

---

## 5. Arsitektur SEO

### 5.1 File Konfigurasi Terpusat: `src/lib/seoConfig.ts`

Seluruh konfigurasi SEO dikelola di satu file ini. Ini adalah **titik utama** yang perlu diubah untuk memperbarui meta tags, target keywords, dan structured data.

**Konstanta utama:**
```
SITE_URL     = 'https://energondental.com'
SITE_NAME    = 'Energon Dental'
```

**Target Keywords yang sudah didefinisikan:**

| Key | Keyword |
|---|---|
| `main` | jual alat dokter gigi |
| `supplier` | supplier alat dokter gigi |
| `distributor` | distributor alat dokter gigi Indonesia |
| `dentalUnit` | dental unit dokter gigi |
| `autoclave` | autoclave sterilizer dokter gigi |
| `scaler` | scaler ultrasonic gigi |
| `xray` | dental x ray digital |
| `handpiece` | handpiece dokter gigi |
| `tools` | alat praktik dokter gigi |
| `equipment` | peralatan dental profesional |

**Konfigurasi SEO per halaman (`SEO_CONFIG`):**

| Halaman | Title | Deskripsi |
|---|---|---|
| Home | Energon Dental - Distributor Alat Dokter Gigi Berkualitas di Indonesia | Fokus keyword distribusi dan supplai |
| Products | Produk Alat Dokter Gigi - Katalog Lengkap \| Energon Dental | Fokus katalog produk |
| About Us | Tentang Energon Dental - Distributor Alat Dokter Gigi Terpercaya | Fokus brand trust |
| Events | Event dan Promo - Energon Dental | Fokus promosi |

### 5.2 Custom SEO Hook: `src/hooks/useSEO.ts`

Karena ini SPA, meta tags dikelola via JavaScript menggunakan custom hook `useSEO`. Hook ini dipanggil di setiap komponen halaman dan secara dinamis meng-update elemen `<head>` saat navigasi antar halaman.

**Yang dikelola hook ini:**
- `document.title` (tag `<title>`)
- `meta[name="description"]`
- `meta[name="keywords"]`
- `meta[property="og:title"]`
- `meta[property="og:description"]`
- `meta[property="og:image"]`
- `meta[property="og:type"]`
- `meta[property="og:url"]`
- `link[rel="canonical"]`
- `meta[name="twitter:card/title/description/image"]`
- `meta[name="robots"]` (noindex/nofollow per halaman)

**Interface konfigurasi `useSEO`:**
```typescript
interface SEOConfig {
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
```

### 5.3 Structured Data (JSON-LD)

Structured data diimplementasikan di dua tempat:

**a) `index.html` (Global / Statis)**
Berisi schema `Organization` yang selalu ada di semua halaman:
```json
{
  "@type": "Organization",
  "name": "Energon Dental",
  "url": "https://energondental.com",
  "telephone": "+6285717796330",
  "email": "info@energondental.com",
  "address": { "addressCountry": "ID" },
  "sameAs": ["facebook.com/energondental", "instagram.com/energondental"]
}
```

**b) `src/lib/seoConfig.ts` (Per Kebutuhan)**

Generator function yang tersedia namun perlu diintegrasikan ke masing-masing halaman:

| Function | Schema Type | Digunakan Di |
|---|---|---|
| `generateOrganizationSchema()` | `Organization` | `pages/Index.tsx` ✅ |
| `generateProductSchema()` | `Product` | Tersedia, belum terintegrasi penuh |
| `generateLocalBusinessSchema()` | `LocalBusiness` | Tersedia, belum digunakan |
| `generateBreadcrumbSchema()` | `BreadcrumbList` | Tersedia, belum digunakan |
| `generateFAQSchema()` | `FAQPage` | Tersedia, belum digunakan |

### 5.4 Meta Tags di `index.html` (Base/Fallback)

File `index.html` sudah memiliki meta tags dasar yang berfungsi sebagai fallback sebelum React dimuat:

- ✅ `<html lang="id">`
- ✅ `<meta charset="UTF-8">`
- ✅ `<meta name="viewport">`
- ✅ `<meta name="robots" content="index, follow">`
- ✅ `<meta name="description">` (panjang ~300 karakter)
- ✅ `<meta name="keywords">` (8+ keywords)
- ✅ Open Graph tags lengkap
- ✅ Twitter Card tags
- ✅ `<link rel="canonical">`
- ✅ `<link rel="preconnect">` ke Google Fonts
- ✅ Schema JSON-LD Organization
- ⚠️ `og:image` mengarah ke `/og-image.jpg` yang **belum ada di folder `public/`**

---

## 6. Komponen Halaman (Per-Page)

### 6.1 Halaman Beranda (`/`) — `pages/Index.tsx`

**Susunan komponen dari atas ke bawah:**

```
<Navbar />
<Hero />             → H1 dengan primary keyword
<ProductsSection />  → H2 + 3 card produk dengan H3
<AboutSection />     → Pengenalan perusahaan
<MissionSection />   → Misi & nilai perusahaan
<FeaturesSection />  → Keunggulan layanan
<Footer />
```

**SEO Implementation:**
- `useSEO()` dipanggil dengan config dari `SEO_CONFIG.home`
- `addStructuredData(generateOrganizationSchema())` dipanggil via `useEffect`
- H1 di `Hero.tsx`: *"Partner Terpercaya untuk Solusi Produk Dental Berkualitas"*
- H2 di `ProductsSection.tsx`: *"Jelajahi Beragam Peralatan Dental Berkualitas Tinggi"*
- Canonical URL: `https://energondental.com/`

**CTA utama:** Tombol WhatsApp di Hero dan Navbar

---

### 6.2 Halaman Produk (`/products`) — `pages/Products.tsx`

Halaman terbesar (42KB) dengan fitur:
- Filter produk berdasarkan **brand** dan **kategori**
- Filter melalui **URL query parameter** (`?brand=Westlake`, `?search=autoclave`)
- Data diambil dari **Supabase** secara real-time
- Tampilan grid produk dengan gambar, nama, deskripsi, harga, dan diskon

**SEO Implementation:**
- Title: *"Produk Alat Dokter Gigi - Katalog Lengkap | Energon Dental"*
- Mendukung deep-linking via URL params (berguna untuk SEO kategori)

---

### 6.3 Halaman Tentang Kami (`/about-us`) — `pages/AboutUs.tsx`

Halaman profil perusahaan (12KB). Berisi:
- Sejarah dan latar belakang perusahaan
- Tim/manajemen (jika ada)
- Nilai dan komitmen perusahaan

**SEO Implementation:**
- Title: *"Tentang Energon Dental - Distributor Alat Dokter Gigi Terpercaya"*
- Breadcrumb: Beranda > Tentang Kami (konfigurasi tersedia di `seoConfig.ts`, belum dirender)

---

### 6.4 Halaman Event (`/events`) — `pages/Events.tsx`

Halaman event dan promosi (8KB).

**SEO Implementation:**
- Title: *"Event dan Promo - Energon Dental"*

---

### 6.5 Komponen Global

**`components/Navbar.tsx`:**
- Fixed position di atas (z-index 50)
- Menggunakan `aria-label` pada semua link navigasi
- Menu mobile (hamburger) dengan animasi
- Tombol **"Hubungi Kami"** yang langsung membuka WhatsApp

**`components/Footer.tsx`:**
- Struktur 4 kolom: Company Info, Navigasi, Kategori Produk, Kontak
- Link kategori produk menggunakan URL dengan query string (`/products?search=dental unit`)
- Menggunakan `role="contentinfo"` untuk aksesibilitas
- Kontak lengkap: email, WhatsApp, alamat fisik

---

## 7. Database & Data Produk

### 7.1 Supabase Database (`src/lib/supabase.ts`)

Website menggunakan **Supabase** sebagai backend. Kredensial dikonfigurasi via environment variables:

```
VITE_SUPABASE_URL=<url-supabase>
VITE_SUPABASE_ANON_KEY=<anon-key>
```

### 7.2 Skema Database

Berdasarkan query di `useProducts.ts`, tabel yang ada:

**Tabel `products`:**
| Kolom | Tipe | Keterangan |
|---|---|---|
| `id` | number | Primary key |
| `name` | string | Nama produk |
| `description` | string | Deskripsi produk |
| `price` | string/number | Harga (atau "Contact for pricing") |
| `discount` | number | Persentase diskon |
| `image` | string | URL gambar produk |
| `stock` | number | Stok tersedia |

**Tabel `brands`** (relasi ke `products`):
- `name` — nama brand (contoh: Westlake, Nanofill, MLG)

**Tabel `categories`** (relasi ke `products`):
- `name` — nama kategori
- `slug` — slug untuk URL

**Tabel `config`:**
- `id = "products"` — menyimpan `brandLogos` (mapping brand → URL logo)

### 7.3 Data Statis Fallback (`src/data/products.json`)

File ini berisi data produk statis (15 produk, 3 brand: Westlake, Nanofill, MLG). Digunakan sebagai referensi, **bukan data production utama**.

**Brand dan Produk yang Terdaftar:**

| Brand | Produk |
|---|---|
| Westlake | Digital X-Ray System, Intraoral Camera, Dental Microscope, Dental Unit Chair, Ultrasonic Scaler, Composite Curing Light |
| Nanofill | Autoclave Sterilizer, Ultrasonic Cleaner, Surgical Instrument Set, Restorative Kit |
| MLG | MLG Handpiece, MLG Suction System, MLG Curing Lamp, MLG Sterilization Tray, MLG Diagnostic Kit |

---

## 8. File SEO Statis

### 8.1 `public/robots.txt`

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /*.json$
Disallow: /api/

User-agent: AhrefsBot
Disallow: /           ← Sepenuhnya diblokir

User-agent: SemrushBot
Crawl-delay: 10

User-agent: MJ12bot
Crawl-delay: 10

Sitemap: https://energondental.com/sitemap.xml
```

### 8.2 `public/sitemap.xml`

Sitemap sudah mencakup URL berikut dengan prioritas:

| URL | Prioritas | Frekuensi Update |
|---|---|---|
| `/` | 1.0 | Weekly |
| `/products` | 0.9 | Daily |
| `/about-us` | 0.7 | Monthly |
| `/events` | 0.6 | Weekly |
| `/products?brand=Westlake` | 0.8 | Weekly |
| `/products?brand=Nanofill` | 0.8 | Weekly |
| `/products?brand=MLG` | 0.8 | Weekly |
| `/products?search=Digital X-Ray System` | 0.7 | Monthly |
| `/products?search=Autoclave Sterilizer` | 0.7 | Monthly |
| `/products?search=Ultrasonic Scaler` | 0.7 | Monthly |
| `/products?search=Dental Unit Chair` | 0.7 | Monthly |
| `/products?search=Handpiece` | 0.7 | Monthly |

Sitemap juga menggunakan **Image Sitemap extension** (`xmlns:image`) untuk beberapa URL produk.

---

## 9. Infrastruktur & Deployment

### Hosting: Vercel

File `vercel.json` mengonfigurasi rewrite agar semua URL diarahkan ke `index.html` (standard untuk SPA React):
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
```

### CI/CD: GitHub Actions

Terdapat dua workflow di `.github/workflows/`:

1. **`keepalive.yml`** — Menjaga repository tetap aktif
2. **`qodana_code_quality.yml`** — Analisis kualitas kode menggunakan JetBrains Qodana

### Environment Variables yang Dibutuhkan

```env
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJxxx...
```

---

## 10. Ringkasan Aset

### Gambar di `public/` (dapat diakses langsung via URL)

| File | Digunakan Di | Keterangan |
|---|---|---|
| `barang1.jpeg` | Sitemap image, produk | Foto produk |
| `placeholder.svg` | Placeholder produk | Gambar default |
| `favicon.ico` | Browser tab | Icon website |
| `robots.txt` | Crawler | Panduan robot |
| `sitemap.xml` | Search engine | Peta halaman |

### Gambar di `src/assets/` (di-bundle oleh Vite, URL berubah setelah build)

| File | Digunakan Di |
|---|---|
| `hero.jpg` | `Hero.tsx` — background hero section |
| `dental-tools-1.jpg` | `ProductsSection.tsx` — card kategori 1 |
| `dental-tools-2.jpg` | `ProductsSection.tsx` — card kategori 2 |
| `dental-tools-3.jpg` | `ProductsSection.tsx` — card kategori 3 |
| `logo.png` | `Navbar.tsx`, `Footer.tsx` |

> **Catatan:** Gambar di `src/assets/` memiliki hash di nama file setelah build (misal: `logo-abc123.png`). Untuk gambar yang perlu di-referensikan di sitemap atau OG image, letakkan di folder `public/` agar URL-nya statis.

---

###  Cara Mengubah Konten SEO

Untuk memperbarui title, description, atau keyword halaman:

**Edit file:** `src/lib/seoConfig.ts`

```typescript
export const SEO_CONFIG = {
  home: {
    title: 'UBAH TITLE DI SINI',
    description: 'UBAH DESCRIPTION DI SINI',
    keywords: 'keyword1, keyword2, ...',
    ogImage: 'https://energondental.com/og-home.jpg',
  },
  // ...
};
```

Perubahan pada file ini akan otomatis berlaku di semua halaman yang menggunakan config tersebut.

---
