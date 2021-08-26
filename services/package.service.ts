import { API_URL } from "@env";
import { IPackage } from "../models/Package.model";
import { baseService } from "./base.service";

export const authService = {
  index: async () => await baseService.get(API_URL.concat('packages')),
  store: async (pkage: IPackage) => await baseService.post(API_URL.concat('packages'), pkage),
  update: async (pkage: IPackage) => await baseService.post(API_URL.concat(`packages/${pkage.id}/edit`), pkage),
  delete: async (pkage: IPackage) => await baseService.post(API_URL.concat(`packages/${pkage.id}/delte`))
}