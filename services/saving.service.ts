import { API_URL } from "@env";
import { ISaving } from "../models/Saving.model";
import { baseService } from "./base.service";

export const savingService = {
  index: async () => await baseService.get<ISaving>(API_URL.concat("savings")),
  show: async (saving: ISaving) =>
    await baseService.get<ISaving>(API_URL.concat(`savings/${saving.id}`)),
  store: async (saving: ISaving) =>
    await baseService.post<ISaving>(API_URL.concat("savings"), saving),
  update: async (saving: ISaving) =>
    await baseService.patch<ISaving>(
      API_URL.concat(`savings/${saving.id}`),
      saving
    ),
  delete: async (saving: ISaving) =>
    await baseService.destroy<ISaving>(API_URL.concat(`savings/${saving.id}`)),
};
