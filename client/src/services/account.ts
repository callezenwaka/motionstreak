'use strict'

import axios, { AxiosResponse } from "axios";
type method = "get" | "GET" | "delete" | "DELETE" | "head" | "HEAD" | "options" | "OPTIONS" | "post" | "POST" | "put" | "PUT" | "patch" | "PATCH" | "purge" | "PURGE" | "link" | "LINK" | "unlink" | "UNLINK" | undefined;

// export default apiClient;
import Account from '@/types/Account';
export const request = async <T = never, R = AxiosResponse<T>>(url: string, method: method, token?: string, data?: unknown): Promise<R> => {
  const res = await axios({
    method: method,
    url: `${url}`,
    data: data,
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  });
	return res.data;
};

// Uncomment for local development
export const API_URL = 'http://localhost:4000/';
// export const API_URL = `https://fullstack-nft.herokuapp.com/`;

export default {
	async addAccountImage(token: string, params: File): Promise<string> {
		return await request(`${API_URL}account/image`, 'post', token, params);
	},
	async addAccount(token: string, params: Account): Promise<unknown> {
		return await request(`${API_URL}account`, 'post', token, params);
	},
	async getAccount(token: string, address: string): Promise<Account> {
		return await request(`${API_URL}account/${address}`, 'get', token, '');
	},
	async updateAccount(token: string, address: string, params: Account): Promise<unknown> {
		return await request(`${API_URL}account/${address}`, 'post', token, params);
	},
};