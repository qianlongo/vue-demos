<template>
  <div class="dynamic-slot">
    <div class="header">
      我是头部
      <slot name="head"></slot>
    </div>
    <div class="body">
      我是body
      <slot name="body"></slot>
    </div>
    <div class="footer">
      我是底部
      <slot name="footer"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: 'slotBase'
}
</script>

<style>

</style>