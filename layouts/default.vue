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
  mounted() {
    this.$store.dispatch("initLocalStorage");
  },
};
</script>
