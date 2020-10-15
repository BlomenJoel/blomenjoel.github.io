<template>
  <div>
    <h1 class="pb-4 text--center color-underscore">OM MIG</h1>
    <div class="d-flex">
      <div class="text-area--size">
        <p>
          Min profil är byggd på bredd. Eller nåt? 
        </p>
      </div>
      <img src="../assets/joel3.gif" class="text-area--size" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  computed: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.text-area--size {
  width: 50%;
}
 .color-underscore {
    height: 100%;
    position: relative;
    bottom: 37px;
    background-position: -90px 20px;
    background-image: linear-gradient(45deg,  #ffb7b7, #ffb7b7);
    max-width: 300px;
    max-height: 40px;
    margin: auto;
  }
</style>
