

const state = {
  user: {
    loggedIn: false,
    data: null
  }
};

const getter = (state) => {
  return state.user
}


const mutations = {
  SET_LOGGED_IN(state, value) {
    state.user.loggedIn = value;
  },
  SET_USER(state, data) {
    state.user.data = data;
  },
  GET_USER(state) {
    return state.user
  }
};

const actions = {
  fetchUser({ commit }, value) {
    commit("SET_LOGGED_IN", value);
  },

  

  checkUserLoggedIn() {
    const user = getter(state);
    if(user.loggedIn) {
      return true
    } else {
      return false
    }
  }
}

export default { state, mutations, actions };