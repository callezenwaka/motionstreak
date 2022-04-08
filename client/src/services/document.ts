'use strict'

import axios, { AxiosResponse } from "axios";
type method = "get" | "GET" | "delete" | "DELETE" | "head" | "HEAD" | "options" | "OPTIONS" | "post" | "POST" | "put" | "PUT" | "patch" | "PATCH" | "purge" | "PURGE" | "link" | "LINK" | "unlink" | "UNLINK" | undefined;

// export default apiClient;
import Document from '@/types/Document';
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
	async addDocumentImage(token: string, params: FormData): Promise<string> {
		console.log(token);
		return await request(`${API_URL}document/image`, 'post', token, params);
	},
	async addDocument(token: string, params: Document): Promise<string> {
		return await request(`${API_URL}document`, 'post', token, params);
	},
	async getDocuments(token: string): Promise<Document[]> {
		return await request(`${API_URL}document`, 'get', token, '');
	},
	async getDocument(token: string, index: number): Promise<Document> {
		return await request(`${API_URL}document/${index}`, 'get', token, '');
	},
	async updateDocument(token: string, params: Document): Promise<string> {
		return await request(`${API_URL}document/${params.index}`, 'post', token, params);
	},
};