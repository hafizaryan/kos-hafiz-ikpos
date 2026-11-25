# Kos Hafiz Ikpos (khi)

Website katalog dan promosi "Kos dan Kontrakan Hafiz Ikpos", kos dan kontrakan di Sibuhuan, Padang Lawas. Website statis satu halaman ini menampilkan informasi kamar, fasilitas, harga, galeri foto, dan kontak pemesanan melalui WhatsApp, dioptimalkan untuk mesin pencari dengan prerender statis.

## Fitur

- Katalog kamar kos dan kontrakan beserta fasilitasnya (antara lain AC, WiFi, kamar mandi dalam, dan parkir) dan informasi harga
- Galeri foto dengan lightbox (navigasi keyboard didukung)
- Bagian FAQ dengan accordion interaktif
- Tombol kontak dan pemesanan melalui WhatsApp
- Menu navigasi mobile (burger menu) dan animasi reveal saat scroll berbasis IntersectionObserver
- SEO: HTML diprerender saat build (vite-ssg), `sitemap.xml`, `robots.txt`, JSON-LD, dan meta title/description

## Teknologi

- Vue 3 (Composition API, `<script setup>`)
- Vite dan vite-ssg (prerender statis)
- CSS biasa (`src/assets/styles.css`) tanpa framework CSS

## Struktur Proyek

```
khi/
├── index.html                 # Shell Vite: meta, JSON-LD, font, #app
├── vite.config.js
├── package.json
├── netlify.toml
├── src/
│   ├── main.js
│   ├── App.vue
│   ├── assets/
│   │   ├── theme.css          # Token warna (dari tokens/kos-hafiz.json)
│   │   └── styles.css         # Seluruh gaya tampilan
│   ├── data/site.js
│   ├── directives/reveal.js
│   ├── composables/
│   │   ├── useScrollSpy.js
│   │   └── useCopy.js
│   └── components/
│       ├── IconWhatsapp.vue
│       ├── SiteHeader.vue
│       ├── HeroSection.vue
│       ├── FacilitiesSection.vue
│       ├── GallerySection.vue
│       ├── LightboxModal.vue
│       ├── LocationSection.vue
│       ├── FaqSection.vue
│       ├── ContactSection.vue
│       └── WhatsappFloat.vue
├── public/                    # Foto, ikon, robots.txt, sitemap.xml, sw.js pembersih
└── LICENSE                    # Lisensi MIT
```

## Cara Menjalankan

```bash
npm install
npm run dev       # pengembangan, http://localhost:8080
npm run build     # hasil di dist/
npm run preview   # pratinjau hasil build
```

Netlify menjalankan `npm run build` dan menyajikan `dist/` (diatur di `netlify.toml`).

## Lisensi

MIT (lihat berkas `LICENSE`).
