<template>
  <div>
    <project-start :project="project" class="page--padding-bottom"/>
    <project-background :imgSrc="project.backgroundImgSrc"/>
  </div>
</template>

<script>
  import ProjectStart from "./ProjectStart.vue";
  import ProjectBackground from "./ProjectBackground.vue";
  import { Projects } from "../../service/projectText.ts";
  export default {
    components: { ProjectStart, ProjectBackground },
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

<style scoped>
.page--padding-bottom{
  margin-bottom: 10%;
}</style>
