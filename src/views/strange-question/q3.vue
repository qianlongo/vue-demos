<template>
  <div class="q3">
    <Q3Demo :name="name" v-if="name === 'fatfish'" />
    <Q3Demo :name="name"  v-else />

    <button @click="onClick">click</button>
  </div>
</template>

<script>
import Q3Demo from '../../components/strange-question/Q3Demo'

export default {
  name: 'Q3',
  components: {
    Q3Demo
  },
  data () {
    return {
      name: 'fatfish'
    }
  },
  methods: {
    onClick () {
      this.name = this.name === 'fatfish' ? 'medium' : 'fatfish'
    }
  }
}
</script>

<style>

</style>