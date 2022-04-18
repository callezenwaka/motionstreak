import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue';
import firebase from 'firebase/app';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    meta: { requiresAuth: true },
    beforeEnter: (to) => {
      firebase.auth().onAuthStateChanged( async user => {
        if (to.meta.requiresAuth && !user)
        return {
          path: '/login',
          // save the location we were at to come back later
          query: { redirect: to.fullPath },
        }
      });
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
  },
  {
    path: '/fund',
    name: 'Fund',
    component: () => import(/* webpackChunkName: "fund" */ '../views/Fund.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
