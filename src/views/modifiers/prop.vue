<template>
  <div class="prop">
    <div class="prop-item" :my-name="prop" ref="prop"></div>
    <div class="prop-item" :my-name.prop="prop2" ref="prop2"></div>

    <button @click="onGetResult">获取结果</button>
  </div>
</template>

<script>
export default {
  name: 'prop',
  data () {
    return {
      prop: 'hello prop',
      prop2: 'hello prop2'
    }
  },
  methods: {
    onGetResult () {
      const $refProp = this.$refs.prop
      const $refProp2 = this.$refs.prop2

      console.log($refProp.getAttribute('my-name'))
      console.log($refProp2.getAttribute('my-name'))
    }
  }
}
</script>

<style>

</style>