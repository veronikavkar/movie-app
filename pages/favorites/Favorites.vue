<template>
  <div>
    <h1 class="title">Избранное</h1>
    <div class="favorites">
      <div
        class="favorites-movie"
        v-for="film in favorites"
        :key="film"
        @click="openFilm(film.filmId || film.kinopoiskId)"
      >
        <div class="favorites-movie__poster">
          <img :src="film.posterUrl" alt="" />
        </div>
        <div class="favorites-movie__info">
          <p class="favorites-movie__name">{{ film.nameRu }}</p>
          <p class="favorites-movie__year">{{ film.year }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    favorites() {
      return this.$store.state.favorites;
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
.title {
  font-size: 22px;
  color: white;
  margin-top: 30px;
}
.favorites {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}
.favorites-movie {
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  margin-bottom: 30px;
  cursor: pointer;
  &__year {
    color: #bdbdbd;
    font-size: 12px;
    padding-top: 5px;
  }
  &__name {
    color: white;
    font-size: 16px;
    padding-top: 10px;
  }
  &__poster {
    img {
      height: 250px;
      width: auto;
      object-fit: cover;
    }
  }
}
</style>
