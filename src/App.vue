<template>
  <div id="app">
  <div class="d-flex">
  <router-link to="">START</router-link>
  <router-link to="">PROJEKT</router-link>
  <router-link to="">OM MIG</router-link>
  </div>
    <router-view />
  </div>
</template>

<script>
  import "bootstrap/dist/css/bootstrap.css";
  import "bootstrap-vue/dist/bootstrap-vue.css";
  import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader
  import "./assets/global.css"
  export default {
    name: "App",
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
