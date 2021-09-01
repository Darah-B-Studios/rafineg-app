import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { emptyTransaction, ITransaction } from "../models/Transaction.model";
import { RootState } from "./store";

interface ITransactionState {
  transaction: ITransaction,
  transactions: Array<ITransaction>
}

const initialState: ITransactionState = {
  transaction: emptyTransaction,
  transactions: []
};

export const transactionSlice = createSlice({
  name: "transaction state",
  initialState,
  reducers: {
       setTransaction: (state, action: PayloadAction<ITransaction>) => {
      state.transaction = action.payload;
    },
    addTransaction: (state, action: PayloadAction<ITransaction | Array<ITransaction>>) => {
       const data = Array.isArray(action.payload) ? action.payload : [action.payload];
      state.transactions = [...state.transactions, ...data];
    },
    updateTransaction: (state, action: PayloadAction<ITransaction>) => {
      state.transactions = [...state.transactions.filter(pkage => pkage.id !== action.payload.id), action.payload]
    },
    removeTransaction: (state, action: PayloadAction<ITransaction>) => {
      state.transactions = state.transactions.filter(item => item.id !== action.payload.id);
    },
  }
});

const transactionSelector = (state: RootState) => state.transactions.transaction;
const transactionsSelector = (state: RootState) => state.transactions.transactions;

export { transactionSelector, transactionsSelector };

export const { setTransaction, addTransaction, updateTransaction, removeTransaction } = transactionSlice.actions;