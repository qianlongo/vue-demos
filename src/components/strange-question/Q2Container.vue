<template>
  <div class="children-container" v-if="$slots.default">
    <p>The content of children is:</p>
    <slot></slot>
  </div>
  <div v-else className="empty">empty</div>
</template>

<script>
export default {
  name: 'Q2Container',
  mounted () {
    console.log(this.$slots.default)
  }
}
</script>

<style>

</style>