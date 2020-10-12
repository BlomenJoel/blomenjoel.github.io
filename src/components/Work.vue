<template>
  <div>
    <h1 class="pb-4">PROJEKT</h1>
    <project-preview
      v-for="project in projects"
      class="project-margin"
      :rubric="project.rubric"
      :key="project.rubric"
      :description="project.description"
      :imgSrc="project.imgSrc"
      @clicked:more="routeToProject(project)"
    />
  </div>
</template>

<script>
import ProjectPreview from "../components/ProjectPreview.vue";
import { projectText } from "../service/projectText.ts";
export default {
  components: { ProjectPreview },
  props: {},
  computed: {},
  data() {
    return {
      projects: projectText,
    };
  },
  methods: {
    routeToProject(project) {
      this.$router.push({ name: "project", params: { name: project.rubric } });
    },
  },
};
</script>

<style scoped>
.project-margin {
  margin: 0 2% 2% 2%;
}
</style>
