import { atom } from "recoil";
import { emptyUser, IUser } from "../../models/User.model";

const userState = atom({
  key: "user",
  default: emptyUser
});

const userListState = atom({
  key: "user list",
  default: [] as IUser[]
});

export {
  userState, userListState
}