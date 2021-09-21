import { useDispatch, useSelector } from "react-redux";
import { IProfile } from "../models/Profile.model";
import { addProfile, profileSelector, profilesSelector } from "../redux/profile.slice";
import { profileService } from "../services/priofile.service"

export const useProfile = () => {
  const dispatch = useDispatch();
  const profiles = useSelector(profilesSelector);
  const profile = useSelector(profileSelector);

  /**
   * Initialize app with all user profile for admin users
   */
  const initProfileState = async () => {
    const apiResponse = await profileService.index();
    if (apiResponse.success) {
      dispatch(addProfile(apiResponse.data));
    }
    return;
  }

  /**
   * Sets a single profile in the state
   * @param profile profile
   * @returns null
   */
  const setProfile = (profile: IProfile): void => dispatch(setProfile(profile));

  /**
   * Update user profile information
   * @param profile user pfoile
   * @returns apiResponse
   */
  const updateProfile = async (profile: IProfile) => {
    const apiResponse = await profileService.update(profile);
    if (apiResponse.success) {
      dispatch(updateProfile(apiResponse.data));
    }
    return apiResponse;
  }

  return {
    profile,
    profiles,
    setProfile,
    initProfileState,
    updateProfile
  }
}