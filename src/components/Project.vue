<template>
  <div>
    <project-complete-start :project="project" />
  </div>
</template>

<script>
  import ProjectCompleteStart from "./ProjectCompleteStart.vue";
  import { Projects } from "../service/projectText.ts";
  export default {
    components: { ProjectCompleteStart },
    props: {},
    computed: {
      test() {
        console.log("this router", this.$route.params.name);
        return "puss";
      },
    },
    data() {
      return {
        project: undefined,
      };
    },
    mounted() {
      this.getProjectData();
    },
    methods: {
      getProjectData() {
        this.project = Projects[0];
      },
    },
  };
</script>

<style scoped></style>
