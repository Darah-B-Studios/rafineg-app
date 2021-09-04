import { useRecoilState } from "recoil";
import { IUser } from "../models/User.model";
import { userListState } from "../recoil/atoms/user.atom";
import { userService } from "../services/user.service"

export const useUser = () => {
  const [userList, setUserList] = useRecoilState(userListState);

  /**
   * Initialize the app with various users
   * @returns null
   */
  const initUserState = async () => {
    const apiResponse = await userService.index();
    if (apiResponse.success) {
      setUserList(apiResponse.data);
    }
    return;
  }

  /**
   * Add or store a new user 
   * @param user user info
   * @returns apiResponse
   */
  const storeUser = async (user: IUser) => {
    const apiResponse = await userService.store(user);
    if (apiResponse.success) {
      setUserList([...userList, apiResponse.data]);
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
      userList.map(item => {
        if (item.id === apiResponse.data.id) {
          return apiResponse.data;
        }
      })
      setUserList(userList);
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
      const newUserList = userList.filter(user => user.id !== user.id);
      setUserList(newUserList);
    }
    return apiResponse;
  }

  return {
    initUserState,
    storeUser,
    updateUSer,
    deleteUser
  }
}