import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router';
import { store } from './store';
// import firebase from 'firebase';
import firebase from 'firebase/app';
import { ActionTypes } from './store/actions';

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

firebase.auth().onAuthStateChanged( async user => {
  if (user && user.emailVerified) {
    const idTokenResult = await user.getIdTokenResult();
    const { address, affiliate, email, isActivated, isActive, phone_number, role, picture, name, } = idTokenResult.claims;
    const { token } = idTokenResult;
    store.dispatch(ActionTypes.SetIdentity, role);
    store.dispatch(ActionTypes.SetProfile, {
      displayName: name,
      phoneNumber: phone_number,
      photoURL: picture,
      email,
      role,
      isActive,
      isActivated,
      address,
      affiliate,
      token,
    });
    store.dispatch(ActionTypes.GetDocuments, {affiliate: affiliate});
  } else {
    store.dispatch(ActionTypes.Logout, {title: 'Logout', text: `Unauthorised access!`, status: true});
    return;
  }
});

createApp(App).use(store).use(router).mount('#app')
