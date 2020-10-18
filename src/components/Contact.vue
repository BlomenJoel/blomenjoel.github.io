<template>
  <div class="d-flex">
  <v-icon>{{ phoneIcon }}</v-icon>
  <p> 072-200 28 64</p>
  <v-icon>{{ emailIcon }}</v-icon>
  <p> blomenjoel@gmail.com</p>
  </div>
</template>

<script>
  import { mdiCellphone } from '@mdi/js'
import {mdiEmail} from '@mdi/js'
export default {
  components: {},
  props: {},
  computed: {},
  data() {
    return {
        phoneIcon: mdiCellphone,
        emailIcon: mdiEmail,
    };
  },
};
</script>

<style scoped></style>
