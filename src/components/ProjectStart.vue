<template>
  <div :class="background" class="d-flex">
    <div class="pr-5">
      <h2>PROJEKT</h2>
      <p>{{project.title}}</p>
    </div>
    <div>
      <h2>SUMMERING</h2>
      <p>{{project.summary}}</p>
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
</style>
