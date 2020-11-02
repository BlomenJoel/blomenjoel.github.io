<template>
  <div :class="background">
    <div class="pl-5 pb-5 d-flex padding-top background--black__shade">
      <div class="px-md-5 px-3 text-area--color">
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
    background-color: white;
  }
  .calendar-background {
    background-image: url("../../assets/calendar-background.png");
    background-size: 100%;
    background-color: white;
  }
  .background--black__shade {
    background-color: rgba(0, 0, 0, 0.6);
  }
  .text-area--size {
    max-width: 40%;
  }
  .text-area--color {
    color: white;
  }
  .padding-top {
    padding-top: 30%;
  }
  @media only screen and (max-width: 600px) {
    .padding-top {
      padding-top: 20px;
    }
  }
</style>
