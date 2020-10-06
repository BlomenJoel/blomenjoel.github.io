<template>
  <div class="padding">
    <div class="d-flex">
      <v-spacer />
      <p>JOEL BLOMÉN</p>
      <v-spacer />
    </div>

    <img src="../assets/joel3.gif" class="max-width-gif" />
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
    <div class="d-flex px-5 bottom-rubric--padding raise-z-index">
      <v-spacer />
      <rubric-with-under-score class="raise-z-index" title="UX" color="green" />
      <v-spacer />
    </div>
    <work class="page-padding" />
  </div>
</template>

<script>
import RubricWithUnderScore from "../components/RubricWithUnderScore.vue";
import Work from "../components/Work.vue";

export default {
  components: {
    RubricWithUnderScore,
    Work,
  },
};
</script>

<style scoped>
.max-width-gif {
  display: block;
  width: 100%;
  position: absolute;
}
.bottom-rubric--padding {
  padding-top: 38%;
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
  padding-top: 20%;
}
</style>
