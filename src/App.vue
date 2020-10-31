<template>
  <div id="app" class="pb-md-5 pb-2">
    <div class="height--router" id="start">
      <div class="py-4 d-flex ">
        <v-spacer />
        <router-link
          class="router px-3 "
          to="/#start"
          @click.native="scrollFix('#start')"
          ><h1 class="text--bold">START</h1></router-link
        >
        <router-link
          class="router px-3"
          to="/#project"
          @click.native="scrollFix('#project')"
          ><h1 class="text--bold">PROJEKT</h1></router-link
        >
        <router-link
          class="router px-3"
          to="/#about"
          @click.native="scrollFix('#about')"
          ><h1 class="text--bold">OM MIG</h1></router-link
        >
        <v-spacer />
      </div>
    </div>
    <transition name="slide-fade">
      <router-view class="child-view" />
    </transition>
    <contact />
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader
import "./assets/global.css";
import Contact from "./components/Contact.vue";

const TIMEOUT = 1;
export default {
  name: "App",
  mounted() {
    if (this.$route.hash) setTimeout(() => this.scrollFix(this.$route.hash), 1);
  },
  components: {
    Contact,
  },
  methods: {
    scrollFix(hashbang) {
      setTimeout(() => {
        location.href = hashbang;
      }, TIMEOUT);
    },
    beforeRouteUpdate(to, from, next) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
      next();
    },
  },
  data() {
    return {
      transitionName: "slide-left",
    };
  },
};
</script>

<style>
.height--router {
  height: 8vh;
}
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
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
