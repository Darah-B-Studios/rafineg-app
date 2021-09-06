import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { emptyReferal, IReferal } from "../models/Referal.model";
import { RootState } from "./store";

interface IReferalState {
  referal: IReferal,
  referals: Array<IReferal>
}

const initialState: IReferalState = {
  referal: emptyReferal,
  referals: []
};

export const referalSlice = createSlice({
  name: "referal state",
  initialState,
  reducers: {
    setReferal: (state, action: PayloadAction<IReferal>) => {
      state.referal = action.payload;
    },
    addReferal: (state, action: PayloadAction<IReferal | Array<IReferal>>) => {
      const data = Array.isArray(action.payload) ? action.payload : [action.payload];
      state.referals = [...state.referals, ...data];
    },
      updateReferal: (state, action: PayloadAction<IReferal>) => {
      state.referals = [...state.referals.filter(pkage => pkage.id !== action.payload.id), action.payload]
    },
    removeReferal: (state, action: PayloadAction<IReferal>) => {
      state.referals = state.referals.filter(item => item.id !== action.payload.id);
    }
  }
});

const referalSelector = (state: RootState) => state.referals.referal;
const referalsSelector = (state: RootState) => state.referals.referals;

export { referalSelector, referalsSelector };

export const { setReferal, addReferal, updateReferal, removeReferal } = referalSlice.actions;