<template>
  <div class="v-show">
    <button @click="onToggleShow">切换</button>
    <div v-show="isShow">前端胖头鱼 显示出来啦</div>
  </div>
</template>

<script>
export default {
  name: 'vshow',
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
