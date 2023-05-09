<template>
  <div class="dropdown">
    <input
      class="dropdown-input"
      v-model="searchInput"
      @keyup.enter="searchMovies(filmId)"
      :placeholder="placeholder"
      @focus="showOptions()"
      @blur="exit()"
    />

    <div
      class="dropdown-content"
      v-if="searchedFilms.length > 1 || isSearchOpen === true"
    >
      <div
        class="dropdown-item"
        v-for="film in searchedFilms"
        :key="film.filmId"
        @click="openFilm(film.filmId || film.kinopoiskId)"
      >
        <div class="item-poster">
          <img :src="film.posterUrl" alt="" />
        </div>
        <div class="item-info">
          <p class="item-info__name">{{ film.nameRu }}</p>
          <p class="item-info__year">{{ film.year }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  data: () => ({
    searchInput: "",
    placeholder: "Фильмы и сериалы",
    isSearchOpen: false,
  }),
  computed: {
    searchedFilms() {
      return this.$store.state.searchedFilms;
    },
  },
  watch: {
    searchInput(newValue, oldValue) {
      this.searchMovies(newValue);
    },
  },
  methods: {
    ...mapActions(["searchMovies"]),
    ...mapMutations(["SET_SEARCHED_INPUT", " SET_SEARCHED_FILMS"]),
    openFilm(filmId) {
      this.$router.push(`/films/${filmId}/`);
    },
    showOptions() {
      this.searchInput = "";
      this.isSearchOpen = true;
    },
    exit() {
      setTimeout(() => {
        this.isSearchOpen = false;
        this.searchInput = "";
      }, 200);
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: block;
  margin: auto;
}
.dropdown-input {
  background: #fff;
  cursor: pointer;
  border: 1px solid #e7ecf5;
  border-radius: 3px;
  color: #333;
  display: block;
  font-size: 0.8em;
  padding: 6px;

  min-width: 350px;
  &:hover {
    background: #f8f8fa;
  }
}
.dropdown-content {
  position: absolute;
  background-color: #fff;

  width: 350px;
  min-height: 150px;
  border: 1px solid #e7ecf5;
  box-shadow: 0px -8px 34px 0px rgba(0, 0, 0, 0.05);
  overflow: auto;
  z-index: 1;
  display: flex;
  margin-bottom: 37px;
  flex-direction: column;
  .dropdown-item {
    color: black;
    font-size: 0.7em;
    line-height: 1em;
    padding: 8px;
    text-decoration: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: #e7ecf5;
    }
  }
}
.item-poster {
  img {
    object-fit: cover;
    width: 40px;
    height: auto;
  }
}
.item-info {
  padding-left: 20px;
  &__name {
    font-size: 15px;
    padding-top: 10px;
  }
  &__year {
    color: #bdbdbd;
    font-size: 15px;
    padding-top: 12px;
  }
}
</style>
