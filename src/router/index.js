import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'home',
    component: () => import("./../views/index.vue"),
    children: [
      //home page
      {
        path: "/",
        component: () => import('../views/homePage')
      },
      // history page
      {
        path: "/history",
        component: () => import('../views/historyPage')
      }
    ]
  },
  {
    path: '/login',
    name: '',
    component: () => import("./../views/login.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
