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
  setSearchValue({ commit }, { searchValue }) {
    commit('setSearchValue', searchValue);
  },
};
