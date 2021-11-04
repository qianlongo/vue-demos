<template>
  <div class="number">
    <div class="number-item">
      <p>无.number </p>
      <input type="number" v-model="number">
    </div>
    <div class="number-item">
      <p>type:text .number </p>
      <input type="text" v-model.number="number1">
    </div>
    <div class="number-item">
      <p>type:number .number </p>
      <input type="number" v-model.number="number2">
    </div>
  </div>
</template>

<script>
export default {
  name: 'lazy',
  data () {
    return {
      number: 0,
      number1: '',
      number2: '',
    }
  },
  watch: {
    number (newVal) {
      console.log(typeof newVal, newVal)
    },
    number1 (newVal) {
      console.log(typeof newVal, newVal)
    },
    number2 (newVal) {
      console.log(typeof newVal, newVal)
    },
  }
}
</script>

<style>
.number-item, p{
  padding-top: 10px;
}
</style>