<template>
  <div class="background--color">
    <project-start :project="project" class="page--padding-bottom"/>
    <project-background :project="project" class="page--padding-bottom"/>
    <project-vision :project="project"/>
    <!-- <project-style :project="project" class="page--padding-bottom"/> -->
    <project-result :project="project"/> 
  </div>
</template>

<script>
  import ProjectStart from "./ProjectStart.vue";
  import ProjectBackground from "./ProjectBackground.vue";
  import ProjectVision from "./ProjectVision.vue";
  // import ProjectStyle from "./ProjectStyle.vue";
  import ProjectResult from "./ProjectResult.vue";
  import { Projects } from "../../service/projectText.ts";
  export default {
    components: { ProjectStart, ProjectBackground, ProjectVision, 
    // ProjectStyle,
     ProjectResult },
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
        this.project = Projects.find(project => project.key === this.$route.params.id );
      },
    },
  };
</script>

<style scoped>
.page--padding-bottom{
  margin-bottom: 20%;
}
.background--color{
background: black;
}</style>
