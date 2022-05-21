import { createApp, h, provide } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router';
import { store } from './store';
import { DefaultApolloClient } from '@vue/apollo-composable'
import { createUploadLink } from 'apollo-upload-client';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import firebase from 'firebase/app';
import 'firebase/auth';
import { ActionTypes } from './store/actions';

// // HTTP connection to the API
// const httpLink = createHttpLink({
//   // You should use an absolute URL here
//   // uri: 'http://localhost:4000/graphql',
//   uri: 'http://localhost:4000/api',
// })

// // Cache implementation
// const cache = new InMemoryCache()

// // Create the apollo client
// const DefaultClient = new ApolloClient({
//   link: httpLink,
//   cache,
// })

const DefaultClient = new ApolloClient({
  link: createUploadLink({
    uri: 'http://localhost:4001/api'
  }),
  cache: new InMemoryCache(),
})

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
  }
});

// const app = createApp({
//   setup() {
//     provide(DefaultApolloClient, apolloClient)
//   },

//   render: () => h(App),
// });

// app.use(store).use(router).mount('#app');

// createApp(App).use(store).use(router).mount('#app')

createApp({
  setup() {
    provide(DefaultApolloClient, DefaultClient);
  },
  render: () => h(App),
})
.use(store)
.use(router)
.mount("#app");
