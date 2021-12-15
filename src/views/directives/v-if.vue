<template>
  <div class="v-if">
    <button @click="onToggleShow">切换</button>
    <div v-if="isShow">前端胖头鱼 显示出来啦</div>
  </div>
</template>

<script>
export default {
  name: 'vif',
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    onToggleShow () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped>
button{
  display: block;
  padding:0 10px;
}
</style>