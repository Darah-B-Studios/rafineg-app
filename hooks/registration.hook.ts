import { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { IRegistration } from "../models/Registration.model";
import { registrationState } from "../recoil/atoms/registration";
import { registrationService } from "../services/registration.service";

export const useRegistration = () => {
  const setRegistration = useSetRecoilState(registrationState);

  const registrations = async () => {
    const apiResponse = await registrationService.index();
    return apiResponse;
  };

  const addRegistration = useCallback(async (userData: IRegistration) => {
    const apiResponse = await registrationService.store(userData);
    if (apiResponse.success) {
      setRegistration(apiResponse.data);
      console.log("apiResponse: ", apiResponse.data);
      return true;
    }
    console.log(apiResponse);
    return false;
  }, []);

  return {
    setRegistration,
    registrations,
    addRegistration,
  };
};
