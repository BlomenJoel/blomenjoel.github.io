<template>
  <div class="d-flex fade">
    <div class="pr-md-5 mr-5 text--config">
      <h2 class="white--text">{{ rubric }}</h2>
      <p class="white--text">{{ description }}</p>
      <button class="button--style" @click="$emit('clicked:more')">
        VISA MER
      </button>
    </div>
    <img :src="getImgUrl()" class="img--max-width" :alt="imgSrc" />
  </div>
</template>

<script>
export default {
  props: {
    rubric: String,
    description: String,
    imgSrc: String,
  },
  methods: {
    getImgUrl() {
      const img = require.context("../../assets", false);
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
}
.white--text {
  color: white;
}
.button--style {
  width: 12vw;
  padding: 1vw 1vh;
  background-color: white;
  font-size: 1vw;
  border-radius: 0.5vh;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}
.button--style:hover {
  background-color: #bdbdbd;
}
@media only screen and (max-width: 600px) {
  .button--style {
    width: 120px;
    padding: 5px 7px;
    border-radius: 3px;
    font-size: 12px;
  }
}
</style>
