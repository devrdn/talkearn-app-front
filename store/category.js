import categoryApi from '~/api/categoryApi.js';

export const state = () => ({
  state: FETCH_STATE.LOADING,
  category: [],
});

export const getters = {
  getCategories: (state) => state.category,
};

export const mutations = {
  setCategory: (state, payload) => {
    state.category = payload;
  },
  setState: (state, payload) => {
    state.state = payload;
  },
};

export const actions = {
  fetchCategories: async ({ commit }) => {
    try {
      const data = await categoryApi.getCategories();
      commit('setCategory', data.data);
      commit('setState', FETCH_STATE.SUCCESS);
    } catch (e) {
      commit('setState', FETCH_STATE.FAILED);
    }
  },
};

export const FETCH_STATE = {
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILED: 'failed',
};
