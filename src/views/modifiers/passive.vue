<template>
  <div class="passive" ref="passive" @scroll.passive="onScroll">
    <div class="scrol-top">{{ scrollTop }}</div>
    <div class="passive-inner">{{ innerText }}</div>
  </div>
</template>

<script>
export default {
  name: 'passive',
  data () {
    return {
      scrollTop: 0,
      innerText: 'hello world'
    }
  },
  mounted () {
    // this.renderInner()
  },
  methods: {
    renderInner () {
      this.innerText = this.innerText.repeat(10000)
    },
    onScroll () {
      const $passive = this.$refs.passive

      for (var i = 0; i < 10000; i++) {
        console.log(i)
      }

      document.querySelector(".scrol-top").innerHTML = $passive.scrollTop

      // this.scrollTop = $passive.scrollTop
    }
  }
}
</script>

<style>
.passive{
  width: 375px;
  height: 100vh;
  overflow: scroll;
}

.scrol-top{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  color: #fff;
}

.passive-inner{
  height: 500vh;
  background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
}
</style>