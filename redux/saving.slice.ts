import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { emptySaving, ISaving } from "../models/Saving.model";
import { RootState } from "./store";

interface ISavingState {
  saving: ISaving;
  savings: Array<ISaving>;
}

const initialState: ISavingState = {
  saving: emptySaving,
  savings: [],
};

export const savingSlice = createSlice({
  name: "saving state",
  initialState,
  reducers: {
    setSaving: (state, action: PayloadAction<ISaving>) => {
      state.saving = action.payload;
    },
    addSaving: (state, action: PayloadAction<ISaving | Array<ISaving>>) => {
      const data = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
      state.savings = [...state.savings, ...data];
    },
    updateSaving: (state, action: PayloadAction<ISaving>) => {
      state.savings = [
        ...state.savings.filter((pkage) => pkage.id !== action.payload.id),
        action.payload,
      ];
    },
    removeSaving: (state, action: PayloadAction<ISaving>) => {
      state.savings = state.savings.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

const savingSelector = (state: RootState) => state.savings.saving;
const savingsSelector = (state: RootState) => state.savings.savings;

export { savingSelector, savingsSelector };

export const { setSaving, addSaving, updateSaving, removeSaving } =
  savingSlice.actions;
