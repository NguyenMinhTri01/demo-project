const state = {
  data: []
}

const mutations = {
  SET_DATA_TABLE(state, value) {
    state.data = value;
  },
};


const actions = {
  fetchHistory({ commit }, value) {
    let data = [];
    Object.keys(value).forEach((key) =>{
      data.push(value[key]);
    })
    commit("SET_DATA_TABLE", data);
  },
}

export default { state, mutations, actions };