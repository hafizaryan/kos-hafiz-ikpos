<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useScrollSpy } from '../composables/useScrollSpy.js'
import { SECTION_IDS, NAV_LINKS } from '../data/site.js'

const menuOpen = ref(false)
const burger = ref(null)
const nav = ref(null)
const activeId = useScrollSpy(SECTION_IDS)

function closeMenu() {
  menuOpen.value = false
}

function onDocClick(e) {
  if (menuOpen.value && !nav.value.contains(e.target) && !burger.value.contains(e.target)) closeMenu()
}

function onResize() {
  if (window.innerWidth > 900) closeMenu()
}

function onKeydown(e) {
  if (e.key === 'Escape' && menuOpen.value) {
    closeMenu()
    burger.value.focus()
  }
}

onMounted(() => {
  document.addEventListener('click', onDocClick)
  window.addEventListener('resize', onResize)
  document.addEventListener('keydown', onKeydown)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
  window.removeEventListener('resize', onResize)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <header class="site-header">
    <div class="wrap header-in">
      <a href="#beranda" class="brand" aria-label="Kos Hafiz Ikpos - beranda">
        <span class="brand-mark" aria-hidden="true"><img src="/favicon.jpg" alt=""></span>
        <span><b>Kos Hafiz Ikpos</b></span>
      </a>
      <button
        id="burger"
        ref="burger"
        class="burger"
        :class="{ open: menuOpen }"
        :aria-label="menuOpen ? 'Tutup menu' : 'Buka menu'"
        :aria-expanded="menuOpen ? 'true' : 'false'"
        aria-controls="siteNav"
        @click="menuOpen = !menuOpen"
      ><span></span><span></span><span></span></button>
      <nav id="siteNav" ref="nav" class="site-nav" :class="{ open: menuOpen }" aria-label="Navigasi utama">
        <ul>
          <li v-for="link in NAV_LINKS" :key="link.id">
            <a :href="'#' + link.id" :class="{ active: activeId === link.id }" @click="closeMenu">{{ link.label }}</a>
          </li>
          <li class="nav-sep" aria-hidden="true"></li>
          <li><a href="#kontak" class="nav-cta" :class="{ active: activeId === 'kontak' }" @click="closeMenu">Kontak</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
