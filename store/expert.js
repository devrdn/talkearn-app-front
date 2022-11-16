import expertApi from '~/api/expertApi.js';

export const state = () => ({
  featuredExperts: [],
  experts: [],

  // Meta For Lazy Loading
  meta: {},
  page: 0,

  // error
  error: {},
});

export const getters = {
  getFeaturedExperts: (state) => state.featuredExperts,
  getExperts: (state) => state.experts,
  getMeta: (state) => state.meta,
  getPage: (state) => state.page,
  getError: (state) => state.error,
};

export const mutations = {
  setFeaturedExperts: (state, payload) => {
    state.featuredExperts = payload;
  },

  setExperts: (state, payload) => {
    state.experts = payload;
  },

  setPage: (state, payload) => {
    state.page = payload;
  },

  setMeta: (state, payload) => {
    state.meta = payload;
  },

  setError: (state, payload) => {
    state.error = payload;
  },

  clearError: (state) => {
    state.error = {};
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
        commit('clearError');
      })
      .catch((err) => {
        commit('setError', err);
      });
  },

  fetchExpertsByCategory: async ({ commit }, { categoryId, page }) => {
    await expertApi
      .getExpertsByCategory(categoryId, page)
      .then((response) => {
        commit('setExperts', response.data.data);
        commit('setMeta', response.data.meta);
        commit('setPage', response.data.meta.page);
        commit('clearError');
      })
      .catch((err) => {
        commit('setError', err);
        commit('setExperts', []);
      });
  },

  fetchMoreExpertsByCategory: async (
    { state, commit },
    { categoryId, page }
  ) => {
    if (state.meta.lastPage > page) {
      commit('setPage', page);
      await expertApi
        .getExpertsByCategory(categoryId, page)
        .then((response) => {
          commit('setExperts', [...state.experts, ...response.data.data]);
          commit('setMeta', response.data.meta);
          commit('clearError');
        })
        .catch((err) => {
          commit('setError', err);
          commit('setExperts', []);
        });
    }
  },

  fetchSearchExperts: async ({ commit }, { searchText }) => {
    await expertApi
      .searchExpert(searchText)
      .then((response) => {
        commit('setExperts', response.data.data);
        commit('setMeta', response.data.meta);
      })
      .catch((err) => {
        commit('clearExperts');
        throw err;
      });
  },
};
