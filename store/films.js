// export const state = () => ({
//   popularFilms: [],
// });

// export const mutations = {
//   setPopularFilms(state, popularFilms) {
//     state.popularFilms = popularFilms;
//     console.log(popularFilms, "popularFilms");
//   },
// };

// export const actions = {
//   async fetchPopularFilms({ commit, state }) {
//     const { data, status } = await this.$axios.$get(
//       "https://kinopoiskapiunofficial.tech/api/v2.2/films?countries=0&order=RATING&type=FILM&ratingFrom=8&ratingTo=10&yearFrom=1000&yearTo=3000&page=1"
//     );
//     if ([200, 201].includes(status))
//       commit("SET__POPULAR_FILMS", { popularFilms: data });
//   },
//   catch(error) {
//     console.log(error.response);
//   },
// };

// export const getters = {
//   users: (s) => s.users,
// };
