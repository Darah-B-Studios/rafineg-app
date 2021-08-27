import { API_URL } from "@env";
import { IContract } from "../models/Contract.model";
import { baseService } from "./base.service";

export const authService = {
  index: async () => await baseService.get(API_URL.concat('contracts')),
  store: async (contract: IContract) => await baseService.post(API_URL.concat('contracts'), contract),
  update: async (contract: IContract) => await baseService.post(API_URL.concat(`contracts/${contract.id}/edit`), contract),
  delete: async (contract: IContract) => await baseService.post(API_URL.concat(`contracts/${contract.id}/delte`))
}