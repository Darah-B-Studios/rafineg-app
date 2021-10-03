import { ApiResponse, headers } from "../base.service";
import { API_URL } from "@env";
import { IUser } from "../../models/User.model";
import axios from "axios";
import { ngrokTunnelLink } from "../../constants";

// const API_URL = ngrokTunnelLink;
const config = headers;

export const authService = {
  login: async (user: IUser): Promise<ApiResponse<IUser>> => {
    const userCredentials = { email: user.email, password: user.password };
    console.log("tunnel: ", API_URL);

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
