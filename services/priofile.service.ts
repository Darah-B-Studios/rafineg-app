import { API_URL } from "@env";
import { IProfile } from "../models/Profile.model";
import { baseService } from "./base.service";

export const profileservice = {
  index: async () => await baseService.get(API_URL.concat('profiles')),
  show: async (profile: IProfile) => await baseService.get<IProfile>(API_URL.concat(`profiles/${profile.id}`)),
  store: async (profile: IProfile) => await baseService.post(API_URL.concat('profiles'), profile),
  update: async (profile: IProfile) => await baseService.patch(API_URL.concat(`profiles/${profile.id}`), profile),
  delete: async (profile: IProfile) => await baseService.destroy(API_URL.concat(`profiles/${profile.id}`))
}