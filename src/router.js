import Vue from 'vue'
import VueRouter from 'vue-router'

const registerRoutes = () => {
  const contextInfo = require.context('./views', true, /.vue$/)
  const routes = contextInfo.keys().map((filePath) => {
    // filePath 形如 ./Home.vue、./modifiers/capture.vue
    // path我们希望是/home、/modifiers/capture
    // 所以需要把开头的./和.vue都替换为空
    const path = filePath.toLowerCase().replace(/^\.|\.vue/g, '')
    // name的话将/home、/modifiers/capture转成小驼峰即可
    // 把开头的/先替换掉，再把第一个/后的单词变成大写就可以了
    const name = path.replace(/^\//, '').replace(/\/(\w)/, ($0, $1) => $1.toUpperCase())
    // 通过require去读取.vue文件内容
    const component = require(`./views${filePath.replace(/^\./, '')}`).default

    return {
      path,
      name,
      component
    }
  })

  return routes
}

const routes = registerRoutes()

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
