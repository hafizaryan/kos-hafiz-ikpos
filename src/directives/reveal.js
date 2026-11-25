// Menambah kelas "in" saat elemen terlihat (threshold 0.12), sama seperti index.js lama.
let observer

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12 },
    )
  }
  return observer
}

export const vReveal = {
  mounted(el) {
    if ('IntersectionObserver' in window) getObserver().observe(el)
    else el.classList.add('in')
  },
  unmounted(el) {
    if (observer) observer.unobserve(el)
  },
  // wajib agar prerender (SSR) tidak error pada direktif kustom
  getSSRProps: () => ({}),
}
