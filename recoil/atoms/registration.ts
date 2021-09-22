import { atom } from "recoil";
import {
  emptyRegistration,
  IRegistration,
} from "../../models/Registration.model";

const registrationState = atom({
  key: "registration",
  default: emptyRegistration,
});

const registrationListState = atom({
  key: "registration list",
  default: [] as IRegistration[],
});

export { registrationState, registrationListState };
