import { ref, onMounted, onBeforeUnmount } from 'vue'

// Rumus sama dengan index.js lama: ambang 140px, dan section terakhir aktif saat mentok bawah.
export function useScrollSpy(ids) {
  const activeId = ref(ids[0])
  let ticking = false

  function update() {
    ticking = false
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      activeId.value = ids[ids.length - 1]
      return
    }
    let current = ids[0]
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el && el.getBoundingClientRect().top <= 140) current = id
    }
    activeId.value = current
  }

  function onScroll() {
    if (!ticking) {
      ticking = true
      window.requestAnimationFrame(update)
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('hashchange', update)
    update()
  })
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('hashchange', update)
  })

  return activeId
}
