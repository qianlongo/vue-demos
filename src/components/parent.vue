<template>
  <div class="sync-parent">
    我是父组件: {{ text }}
    <Child :text.sync="text" />
  </div>
</template>

<script>
import Child from './child.vue'

export default {
  name: 'SyncParent',
  data () {
    return {
      text: 'parent'
    }
  },
  components: {
    Child,
  }
}
</script>

<style>

</style>