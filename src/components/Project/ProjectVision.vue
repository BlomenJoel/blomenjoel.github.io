<template>
  <div>
    <div class="size--page">
      <div class="size--text" :class="project.background">
        <h2>VISION</h2>
        <p>{{ project.visionText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.size--page {
  height: 80%;
  padding: 15%;
}
.size--text {
  color: white;
  margin: auto;
  width: 40%;
}
@media only screen and (max-width: 600px) {
  .size--text {
    width: 80%;
  }
  .size--page {
    height: 80%;
    padding: 8% 5%;
  }
}
</style>
