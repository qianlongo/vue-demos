<template>
  <div class="q3-demo">
    {{ name }}
  </div>
</template>

<script>
export default {
  name: 'Q1List',
  props: {
    name: {
      type: String,
    }
  },
  mounted () {
    console.log('mounted', this.name);
  },
  beforeUpdate() {
    console.log('beforeUpdate', this.name);
  },
}
</script>

<style>

</style>