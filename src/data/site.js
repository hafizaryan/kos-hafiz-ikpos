export const PHONE = '+6285163089473'
export const PHONE_LABEL = '+62 851-6308-9473'
export const EMAIL = 'koshafizikpos@gmail.com'
const WA_BASE = 'https://wa.me/6285163089473'
export const WA_CEK = `${WA_BASE}?text=Halo%20Kos%20Hafiz%20Ikpos%2C%20saya%20ingin%20cek%20harga%20dan%20ketersediaan%20kamar%20hari%20ini.`
export const WA_TANYA = `${WA_BASE}?text=Halo%20Kos%20Hafiz%20Ikpos%2C%20saya%20mau%20tanya%20kamar%20kos.`
export const MAPS_URL = 'https://www.google.com/maps/place/Kos+dan+Kontrakan+Hafiz+Ikpos/@1.0527445,99.7440319,17z'
export const MAP_EMBED = 'https://maps.google.com/maps?q=1.0527445,99.7440319&hl=id&z=17&output=embed'
export const INSTAGRAM_URL = 'https://www.instagram.com/kos_hafiz_ikpos?obrf=MTU2ODVwNmNkb3AyOA=='

export const SECTION_IDS = ['beranda', 'fasilitas', 'galeri', 'lokasi', 'faq', 'kontak']

export const NAV_LINKS = [
  { id: 'fasilitas', label: 'Fasilitas' },
  { id: 'galeri', label: 'Galeri' },
  { id: 'lokasi', label: 'Lokasi' },
  { id: 'faq', label: 'FAQ' },
]

// icon = isi elemen <svg> (dipasang lewat v-html, sumbernya konstanta ini, bukan input pengguna)
export const facilities = [
  { title: 'Keamanan', text: 'Lingkungan kos dengan keamanan yang terjaga.', icon: '<path d="M12 22s8-3.6 8-10V5l-8-3-8 3v7c0 6.4 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>' },
  { title: 'Air bersih', text: 'Pasokan air untuk kebutuhan mandi dan kebersihan sehari-hari.', icon: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>' },
  { title: 'Listrik', text: 'Instalasi listrik yang memadai untuk aktivitas dan pengisian daya.', icon: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>' },
  { title: 'Parkir', text: 'Area parkir untuk kendaraan penghuni, motor maupun mobil.', icon: '<path d="M5 11 6.5 6h11L19 11"/><rect x="3" y="11" width="18" height="6" rx="1.5"/><circle cx="7.5" cy="17.5" r="1.8"/><circle cx="16.5" cy="17.5" r="1.8"/>' },
  { title: 'Tempat tidur', text: 'Perlengkapan tidur yang nyaman untuk istirahat berkualitas.', icon: '<path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M2 17h20"/>' },
  { title: 'Kamar mandi dalam', text: 'Privasi dan kenyamanan mandi di kamarmu sendiri.', icon: '<path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2z"/><path d="M6 12V5a2 2 0 0 1 4 0"/><path d="M7 19l-1 2M17 19l1 2"/>' },
  { title: 'AC', text: 'Unit AC sedang dipersiapkan untuk kenyamanan suhu ruangan.', soon: true, icon: '<path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1 19.1 4.9"/>' },
  { title: 'WiFi fiber', text: 'Internet fiber sedang dalam proses instalasi.', soon: true, icon: '<path d="M5 12.5a10 10 0 0 1 14 0"/><path d="M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19" r="1.4" fill="currentColor" stroke="none"/>' },
]

export const gallery = [
  { src: '/kamar-kos.webp', alt: 'Kamar kos bersih dan nyaman di Kos Hafiz Ikpos Sibuhuan' },
  { src: '/kamar-mandi-dalam.webp', alt: 'Fasilitas kamar mandi dalam kos Hafiz Ikpos Sibuhuan' },
  { src: '/bangunan-kos.webp', alt: 'Bangunan kos dan kontrakan Hafiz Ikpos dekat MAN 1 Sibuhuan' },
  { src: '/area-parkir.webp', alt: 'Area parkir kendaraan motor dan mobil di kos Sibuhuan' },
  { src: '/kamar-tidur.webp', alt: 'Kamar tidur kos dilengkapi kasur empuk dan lemari di Sibuhuan' },
  { src: '/lingkungan-kos.webp', alt: 'Suasana lingkungan kos tenang, aman, dan bersih di Sibuhuan' },
  { src: '/koridor-kamar.webp', alt: 'Sirkulasi udara segar dan koridor kamar Kos Hafiz Ikpos' },
  { src: '/jalan-akses.webp', alt: 'Pemandangan luar dan jalan akses utama Kos Hafiz Ikpos' },
]

// a = HTML (hanya konstanta ini), tautan di jawaban ke-2 harus tetap ada
export const faqs = [
  { q: 'Di mana lokasi Kos Hafiz Ikpos di Sibuhuan?', a: 'Di Jl. Kol. H. M. Nurdin (Ikpos Padang Luar), samping Kantor Pengadilan Lama dan depan MAN 1 Padang Lawas. Mudah dicari di Google Maps dengan nama "Kos dan Kontrakan Hafiz Ikpos".' },
  { q: 'Berapa harga sewa kos per bulan?', a: 'Harga sewa sangat terjangkau, dengan opsi kamar mandi dalam. Hubungi <a href="https://wa.me/6285163089473" target="_blank" rel="noopener">WhatsApp resmi +62 851-6308-9473</a> untuk info harga terbaru dan ketersediaan kamar.' },
  { q: 'Bagaimana cara booking atau survei kos?', a: 'Hubungi nomor WhatsApp resmi untuk menanyakan ketersediaan kamar, harga, dan jadwal kunjungan ke lokasi.' },
  { q: 'Apakah cocok untuk mahasiswa atau pekerja?', a: 'Ya. Lokasi dekat sekolah dan pusat kota, cocok untuk mahasiswa serta profesional yang butuh hunian di wilayah Sibuhuan.' },
  { q: 'Bagaimana menghindari penipuan saat sewa kos?', a: 'Gunakan hanya nomor WhatsApp resmi yang tertera di situs ini. Kami tidak meminta DP via transfer ke rekening yang tidak dikonfirmasi.' },
]
