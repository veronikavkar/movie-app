<template>
  <div class="dynamic-components">
    <div class="tabs">
      <button
        class="tabs__btn"
        v-for="tab in tabs"
        :key="tab.component"
        @click="selectedTab = tab.component"
      >
        {{ tab.title }}
      </button>
    </div>

    <keep-alive>
      <transition name="component-fade" mode="out-in">
        <component
          :is="selectedTab"
          :film="film"
          :trailers="trailers"
          class="tab"
        ></component>
      </transition>
    </keep-alive>
    <SimilarFilms :similar-films="similarFilms" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AboutFilm from "@/components/AboutFilm.vue";
import FilmDetailes from "@/components/FilmDetailes.vue";
import SimilarFilms from "@/components/SimilarFilms.vue";
export default {
  components: {
    AboutFilm,
    FilmDetailes,
    SimilarFilms,
  },
  transition: "home",
  data() {
    return {
      trailers: [],
      film: {
        nameRu: null,
        genres: [],
      },
      similarFilms: [],
      selectedTab: "AboutFilm",
      tabs: [
        {
          title: "О фильме",
          component: "AboutFilm",
        },
        {
          title: "Детали",
          component: "FilmDetailes",
        },
      ],
    };
  },
  async fetch() {
    await this.getFilmById(this.id);
    await this.fetchSimilarFilms(this.id);
    this.trailers = await this.getVideosById(this.id);
  },
  methods: {
    ...mapActions(["getVideosById"]),
    async getFilmById(id) {
      const data = await this.$axios.$get(`/api/v2.2/films/${id}`);

      this.film = data;
    },
    async fetchSimilarFilms(id) {
      const { items } = await this.$axios.$get(
        `/api/v2.2/films/${id}/similars`
      );
      this.similarFilms = items;
    },
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 39px;
  &__btn {
    padding-right: 15px;
  }
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.7s ease;
}
.component-fade-leave-active {
  opacity: 0;
}
.home-enter-active,
.home-leave-active {
  transition: opacity 0.7s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
