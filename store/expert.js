import expertApi from '~/api/expertApi.js';

/**
 * Expert Vuex Module
 *
 * Responsible for the expert state
 */

export const state = () => ({
  featuredExperts: [],
  experts: [],

  /**
   * Expert fetch meta
   *
   * current_page, from, to, last_page, etc..
   */
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
  /**
   * Fetch Featured Experts
   * @param {Object} param0 context
   */
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

  /**
   * Fetch expert by category id
   * @param {Object} param0 context
   * @param {Object} param1 fetch params
   */
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

  /**
   * Fetch more experts for lazy-loading
   * @param {Object} param0 context
   * @param {Object} param1 fetch params
   */
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

  /**
   * Fetch expert by search param
   * @param {Object} param0 context
   * @param {Object} param1 fetch params
   */
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
