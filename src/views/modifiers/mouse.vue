<template>
  <div class="mouse" @mousedown="onMousedown">
    <button @click.left="onClickBtn('left')">left</button>
    <button @click.middle="onClickBtn('middle')">middle</button>
    <button @click.right="onClickBtn('right')">right</button>
  </div>
</template>

<script>
export default {
  name: 'mouse',
  mounted () {

  },
  methods: {
    onClickBtn (msg) {
      console.log(msg)
    },
    onMousedown (event) {
      const mosueMsgMap = {
        0: '鼠标左键',
        1: '鼠标中键',
        2: '鼠标右键'
      }
      console.log('点击了', mosueMsgMap[event.button])
    }
  }
}
</script>

<style scoped>
.mouse button{
  margin: 0 10px;
  padding: 5px 10px;
}
</style>