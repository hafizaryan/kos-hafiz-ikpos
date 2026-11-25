<script setup>
import IconWhatsapp from './IconWhatsapp.vue'
import { WA_TANYA } from '../data/site.js'
</script>

<template>
  <a class="wa-float" :href="WA_TANYA" target="_blank" rel="noopener" aria-label="Chat WhatsApp Kos Hafiz Ikpos">
    <span class="wa-float-badge">Chat kami</span>
    <IconWhatsapp />
  </a>
</template>
