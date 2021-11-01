import { configureStore } from "@reduxjs/toolkit";
import { cashboxSlice } from "./cashbox.slice";
import { contractSlice } from "./contract.slice";
import { packageSlice } from "./package.slice";
import { profileSlice } from "./profile.slice";
import { referalSlice } from "./referal.slice";
import { savingSlice } from "./saving.slice";
import { transactionSlice } from "./transaction.slice";
import { userSlice } from "./user.slice";

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    subscriptions: packageSlice.reducer,
    transactions: transactionSlice.reducer,
    profiles: profileSlice.reducer,
    cashboxes: cashboxSlice.reducer,
    contracts: contractSlice.reducer,
    referals: referalSlice.reducer,
    savings: savingSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
