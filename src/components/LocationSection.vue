<script setup>
import { MAPS_URL, MAP_EMBED, landmarks } from '../data/site.js'
</script>

<template>
  <section id="lokasi">
    <div class="wrap">
      <div v-reveal class="sec-head reveal">
        <h2>Lokasi strategis di pusat Sibuhuan, Padang Lawas</h2>
      </div>
      <div class="loc-grid">
        <div v-reveal class="loc-card reveal">
          <div>
            <h3>Alamat lengkap</h3>
            <div class="addr">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <address class="addr-text"><strong>Jl. Kol. H. M. Nurdin (Ikpos Padang Luar)</strong>, Sibuhuan, Kec. Barumun, Kab. Padang Lawas, Sumatera Utara 22763. Tepat di samping Kantor Pengadilan Lama dan di depan <strong>MAN 1 Padang Lawas</strong>.</address>
            </div>
          </div>
          <div class="loc-actions">
            <a class="btn btn-line btn-maps" :href="MAPS_URL" target="_blank" rel="noopener">
              <img src="/google-maps.png" alt="" width="20" height="20" decoding="async">
              Buka di Google Maps
            </a>
          </div>
        </div>
        <div v-reveal class="loc-map-panel reveal">
          <div class="loc-map-wrap">
            <iframe
              title="Peta Lokasi Kos Hafiz Ikpos Sibuhuan"
              :src="MAP_EMBED"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div v-reveal class="loc-landmarks reveal">
        <h3>Akses ke lokasi penting sekitar Sibuhuan</h3>
        <ul class="landmark-grid">
          <li v-for="lm in landmarks" :key="lm.name" class="landmark-item">
            <div class="landmark-head">
              <span class="landmark-name">{{ lm.name }}</span>
              <span class="landmark-eta">{{ lm.eta }}</span>
            </div>
            <p class="landmark-area">{{ lm.area }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
