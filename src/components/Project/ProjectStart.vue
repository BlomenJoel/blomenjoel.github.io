<template>
  <div :class="background">
    <div  class="pl-5 d-md-flex padding-top test">
      <div class="pr-md-5 text-area--color">
        <h2>PROJEKT</h2>
        <p>{{ project.title }}</p>
      </div>
      <div class="text-area--size text-area--color  ">
        <h2>SUMMERING</h2>
        <p>{{ project.summary }}</p>
      </div>
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
  background-image: url("../../assets/camera-background.png");
  background-size: 100%;
}
.calendar-background {
  background-image: url("../../assets/calendar-background.png");
  background-size: 100%;
}
.test {
  background-color: rgba(0, 0, 0, 0.4);
}
.text-area--size {
  max-width: 40%;
}
.text-area--color {
  color: white;
}
.padding-top {
  padding-top: 35%;
}
</style>
