'use strict'

import axios, { AxiosResponse } from "axios";
type method = "get" | "GET" | "delete" | "DELETE" | "head" | "HEAD" | "options" | "OPTIONS" | "post" | "POST" | "put" | "PUT" | "patch" | "PATCH" | "purge" | "PURGE" | "link" | "LINK" | "unlink" | "UNLINK" | undefined;

// export default apiClient;
import Service from '@/types/Service';
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
	async addService(token: string, params: Service): Promise<string> {
		return await request(`${API_URL}Service`, 'post', token, params);
	},
	async getServices(token: string): Promise<Service[]> {
		return await request(`${API_URL}Service`, 'get', token, '');
	},
	async getService(token: string, index: number): Promise<Service> {
		return await request(`${API_URL}Service/${index}`, 'get', token, '');
	},
	async updateService(token: string, params: Service): Promise<string> {
		return await request(`${API_URL}Service/${params.index}`, 'post', token, params);
	},
	async deleteService(token: string, index: number): Promise<string> {
		return await request(`${API_URL}Service/${index}`, 'post', token, '');
	},
};