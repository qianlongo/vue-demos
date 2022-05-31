<template>
  <Q2Container>
    <!-- 11 -->
    <div className="name-list" v-for="(name, index) in list" :key="index">{{ name }}</div>
  </Q2Container>
</template>

<script>
import Q2Container from '../../components/strange-question/Q2Container'

export default {
  name: 'Q1',
  components: {
    Q2Container
  },
  data () {
    return {
      list: [ 'fatfish' ]
    }
  },
  mounted () {
    // console.log(this.$children)
  }
}
</script>

<style>

</style>