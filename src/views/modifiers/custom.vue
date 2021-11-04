<template>
  <div class="custom">
    <!-- 加上.native之后原生事件才得以监听成功 -->
    <NativeCustom @onKeydown="onKeydown" @click="onClick" />
  </div>
</template>

<script>

import NativeCustom from '../../components/native.vue'

export default {
  name: 'custom',
  components: {
    NativeCustom
  },
  methods: {
    onKeydown () {
      console.log('onKeydown')
    },
    onClick () {
      console.log('onClick')
    }
  }
}
</script>

<style>

</style>