import axios from "axios";

export const state = () => ({
  genres: [],
  films: [],
  filteredFilms: [],
  genre: "",
  isLoading: false,
  members: [],
  similarFilms: [],
  selectedGenre: "",
  searchInput: "",
  searchedFilms: [],
  favorites: [],
});

export const mutations = {
  SET_FILMS(state, films) {
    state.films = films;
    if (setFilteredFilms) state.filteredFilms = films;
  },
  SET_GENRES(state, genres) {
    state.genres = genres;
  },
  SET_FILTERED_FILMS(state, filteredFilms) {
    state.filteredFilms = filteredFilms;
  },
  IS_LOADING(state, value) {
    state.isLoading = value;
  },
  SET_MEMBERS_BY_FILM_ID(state, members) {
    state.members = members;
  },
  // SET_SIMILAR_FILMS(state, similarFilms) {
  //   console.log(similarFilms, "similarFilms");
  //   state.similarFilms = similarFilms;
  // },
  SET_SELECTED_GENRE(state, selectedGenre) {
    state.selectedGenre = selectedGenre;
  },
  SET_SEARCHED_FILMS(state, searchedFilms) {
    console.log(searchedFilms, "searchedFilms");
    state.searchedFilms = searchedFilms;
  },
  SET_SEARCHED_INPUT(state, value) {
    state.searchInput = value;
  },
  ADD_FILM_TO_FAVORITES(state, film) {
    const favoritesFilmsIds = state.favorites.map((val) => val.kinopoiskId);
    if (favoritesFilmsIds.includes(film.kinopoiskId)) {
      return;
    }

    state.favorites.push(film);
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  },
  SET_LOCAL_STORAGE(state, favorites) {
    state.favorites = favorites;
  },
};

export const actions = {
  async fetchFilms({ commit }) {
    try {
      commit("IS_LOADING", true);
      const { films } = await this.$axios.$get(
        "/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1"
      );

      commit("SET_FILMS", films);
    } catch (error) {
      console.log(error.response);
    }
    commit("IS_LOADING", false);
  },
  async fetchGenres({ commit }) {
    try {
      commit("IS_LOADING", true);
      const { genres } = await this.$axios.$get("/api/v2.2/films/filters");
      commit("SET_GENRES", genres);
    } catch (error) {
      console.log(error.response);
    }
    commit("IS_LOADING", false);
  },
  async fetchFilmsByGenre({ commit, state }, genre) {
    try {
      commit("IS_LOADING", true);
      const { items } = await this.$axios.$get(
        `/api/v2.2/films?countries=1&genres=${genre}
				&order=RATING&type=ALL&ratingFrom=7
				&ratingTo=9&yearFrom=1000&yearTo=3000&page=1`
      );
      commit("SET_FILMS", items);
    } catch (error) {
      console.log(error.response);
    }
    commit("IS_LOADING", false);
  },
  async fetchMembersByFilmId({ commit }, id) {
    try {
      const data = await this.$axios.$get(`api/v1/staff?filmId=${id}`);
      commit("SET_MEMBERS_BY_FILM_ID", data);
    } catch (error) {
      console.log(error.response);
    }
  },
  async searchMovies({ commit }, searchInput) {
    try {
      const { films } = await this.$axios.$get(
        `/api/v2.1/films/search-by-keyword?keyword=${searchInput}&page=1`
      );
      console.log(films, "films");
      commit("SET_SEARCHED_FILMS", films);
    } catch (error) {
      console.log(error.response);
    }
  },
  addFilmToFavorites(context, film) {
    context.commit("ADD_FILM_TO_FAVORITES", film);
  },
  initLocalStorage({ commit }) {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    commit("SET_LOCAL_STORAGE", favorites);
  },
};

export const getters = {};
