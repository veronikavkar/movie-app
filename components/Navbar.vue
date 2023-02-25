<template>
  <div class="header">
    <div class="header__logo">
      <img src="@/assets/images/logo.png" alt="" />
    </div>
    <div>
      <button class="header__btn">Сериалы</button>
      <button class="header__btn">Фильмы</button>
    </div>
    <div class="header__right">
      <searchButton />
      <button class="header__btn">Фильтры</button>
    </div>
  </div>
</template>

<script>
import searchButton from "./searchButton.vue";
export default {
  name: "NuxtTutorial",
  components: { searchButton },
  computed: {
    hasToken() {
      return this.$store.getters.hasToken;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
/* .navbar-expand-lg .navbar-nav .nav-link {
  color: darkgrey;
} */
</style>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  &__btn {
    border: none;
    background-color: inherit;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    display: inline-block;
    color: white;
  }
  &__right {
    display: flex;
    align-items: baseline;
  }
  &__logo {
    img {
      width: 150px;
    }
  }
}
</style>
