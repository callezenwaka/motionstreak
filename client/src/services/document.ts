import { Document } from "@/store/state";
import { API_URL, request } from "./index";

export default {
	async addDocumentImage(token: string, params: FormData): Promise<string> {
		// console.log(token);
		return await request(`${API_URL}document/image`, 'post', token, params);
	},
	async addDocument(token: string, params: Document): Promise<string> {
		console.log(params);
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