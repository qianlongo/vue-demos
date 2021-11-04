<template>
  <div class="native-custom">
    <input type="text" @keydown="onKeydown">
  </div>
</template>

<script>
export default {
  name: 'nativeCustom',
  methods: {
    onKeydown () {
      this.$emit('onKeydown')
    }
  }
}
</script>

<style>

</style>