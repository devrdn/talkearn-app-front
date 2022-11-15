import expertApi from '~/api/expertApi.js';

export const state = () => ({
  featuredExperts: [],
  searchExpert: [],

  // error
  error: {},
});

export const getters = {
  getFeaturedExperts: (state) => state.featuredExperts,
};

export const mutations = {
  setFeaturedExperts: (state, payload) => {
    state.featuredExperts = payload;
  },

  setError(state, payload) {
    state.error = payload;
  },
};

export const actions = {
  fetchFeaturedExperts: async ({ commit }) => {
    await expertApi
      .getFeaturedExperts()
      .then((response) => {
        commit('setFeaturedExperts', response.data.data);
        commit('setError', {});
      })
      .catch((err) => {
        commit('setError', err);
      });
  },
};
