<template>
  <div>
    <project-start :project="project" />
  </div>
</template>

<script>
  import ProjectStart from "./ProjectStart.vue";
  import { Projects } from "../../service/projectText.ts";
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
        this.project = Projects.find(project => project.key === this.$route.params.key );
      },
    },
  };
</script>

<style scoped></style>
