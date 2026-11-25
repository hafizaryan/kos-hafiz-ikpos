<script setup>
import IconWhatsapp from './IconWhatsapp.vue'
import { WA_CEK } from '../data/site.js'
</script>

<template>
  <section class="hero" id="beranda">
    <div class="wrap">
      <div class="hero-in">
        <div class="hero-copy">
          <h1>Kos &amp; kontrakan di Sibuhuan</h1>
          <p class="lead">Sewa kamar kos bulanan dan kontrakan di Sibuhuan, Padang Lawas. Lokasi strategis di kawasan Ikpos, dekat MAN 1 Padang Lawas, Bank BRI KCU Sibuhuan, Pasar Sibuhuan, dan perkantoran.</p>
          <div class="hero-actions">
            <a class="btn btn-wa" :href="WA_CEK" target="_blank" rel="noopener">
              <IconWhatsapp />
              Cek harga &amp; kamar tersedia
            </a>
          </div>
        </div>
        <div class="hero-gallery">
          <figure class="hero-photo hero-photo-featured">
            <img src="/hero-exterior.webp" alt="Tampak depan bangunan Kos dan Kontrakan Hafiz Ikpos di Sibuhuan, Padang Lawas" width="1376" height="768" fetchpriority="high" decoding="sync">
          </figure>
          <figure class="hero-photo hero-photo-small">
            <img src="/hero-room.webp" alt="Kamar kos bulanan dengan tempat tidur nyaman di Sibuhuan" width="1200" height="896" loading="lazy" decoding="async">
          </figure>
          <figure class="hero-photo hero-photo-small">
            <img src="/hero-interior.webp" alt="Interior kamar kos dan kamar mandi dalam Kos Hafiz Ikpos Sibuhuan" width="1200" height="896" loading="lazy" decoding="async">
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>
