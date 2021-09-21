import { API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


export const apiToken = async () => {
  const token = await AsyncStorage.getItem('token') as string;
  console.log('token: ', token);
  // return JSON.parse(token);
};


export const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: `Bearer`
}

export type ApiResponse<T = {}> = {
  success: boolean;
  errors?: any;
  message?: string;
  data: T,
  accessToken?: string;
}

export const baseService = {
  get: async <T>(route: string): Promise<ApiResponse<T[]>> => {
    return await axios.get(route, {headers}).then(response => response.data);
  },
  post: async <T>(route: string, payload?: any): Promise<ApiResponse<T>> => {
    return await axios.post(route, payload, {headers}).then(response => response.data);
  },
  patch: async <T>(route: string, payload: any): Promise<ApiResponse<T>> => {
    return await axios.patch(route, payload, {headers}).then(response => response.data);
  },
  destroy: async <T>(route: string): Promise<ApiResponse<T>> => {
    return await axios.delete(route, {headers}).then(response => response.data);
  },
  test: async (): Promise<ApiResponse> => {
    return await axios.get(API_URL.concat('test'))
    .then(response => response.data)
  }
};