<template>
  <div :class="background">
  <div class="background--black__shade">
    <div class="pl-5 pb-5 d-flex padding-top total-text--size">
      <div class="px-md-5 pr-3 text-area--color">
        <h2>PROJEKT</h2>
        <p>{{ project.title }}</p>
      </div>
      <div class="text-area--size text-area--color  ">
        <h2>SUMMERING</h2>
        <p>{{ project.summary }}</p>
      </div>
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
  .belgium-background {
    background-image: url("../../assets/preview-belgium.png");
    background-size: 60%;
    background-color: white;
    background-position: center;
  }
  .belgium-background {
    background-image: url("../../assets/vindpinad-logo.png");
    background-size: 60%;
    background-color: white;
    background-position: center;
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
    .total-text--size{
      max-width: 70%;
      padding: auto;
    }
     .text-area--size {
    max-width: 100%;
  }
  }
</style>
