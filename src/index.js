import ScrollModal from './lib/scroll-modal.vue'

const install = function(vue) {
  if (install.installed) return

  vue.component(ScrollModal.name, ScrollModal)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default ScrollModal
