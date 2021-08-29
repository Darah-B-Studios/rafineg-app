import { useRecoilState } from "recoil";
import { IProfile } from "../models/Profile.model";
import { profileListState } from "../recoil/atoms/profile.atom";
import { profileService } from "../services/priofile.service"

export const useProfile = () => {
  const [profileList, setProfileList] = useRecoilState(profileListState);

  /**
   * Initialize app with all user profile for admin users
   */
  const initProfileState = async () => {
    const apiResponse = await profileService.index();
    setProfileList(apiResponse.data)
  }

  /**
   * Update user profile information
   * @param profile user pfoile
   * @returns apiResponse
   */
  const updateProfile = async (profile: IProfile) => {
    const apiResponse = await profileService.update(profile);
    if (apiResponse.success) {
      profileList.map(profileItem => {
        if (profileItem.id === apiResponse.data.id) {
          return apiResponse.data;
        }
      });
      setProfileList(profileList);
    }
    return apiResponse;
  }

  return {
    initProfileState,
    updateProfile
  }
}