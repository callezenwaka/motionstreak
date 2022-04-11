import { Account } from "@/store/state";
import { API_URL, request } from "./index";

export default {
	async addAccountImage(token: string, params: FormData): Promise<string> {
		return await request(`${API_URL}account/image`, 'post', token, params);
	},
	async addAccount(params: Account): Promise<string> {
		return await request(`${API_URL}account`, 'post', '', params);
	},
	async getAccounts(token: string): Promise<Account[]> {
		return await request(`${API_URL}account`, 'get', token, '');
	},
	async getAccount(token: string, address: string): Promise<Account> {
		return await request(`${API_URL}account/${address}`, 'get', token, '');
	},
	async updateAccount(token: string, params: Account): Promise<string> {
		return await request(`${API_URL}account/${params.address}`, 'put', token, params);
	},
};