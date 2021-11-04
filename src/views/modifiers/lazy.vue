<template>
  <div class="lazy">
    <div class="lazy-item">
      <input type="text" v-model="text">
      <p>无.lazy: {{ text }}</p>
    </div>

    <div class="lazy-item">
      <input type="text" v-model.lazy="text2">
      <p>.lazy: {{ text2 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lazy',
  data () {
    return {
      text: '',
      text2: ''
    }
  }
}
</script>

<style>
.lazy-item, p{
  padding-top: 10px;
}
</style>