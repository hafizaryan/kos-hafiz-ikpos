export const SITE_URL = 'https://koshafizikpos.netlify.app'
export const BUSINESS_NAME = 'Kos dan Kontrakan Hafiz Ikpos'
export const PHONE = '+6285163089473'
export const PHONE_LABEL = '+62 851-6308-9473'
export const EMAIL = 'koshafizikpos@gmail.com'
const WA_BASE = 'https://wa.me/6285163089473'
export const WA_CEK = `${WA_BASE}?text=Halo%20Kos%20Hafiz%20Ikpos%2C%20saya%20ingin%20cek%20harga%20dan%20ketersediaan%20kamar%20hari%20ini.`
export const WA_TANYA = `${WA_BASE}?text=Halo%20Kos%20Hafiz%20Ikpos%2C%20saya%20mau%20tanya%20kamar%20kos.`
export const MAPS_URL = 'https://www.google.com/maps/place/Kos+dan+Kontrakan+Hafiz+Ikpos/@1.0527445,99.7440319,17z'
export const MAPS_PLACE_FULL = 'https://www.google.com/maps/place/Kos+dan+Kontrakan+Hafiz+Ikpos/@1.0527445,99.7440319,17z/data=!4m6!3m5!1s0x302b85ad614db765:0x8ea543da5bca441a!8m2!3d1.0527445!4d99.7440319!16s%2Fg%2F11llyjjgx1'
export const MAP_EMBED = 'https://maps.google.com/maps?q=1.0527445,99.7440319&hl=id&z=17&output=embed'
export const INSTAGRAM_URL = 'https://www.instagram.com/kos_hafiz_ikpos/'

