<template>
  <div class="once" @click.once="onClickOnce">
    只触发一次
  </div>
</template>

<script>
export default {
  name: 'once',
  methods: {
    onClickOnce () {
      console.log('once，我只会触发一次点击事件回调')
    }
  }
}
</script>

<style>

</style>