import Vue from 'vue'
import VueRouter from 'vue-router'

const registerRoutes = () => {
  const contextInfo = require.context('./views', true, /.vue$/)
  const routes = contextInfo.keys().map((filePath) => {
    const path = filePath.toLowerCase().replace(/^\.|\.vue/g, '')
    const name = path.replace(/^\//, '').replace(/\/(\w)/, ($0, $1) => $1.toUpperCase())
    const module = require(`./views${filePath.replace(/^\./, '')}`)

    return {
      path,
      name,
      component: module.default
    }
  })

  return routes
}

const routes = registerRoutes()

console.log(routes, '----routes')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
