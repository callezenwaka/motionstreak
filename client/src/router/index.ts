import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue';
import { store } from "@/store";
import firebase from 'firebase/app';

console.log("main", store.getters.profile.isActive);
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/fund',
    name: 'Fund',
    component: () => import(/* webpackChunkName: "about" */ '../views/Fund.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    meta: { requiresAuth: true },
    beforeEnter: (to) => {
      firebase.auth().onAuthStateChanged( async user => {
        console.log(user);
        if (to.meta.requiresAuth && !user)
        return {
          path: '/login',
          // save the location we were at to come back later
          query: { redirect: to.fullPath },
        }
      });
      // if (to.meta.requiresAuth && !store.getters.profile.isActive)
      // return {
      //   path: '/login',
      //   // save the location we were at to come back later
      //   query: { redirect: to.fullPath },
      // }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
