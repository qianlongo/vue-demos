<template>
  <div class="extra">
    <p>{{ msg }}</p>
    <div class="buttons">
      <button @click.ctrl.exact="onClickButon('ctrl')">ctrl</button>
      <button @click.alt.exact="onClickButon('alt')">alt</button>
      <button @click.shift.exact="onClickButon('shift')">shift</button>
      <button @click.meta.exact="onClickButon('meta')">meta</button>
      <button @click.exact="onClickButon('非系统键')">非系统键</button>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'extra',
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
.extra button{
  margin: 0 10px;
  padding: 5px 10px;
}
</style>