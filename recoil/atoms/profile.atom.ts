import { atom } from "recoil";
import { emptyProfile, IProfile } from "../../models/Profile.model";

const profileState = atom({
  key: "profile",
  default: emptyProfile,
});

const profileListState = atom({
  key: "Profile list",
  default: [] as IProfile[]
});

export {
  profileState,
  profileListState
}