import { emptyTransaction, ITransaction } from "./Transaction.model";
import { emptyUser, IUser } from "./User.model";

export interface ICashBox {
  id: number,
  balance: number,
  user: IUser,
  lastTransaction: ITransaction
}

export const emptyCashBox: ICashBox = {
    id: 0,
    balance: 0,
    user: emptyUser,
    lastTransaction: emptyTransaction
}