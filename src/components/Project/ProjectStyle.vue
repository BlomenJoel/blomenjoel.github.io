<template>
  <div class="size--page">
    <div class="size--text">
      <h2>STYLEBOARD</h2>
      <p>{{project.colorText}}</p>
    </div>
    <div class="d-flex">
    <img :src="getImgUrl()" class="img--max-width" :alt="project.styleImg" />
  </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    project: Object,
  },
  computed: {
  },
  data() {
    return {};
  },
  methods: {
      getImgUrl() {
        const img = require.context("../../assets", false);
        return img(this.project.styleImg);
      },
  },
};
</script>

<style scoped>
.size--page {
  height: 80%;
   padding: 15% 10%;
}
.size--text {
  width: 40%;
  color:white;
  padding-right: 7%;
}
</style>
