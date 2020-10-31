<template>
  <div>
    <h1 class="text--white text--center">RESULTAT</h1>
    <video :src="videoUrl(project.video)" controls class="video--size" />
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
  methods: {
    videoUrl(video) {
      return require(`../../assets/${video}`);
    },
  },
};
</script>

<style>
.text--white {
  color: white;
}

.video--size {
  display: block;
  margin: 0 auto;
  width: 60%;
}
</style>