export const ADDRESS = {
  street: 'Jl. Kol. H. M. Nurdin (Ikpos Padang Luar)',
  locality: 'Sibuhuan, Kec. Barumun',
  region: 'Kab. Padang Lawas, Sumatera Utara',
  postalCode: '22763',
  country: 'ID',
  full: 'Jl. Kol. H. M. Nurdin (Ikpos Padang Luar), Sibuhuan, Kec. Barumun, Kab. Padang Lawas, Sumatera Utara 22763',
  lat: 1.0527445,
  lng: 99.7440319,
}

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
  { title: 'Air bersih', text: 'Pasokan air untuk kebutuhan mandi dan kebersihan sehari-hari.', icon: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5 s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>' },
  { title: 'Listrik', text: 'Instalasi listrik yang memadai untuk aktivitas dan pengisian daya.', icon: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>' },
  { title: 'Parkir', text: 'Area parkir untuk kendaraan penghuni, motor maupun mobil.', icon: '<path d="M5 11 6.5 6h11L19 11"/><rect x="3" y="11" width="18" height="6" rx="1.5"/><circle cx="7.5" cy="17.5" r="1.8"/><circle cx="16.5" cy="17.5" r="1.8"/>' },
  { title: 'Tempat tidur', text: 'Perlengkapan tidur yang nyaman untuk istirahat berkualitas.', icon: '<path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M2 17h20"/>' },
  { title: 'Kamar mandi dalam', text: 'Privasi dan kenyamanan mandi di kamarmu sendiri.', icon: '<path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2z"/><path d="M6 12V5a2 2 0 0 1 4 0"/><path d="M7 19l-1 2M17 19l1 2"/>' },
  { title: 'AC', text: 'Unit AC sedang dipersiapkan untuk kenyamanan suhu ruangan.', soon: true, icon: '<path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1 19.1 4.9"/>' },
  { title: 'WiFi fiber', text: 'Internet fiber sedang dalam proses instalasi.', soon: true, icon: '<path d="M5 12.5a10 10 0 0 1 14 0"/><path d="M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19" r="1.4" fill="currentColor" stroke="none"/>' },
]

export const gallery = [
  { src: '/kamar-kos.webp', width: 1200, height: 1600, alt: 'Kamar kos bulanan bersih dan nyaman di Kos Hafiz Ikpos Sibuhuan, Padang Lawas' },
  { src: '/kamar-mandi-dalam.webp', width: 1200, height: 1600, alt: 'Fasilitas kamar mandi dalam pribadi di Kos Hafiz Ikpos Sibuhuan' },
  { src: '/bangunan-kos.webp', width: 1200, height: 1600, alt: 'Bangunan kos dan kontrakan Hafiz Ikpos dekat MAN 1 Padang Lawas dan Bank BRI KCU Sibuhuan' },
  { src: '/area-parkir.webp', width: 1200, height: 1600, alt: 'Area parkir kendaraan motor dan mobil yang aman di kosan Sibuhuan' },
  { src: '/kamar-tidur.webp', width: 1200, height: 1600, alt: 'Kamar tidur kos siap huni dilengkapi kasur empuk di Sibuhuan, Barumun' },
  { src: '/lingkungan-kos.webp', width: 1200, height: 1600, alt: 'Suasana lingkungan kosan tenang, aman, dan bersih di kawasan Ikpos Sibuhuan' },
  { src: '/koridor-kamar.webp', width: 1200, height: 1600, alt: 'Sirkulasi udara segar dan koridor kamar Kos Hafiz Ikpos Padang Lawas' },
  { src: '/jalan-akses.webp', width: 1200, height: 1600, alt: 'Jalan akses utama menuju Kos Hafiz Ikpos dari pusat kota Sibuhuan' },
]

export const landmarks = [
  { name: 'MAN 1 Padang Lawas (MAN 1 Sibuhuan)', area: 'Depan lokasi, koridor Jl. Ki Hajar Dewantara', eta: 'Sekitar 1-2 menit jalan kaki' },
  { name: 'Kantor Pengadilan Lama Sibuhuan', area: 'Samping lokasi, Ikpos Padang Luar', eta: 'Sekitar 1 menit jalan kaki' },
  { name: 'Bank BRI KCU / KC Sibuhuan', area: 'Jl. Ki Hajar Dewantara, Padang Luar', eta: 'Sekitar 2-4 menit berkendara' },
  { name: 'RSUD Sibuhuan & SMAN 1 Barumun', area: 'Jl. Ki Hajar Dewantara, Pasar Sibuhuan', eta: 'Sekitar 3-5 menit berkendara' },
  { name: 'Pasar Sibuhuan & Pusat Perbankan', area: 'Pasar Sibuhuan, Kec. Barumun (Bank Sumut, ATM, pertokoan)', eta: 'Sekitar 3-5 menit berkendara' },
  { name: 'Komplek Perkantoran SKPD & Kantor Bupati', area: 'Jl. Lintas Sibuhuan-Riau, Padang Lawas', eta: 'Sekitar 10-15 menit berkendara' },
]

// a = HTML (hanya konstanta ini), otomatis disinkronkan ke FAQPage JSON-LD saat build
export const faqs = [
  {
    q: 'Di mana lokasi Kos Hafiz Ikpos di Sibuhuan?',
    a: 'Berada di Jl. Kol. H. M. Nurdin (Ikpos Padang Luar), Sibuhuan, Kec. Barumun, Kab. Padang Lawas, tepat di samping Kantor Pengadilan Lama dan di depan MAN 1 Padang Lawas. Mudah ditemukan di Google Maps dengan nama "Kos dan Kontrakan Hafiz Ikpos".',
  },
  {
    q: 'Apakah dekat dengan Bank BRI KCU Sibuhuan, Pasar Sibuhuan, dan perkantoran?',
    a: 'Ya. Lokasi berada di kawasan strategis pusat kota Sibuhuan, sekitar 2-4 menit berkendara ke Bank BRI KCU Sibuhuan di Jl. Ki Hajar Dewantara, sekitar 3-5 menit ke RSUD Sibuhuan, SMAN 1 Barumun, dan Pasar Sibuhuan, serta akses mudah menuju komplek perkantoran SKPD dan Kantor Bupati Padang Lawas.',
  },
  {
    q: 'Berapa harga sewa kamar kos bulanan di Sibuhuan?',
    a: 'Harga sewa kamar kos bulanan di Kos Hafiz Ikpos terjangkau dengan fasilitas kamar mandi dalam. Hubungi <a href="https://wa.me/6285163089473" target="_blank" rel="noopener">WhatsApp resmi +62 851-6308-9473</a> untuk info tarif terbaru dan ketersediaan kamar hari ini.',
  },
  {
    q: 'Fasilitas apa saja yang tersedia di Kos Hafiz Ikpos?',
    a: 'Tersedia keamanan lingkungan terjaga, pasokan air bersih, instalasi listrik, area parkir motor dan mobil, tempat tidur, serta kamar mandi dalam di setiap unit. Penambahan unit AC dan WiFi fiber sedang dalam tahap persiapan.',
  },
  {
    q: 'Bagaimana cara booking atau survei kosan dan kontrakan di Sibuhuan?',
    a: 'Hubungi nomor WhatsApp resmi untuk menanyakan ketersediaan kamar, detail fasilitas, dan menjadwalkan survei langsung ke lokasi kos di kawasan Ikpos Sibuhuan.',
  },
  {
    q: 'Apakah cocok untuk pelajar, mahasiswa, karyawan, pegawai bank, atau ASN?',
    a: 'Ya. Lingkungan tenang dan dekat dengan MAN 1 Padang Lawas, SMAN 1 Barumun, Bank BRI KCU Sibuhuan, RSUD Sibuhuan, serta jalur perkantoran, sehingga nyaman bagi pelajar, mahasiswa, karyawan, pegawai bank, dan ASN di Padang Lawas.',
  },
  {
    q: 'Bagaimana cara menghindari penipuan saat cari kos di Sibuhuan?',
    a: 'Gunakan hanya nomor WhatsApp resmi yang tertera di situs ini (+62 851-6308-9473) dan lakukan survei lokasi langsung bila memungkinkan. Kami tidak meminta DP via transfer ke rekening yang tidak terkonfirmasi.',
  },
]
