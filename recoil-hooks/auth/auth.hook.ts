import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { useRecoilState } from "recoil";
import { emptyUser, IUser } from "../../models/User.model"
import { userState } from "../../recoil/atoms/user.atom";

import { authService } from "../../services/auth/auth.service";
import { baseService } from "../../services/base.service";
import { useUser } from "../user.hook";


export const useAuth = () => {
  // const { setUser, user } = useUser();
  const dispatch = useDispatch();
  const [user, setUser] = useRecoilState(userState);

  const login = async (userData: IUser) => {
    const apiResponse = await authService.login(userData);
    if (apiResponse.success)
    {
      const userData = {
        ...apiResponse.data,
        token: apiResponse.accessToken
      };
      setUser(userData);
      console.log('state user data: ', user);
    }
    return apiResponse;
  }

  const register = async (user: IUser) => {
    const apiResponse = await authService.register(user);
    return apiResponse.data;
  }

  const testAuth = async () => {
    const apiResponse = await baseService.test();
    console.log('test auth response: ', apiResponse);
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