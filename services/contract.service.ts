import { API_URL } from "@env";
import { IContract } from "../models/Contract.model";
import { baseService } from "./base.service";

export const contractService = {
  index: async () => await baseService.get<IContract>(API_URL.concat('contracts')),
  show: async (contract: IContract) => await baseService.get<IContract>(API_URL.concat(`contracts/${contract.id}`)),
  store: async (contract: IContract) => await baseService.post<IContract>(API_URL.concat('contracts'), contract),
  update: async (contract: IContract) => await baseService.patch<IContract>(API_URL.concat(`contracts/${contract.id}`), contract),
  delete: async (contract: IContract) => await baseService.destroy<IContract>(API_URL.concat(`contracts/${contract.id}`))
}