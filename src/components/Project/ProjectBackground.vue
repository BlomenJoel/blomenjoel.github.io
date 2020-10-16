<template>
  <div :class="project.background">
  <div class="size--page">
    <div class="size--text">
      <h2>BAKGRUND</h2>
      <p>{{project.backgroundText}}</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    background: String,
    project: Object,
  },
  computed: {
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
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
.camera-background {
  background-image: url("../../assets/italy-window.jpg");
  background-size: 100%;
}
.calendar-background {
  background-image: url("../../assets/calendar-background.png");
  background-size: 100%;
}
</style>
