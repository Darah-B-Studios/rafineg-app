import { API_URL } from "@env";
import { ICashBox } from "../models/Cashbox.model";
import { baseService } from "./base.service";

export const cashBoxService = {
  index: async () => await baseService.get(API_URL.concat('cashboxes')),
  store: async (cashbox: ICashBox) => await baseService.post(API_URL.concat('cashboxes'), cashbox),
  update: async (cashbox: ICashBox) => await baseService.patch(API_URL.concat(`cashboxes/${cashbox.id}`), cashbox),
  delete: async (cashbox: ICashBox) => await baseService.destroy(API_URL.concat(`cashboxes/${cashbox.id}`))
}