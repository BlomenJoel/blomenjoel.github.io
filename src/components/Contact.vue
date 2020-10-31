<template>
  <div class="d-md-flex contact--height mx-5 my-2">
    <v-spacer />
    <v-icon>{{ phoneIcon }}</v-icon>
    <span class="pt-2 pl-2 pr-5 text--link">072-200 28 64</span>
    <a href="mailto: blomenjoel@gmail.com" class="d-flex">
      <v-icon>{{ emailIcon }} </v-icon>
      <p class="pt-2 pl-2 pr-5 text--link">
        blomenjoel@gmail.com
      </p>
    </a>
    <a :href="item.loc" download>
      <img src="@/assets/CV-logo.png" class="resume--size pt-1" />
      <span class="text--link pl-2 pt-2 text--size">CV</span>
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
        item: {loc: require("../assets/joelBlomenCv.pdf")},
        phoneIcon: mdiCellphone,
        emailIcon: mdiEmail,
      };
    },
  };
</script>

<style scoped>
  .resume--size {
    width: 2vw;
  }
  .contact--height {
    height: 5vh;
  }
  .text--black {
    color: black;
  }
  .text--size {
    font-size: 1vw;
  }
  @media only screen and (max-width: 600px) {
    .text--size {
      font-size: 13px;
    }
    .resume--size {
      width: 20px;
    }
    .contact--height {
      height: 30px;
    }
  }
</style>
