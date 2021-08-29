import { atom } from "recoil";
import { emptyTransaction, ITransaction } from "../../models/Transaction.model";

const transactionState = atom({
  key: "transaction",
  default: emptyTransaction
});

const transactionListState = atom({
  key: "transaction list",
  default: [] as ITransaction[]
});

export {
  transactionState,
  transactionListState
}