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
    components: {},
    props: {
      background: String,
      project: Object,
    },
    computed: {},
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
    color: white;
    margin: auto;
    width: 40%;
  }
</style>
