<template>
  <v-list-group :value="false" class="filter">
    <template v-slot:activator>
      <v-list-item-title class="filter__top">фильтры</v-list-item-title>
    </template>
    <v-spacer></v-spacer>
    <v-list-item v-for="{ genre } in splicaGenres" :key="genre.id">
      <v-list-item-content class="filter__content">
        <v-list-item-title>{{ genre }}</v-list-item-title>
      </v-list-item-content>
      <v-list-item-action v-model="selectedGenres">
        <v-checkbox color="#FFEE58"></v-checkbox>
      </v-list-item-action>
    </v-list-item>
  </v-list-group>
</template>

<script>
export default {
  data() {
    return {
      multiLine: true,
      snackbar: false,
      selectedGenres: [],
    };
  },
  computed: {
    splicaGenres() {
      return this.$store.state.genres.slice(9, 16);
    },
  },
};
</script>

<style lang="scss">
.filter {
  width: 200px;
  &__top {
    color: white;
  }
  &__content {
    color: white;
  }
}

.v-input--selection-controls__input .v-icon {
  color: white !important;
}
.v-list-group__header__append-icon .v-icon {
  color: #ffee58 !important;
}
</style>
