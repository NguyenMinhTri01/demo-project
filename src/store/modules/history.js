const state = {
  params: {
    data: [
      ["NO", "NAME","LINE", "ID", "PRESENT", "PLAN", "TARGET", "DATE"],
    ],
    header: "row",
    border: true,
    stripe: true,
    enableSearch: true,
    sort: [0, 1, 2, 3, 4, 5],
    pagination: true,
    pageSize: 5,
    pageSizes: [5, 10, 20, 50],
  },
}

const mutations = {
  SET_DATA_TABLE(state, value) {

    state.params = value;
  },
};


const actions = {
  fetchProducts({ commit }, value) {
    //let data = [];
    Object.keys(value).forEach((key, index) =>{
      let arrResult = [];
      arrResult[0] = index + 1;
      arrResult[1] = value[key]['name'];
      arrResult[2] = value[key]['line'];
      arrResult[3] = value[key]['id'];
      arrResult[4] = value[key]['present'];
      arrResult[5] = value[key]['plan'];
      arrResult[6] = value[key]['present'];
      arrResult[7] = value[key]['present'];
    })
    commit("SET_DATA_TABLE", value);
  },
}

export default { state, mutations, actions };