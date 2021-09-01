import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { emptyUser, IUser } from "../models/User.model";
import { RootState } from "./store";

interface IUserState {
  user: IUser,
  users: Array<IUser>
}

const initialState: IUserState = {
  user: emptyUser,
  users: []
};

export const userSlice = createSlice({
  name: "user state",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    addUser: (state, action: PayloadAction<IUser | Array<IUser>>) => {
      const data = Array.isArray(action.payload) ? action.payload : [action.payload];
      state.users = [...state.users, ...data];
    },
    updateUser: (state, action: PayloadAction<IUser>) => {
      state.users = [...state.users.filter(pkage => pkage.id !== action.payload.id), action.payload]
    },
    removeUser: (state, action: PayloadAction<IUser>) => {
      state.users = state.users.filter(item => item.id !== action.payload.id);
    }
  }
});

const userSelector = (state: RootState) => state.users.user;
const usersSelector = (state: RootState) => state.users.users;

export { userSelector, usersSelector };

export const { setUser, addUser, updateUser, removeUser } = userSlice.actions;
