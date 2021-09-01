import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { emptyPackage, IPackage } from "../models/Package.model";
import { RootState } from "./store";

interface IPackageState {
  package: IPackage,
  packages: Array<IPackage>
}

const initialState: IPackageState = {
  package: emptyPackage,
  packages: []
};

export const packageSlice = createSlice({
  name: "package state",
  initialState,
  reducers: {
    setPackage: (state, action: PayloadAction<IPackage>) => {
      state.package = action.payload;
    },
    addPackage: (state, action: PayloadAction<IPackage>) => {
       const data = Array.isArray(action.payload) ? action.payload : [action.payload];
      state.packages = [
        ...state.packages,
        ...data
      ]
    },
    updatePackage: (state, action: PayloadAction<IPackage>) => {
      state.packages = [...state.packages.filter(pkage => pkage.id !== action.payload.id), action.payload]
    },
    removePackage: (state, action: PayloadAction<IPackage>) => {
      state.packages = state.packages.filter(item => item.id !== action.payload.id);
    }
  }
});

const subscriptionSelector = (state: RootState) => state.subscriptions.package;
const subscriptionsSelector = (state: RootState) => state.subscriptions.packages;

export { subscriptionSelector, subscriptionsSelector };

export const { setPackage, addPackage, updatePackage, removePackage } = packageSlice.actions;