<template>
  <div class="system">
    <p>{{ msg }}</p>
    <div class="buttons">
      <button @click.ctrl="onClickButon('ctrl')">ctrl</button>
      <button @click.alt="onClickButon('alt')">alt</button>
      <button @click.shift="onClickButon('shift')">shift</button>
      <button @click.meta="onClickButon('meta')">meta</button>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'system',
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    this.onListenSystemKeyDown()
  },
  methods: {
    onListenSystemKeyDown () {
      document.addEventListener('keydown', (event) => {
        let msg = '按下了'
        console.log(event.keyCode)
        if (event.ctrlKey) {
          msg += 'ctrl键'
        } else if (event.altKey) {
          msg += 'alt键'
        } else if (event.shiftKey) {
          msg += 'shift键'
        } else if (event.metaKey) {
          msg += 'meta键'
        } else {
          msg += '其他键'
        }

        this.msg = msg
      }, false)
    },
    onClickButon (key) {
      console.log(`只有同时按下${key}键，点击事件才会发生`)
    }
  }
}
</script>

<style scoped>
p{
  text-align: center;
  padding: 20px;
}
.system button{
  margin: 0 10px;
  padding: 5px 10px;
}
</style>