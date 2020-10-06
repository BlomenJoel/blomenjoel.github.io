<template>
  <div id="app">
    <start-page />
  </div>
</template>

<script>
  import StartPage from "./views/StartPage.vue";
  import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import Vuetify from 'vuetify'

Vue.use(Vuetify)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

  export default {
    name: "App",
    components: {
      StartPage,
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
