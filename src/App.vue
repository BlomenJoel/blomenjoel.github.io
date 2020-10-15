<template>
  <div id="app">
    <div class="d-flex pt-5 pb-3"  id="start">
      <v-spacer />
      <router-link class="router px-3 " to="/#start" @click.native="scrollFix('#start')"
        >START</router-link
      >
      <router-link
        class="router px-3"
        to="/#project"
        @click.native="scrollFix('#project')"
        >PROJEKT</router-link
      >
      <router-link class="router px-3" to="/#about" @click.native="scrollFix('#about')"
        >OM MIG</router-link
      >
      <v-spacer />
    </div>
    <router-view />
  </div>
</template>

<script>
  import "bootstrap/dist/css/bootstrap.css";
  import "bootstrap-vue/dist/bootstrap-vue.css";
  import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader
  import "./assets/global.css";

  const TIMEOUT = 1;
  export default {
    name: "App",
    mounted() {
      if (this.$route.hash)
        setTimeout(() => this.scrollFix(this.$route.hash), 1);
    },
    methods: {
      scrollFix(hashbang) {
        setTimeout(() => {
          location.href = hashbang;
        }, TIMEOUT);
      },
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
  }
  .router {
  color: rgb(100, 100, 100);
  font-size: 2em;
  font-weight: bold;
}
.router:hover {
  color: black;
  text-decoration: none;
}
</style>
