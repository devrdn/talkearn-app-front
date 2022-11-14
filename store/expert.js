export const state = () => ({
  featuredExperts: [],
  searchExpert: [],
});


export const getters = {
  getExperts: (state) => state.experts,
};


export const muttations = {
  setFeaturedExperts: (state, payload) => {
    state.searchExpert.push(payload);
  }
};

export const actions = {
  
}