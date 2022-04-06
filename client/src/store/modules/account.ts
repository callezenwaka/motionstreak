'use strict'

import accountApi from '@/services/accountApi';
import Account from '@/types/Account';

const state = {
	account: {} as Account,
};

const getters = {
	account: (state: { account: Account; }) => state.account,
};

const actions = {
	async addaccount(context, payload) {
		try {
			// TODO: api call
			const { data } = await accountApi.addaccount(context.rootGetters.idToken, payload);
			await context.dispatch('setMessage', {text: data, status: true});
			await context.commit('ADD_account', payload);
			await context.dispatch('getaccounts', payload.lessonId);
      return;
		} catch (error) {
			return context.dispatch('setMessage', {text: error.response.statusText, status: false});
		}
	},
	async getaccounts(context, payload) {
    try {
			// TODO: api call
			if (payload && context.state.accounts && !!context.state.accounts.length) return context.state.accounts;
			const { data } = await accountApi.getaccounts(context.rootGetters.idToken, payload);
			if (!Array.isArray(data)) return;
			await context.commit('SET_accountS', data);
			return data;
		} catch (error) {
			return context.dispatch('setMessage', {text: error.response.statusText, status: false});
		}
	},
	async deleteaccount(context, payload) {
		try {
			// TODO: api call
			const {data} = await accountApi.deleteaccount(context.rootGetters.idToken, payload);
			context.commit('DELETE_account', payload);
			// await context.dispatch('setMessage', { text: data || `account delete successful!`, status: true });
			return data;
		} catch (error) {
			return context.dispatch('setMessage', {text: error.response.statusText, status: false});
		}
	},
  async replyaccount(context, payload) {
    try {
      // TODO: api call
      const replyaccount = firebase.functions().httpsCallable('replyaccount');
			await context.commit('REPLY_account', payload);
			const { data } = await replyaccount(payload);
      await context.dispatch('setMessage', {text: data || `Success`, status: true});
      return data;
    } catch (err) {
      await context.dispatch('setMessage', {text:  err.message || `Reply add failed!`, status: false});
      return;
    }
	},
	async likeaccount(context, payload) {
		try {
      // TODO: api call
      const likeaccount = firebase.functions().httpsCallable('likeaccount');
			await context.commit('LIKE_account', payload);
			const { data } = await likeaccount(payload);
      await context.dispatch('setMessage', {text: data || `Success`, status: true});
      return data;
    } catch (err) {
      await context.dispatch('setMessage', {text:  err.message || `Like add failed!`, status: false});
      return;
    }
	}
};

const mutations = {
	ADD_account(state, account) {
		if (state.accounts.length) state.accounts.unshift(account);
		else state.accounts.push(account);
	},
	SET_accountS(state, accounts) {
		accounts.sort(function(x, y){
			return y.created_at - x.created_at;
		})
		state.accounts = accounts;
	},
	DELETE_account(state, payload) {
		state.accounts = state.accounts.filter(account => account.id !== payload.id);
	},
	REPLY_account(state, reply) {
		let account = state.accounts.find(account => account.id === reply.accountId);
		if (account) account.replies.unshift(reply);
	},
	LIKE_account(state, payload) {
		const account = state.accounts.find(account => account.id === payload.accountId);
		return account.likes.includes(payload.id)? account.likes.splice(account.likes.indexOf(payload.id), 1) : account.likes.push(payload.id);
	},
};

export default {
	state,
	getters,
	actions,
	mutations
};