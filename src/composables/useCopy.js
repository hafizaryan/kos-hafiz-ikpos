import { ref } from 'vue'

export function useCopy(text) {
  const copied = ref(false)
  let timer

  function done() {
    copied.value = true
    clearTimeout(timer)
    timer = setTimeout(() => {
      copied.value = false
    }, 2200)
  }

  // fallback untuk konteks non-HTTPS atau browser lama
  function fallback() {
    const input = document.createElement('input')
    input.value = text
    document.body.appendChild(input)
    input.select()
    try {
      document.execCommand('copy')
      done()
    } catch (err) {
      // clipboard tidak tersedia: tombol tetap "Salin"
    }
    document.body.removeChild(input)
  }

  function copy() {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, fallback)
    } else {
      fallback()
    }
  }

  return { copied, copy }
}
