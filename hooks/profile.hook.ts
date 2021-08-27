import { useRecoilState } from "recoil";
import { IProfile } from "../models/Profile.model";
import { profileListState, profileState } from "../recoil/atoms/profile.atom";
import { profileservice } from "../services/priofile.service"

export const useProfile = () => {
  const [profileList, setProfileList] = useRecoilState(profileListState);
  const initiProfileListState = async () => {
    const apiResponse = await profileservice.index();
    setProfileList(apiResponse.data)
  }

  return {
    initiProfileListState,

  }
}