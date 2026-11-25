<script setup>
import { ref, onMounted } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import FacilitiesSection from './components/FacilitiesSection.vue'
import GallerySection from './components/GallerySection.vue'
import LocationSection from './components/LocationSection.vue'
import FaqSection from './components/FaqSection.vue'
import ContactSection from './components/ContactSection.vue'
import WhatsappFloat from './components/WhatsappFloat.vue'
import LightboxModal from './components/LightboxModal.vue'

const lightboxOpen = ref(false)
const lightboxIndex = ref(0)
const galleryRef = ref(null)

function openLightbox(i) {
  lightboxIndex.value = i
  lightboxOpen.value = true
}

function closeLightbox() {
  lightboxOpen.value = false
  galleryRef.value.focusItem(lightboxIndex.value)
}

// CSS memakai html.js .reveal; kelas dipasang setelah mount agar HTML prerender tetap terbaca tanpa JS
onMounted(() => document.documentElement.classList.add('js'))
</script>

<template>
  <a href="#konten" class="skip-link">Lewati ke konten</a>
  <SiteHeader />
  <main id="konten">
    <HeroSection />
    <FacilitiesSection />
    <GallerySection ref="galleryRef" @open="openLightbox" />
    <LocationSection />
    <FaqSection />
    <ContactSection />
  </main>
  <WhatsappFloat />
  <LightboxModal v-model:index="lightboxIndex" :open="lightboxOpen" @close="closeLightbox" />
</template>
