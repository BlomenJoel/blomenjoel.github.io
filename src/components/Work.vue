<template>
  <div>
    <h1 class="pb-4 text--center color-underscore">PROJEKT</h1>
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
  import ProjectPreview from "./Project/ProjectPreview.vue";
  import { projectPreviewText } from "../service/projectText.ts";
  export default {
    components: { ProjectPreview },
    props: {},
    computed: {},
    data() {
      return {
        projects: projectPreviewText,
      };
    },
    methods: {
      routeToProject(project) {
        this.$router.push({
          name: project.key,
          params: { id: project.id },
        });
      },
    },
  };
</script>

<style scoped>
  .project-margin {
    margin: 0 0 2% 0;
  }
  .color-underscore {
    height: 100%;
    position: relative;
    bottom: 37px;
    background-position: 90px 20px;
    background-image: linear-gradient(45deg, #bada55, #bada55);
    max-width: 300px;
    max-height: 40px;
    margin: auto;
  }
</style>
