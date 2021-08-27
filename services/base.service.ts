import axios from "axios";
const apiUrl = "https://rafineg.herokuapp.com/api/";
const headers = {
  'Content-Type': 'application/json',
  'Accespt': 'application/json',
}
export const baseService = {
  get: async (route: string) => await axios.get(route).then(response => response.data),
  post: async (route: string, payload?: any) => {
    await axios.post(route, payload).then(response => response.data);
  },
  patch: async (route: string, payload: any) => {
    await axios.patch(route, payload).then(response => response.data);
  },
  destroy: async (route: string) => {
    await axios.delete(route).then(response => response.data);
  },
};