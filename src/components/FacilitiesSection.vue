<script setup>
import { facilities } from '../data/site.js'
</script>

<template>
  <section id="fasilitas">
    <div class="wrap">
      <div v-reveal class="sec-head center reveal">
        <h2>Fasilitas kos &amp; kontrakan di Sibuhuan</h2>
        <p>Fasilitas utama untuk pelajar, mahasiswa, karyawan, pegawai bank, dan ASN di Padang Lawas, beserta fasilitas tambahan yang sedang dipersiapkan.</p>
      </div>
      <div class="fac-grid">
        <div v-for="f in facilities" :key="f.title" v-reveal class="fac reveal">
          <div class="fac-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" v-html="f.icon"></svg></div>
          <h3>{{ f.title }}</h3><p>{{ f.text }}</p>
          <span v-if="f.soon" class="badge-soon">Segera hadir</span>
        </div>
      </div>
    </div>
  </section>
</template>
