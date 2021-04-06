<template>
  <div
    class="scroll-modal"
    :style="{
      width: modalStyle.width + 'px',
      height: modalStyle.height + 'px',
      marginLeft: modalStyle.marginLeft + 'px',
    }"
  >
    <div :style="{opacity: slotStyle.opacity}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import gasp from 'gsap'

  let marginLeft = 0

  export default {
    name: "ScrollModal",
    data() {
      return {
        isShow: false,
        modalStyle: {
          width: 0,
          height: 0,
          marginLeft: 0,
        },
        slotStyle: {
          opacity: 0
        }
      }
    },
    methods: {
      open: function () {
        this.isShow = true
        const {offsetWidth, offsetHeight} = document.querySelector('.container')
        marginLeft = Math.ceil(offsetWidth / 2)
        this.modalStyle.width = 0
        this.modalStyle.height = offsetHeight
        this.modalStyle.marginLeft = marginLeft
        gasp.to(this.modalStyle, {duration: 0.4, width: offsetWidth, marginLeft: 0})
        gasp.to(this.slotStyle, {duration: 0.4, opacity: 1})
      },
      close: function () {
        gasp.to(this.modalStyle, {duration: 0.4, width: 0, marginLeft})
        gasp.to(this.slotStyle, {duration: 0.4, opacity: 0})
      }
    }
  }
</script>

<style scoped>
  .scroll-modal {
    z-index: 9;
    position: absolute;
    left: 0;
    top: 0;
    background: #fff;
  }
</style>
