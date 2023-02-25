<template>
  <v-list-group :value="false" class="filter">
    <template v-slot:activator>
      <v-list-item-title class="filter__top">Фильтры</v-list-item-title>
    </template>
    <v-spacer></v-spacer>
    <v-list-item v-for="genre in genres" :key="genre">
      <v-list-item-content class="filter__content">
        <v-list-item-title>{{ genre }}</v-list-item-title>
      </v-list-item-content>
      <v-list-item-action>
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
      genres: [
        "Комедии",
        "Драмы",
        "Ужасы",
        "Боевики",
        "Триллеры",
        "Фантастика",
        "Криминал",
        "Биография",
        "Военный",
        "История",
      ],
    };
  },
};
</script>

<style lang="scss">
.filter {
  width: 200px;
  &__top {
    color: #ffee58;
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
