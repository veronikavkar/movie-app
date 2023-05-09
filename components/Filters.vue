<template>
  <div>
    <div v-if="$store.state.isLoading">
      <Loading />
    </div>
    <div v-else class="search-tags">
      <ul class="search-tags__list">
        <li
          class="search-tags__item"
          v-for="genre in spliceGenres"
          :key="genre.id"
        >
          <button
            class="search-tags__btn"
            @click="selectGenre(genre)"
            v-bind:class="{ 'selected-button': selectedGenre === genre.genre }"
          >
            {{ genre.genre }}
          </button>
        </li>
      </ul>
      <v-list-group :value="false" class="filter">
        <template v-slot:activator>
          <v-list-item-title class="filter__top">фильтры</v-list-item-title>
        </template>
        <v-spacer></v-spacer>
        <v-list-item v-for="genre in splicGenresInDropdown" :key="genre.id">
          <v-list-item-content class="filter__content">
            <v-list-item-title>{{ genre.genre }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-checkbox
              v-model="selectedGenre"
              :value="genre.genre"
              color="#FFEE58"
              @click="selectGenre(genre)"
            ></v-checkbox>
          </v-list-item-action>
        </v-list-item>
      </v-list-group>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import Loading from "@/components/Loading.vue";

export default {
  name: "Filters",
  components: { Loading },
  data() {
    return {
      multiLine: true,
      snackbar: false,
    };
  },
  computed: {
    spliceGenres() {
      return this.$store.state.genres.slice(0, 9);
    },
    splicGenresInDropdown() {
      return this.$store.state.genres.slice(9, 16);
    },

    selectedGenre: {
      get() {
        return this.$store.state.selectedGenre;
      },
      set(genre) {},
    },
  },
  mounted() {
    this.$store.dispatch("fetchGenres");
  },

  methods: {
    ...mapActions(["fetchFilmsByGenre"]),
    ...mapMutations(["SET_SELECTED_GENRE"]),
    async selectGenre(genre) {
      this.SET_SELECTED_GENRE(genre.genre);
      await this.fetchFilmsByGenre(genre.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-tags {
  margin-top: 80px;
  display: flex;
  align-items: baseline;
  &__list {
    display: flex;
  }
  &__item {
    margin-right: 30px;
  }
  &__btn {
    position: relative;
  }
  &__btn::after {
    content: "";
    position: absolute;
    width: 100%;
    background: #ffee58;
    height: 3px;
    left: 0;
    bottom: 0;
  }
  &__btn::after {
    transform: scale(0, 1);
    transition: transform 0.3s ease;
  }
  &__btn:hover::after {
    transform: scale(1, 1);
  }
}

.selected-button {
  content: "";
  background: #ffee58;
  height: 3px;
  flex-direction: column-reverse;
}
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
