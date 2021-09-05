import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { emptyContract, IContract } from "../models/Contract.model";
import { RootState } from "./store";

interface IContractState {
  contract: IContract,
  contracts: Array<IContract>
}

const initialState: IContractState = {
  contract: emptyContract,
  contracts: []
};

export const contractSlice = createSlice({
  name: "contract state",
  initialState,
  reducers: {
    setContract: (state, action: PayloadAction<IContract>) => {
      state.contract = action.payload;
    },
    addContract: (state, action: PayloadAction<IContract | Array<IContract>>) => {
      const data = Array.isArray(action.payload) ? action.payload : [action.payload];
      state.contracts = [...state.contracts, ...data];
    },
    updateContract: (state, action: PayloadAction<IContract>) => {
      state.contracts = [...state.contracts.filter(pkage => pkage.id !== action.payload.id), action.payload]
    },
    removeContract: (state, action: PayloadAction<IContract>) => {
      state.contracts = state.contracts.filter(item => item.id !== action.payload.id);
    },
  }
});

const contractSelector = (state: RootState) => state.contracts.contract;
const contractsSelector = (state: RootState) => state.contracts.contracts;

export { contractSelector, contractsSelector };

export const { setContract, addContract, updateContract, removeContract } = contractSlice.actions;