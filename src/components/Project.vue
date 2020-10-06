<template>
  <div class="test d-flex">
    <div class="pr-5 mr-5 text--width">
      <h1 class="white--text">{{ rubric }}</h1>
      <p class="white--text">{{ description }}</p>
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
  background-color: black;
  padding: 6%;
}

.text--width {
  width: 30%;
}
.white--text {
  color: white;
}
</style>
