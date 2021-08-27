import axios from "axios";
import { API_URL } from "@env";
const apiUrl = "https://rafineg.herokuapp.com/api";
export const baseService = {
  post: async (route: string, payload: any) => {
    await axios.post(route, payload)
  },
  get: async (route: string) => await axios.get(route),
  test: async () => {
    console.log('application url: ', `${apiUrl}/test`);
    const result = await axios.get(API_URL.concat('test'));
    console.log('result: ', result.data);
    return result.data;
  }
};