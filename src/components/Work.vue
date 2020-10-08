<template>
  <div>
    <h1>Work</h1>
    <project
      v-for="project in projects"
      class="mx-3 my-3"
      :rubric="project.rubric"
      :key="project.rubric"
      :description="project.description"
      :imgSrc="project.imgSrc"
    />
  </div>
</template>

<script>
import Project from "../components/Project.vue";
import { projectText } from "../service/projectText.ts";
export default {
  components: { Project },
  props: {},
  computed: {},
  data() {
    return {
      projects: projectText,
    };
  },
};
</script>

<style scoped></style>
