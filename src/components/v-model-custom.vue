<template>
  <div class="v-model-custom">
    <input type="text" :value="value" @input="onInput">
    <div class="v-model-custom-msg">{{ value }}</div>
  </div>
</template>

<script>

export default {
  name: 'VModalCustom',
  props: {
    value: {
      type: String,
    }
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style>

</style>