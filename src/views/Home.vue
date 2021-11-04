<template>
  <div class="home">
    <ul>
      <li v-for="(route, i) in routes" :key="i" @click="goView(route)">
        {{ route.path }}
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      routes: []
    }
  },
  mounted () {
    this.setRoutes()
  },
  methods: {
    setRoutes () {
      this.routes = this.$router.options.routes
    },
    goView (route) {
      const { name } = route
      this.$router.push({
        name
      })
    }
  }
}
</script>

<style scoped>
  .home li{
    padding-top: 10px;
    cursor: pointer;
  }
</style>
