/**
 * Search Vuex Module
 *
 * Responsible for the search state
 */

export const state = () => ({
  searchValue: '',
});

export const getters = {
  getSearchValue: (state) => state.searchValue,
};

export const mutations = {
  setSearchValue: (state, payload) => {
    state.searchValue = payload;
  },
};

export const actions = {
  /**
   * Set search value
   * @param {Object} param0 context
   * @param {Object} param1 search value
   */
  setSearchValue({ commit }, { searchValue }) {
    commit('setSearchValue', searchValue);
  },
};
