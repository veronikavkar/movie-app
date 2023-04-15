<template>
  <div>
    <div class="dropdown">
      <div
        class="movie"
        v-for="film in searchedFilms"
        :key="film.filmId"
        @click="openFilm(film.filmId || film.kinopoiskId)"
      >
        <div class="movie__poster">
          <img :src="film.posterUrl" alt="" class="movie__img" />
        </div>
        <div class="movie__info">
          <p class="movie__name">{{ film.nameRu }}</p>
          <p class="movie__year">{{ film.year }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    searchedFilms() {
      return this.$store.state.searchedFilms;
    },
  },
  methods: {
    openFilm(filmId) {
      this.$router.push(`/films/${filmId}/`);
    },
  },
};
</script>

<style lang="scss">
.dropdown {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}
.movie {
  display: flex;
  flex-direction: column;
  padding-right: 34px;
  margin-bottom: 40px;
  height: 400px;
  &__name {
    color: white;
    font-size: 14px;
    padding-top: 10px;
  }
  &__year {
    color: #bdbdbd;
    font-size: 14px;
    padding-top: 5px;
  }
  &__img {
    width: 250px;
    height: 370px;
    object-fit: cover;
  }
}
</style>
