<template>
  <div>
    <project-start :project="project" />
  </div>
</template>

<script>
  import ProjectStart from "./ProjectStart.vue";
  import { Projects } from "../service/projectText.ts";
  export default {
    components: { ProjectStart },
    props: {},
    computed: {},
    data() {
      return {
        project: Projects,
      };
    },
    created() {
      this.getProjectData();
    },
    methods: {
      getProjectData() {
        console.log("projects", Projects);
        this.project = Projects[0];
      },
    },
  };
</script>

<style scoped></style>
