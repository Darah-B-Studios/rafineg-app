import AsyncStorage from "@react-native-async-storage/async-storage";
import { emptyUser, IUser } from "../../models/User.model"
import { authService } from "../../services/auth/auth.service";
import { baseService } from "../../services/base.service";
import { useUser } from "../user.hook";


export const useAuth = () => {
  const { setUser } = useUser();
  const login = (user: IUser) => authService.login(user);
  const register = async (user: IUser) => {
    const apiResponse = await authService.register(user);
    return apiResponse.data;
  }
  const testAuth = async () => await baseService.test();
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