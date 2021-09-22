import { API_URL } from "@env";
import { IRegistration } from "../models/Registration.model";
import { baseService } from "./base.service";

export const registrationService = {
  index: async () =>
    await baseService.get<IRegistration>(API_URL.concat("registration")),
  show: async (registration: IRegistration) =>
    await baseService.get<IRegistration>(
      API_URL.concat(`registration/${registration.id}`)
    ),
  store: async (registration: IRegistration) => {
    return await baseService.post<IRegistration>(
      API_URL.concat("registration"),
      registration
    );
  },
  update: async (registration: IRegistration) =>
    await baseService.patch<IRegistration>(
      API_URL.concat(`registration/${registration.id}`),
      registration
    ),
  delete: async (registration: IRegistration) =>
    await baseService.destroy<IRegistration>(
      API_URL.concat(`registration/${registration.id}`)
    ),
};
