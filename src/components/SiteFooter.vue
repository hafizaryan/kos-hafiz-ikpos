<script setup>
import {
  BUSINESS_NAME,
  ADDRESS,
  PHONE,
  PHONE_LABEL,
  EMAIL,
  WA_CEK,
  MAPS_URL,
  INSTAGRAM_URL,
  NAV_LINKS,
} from '../data/site.js'
</script>

<template>
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-nap">
          <h2>{{ BUSINESS_NAME }}</h2>
          <address class="footer-addr">{{ ADDRESS.full }}</address>
          <p class="footer-contact">
            <a :href="'tel:' + PHONE">{{ PHONE_LABEL }}</a>
            <span aria-hidden="true">·</span>
            <a :href="'mailto:' + EMAIL">{{ EMAIL }}</a>
          </p>
        </div>
        <nav class="footer-nav" aria-label="Navigasi footer">
          <h3>Bagian</h3>
          <ul>
            <li><a href="#beranda">Beranda</a></li>
            <li v-for="link in NAV_LINKS" :key="link.id">
              <a :href="'#' + link.id">{{ link.label }}</a>
            </li>
            <li><a href="#kontak">Kontak</a></li>
          </ul>
        </nav>
        <div class="footer-links">
          <h3>Tautan resmi</h3>
          <ul>
            <li><a :href="WA_CEK" target="_blank" rel="noopener">WhatsApp Resmi</a></li>
            <li><a :href="MAPS_URL" target="_blank" rel="noopener">Google Maps</a></li>
            <li><a :href="INSTAGRAM_URL" target="_blank" rel="noopener">Instagram @kos_hafiz_ikpos</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 {{ BUSINESS_NAME }} - Kos bulanan &amp; kontrakan di Sibuhuan, Padang Lawas.</p>
      </div>
    </div>
  </footer>
</template>
