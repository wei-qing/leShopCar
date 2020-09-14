import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import vuex from "../store/index"
Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      isShow:true
    }
    //   beforeEnter: (to, from, next) => {
    //             if (vuex.state.token == "") {
    //               next({ path: "/login" })
    //             } else {
    //               next()
    //             }
    //           },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      isShow:true
    }
  },
  {
    path: '/cart',
    name: 'Cart',

    component: () => import( '../views/Cart.vue'),
    meta:{
      isShow:true
    }
  },
  {
    path: '/mine',
    name: 'Mine',

    component: () => import( '../views/Mine.vue'),
    meta:{
      isShow:true
    }
  },
  {
    path: '/',
    name: 'Login',

    component: () => import( '../views/Login.vue'),
    //   beforeEnter: (to, from, next) => {
    //             if (vuex.state.token == "") {
    //               next()
    //             } else {
    //               next('/')
    //             }
    //           },
  },
  {
    path: '/detaile',
    name: 'Detaile',

    component: () => import( '../views/Detaile.vue'),
    meta:{
      isShow:false
    }
  },
  {
    path: '/search',
    name: 'Search',

    component: () => import( '../views/Search.vue')
  },
  {
    path: '/gonotarize',
    name: 'Gonotarize',

    component: () => import( '../views/Gonotarize.vue')
  },
  {
    path: '/site',
    name: 'Site',

    component: () => import( '../views/Site.vue')
  },
  {
    path: '/getsize',
    name: 'Getsize',

    component: () => import( '../views/Getsize.vue')
  },
  {
    path: '/pay',
    name: 'Pay',

    component: () => import( '../views/Pay.vue')
  },
  {
    path: '/succeed',
    name: 'Succeed',

    component: () => import( '../views/Succeed.vue')
  },
  {
    path: '/prosperity',
    name: 'Prosperity',

    component: () => import( '../views/Prosperity.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
