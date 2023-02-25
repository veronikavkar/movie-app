<template>
  <div class="container">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped>
/* .container {
  height: 100vh;
} */
</style>
