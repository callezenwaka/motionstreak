import { createStore } from 'vuex'
import Certifier from '@/types/Certifier';
import Fee from '@/types/Fee';
import { certifiers } from '../data/certifiers';
export default createStore({
  state: {
    requester: '',
    certifier: {} as Certifier,
    fees: [] as Fee[],
    address: '',
  },
  getters: {
    certifier: state => state.certifier,
    fees: state => state.fees,
    address: state => state.address,
  },
  actions: {
    async getCertifier(context, payload: string) {
      console.log(payload);
      try {
        // TODO: api call
        // context.dispatch('loading', true);
        const data = certifiers.find(certifier => certifier.address == payload);
        // console.log(data.fees);
        if (typeof data != 'object') return;
        context.commit('SET_CERTIFIER', data);
        // context.dispatch('loading', false);
        return data;
      } catch (error) {
        return;
      }
    },
  },
  mutations: {
    SET_CERTIFIER(state, certifier: Certifier ) {
      // const { address, fees } = certifier;
      console.log(certifier)
      state.certifier = certifier;
      state.fees = certifier.fees;
    },
  },
  modules: {
  }
})
