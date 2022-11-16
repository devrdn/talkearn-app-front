import expertApi from '~/api/expertApi.js';

export const state = () => ({
  featuredExperts: [],
  experts: [],

  // error
  error: {},
});

export const getters = {
  getFeaturedExperts: (state) => state.featuredExperts,
  getExperts: (state) => state.experts,
  getError: (state) => state.error,
};

export const mutations = {
  setFeaturedExperts: (state, payload) => {
    state.featuredExperts = payload;
  },

  setExperts: (state, payload) => {
    state.experts = payload;
  },

  setError: (state, payload) => {
    state.error = payload;
  },

  clearExperts: (state) => {
    state.experts = [];
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

  fetchSearchExperts: async ({ commit }, { searchText }) => {
    await expertApi
      .searchExpert(searchText)
      .then((response) => {
        commit('setExperts', response.data.data);
        commit('setError', {});
      })
      .catch((err) => {
        commit('clearExperts');
        throw err;
      });
  },
};
