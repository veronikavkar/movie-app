<template>
  <div class="header">
    <div class="header__logo">
      <NuxtLink to="/"> <img src="@/assets/images/logo.png" alt="" /></NuxtLink>
    </div>

    <div class="header__right">
      <searchButton />
      <button class="header__btn" @click="openFavorites()">
        Избранное
        <v-badge
          v-if="this.$store.state.favorites.length > 0"
          dot
          color="#c92502"
        >
        </v-badge>
      </button>
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
    openFavorites() {
      this.$router.push("/favorites/Favorites");
    },
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
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
      width: 140px;
    }
  }
}
.v-badge--dot .v-badge__badge {
  inset: auto auto calc(100% - -8px) calc(100% - 0px) !important;
}
</style>
