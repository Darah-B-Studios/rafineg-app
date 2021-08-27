import axios, { AxiosResponse } from "axios";
const apiUrl = "https://rafineg.herokuapp.com/api/";
const headers = {
  'Content-Type': 'application/json',
  'Accespt': 'application/json',
}

export type ApiResponse<T = {}> = {
  success: boolean;
  errors?: any;
  message?: string;
  data: T
}

export const baseService = {
  get: async <T>(route: string): Promise<ApiResponse<T[]>> => {
    return await axios.get(route).then(response => response.data);
  },
  post: async <T>(route: string, payload?: any): Promise<ApiResponse<T>> => {
    return await axios.post(route, payload).then(response => response.data);
  },
  patch: async <T>(route: string, payload: any): Promise<ApiResponse<T>> => {
    return await axios.patch(route, payload).then(response => response.data);
  },
  destroy: async <T>(route: string): Promise<ApiResponse<T>> => {
    return await axios.delete(route).then(response => response.data);
  },
};