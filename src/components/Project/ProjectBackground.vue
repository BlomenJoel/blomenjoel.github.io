<template>
  <div :class="project.background">
    <div class="size--page">
      <div class="size--text">
        <h2>BAKGRUND</h2>
        <p>{{ project.backgroundText }}</p>
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
    padding: 15% 10%;
  }
  .size--text {
    width: 40%;
    color: white;
    padding-right: 7%;
  }
  .camera-background {
    background-image: url("../../assets/italy-window.jpg");
    background-size: 100%;
  }
  .calendar-background {
    background-image: url("../../assets/photos/sara-on-rock.png");
    background-size: contain;
    background-position: center;
  }
   .belgium-background {
    background-image: url("../../assets/background-belgium.jpg");
    background-size: contain;
    background-position: center;
  }
   .vindpinad-background {
    background-image: url("../../assets/vindpinad-background.jpg");
    background-size: contain;
    background-position: center;
  }
  @media only screen and (max-width: 600px) {
    .size--text {
      width: 80%;
      color: white;
      padding: 0;
      margin: auto;
    }
    .size--page {
      height: 80%;
      padding: 8% 15% 8% 5%;
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
</style>
