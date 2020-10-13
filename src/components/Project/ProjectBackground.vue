<template>
  <div class="d-flex">
    <div class="px-5">
      <h2>BAKGRUND</h2>
      <p></p>
    </div>
    <img :src="getImgUrl" class="img--max-width" :alt="imgSrc" />
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    imgSrc: String,
  },
  computed: {
    getImgUrl() {
      const img = require.context("../../assets", false);
      return img(this.imgSrc);
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.img--max-width{
    max-width: 60%;
}</style>
