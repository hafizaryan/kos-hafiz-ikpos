import {
  SITE_URL,
  BUSINESS_NAME,
  PHONE,
  EMAIL,
  MAPS_PLACE_FULL,
  INSTAGRAM_URL,
  ADDRESS,
  facilities,
  faqs,
} from './site.js'

const stripHtml = (html) => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()

export function buildJsonLdScripts() {
  const businessId = `${SITE_URL}/#business`

  const lodgingBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    '@id': businessId,
    name: BUSINESS_NAME,
    alternateName: [
      'Kos Hafiz Ikpos',
      'Kos di Sibuhuan',
      'Kosan Sibuhuan',
      'Kontrakan Sibuhuan',
      'Kos Padang Lawas',
      'Kos Dekat MAN 1 Padang Lawas',
      'Kos Dekat Bank BRI KCU Sibuhuan',
    ],
    description:
      'Kos bulanan dan kontrakan di Sibuhuan, Kec. Barumun, Kab. Padang Lawas, Sumatera Utara. Hunian bersih, aman, kamar mandi dalam dan parkir, dekat MAN 1 Padang Lawas, Bank BRI KCU Sibuhuan, RSUD Sibuhuan, dan Pasar Sibuhuan.',
    url: `${SITE_URL}/`,
    telephone: PHONE,
    email: EMAIL,
    image: [
      `${SITE_URL}/about.jpg`,
      `${SITE_URL}/hero-exterior.webp`,
      `${SITE_URL}/kamar-kos.webp`,
      `${SITE_URL}/kamar-mandi-dalam.webp`,
      `${SITE_URL}/bangunan-kos.webp`,
    ],
    priceRange: 'Rp',
    currenciesAccepted: 'IDR',
    paymentAccepted: 'Cash, Bank Transfer',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    hasMap: MAPS_PLACE_FULL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.locality,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: ADDRESS.lat,
      longitude: ADDRESS.lng,
    },
    areaServed: [
      { '@type': 'City', name: 'Sibuhuan' },
      { '@type': 'AdministrativeArea', name: 'Pasar Sibuhuan, Barumun' },
      { '@type': 'AdministrativeArea', name: 'Barumun, Padang Lawas' },
      { '@type': 'AdministrativeArea', name: 'Padang Lawas, Sumatera Utara' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pilihan Hunian Kos Hafiz Ikpos Sibuhuan',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sewa Kamar Kos Bulanan Sibuhuan',
            description: 'Kamar kos bulanan dengan kamar mandi dalam, tempat tidur, air bersih, listrik, dan parkir untuk pelajar, mahasiswa, karyawan, pegawai bank, dan ASN di Sibuhuan.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Kontrakan Sibuhuan Padang Lawas',
            description: 'Unit hunian kontrakan nyaman di kawasan Ikpos Padang Luar, dekat MAN 1 Padang Lawas dan pusat kota Sibuhuan.',
          },
        },
      ],
    },
    amenityFeature: facilities
      .filter((f) => !f.soon)
      .map((f) => ({
        '@type': 'LocationFeatureSpecification',
        name: f.title,
        value: true,
      })),
    sameAs: [MAPS_PLACE_FULL, INSTAGRAM_URL, `https://wa.me/${PHONE.replace(/\D/g, '')}`],
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: stripHtml(item.a),
      },
    })),
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: `${BUSINESS_NAME} - Kos di Sibuhuan`,
    url: `${SITE_URL}/`,
    inLanguage: 'id-ID',
    description: 'Situs resmi sewa kamar kos bulanan dan kontrakan di Sibuhuan, Padang Lawas.',
    publisher: { '@id': businessId },
  }

  return [lodgingBusiness, faqPage, website]
    .map((schema) => `  <script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n  </script>`)
    .join('\n')
}
