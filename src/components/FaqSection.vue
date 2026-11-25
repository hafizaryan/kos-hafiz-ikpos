<script setup>
import { ref } from 'vue'
import { faqs } from '../data/site.js'

// satu item terbuka sekaligus; klik item yang terbuka menutupnya
const openIndex = ref(-1)

function toggle(i) {
  openIndex.value = openIndex.value === i ? -1 : i
}
</script>

<template>
  <section id="faq">
    <div class="wrap">
      <div v-reveal class="sec-head center reveal">
        <h2>Pertanyaan seputar kos di Sibuhuan</h2>
      </div>
      <div v-reveal class="faq-list reveal">
        <div v-for="(f, i) in faqs" :key="f.q" class="faq" :class="{ open: openIndex === i }">
          <button class="faq-q" :aria-expanded="openIndex === i ? 'true' : 'false'" @click="toggle(i)">{{ f.q }} <span class="plus">+</span></button>
          <div class="faq-a"><div><p v-html="f.a"></p></div></div>
        </div>
      </div>
    </div>
  </section>
</template>
