<template>
  <div class="container">
    <div v-if="$store.state.isLoading">
      <Loading />
    </div>

    <div v-else class="wrapper">
      <h1 class="title">Смотри Топ-20 фильмов по версии Кинопоиска</h1>
      <div
        class="carousel"
        :style="{ 'margin-left': '-' + 100 * currentSlideIndex + '%' }"
      >
        <div
          class="film"
          v-for="film in popularFilms"
          :key="film.currentFilmIndex"
        >
          <div class="film__img">
            <img :src="film.posterUrlPreview" alt="" />
          </div>
          <div class="film__info">
            <h3 class="film__title" style="padding-bottom: 10px">
              {{ film.nameRu }}
            </h3>
            <p class="film__year">
              {{ film.year }}
            </p>
            <span
              class="film__genre"
              v-for="{ genre } in film.genres"
              :key="genre.index"
            >
              {{ genre }}
            </span>
            <div class="film__rating" style="padding-top: 10px">
              <span><v-icon color="#FFEE58">mdi mdi-star</v-icon></span>
              <span style="padding-left: 10px">{{
                film.ratingKinopoisk || null
              }}</span>
            </div>
            <p class="film__description" style="padding-top: 10px">
              {{ film.description || null }}
            </p>
            <div class="film__button">
              <button class="btn-trailer" @click="openTrailer">
                Смотреть трейлер
              </button>
              <button class="btn-global">Смотреть фильм</button>
            </div>
          </div>
        </div>
      </div>
      <button v-if="currentFilmIndex > 0" class="arrow-prev" @click="prevSlide">
        <b-icon icon="arrow-left" aria-hidden="true"></b-icon>
      </button>
      <button class="arrow-next" @click="nextSlide">
        <b-icon icon="arrow-right" aria-hidden="true"></b-icon>
      </button>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
import SearchedFilms from "@/components/SearchedFilms.vue";
import { mapActions } from "vuex";
export default {
  name: "PopularFilm",
  components: { Loading, SearchedFilms },
  data() {
    return {
      popularFilms: [],
      currentFilmIndex: 0,
      currentSlideIndex: 0,
      trailers: [],
    };
  },

  async mounted() {
    await this.fetchFilms();
    await this.getFilmById(this.idForCurrentFilm);
    this.trailers = await this.getVideosById(this.idForCurrentFilm);
  },

  computed: {
    currentFilm() {
      return this.popularFilms[this.currentFilmIndex];
    },
    idForCurrentFilm() {
      return this.popularFilms[this.currentFilmIndex]?.filmId;
    },
  },

  methods: {
    ...mapActions(["getVideosById"]),
    async fetchFilms() {
      const { films } = await this.$axios.$get(
        "/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1"
      );
      this.popularFilms = films;
    },
    async prevSlide() {
      if (this.currentFilmIndex > 0) {
        this.currentFilmIndex--;
        this.currentSlideIndex--;
        await this.getFilmById(this.idForCurrentFilm);
        this.trailers = await this.getVideosById(this.idForCurrentFilm);
        console.log(this.trailers, "trailers");
      }
    },
    async nextSlide() {
      this.currentFilmIndex++;
      this.currentSlideIndex++;
      await this.getFilmById(this.idForCurrentFilm);
      this.trailers = await this.getVideosById(this.idForCurrentFilm);
    },

    async getFilmById(id) {
      if (!id) return;
      const film = await this.$axios.$get(`/api/v2.2/films/${id}`);
      Object.entries(film).forEach(([key, value]) => {
        this.$set(this.currentFilm, key, value);
      });
    },
    openTrailer() {
      window.open(this.trailers[0].url);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  justify-content: center;
  margin-top: 50px;
}
.title {
  font-size: 42px;
  text-align: center;
  padding-bottom: 51px;
  margin: 0;
  font-weight: 700;
  background: #c90000;
  background: linear-gradient(to top right, #c90000 22%, #ffee58 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.wrapper {
  max-width: 1000px;
  overflow: hidden;
  margin: 0 auto;
}
.carousel {
  transition: all ease 0.5s;
  display: flex;
}
.film {
  display: flex;
  flex-direction: row;
  min-width: 1000px;

  &__img {
    img {
      height: 300px;
    }
  }
  &__info {
    padding-left: 30px;
    max-width: 800px;
  }
  &__title {
    color: #f5f5f5;
  }
  &__year {
    color: #bdbdbd;
  }
  &__genre {
    color: #bdbdbd;
    font-size: 14px;
  }
  &__rating {
    display: flex;
    align-items: center;
  }
  &__description {
    color: #bdbdbd;
    font-size: 15px;
  }
  &__button {
    padding-top: 20px;
  }
}

.arrow-prev {
  background: transparent;
  border: none;
  font-size: 35px;
  color: #bdbdbd;
  position: absolute;
  left: 40px;
  top: 300px;
}
.arrow-next {
  background: transparent;
  border: none;
  font-size: 35px;
  color: #bdbdbd;
  position: absolute;
  right: 40px;
  top: 300px;
}
.btn-trailer {
  display: inline-block;
  text-decoration: none;
  color: inherit;
  padding: 13px 35px;
  background-color: #616161;
  border: none;
  color: #fff;
  border-radius: 78px;
  cursor: pointer;
  margin-right: 10px;
}
.btn-global {
  cursor: not-allowed;
}
</style>
