<template>
  <div class="style" :style="[ style, style2 ]"></div>
</template>

<script>
export default {
  name: 'style',
  data () {
    return {
      style: {
        width: '100%',
        height: '500px',
      },
      style2: {
        backgroundImage: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
        borderRadius: '10px',
      }
    }
  }
}
</script>

<style scoped>

</style>