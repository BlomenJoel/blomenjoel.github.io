<template>
  <div class="test d-flex">
    <div class="pr-5 mr-5 text--config">
      <h2 class="white--text">{{ rubric }}</h2>
      <p class="white--text">{{ description }}</p>
      <v-btn>Gå till projekt</v-btn>
    </div>
    <img :src="getImgUrl()" class="img--max-width" :alt="imgSrc" />
  </div>
</template>

<script>
export default {
  props: {
    projectImage: String,
    rubric: String,
    description: String,
    imgSrc: String,
  },
  methods: {
    getImgUrl() {
      const img =  require.context('../assets', false);
      return img(this.imgSrc)
    },
  },
};
</script>

<style scoped>
.img--max-width {
  width: 50%;
  height: 50%;
}

.test {
  background-color: grey;
  padding: 3%;
}

.text--config {
  width: 40%;
  text-align: left;
}
.white--text {
  color: white;
}
</style>
