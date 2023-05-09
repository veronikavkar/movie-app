<template>
  <div class="await-films">
    <h1 class="title" v-if="this.selectedGenre">
      {{ selectedGenre[0].toUpperCase() + selectedGenre.slice(1) }}
    </h1>
    <h1 class="title" v-else>
      {{ title }}
    </h1>
    <div class="movie-grid">
      <div
        class="movie"
        v-for="film in $store.state.films"
        :key="film.filmId"
        @click="openFilm(film.filmId || film.kinopoiskId)"
      >
        <div class="movie__poster">
          <img :src="film.posterUrl" alt="" class="movie__img" />
        </div>
        <div class="movie__info">
          <p class="movie__year">{{ film.year }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Самые ожидаемые премьеры",
    };
  },
  mounted() {
    this.$store.dispatch("fetchFilms");
    this.$store.commit("CLEAR_FILTERS");
  },
  computed: {
    selectedGenre() {
      return this.$store.state.selectedGenre;
    },
  },

  methods: {
    openFilm(filmId) {
      this.$router.push(`/films/${filmId}/`);
    },
  },
};
</script>

<style lang="scss" scoped>
.await-films {
  margin-top: 40px;
}
.title {
  font-size: 22px;
}
.movie-grid {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}
.movie {
  display: flex;
  flex-direction: column;
  padding-right: 35px;
  margin-bottom: 30px;
  height: 400px;
  cursor: pointer;
  &__year {
    color: #bdbdbd;
    font-size: 14px;
    padding-top: 10px;
  }
  &__img {
    width: 250px;
    height: 370px;
    object-fit: cover;
  }
}
</style>
