const state = {
  products: []
};

const mutations = {
  SET_PRODUCT(state, value) {
    state.products = value;
  },
};


const actions = {
  fetchProducts({ commit }, value) {
    commit("SET_PRODUCT", value);
  },
}

export default { state, mutations, actions };