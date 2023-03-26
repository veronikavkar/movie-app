<template>
  <div class="slider">
    <h1 class="slider__title" v-if="this.similarFilms.length > 1">
      Похожие фильмы
    </h1>
    <v-sheet
      class="mx-auto mt-5"
      elevation="8"
      :style="{ backgroundColor: ' #211f1f' }"
    >
      <v-slide-group
        v-model="model"
        class="pa-4"
        active-class="success"
        show-arrows
        mobile-break-point="1000"
        center-active
      >
        <v-slide-item
          v-for="similarFilm in similarFilms"
          :key="similarFilm.filmId"
        >
          <v-card
            class="ma-2"
            width="260"
            :style="{ backgroundColor: ' #211f1f' }"
            @click="openFilm(similarFilm.filmId || similarFilm.kinopoiskId)"
          >
            <v-img :src="similarFilm.posterUrlPreview"></v-img>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
export default {
  props: {
    similarFilms: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      model: null,
    };
  },
  methods: {
    openFilm(filmId) {
      this.$router.push(`/films/${filmId}/`);
    },
  },
};
</script>

<style lang="scss">
.slider {
  margin-top: 40px;
  &__title {
    font-size: 22px;
    color: white;
  }
}

.v-icon.v-icon {
  color: white;
}
.v-sheet.v-card {
  padding-left: 15px;
}
.v-slide-group {
  max-width: 1150px;
}
.v-image__image {
  height: 370px;
  object-fit: cover;
}
.v-responsive {
  height: 370px;
}
</style>
