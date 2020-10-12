<template>
  <div :class="background" class="pl-5 d-md-flex padding-top">
    <div class="pr-md-5 text-area--alignment">
      <h2>PROJEKT</h2>
      <p>{{ project.title }}</p>
    </div>
    <div class="text-area--size text-area--alignment  ">
      <h2>SUMMERING</h2>
      <p>{{ project.summary }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: { project: Object },
    computed: {
      background() {
        return this.project.background;
      },
    },
    data() {
      return {};
    },
  };
</script>

<style scoped>
  .camera-background {
    background-image: "../assets/camera-background.png";
  }
  .text-area--size {
    max-width: 40%;
  }
  .text-area--alignment {
    text-align: left;
  }
  .padding-top {
    padding-top: 35%;
  }
</style>
