<script setup>
import { ref } from 'vue'
import { gallery } from '../data/site.js'

const emit = defineEmits(['open'])
const itemEls = ref([])

function focusItem(i) {
  if (itemEls.value[i]) itemEls.value[i].focus()
}

defineExpose({ focusItem })
</script>

<template>
  <section id="galeri">
    <div class="wrap">
      <div v-reveal class="sec-head center reveal">
        <h2>Galeri Kos Hafiz Ikpos</h2>
        <p>Lihat lebih dekat suasana, fasilitas, dan kenyamanan huniannya.</p>
      </div>
      <div class="gal-grid">
        <figure
          v-for="(g, i) in gallery"
          :key="g.src"
          ref="itemEls"
          v-reveal
          class="reveal gal-item"
          tabindex="0"
          role="button"
          :aria-label="'Buka foto: ' + g.alt"
          @click="emit('open', i)"
          @keydown.enter.prevent="emit('open', i)"
          @keydown.space.prevent="emit('open', i)"
        >
          <img :src="g.src" :alt="g.alt" loading="lazy">
          <span class="gal-zoom" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/></svg></span>
        </figure>
      </div>
    </div>
  </section>
</template>
