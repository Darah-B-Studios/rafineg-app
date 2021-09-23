import { useSetRecoilState } from "recoil";
import { registrationState } from "../recoil/atoms/registration";
import { registrationService } from "../services/registration.service";

export const useRegistration = () => {
  const setRegistration = useSetRecoilState(registrationState);

  const registrations = async () => {
    const apiResponse = await registrationService.index();
    return apiResponse;
  };

  return {
    setRegistration,
    registrations,
  };
};
