<template>
  <div>
    <h1 class="mb-4 text--center color-underscore">PROJEKT</h1>
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
    background-image: linear-gradient(45deg, #bada55, #bada55);
    margin: auto;
    background-position: 9vw 1.5vw;
    width: 30vw;
    max-height: 3vw;
    padding-bottom: 1vw;
  }
  @media only screen and (max-width: 600px) {
    .color-underscore {
      background-position: 60px 12px;
      width: 160px;
      max-height: 20px;
      padding-bottom: 10xp;
    }
  }
</style>
