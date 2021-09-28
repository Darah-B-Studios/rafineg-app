import { ApiResponse, headers } from "../base.service";
// import { API_URL } from "@env";
import { IUser } from "../../models/User.model";
import axios from "axios";
const API_URL = "https://922a-129-0-101-29.ngrok.io/api/";
const config = headers;
export const authService = {
  login: async (user: IUser): Promise<ApiResponse<IUser>> => {
    const userCredentials = { email: user.email, password: user.password };
    return await axios
      .post(API_URL.concat("signin"), userCredentials, { headers })
      .then((response) => response.data)
      .catch((error) => error.response.data);
  },
  register: async (user: IUser): Promise<ApiResponse<IUser>> => {
    const credentials = {
      name: user.name,
      email: user.email,
      password: user.password,
      phone_number: user.phoneNumber,
    };
    return await axios
      .post(API_URL.concat("signup"), credentials, { headers })
      .then((response) => response.data)
      .catch((error) => error.response.data);
  },
  logout: async (): Promise<ApiResponse> =>
    await axios
      .post(API_URL.concat("logout"), config)
      .then((response) => response.data)
      .catch((error) => error.response.data),
};
