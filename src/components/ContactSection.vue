<script setup>
import IconWhatsapp from './IconWhatsapp.vue'
import { useCopy } from '../composables/useCopy.js'
import { PHONE, PHONE_LABEL, EMAIL, WA_CEK, INSTAGRAM_URL } from '../data/site.js'

const { copied, copy } = useCopy(PHONE)
</script>

<template>
  <section id="kontak">
    <div class="wrap">
      <div v-reveal class="contact-panel reveal">
        <h2>Tanyakan kamar kos tersedia di Sibuhuan</h2>
        <p>Hubungi pengelola Kos dan Kontrakan Hafiz Ikpos lewat WhatsApp resmi untuk informasi tarif sewa bulanan, ketersediaan kamar, atau jadwal survei lokasi di Sibuhuan, Padang Lawas.</p>
        <div class="contact-rows">
          <a class="btn btn-wa" :href="WA_CEK" target="_blank" rel="noopener">
            <IconWhatsapp />
            Cek harga &amp; ketersediaan
          </a>
        </div>
        <a class="contact-instagram" :href="INSTAGRAM_URL" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg>
          Lihat foto &amp; update terbaru di Instagram
        </a>
        <div class="contact-meta">
          <div class="contact-meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z"/></svg>
            <a :href="'tel:' + PHONE">{{ PHONE_LABEL }}</a>
            <button id="btnCopyPhone" type="button" class="btn-copy" :class="{ copied }" aria-label="Salin nomor telepon" @click="copy">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              <span class="copy-text">{{ copied ? 'Tersalin!' : 'Salin' }}</span>
            </button>
          </div>
          <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg><a :href="'mailto:' + EMAIL">{{ EMAIL }}</a></div>
          <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg><span>Setiap hari · 24 jam</span></div>
        </div>
      </div>
    </div>
  </section>
</template>
