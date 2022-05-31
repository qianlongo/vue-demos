<template>
  <div class="name-list-container">
    <div className="name-list-item" v-for="(name, index) in list" :key="index">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: 'Q1List',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
}
</script>

<style>

</style>