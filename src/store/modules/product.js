const state = {
  data: null
};

const mutations = {
  SET_PRODUCT(state, value) {
    state.data = value;
  },
};


const actions = {
  fetchProducts({ commit }, value) {
    commit("SET_PRODUCT", value);
  },
}

export default { state, mutations, actions };