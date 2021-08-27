import { API_URL } from "@env";
import { IReferal } from "../models/Referal.model";
import { baseService } from "./base.service";

export const referalService = {
  index: async () => await baseService.get<IReferal>(API_URL.concat('referals')),
  show: async (referal: IReferal) => await baseService.get<IReferal>(API_URL.concat(`referals/${referal.id}`)),
  store: async (referal: IReferal) => await baseService.post<IReferal>(API_URL.concat('referals'), referal),
  update: async (referal: IReferal) => await baseService.patch<IReferal>(API_URL.concat(`referals/${referal.id}`), referal),
  delete: async (referal: IReferal) => await baseService.destroy<IReferal>(API_URL.concat(`referals/${referal.id}`))
}