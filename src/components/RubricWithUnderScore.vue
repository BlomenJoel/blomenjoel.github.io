<template>
    <h1 class="z-index underscore text--center max-width" :class="colorTest">{{ title }}</h1>
</template>

<script>
export default {
  props: {
    title: String,
    color: String,
  },
  computed: {
    colorTest() {
      return `${this.color}--text`;
    },
  },
};
</script>

<style scoped>
.underscore {
  height: 100%;
  position: relative;
  bottom: 3vh;
  background-position: 9vw 1.5vw;
}
.green--text {
  background-image: linear-gradient(45deg, #bada55, #bada55);
}
.red--text {
  background-image: linear-gradient(45deg, #ffb7b7, #ffb7b7);
}
.blue--text {
  background-image: linear-gradient(45deg, #c6d1e4, #c6d1e4);
}
.max-width {
  width: 30vw;
}
</style>
