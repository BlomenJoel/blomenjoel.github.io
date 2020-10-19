<template>
  <div class="d-flex contact--height">
    <v-spacer />
    <v-icon>{{ phoneIcon }}</v-icon>
    <p class="pt-3 pl-2 pr-5">072-200 28 64</p>
    <v-icon>{{ emailIcon }}</v-icon>
    <p class="pt-3 pl-2 pr-5">blomenjoel@gmail.com</p>
    <a :href="item.loc" download>
      <img src="@/assets/cv-icon.jpg" class="resume--size pt-1" />
    </a>
    <v-spacer />
  </div>
</template>

<script>
  import { mdiCellphone } from "@mdi/js";
  import { mdiEmail } from "@mdi/js";
  export default {
    components: {},
    props: {},
    computed: {},
    data() {
      return {
        item: { loc: require("../assets/italy-2.jpg") },
        phoneIcon: mdiCellphone,
        emailIcon: mdiEmail,
      };
    },
  };
</script>

<style scoped>
  .resume--size {
    width: 30;
    height: 40px;
  }
  .contact--height {
    height: 56px;
  }
</style>
