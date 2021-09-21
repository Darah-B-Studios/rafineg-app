import { useDispatch, useSelector } from "react-redux";
import { useRecoilState } from "recoil";
import { IUser } from "../models/User.model";
import { userListState } from "../recoil/atoms/user.atom";
import { addUser, removeUser, updateUser, userSelector, usersSelector } from "../redux/user.slice";
import { userService } from "../services/user.service"

export const useUser = () => {
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  const user = useSelector(userSelector);

  /**
   * Initialize the app with various users
   * @returns null
   */
  const initUserState = async () => {
    const apiResponse = await userService.index();
    if (apiResponse.success) {
      dispatch(addUser(apiResponse.data));
    }
    return;
  }

    /**
   * Sets a single user in the state
   * @param user user
   * @returns null
   */
  const setUser = (user: IUser): void => dispatch(setUser(user));

  /**
   * Add or store a new user 
   * @param user user info
   * @returns apiResponse
   */
  const storeUser = async (user: IUser) => {
    const apiResponse = await userService.store(user);
    if (apiResponse.success) {
      dispatch(addUser(apiResponse.data));
    }
    return apiResponse;
  }

  /**
   * Add or store a new user 
   * @param user user info
   * @returns apiResponse
   */
  const updateUSer = async (user: IUser) => {
    const apiResponse = await userService.update(user);
    if (apiResponse.success) {
      dispatch(updateUser(apiResponse.data));
    }
    return apiResponse;
  }

  /**
   * Delete user
   * @param user user info
   * @returns apiResponse
   */
  const deleteUser = async (user: IUser) => {
    const apiResponse = await userService.delete(user);
    if (apiResponse.success) {
      dispatch(removeUser(apiResponse.data));
    }
    return apiResponse;
  }

  return {
    user,
    users,
    initUserState,
    setUser,
    storeUser,
    updateUSer,
    deleteUser
  }
}