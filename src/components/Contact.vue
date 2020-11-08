<template>
  <div class="d-flex contact--height mx-5 py-2">
    <v-spacer />
    <div class="d-flex pl-2 p-md-0">
      <v-icon>{{ phoneIcon }}</v-icon>
      <p class=" pl-2 pt-2 pr-md-5 text--link">072-200 28 64</p>
    </div>
    <a href="mailto: blomenjoel@gmail.com" class="d-flex px-3 p-md-0">
      <v-icon>{{ emailIcon }} </v-icon>
      <p class=" pl-2 pt-2 pr-5 text--link" v-if="$vuetify.breakpoint.mdAndUp">
        blomenjoel@gmail.com
      </p>
    </a>
    <a :href="item.loc" download class="d-flex px-3 p-md-0">
      <v-icon>{{ cvIcon }} </v-icon>
      <p class="text--link  pt-2 pl-2 " v-if="$vuetify.breakpoint.mdAndUp">CV</p>
    </a>
    <v-spacer/>
  </div>
</template>

<script>
import { mdiCellphone } from "@mdi/js";
import { mdiEmail } from "@mdi/js";
import { mdiFileDocumentOutline } from '@mdi/js';
export default {
  data() {
    return {
      item: { loc: require("../assets/joelBlomenCv.jpg") },
      phoneIcon: mdiCellphone,
      emailIcon: mdiEmail,
      cvIcon: mdiFileDocumentOutline
    };
  },
};
</script>

<style scoped>
.resume--size {
  width: 2vw;
}
.text--black {
  color: black;
}
.cv--text__size {
  font-size: 1vw;
}
@media only screen and (max-width: 600px) {
  .cv--text__size {
    font-size: 13px;
  }
  .resume--size {
    width: 20px;
  }
}
</style>
