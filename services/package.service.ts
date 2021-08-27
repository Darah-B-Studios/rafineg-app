import { API_URL } from "@env";
import { IPackage } from "../models/Package.model";
import { baseService } from "./base.service";

export const packageService = {
  index: async () => await baseService.get(API_URL.concat('packages')),
  show: async (pkage: IPackage) => await baseService.get<IPackage>(API_URL.concat(`packages/${pkage.id}`)),
  store: async (pkage: IPackage) => await baseService.post(API_URL.concat('packages'), pkage),
  update: async (pkage: IPackage) => await baseService.patch(API_URL.concat(`packages/${pkage.id}`), pkage),
  delete: async (pkage: IPackage) => await baseService.destroy(API_URL.concat(`packages/${pkage.id}`))
}