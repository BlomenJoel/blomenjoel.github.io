<template>
<div >
  <div class="size--page">
    <div class="size--text background--size" :class="project.background">
      <h2>Vision</h2>
      <p>{{project.visionText}}</p>
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
  computed:{
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
   padding: 15%;
}
.size--text {
  color:white;
  margin: auto;
  width: 40%;
}
.camera-background {
  background-image: url("../../assets/camera-triangle.png");
    background-size: 60%;
   
}
.calendar-background {
  background-image: url("../../assets/calendar-background.png");
  background-size: 100%;
}
.background--size {
     height: 100%;
  position: relative;
  background-position: 120px 110px;
      padding-bottom: 20%;

}
</style>
