import { createStore } from 'vuex'
import index from '@/services';
import Certifier from '@/types/Certifier';
import Fee from '@/types/Fee';
import { certifiers } from '../data/certifiers';
export default createStore({
  state: {
    requester: '',
    certifier: {} as Certifier,
    fees: [] as Fee[],
    address: '',
    token: '',
    isLoading: false,
  },
  getters: {
    certifier: state => state.certifier,
    fees: state => state.fees,
    address: state => state.address,
    isLoading: state => state.isLoading,
  },
  actions: {
    async addDocumentImage(context, payload) {
      try {
        // TODO: api call
        const data = await index.addDocumentImage(context.state.token, payload);
        return data;
      } catch (error) {
        return;
      }
    },
    async addDocument(context, payload) {
      try {
        // TODO: api call
        context.dispatch('loading', true);
        await index.addDocument(context.state.token, payload);
        context.dispatch('getDocuments', payload);
        context.dispatch('loading', false);
        return;
      } catch (error) {
        return;
      }
    },
    async getCertifier(context, payload: string) {
      // console.log(payload);
      try {
        // TODO: api call
        // context.dispatch('loading', true);
        const data = certifiers.find(certifier => certifier.address == payload);
        if (typeof data != 'object') return;
        context.commit('SET_CERTIFIER', data);
        // context.dispatch('loading', false);
        return data;
      } catch (error) {
        return;
      }
    },
    async register(context, payload) {
			try {
        // TODO: api call
        const data = await index.register(payload);
        // localStorage.setItem('token', data.accessToken);
        // localStorage.setItem('refresh_token', data.refreshToken);
        // localStorage.setItem('address', data.address);
        // context.commit('SET_TOKEN', data.accessToken);
        // context.commit('SET_REFRESH_TOKEN', data.refreshToken);
        // context.commit('SET_ADDRESS', data.address);
        return data;
      } catch (error) {
        return;
      }
		},
    async login(context, payload) {
			try {
        // TODO: api call
        const data = await index.login(payload);
        // localStorage.setItem('token', data.accessToken);
        // localStorage.setItem('refresh_token', data.refreshToken);
        // localStorage.setItem('address', data.address);
        // context.commit('SET_TOKEN', data.accessToken);
        // context.commit('SET_REFRESH_TOKEN', data.refreshToken);
        // context.commit('SET_ADDRESS', data.address);
        return data;
      } catch (error) {
        return;
      }
		},
    async logout(context, payload) {
			try {
        // TODO: api call
        const data = await index.login(payload);
        // localStorage.setItem('token', data.accessToken);
        // localStorage.setItem('refresh_token', data.refreshToken);
        // localStorage.setItem('address', data.address);
        // context.commit('SET_TOKEN', data.accessToken);
        // context.commit('SET_REFRESH_TOKEN', data.refreshToken);
        // context.commit('SET_ADDRESS', data.address);
        return data;
      } catch (error) {
        return;
      }
		},
  },
  mutations: {
    SET_CERTIFIER(state, certifier: Certifier ) {
      state.certifier = certifier;
      state.fees = certifier.fees;
    },
  },
  modules: {
  }
})
