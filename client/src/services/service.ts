import { Query, Service } from "@/store/state";
import { API_URL, request } from "./index";

export default {
	async addService(token: string, params: Service): Promise<string> {
		return await request(`${API_URL}service`, 'post', token, params);
	},
	async getServices(token: string, query: Query): Promise<Service[]> {
		return await request(`${API_URL}service`, 'get', token, '', query);
	},
	async getService(token: string, index: number): Promise<Service> {
		return await request(`${API_URL}service/${index}`, 'get', token, '');
	},
	async updateService(token: string, params: Service): Promise<string> {
		return await request(`${API_URL}service/${params.index}`, 'put', token, params);
	},
	async deleteService(token: string, index: number): Promise<string> {
		return await request(`${API_URL}service/${index}`, 'put', token, '');
	},
};