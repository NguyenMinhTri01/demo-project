import Vue from 'vue';
import VueRouter from 'vue-router';
// import {fb} from '../firebase'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Dashboard',
    component: () => import("./../views/index.vue"),
    children: [
      //home page
      {
        path: "/",
        name : "Home",
        component: () => import('../views/homePage')
      },
      // history page
      {
        path: "/history",
        name : "History",
        component: () => import('../views/historyPage')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("./../views/login")
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {

//   const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
//   const currentUser = fb.auth().currentUser

//   if (requiresAuth && !currentUser) {
//       next('/')
//   } else if (requiresAuth && currentUser) {
//       next('login')
//   } else {
//       next()
//   }
// })

export default router
