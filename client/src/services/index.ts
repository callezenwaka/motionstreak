import axios, { AxiosResponse } from "axios";
type method = "get" | "GET" | "delete" | "DELETE" | "head" | "HEAD" | "options" | "OPTIONS" | "post" | "POST" | "put" | "PUT" | undefined;

// export default apiClient;
export const request = async <T = never, R = AxiosResponse<T>>(url: string, method: method, token?: string, data?: unknown, query?: unknown): Promise<R> => {
  const res = await axios({
    method: method,
    url: `${url}`,
    data: data,
    params: query,
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  });
	return res.data;
};

// Uncomment for local development
// export const API_URL = 'http://localhost:4000/';
export const API_URL = 'https://onevault-app.herokuapp.com/';