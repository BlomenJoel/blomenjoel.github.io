<template>
  <div class="lightbox" @click="closeLightbox">
    <img :src="photoUrl(photo.filename)" />
  </div>
</template>

<script>
  import { photos } from "../service/photos.ts";
  export default {
    name: "Photo",
    data() {
      return {
        photos,
      };
    },
    computed: {
      photo() {
        return this.photos.find((photo) => {
          return photo.id === Number(this.$route.params.id);
        });
      },
    },
    methods: {
      photoUrl(filename) {
        return require(`../assets/photos/${filename}`);
      },
      closeLightbox() {
        this.$router.push("/photos");
      },
    },
  };
</script>

<style>
  .lightbox {
    margin-top: 1%;
    max-width: 100%;
    max-height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: grid;
  }
  .lightbox img {
    margin: auto;
    width: auto;
    height: 92vh;
  }
</style>
