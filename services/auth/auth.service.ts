import { baseService } from "../base.service";
import { API_URL } from "@env";
import { IUser } from "../../models/User.model";

export const authService = {
  login: async (user: IUser) => await baseService.post(API_URL.concat('login'), user),
  register: async (user: IUser) => await baseService.post(API_URL.concat('register'), user)
}