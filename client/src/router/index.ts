import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue';
import firebase from 'firebase/app';
// import { store } from '@/store';

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
    beforeEnter: (to, from, next) => {
			// TODO: Prevent login page if authenticated
			if (!firebase.auth().currentUser) next({ name: "Login" });
			else next();
		},
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    beforeEnter: (to, from, next) => {
			// TODO: Prevent login page if authenticated
			if (firebase.auth().currentUser) next({ name: "Dashboard" });
			else next();
		},
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// navigation guard to check for logged in users
router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  firebase.auth().onAuthStateChanged( async () => {
	if (requiresAuth && !firebase.auth().currentUser) {
		next({
			name: "Login",
			query: { redirect: to.fullPath },
		})		
	} else {
		next()
	}
  });
});

export default router
