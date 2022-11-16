import categoryApi from '~/api/categoryApi.js';

export const state = () => ({
  error: {},
  categories: [],
});

export const getters = {
  getCategories: (state) => state.categories,
  getError: (state) => state.error,
};

export const mutations = {
  setCategories: (state, payload) => {
    state.categories = payload;
  },
  setError: (state, payload) => {
    state.error = payload;
  },
};

export const actions = {
  fetchCategories: async ({ commit }) => {
    await categoryApi
      .getCategories()
      .then((responce) => {
        commit('setCategories', responce.data.data);
        commit('setError', {});
      })
      .catch((err) => {
        commit('setError', err);
      });
  },
};
