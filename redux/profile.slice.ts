import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { emptyProfile, IProfile } from "../models/Profile.model";
import { RootState } from "./store";

interface IProfileState {
  profile: IProfile,
  profiles: Array<IProfile>
}

const initialState: IProfileState = {
  profile: emptyProfile,
  profiles: []
};

export const profileSlice = createSlice({
  name: "profile state",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<IProfile>) => {
      state.profile = action.payload;
    },
    addProfile: (state, action: PayloadAction<IProfile | Array<IProfile>>) => {
      const data = Array.isArray(action.payload) ? action.payload : [action.payload];
      state.profiles = [...state.profiles, ...data];
    },
    updateProfile: (state, action: PayloadAction<IProfile>) => {
      state.profiles = [...state.profiles.filter(pkage => pkage.id !== action.payload.id), action.payload]
    },
    removeProfile: (state, action: PayloadAction<IProfile>) => {
      state.profiles = state.profiles.filter(item => item.id !== action.payload.id);
    }
  }
});

const profileSelector = (state: RootState) => state.profiles.profile;
const profilesSelector = (state: RootState) => state.profiles.profiles;

export { profileSelector, profilesSelector };

export const { setProfile, addProfile, updateProfile, removeProfile } = profileSlice.actions;