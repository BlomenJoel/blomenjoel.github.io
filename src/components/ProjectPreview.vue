<template>
  <div class="d-flex fade">
    <div class="pr-5 mr-5 text--config">
      <h2 class="white--text">{{ rubric }}</h2>
      <p class="white--text">{{ description }}</p>
      <v-btn @click="$emit('clicked:more')">Gå till projekt</v-btn>
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
        const img = require.context("../assets", false);
        return img(this.imgSrc);
      },
    },
  };
</script>

<style scoped>
  .img--max-width {
    width: 50%;
    height: 50%;
  }

  .fade {
    background: linear-gradient(#b1b1b1, #b1b1b1 50%, #151414 50%, #333);
    background-size: 100% 200%;
    transition: all 0.2s ease;
    opacity: 1 !important;
  }

  .fade:hover {
    background-position: 100% 100%;
  }

  .fade {
    animation: down-bump 0.4s ease;
    transform: scale(1);
    padding: 2em;
  }
  .fade:hover {
    animation: up-bump 0.4s ease;
    transform: scale(1.02);
  }

  @keyframes up-bump {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.02);
    }
  }
  @keyframes down-bump {
    0% {
      transform: scale(1.02);
    }
    100% {
      transform: scale(1);
    }
  }

  .text--config {
    width: 40%;
    text-align: left;
  }
  .white--text {
    color: white;
  }
</style>
