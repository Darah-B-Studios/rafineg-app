import { API_URL } from "@env";
import { ICashBox } from "../models/Cashbox.model";
import { baseService } from "./base.service";

export const cashBoxService = {
  index: async () => await baseService.get<ICashBox>(API_URL.concat('cashboxes')),
  show: async (cashbox: ICashBox) => await baseService.get<ICashBox>(API_URL.concat(`cashboxes/${cashbox.id}`)),
  store: async (cashbox: ICashBox) => await baseService.post<ICashBox>(API_URL.concat('cashboxes'), cashbox),
  update: async (cashbox: ICashBox) => await baseService.patch<ICashBox>(API_URL.concat(`cashboxes/${cashbox.id}`), cashbox),
  delete: async (cashbox: ICashBox) => await baseService.destroy<ICashBox>(API_URL.concat(`cashboxes/${cashbox.id}`))
}