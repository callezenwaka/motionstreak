'use strict'

import { API_URL, request } from '@/services/config';
import Account from '@/types/Account';

export default {
	async addAccountImage(token: string, params: File): Promise<string> {
		return await request(`${API_URL}account/image`, 'post', token, params);
	},
	async addAccount(idToken: string, params: Account): Promise<string> {
		return await request(`${API_URL}account`, 'post', idToken, params);
	},
	async getAccounts(idToken: string): Promise<unknown> {
		return await request(`${API_URL}account}`, 'get', idToken);
	},
	async updateAccount(idToken: string, params: Account): Promise<string> {
		return await request(`${API_URL}account/}`, 'put', idToken, params);
	},
};