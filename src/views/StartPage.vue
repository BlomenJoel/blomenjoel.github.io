<template>
  <div class="px-md-5 px-2">
    <p class="text--center">JOEL BLOMÉN</p>
    <div class="faux-gif" />
    <div class="d-flex top-rubric--position">
      <rubric-with-under-score
        class="raise-z-index"
        title="CREATIVITY"
        color="red"
      />
      <v-spacer />
      <rubric-with-under-score
        class="raise-z-index"
        title="BUSINESS DEV"
        color="blue"
      />
    </div>
    <div class="d-flex">
      <v-spacer/>
      <rubric-with-under-score
        class="text--center raise-z-index bottom-rubric--margin"
        title="UX"
        color="green"
      />
      <v-spacer/>
    </div>
    <work id="project" class="page-padding" />
    <about-me id="about" class="page-padding" />
  </div>
</template>

<script>
  import RubricWithUnderScore from "../components/RubricWithUnderScore.vue";
  import Work from "../components/Work.vue";
  import AboutMe from "../components/AboutMe.vue";
  export default {
    components: {
      RubricWithUnderScore,
      Work,
      AboutMe,
    },
  };
</script>

<style scoped>
  .bottom-rubric--margin {
    margin-top: 25%;
  }
  .raise-z-index {
    z-index: 2;
  }
  .top-rubric--position {
    padding-top: 10%;
    padding-left: 5%;
    padding-right: 5%;
  }
  .page-padding {
    padding-top: 15%;
  }
</style>
