'use strict'

import accountApi from '@/services/accountApi';
import Account from '@/types/Account';
// import Document from '@/types/Document';
// import firebase from 'firebase';

const state = {
	account: {} as Account,
};

const getters = {
	// account: state => state.account,
	account: (state: { account: Account; }) => state.account,
};

const actions = {
  async addDocumentImage(context: { state: { token: string; }; }, payload: any) {
    try {
      // TODO: api call
      const data = await accountApi.addAccountImage(context.state.token, payload);
      return data;
    } catch (error) {
      return;
    }
  },
	async addAccount(context: { rootGetters: { idToken: string; }; dispatch: (arg0: string, arg1: { text: any; status: boolean; }) => any; commit: (arg0: string, arg1: any) => any; }, payload: Account) {
		try {
			// TODO: api call
			const data = await accountApi.addAccount(context.rootGetters.idToken, payload);
			// await context.dispatch('setMessage', {text: data, status: true});
			await context.commit('ADD_ACCOUNT', payload);
      return;
		} catch (error) {
			// return context.dispatch('setMessage', {text: error.response.statusText, status: false});
			return;
		}
	},
	async getAccounts(context: { state: { accounts: string | any[]; }; rootGetters: { idToken: any; }; commit: (arg0: string, arg1: any[]) => any; dispatch: (arg0: string, arg1: { text: any; status: boolean; }) => any; }, payload: any) {
    try {
			// TODO: api call
			if (payload && context.state.accounts && !!context.state.accounts.length) return context.state.accounts;
			const { data } = await accountApi.getAccount(context.rootGetters.idToken, payload);
			if (!Array.isArray(data)) return;
			await context.commit('SET_ACCOUNTS', data);
			return data;
		} catch (error) {
			return context.dispatch('setMessage', {text: error.response.statusText, status: false});
		}
	},
	async updateAccount(context: { rootGetters: { idToken: any; }; commit: (arg0: string, arg1: any) => void; dispatch: (arg0: string, arg1: { text: any; status: boolean; }) => any; }, payload: any) {
		try {
			// TODO: api call
			const {data} = await accountApi.updateAccount(context.rootGetters.idToken, payload);
			context.commit('UPDATE_ACCOUNT', payload);
			// await context.dispatch('setMessage', { text: data || `Account delete successful!`, status: true });
			return data;
		} catch (error) {
			return context.dispatch('setMessage', {text: error.response.statusText, status: false});
		}
	},
	}
};

const mutations = {
	ADD_ACCOUNT(state: { accounts: any[]; }, account: any) {
		if (state.accounts.length) state.accounts.unshift(account);
		else state.accounts.push(account);
	},
	SET_ACCOUNT(state: { accounts: any; }, account: any) {
		accounts.sort(function(x: { created_at: number; }, y: { created_at: number; }){
			return y.created_at - x.created_at;
		})
		state.accounts = accounts;
	},
	UPDATE_ACCOUNT(state: { accounts: any[]; }, payload: { id: any; }) {
		state.accounts = state.accounts.filter((account: { id: any; }) => account.id !== payload.id);
	},
};

export default {
	state,
	getters,
	actions,
	mutations
};