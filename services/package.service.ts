import { API_URL } from "@env";
import { IPackage } from "../models/Package.model";
import { baseService } from "./base.service";

export const packageService = {
  index: async () => await baseService.get<IPackage>(API_URL.concat('packages')),
  show: async (pkage: IPackage) => await baseService.get<IPackage>(API_URL.concat(`packages/${pkage.id}`)),
  store: async (pkage: IPackage) => await baseService.post<IPackage>(API_URL.concat('packages'), pkage),
  update: async (pkage: IPackage) => await baseService.patch<IPackage>(API_URL.concat(`packages/${pkage.id}`), pkage),
  delete: async (pkage: IPackage) => await baseService.destroy<IPackage>(API_URL.concat(`packages/${pkage.id}`))
}