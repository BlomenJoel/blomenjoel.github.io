import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Project from "./components/Project/Project.vue";
import StartPage from "./views/StartPage.vue";
import Gallery from "./components/Gallery.vue";
import Photo from "./components/Photo.vue";
const routes = [
  { path: "/project/:id", component: Project, name: "project" },
  { path: "/", component: StartPage, name: "home" },
  { path: "/photos", component: Gallery, name: "photos" },
  {
    path: "/photos/:id",
    name: "photo",
    component: Photo,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

const DEFAULT_TITLE = 'Joel Blomén Portfolio'

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
new Vue({
  el: "#app",
  router: router,
  render: (h) => h(App),
});
