<script setup>
import IconWhatsapp from './IconWhatsapp.vue'
import { WA_CEK } from '../data/site.js'
</script>

<template>
  <section class="hero" id="beranda">
    <div class="wrap">
      <div class="hero-in">
        <div class="hero-copy">
          <h1>Kos nyaman di Sibuhuan</h1>
          <p class="lead">Kos dan kontrakan di Sibuhuan, lokasinya strategis di pusat kota, dekat perkantoran, sekolah, dan jalan utama.</p>
          <div class="hero-actions">
            <a class="btn btn-wa" :href="WA_CEK" target="_blank" rel="noopener">
              <IconWhatsapp />
              Cek harga &amp; kamar tersedia
            </a>
          </div>
        </div>
        <div class="hero-gallery">
          <figure class="hero-photo hero-photo-featured">
            <img src="/hero-exterior.jpg" alt="Ilustrasi bangunan Kos Hafiz Ikpos di Sibuhuan" fetchpriority="high">
          </figure>
          <figure class="hero-photo hero-photo-small">
            <img src="/hero-room.jpg" alt="Ilustrasi kamar kos dengan tempat tidur" loading="lazy">
          </figure>
          <figure class="hero-photo hero-photo-small">
            <img src="/hero-interior.jpg" alt="Ilustrasi interior kamar dan kamar mandi dalam" loading="lazy">
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>
