<template>
<div >
  <div class="size--page">
    <div class="size--text" :class="project.background">
      <h2>VISION</h2>
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
  position: relative;
  background-position: 120px 110px;
    background-size: 60%;
     height: 100%;
      padding-bottom: 20%;
   
}
.calendar-background {
       height: 100%;
    position: relative;
    padding: 10px;
    background-position: 30px 20px;
    background-image: linear-gradient(45deg, #373e4b, #373e4b);
    margin: auto;
}
</style>
