<template>
  <div class="q1">
    <Q1List :list="list" v-if="list.length"/>
  </div>
</template>

<script>
import Q1List from '../../components/strange-question/Q1List'

export default {
  name: 'Q1',
  data () {
    return {
      list: []
    }
  },
  components: {
    Q1List
  },
  mounted() {
    setTimeout(() => {
      this.list =[ 'fatfish', 'medium' ]
    }, 3000)
  },
}
</script>

<style>

</style>