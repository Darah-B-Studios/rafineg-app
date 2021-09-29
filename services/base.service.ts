// import { API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const apiToken = async () => {
  const tokenKey = (await AsyncStorage.getItem("token")) as string;
  return JSON.parse(tokenKey);
};
const API_URL = "https://922a-129-0-101-29.ngrok.io/api/";
export const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "",
};

export type ApiResponse<T = {}> = {
  success: boolean;
  errors?: any;
  message?: string;
  data: T;
  accessToken?: string;
};
async function setConfigHeaders() {
  const token = await apiToken();
  headers["Authorization"] = `Bearer ${token}`;
}
export const baseService = {
  get: async <T>(route: string): Promise<ApiResponse<T[]>> => {
    await setConfigHeaders();
    console.log("headers: ", headers);
    console.log("route: ", route);
    return await axios
      .get(route, { headers })
      .then((response) => response.data)
      .catch((error) => error.response.data);
  },
  post: async <T>(route: string, payload?: any): Promise<ApiResponse<T>> => {
    await setConfigHeaders();
    return await axios
      .post(route, payload, { headers })
      .then((response) => {
        return response.data;
      })
      .catch((error) => error.response.data);
  },
  patch: async <T>(route: string, payload: any): Promise<ApiResponse<T>> => {
    await setConfigHeaders();
    return await axios
      .patch(route, payload, { headers })
      .then((response) => response.data)
      .catch((error) => error.response.data);
  },
  destroy: async <T>(route: string): Promise<ApiResponse<T>> => {
    await setConfigHeaders();
    return await axios
      .delete(route, { headers })
      .then((response) => response.data)
      .catch((error) => error.response.data);
  },
  test: async (): Promise<ApiResponse> => {
    await setConfigHeaders();
    return await axios
      .get(API_URL.concat("test"))
      .then((response) => response.data)
      .catch((error) => error.response.data);
  },
};
