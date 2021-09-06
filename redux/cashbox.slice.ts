import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { emptyCashBox, ICashBox } from "../models/Cashbox.model";
import { RootState } from "./store";

interface ICashboxState {
  cashbox: ICashBox,
  cashboxes: Array<ICashBox>
}

const initialState: ICashboxState = {
  cashbox: emptyCashBox,
  cashboxes: []
};

export const cashboxSlice = createSlice({
  name: "cashbox state",
  initialState,
  reducers: {
    setCashbox: (state, action: PayloadAction<ICashBox>) => {
      state.cashbox = action.payload;
    },
    addCashbox: (state, action: PayloadAction<ICashBox | Array<ICashBox>>) => {
      const data = Array.isArray(action.payload) ? action.payload : [action.payload];
      state.cashboxes = [
        ...state.cashboxes,
        ...data
      ]
    },
    updateCashbox: (state, action: PayloadAction<ICashBox>) => {
      state.cashboxes = [
        ...state.cashboxes.filter(item => item.id !== action.payload.id),
        action.payload
      ]
    },
    removeCashbox: (state, action: PayloadAction<ICashBox>) => {
      state.cashboxes = state.cashboxes.filter(item => item.id !== action.payload.id);
    }
  }
});

const cashboxSelector = (state: RootState) => state.cashboxes.cashbox;
const cashboxesSelector = (state: RootState) => state.cashboxes.cashboxes;

export { cashboxSelector, cashboxesSelector };

export const { setCashbox, addCashbox, updateCashbox, removeCashbox } = cashboxSlice.actions;