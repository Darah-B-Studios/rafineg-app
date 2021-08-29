import { IUser } from "../../models/User.model"
import { authService } from "../../services/auth/auth.service";
import { baseService } from "../../services/base.service";


export const useAuth = () => {
  const login = (user: IUser) => authService.login(user);
  const register = (user: IUser) => authService.login(user);
  const testAuth = async () => await baseService.test();

  return {
    login,
    register,
    testAuth
  }
}