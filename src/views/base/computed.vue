<template>
  <div class="computed">
    <button @click="onAdd">+10</button>
    <div>计算结果：{{ num3 }}</div>
  </div>
</template>

<script>
export default {
  name: 'computed',
  data () {
    return {
      num1: 10,
      num2: 10,
    }
  },
  computed: {
    num3 () {
      return this.num1 + this.num2
    }
  },
  methods: {
    onAdd () {
      this.num1 += 10
    }
  }
}
</script>

<style>

</style>