<template>
  <div>
  <h3>{{test}}</h3>

  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  computed: {
    test(){
      console.log('this router', this.$route.params.name)
      return 'puss'
    }
  },
  data() {
    return {};
  },
};
</script>

<style scoped>

</style>
