<template>
  <transition name="fade" mode="out-in">
    <div class="single-movie">
      <div class="movie-left">
        <div class="movie-left__name">
          <h1 v-if="!film.logoUrl">{{ film.nameRu }}</h1>
          <img v-else :src="film.logoUrl" alt="" />
        </div>
        <div class="movie-left__data">
          <div class="movie-left__rating">
            <div><v-icon color="#FFEE58">mdi mdi-star</v-icon></div>
            <span style="padding-left: 10px">{{ film.ratingKinopoisk }}</span>
          </div>
          <div class="movie-left__info">
            <span>{{ film.startYear || film.year }}</span>
            <span>
              {{ splitedGenres }}
            </span>

            <span>{{ countries }} </span>
            <span>18+</span>
          </div>
          <div class="movie-left__discription">
            <p>{{ film.description || film.shortDescription }}</p>
          </div>
          <div class="movie-left__buttons">
            <button class="btn-global">
              <v-icon color="#FFFFFF">mdi mdi-play</v-icon>
              <span>Смотреть фильм</span>
            </button>
            <button class="btn-trailer">Трейлер</button>
            <button
              class="btn-favorites"
              @click.stop="addFilmToFavorites(film)"
            >
              <v-icon color="#FFFFFF">mdi mdi-bookmark -outline</v-icon>
            </button>
          </div>
        </div>
      </div>
      <div class="movie-right"></div>
      <img class="movie-right__img" :src="film.posterUrlPreview" />
    </div>
  </transition>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "single-movie",
  props: {
    film: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    splitedGenres() {
      return this.film.genres.map((item) => item.genre).join(", ");
    },
    countries() {
      return (this.film.countries || []).map((item) => item.country).join(",");
    },
  },
  methods: {
    ...mapActions(["addFilmToFavorites"]),
  },
};
</script>

<style lang="scss">
.single-movie {
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
  align-items: center;
}
.movie-left {
  max-width: 700px;
  &__data {
    color: white;
  }
  &__name {
    padding-bottom: 20px;
    img {
      max-width: 200px;
    }
    h1 {
      font-size: 32px;
      color: white;
      padding-bottom: 10px;
    }
  }
  &__rating {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    span {
      font-size: 22px;
    }
  }
  &__info {
    font-size: 16px;
    color: #bdbdbd;
    padding-bottom: 15px;
  }
  &__discription {
    padding-bottom: 20px;
    max-width: 700px;
    font-size: 20px;
  }
}
.movie-right {
  &__img {
    height: 500px;
  }
}
.btn-trailer {
  display: inline-block;
  text-decoration: none;
  color: inherit;
  padding: 13px 35px;
  background-color: #424242;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 78px;
  margin-left: 10px;
}
.btn-favorites {
  display: inline-block;
  text-decoration: none;
  color: inherit;
  padding: 13px 15px;
  background-color: #424242;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 55%;
  margin-left: 10px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
