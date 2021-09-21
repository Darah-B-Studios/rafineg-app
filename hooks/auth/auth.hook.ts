import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { useRecoilState, useSetRecoilState } from "recoil";
import { emptyUser, IUser } from "../../models/User.model"
import { userState } from "../../recoil/atoms/user.atom";

import { authService } from "../../services/auth/auth.service";
import { apiToken, baseService, headers } from "../../services/base.service";
import { useUser } from "../user.hook";


export const useAuth = () => {
  // const { setUser, user } = useUser();
  const setUser = useSetRecoilState(userState);

  const login = async (userData: IUser) => {
    const apiResponse = await authService.login(userData);
    if (apiResponse.success)
    {
      setUser({
        ...apiResponse.data,
        token: apiResponse.accessToken
      });
      // await AsyncStorage.setItem('token', JSON.stringify(apiResponse.accessToken));
      headers.Authorization = `Bearer ${apiResponse.accessToken}`;
      return true;
    }
    return false;
  }

  const register = async (user: IUser) => {
    const apiResponse = await authService.register(user);
    return apiResponse;
  }

  const testAuth = async () => {
    const apiResponse = await baseService.test();
    return apiResponse.data;
  }

  const logout = async () => {
    const apiResonse = await authService.logout();
    if (apiResonse.success) {
      await AsyncStorage.removeItem('token');
      setUser(emptyUser);
    }
  }

  return {
    login,
    register,
    logout,
    testAuth
  }
}