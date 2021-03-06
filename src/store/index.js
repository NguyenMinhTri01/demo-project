import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./modules/auth"
import product from "./modules/product"
import history from "./modules/history"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    product,
    history
  }
})

