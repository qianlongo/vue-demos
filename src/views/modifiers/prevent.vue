<template>
  <div class="prevent">
    <a href="https://juejin.cn/" @click="onNoPrevent">点击跳转掘金</a>
    <br />
    <br />
    <a href="https://juejin.cn/" @click="onPrevent">阻止默认事件，无法跳转掘金</a>
  </div>
</template>

<script>
export default {
  name: 'prevent',
  methods: {
    onNoPrevent () {
      console.log('未阻止默认事件')
    },
    onPrevent (event) {
      console.log('阻止默认事件')
      event.preventDefault()
    }
  }
}
</script>

<style>
.prevent{
  padding: 20px;
}
</style>