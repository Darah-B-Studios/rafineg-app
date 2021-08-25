import axios from "axios";
const apiUrl = "https://rafineg.herokuapp.com/api/";
const headers = {
  'Content-Type': 'application/json',
  'Accespt': 'application/json',
}
export const baseService = {
  post: async (route: string, payload: any) => {
    await axios.post(route, payload).then(response => response.data);
  },
  get: async (route: string) => await axios.get(route).then(response => response.data),
  test: async () => {
    const data = await axios.get(apiUrl.concat('test')).then(response => response.data);
    return data;
  }
};