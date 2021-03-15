import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue } from "bootstrap-vue";
Vue.use(BootstrapVue);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { fb } from "./firebase"

// config firebase


Vue.config.productionTip = false

fb.auth().onAuthStateChanged(function () {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')

});
