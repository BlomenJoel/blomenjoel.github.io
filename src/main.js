
import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Project from './components/Project/Project.vue'
import StartPage from './views/StartPage.vue'
const routes = [
  { path: '/project/:name', component: Project, name:'project' },
  { path: '/', component: StartPage, name:'home'},
]

const router = new VueRouter({
  mode: 'history',
  routes,
})


Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use( IconsPlugin)
new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
})