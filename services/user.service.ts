import { API_URL } from "@env";
import { IUser } from "../models/User.model";
import { baseService } from "./base.service";

export const userService = {
  index: async () => await baseService.get<IUser>(API_URL.concat('users')),
  show: async (user: IUser) => await baseService.get<IUser>(API_URL.concat(`users/${user.id}`)),
  store: async (user: IUser) => await baseService.post<IUser>(API_URL.concat('users'), user),
  update: async (user: IUser) => await baseService.patch<IUser>(API_URL.concat(`users/${user.id}`), user),
  delete: async (user: IUser) => await baseService.destroy<IUser>(API_URL.concat(`users/${user.id}`))
}