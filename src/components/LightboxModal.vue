<script setup>
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { gallery } from '../data/site.js'

const props = defineProps({ open: Boolean, index: Number })
const emit = defineEmits(['close', 'update:index'])
const closeBtn = ref(null)
const item = computed(() => gallery[props.index])

function go(i) {
  emit('update:index', (i + gallery.length) % gallery.length)
}

watch(
  () => props.open,
  async (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    if (isOpen) {
      await nextTick()
      closeBtn.value.focus()
    }
  },
)

function onKeydown(e) {
  if (!props.open) return
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowLeft') go(props.index - 1)
  if (e.key === 'ArrowRight') go(props.index + 1)
}

onMounted(() => document.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div id="lightbox" class="lightbox" role="dialog" aria-modal="true" aria-label="Pratinjau foto galeri" :hidden="!open">
    <div id="lightboxBackdrop" class="lightbox-backdrop" @click="emit('close')"></div>
    <div class="lightbox-box">
      <button id="lightboxClose" ref="closeBtn" type="button" class="lightbox-btn lightbox-close" aria-label="Tutup pratinjau foto" @click="emit('close')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>
      <button id="lightboxPrev" type="button" class="lightbox-btn lightbox-prev" aria-label="Foto sebelumnya" @click="go(index - 1)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <button id="lightboxNext" type="button" class="lightbox-btn lightbox-next" aria-label="Foto berikutnya" @click="go(index + 1)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
      </button>
      <div class="lightbox-figure">
        <img id="lightboxImg" :src="item.src" :alt="item.alt">
        <p id="lightboxCaption" class="lightbox-caption">{{ item.alt }}</p>
      </div>
    </div>
  </div>
</template>
