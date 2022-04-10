import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router';
import {store} from './store';
import firebase from 'firebase';

// define firebase config
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);

// firebase.auth().onAuthStateChanged( async user => {
//   if (user && user.emailVerified) {
//     const idTokenResult = await user.getIdTokenResult();
//     if (idTokenResult && idTokenResult.claims.isActivated) {
//       const isUser = idTokenResult.claims.isUser? true : false;
//       if (isUser) {
//         store.dispatch('setProfile', user);
//         store.dispatch('setIsActivated', idTokenResult.claims.isActivated);
//         store.dispatch('setTenantId', idTokenResult.claims.tenantId);
//         store.dispatch('setIdToken', idTokenResult.token);
//         store.dispatch('setClaims', idTokenResult.claims);
//         store.dispatch('setIsUser', idTokenResult.claims.isUser.value);
//       } else {
//         store.dispatch('logout', `Kindly contact your admin!`);
//         return;
//       }
//     } else {
//       store.dispatch('logout', `Your account is deactivated!`);
//       return;
//     }
//   }
// });

createApp(App).use(store).use(router).mount('#app')
