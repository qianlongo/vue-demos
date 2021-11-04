<template>
  <div class="child">
    我是子组件: 
    <input type="text" v-model="value" @input="onInput">
  </div>
</template>

<script>
export default {
  name: 'child',
  props: {
    text: {
      type: String
    }
  },
  data () {
    return {
      value: this.text
    }
  },
  methods: {
    onInput () {
      this.$emit('update:text', this.value)
    }
  }
}
</script>

<style>
.child{
  padding-left: 10px;
}
</style>