import categoryApi from '~/api/categoryApi.js';

export const state = () => ({
  error: {},
  category: [],
});

export const getters = {
  getCategories: (state) => state.category,
  getError: (state) => state.error,
};

export const mutations = {
  setCategories: (state, payload) => {
    state.category = payload;
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
