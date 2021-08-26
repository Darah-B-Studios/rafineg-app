import { ITransaction } from "./Transaction.model";
import { IUser } from "./User.model";

export interface ICashBox {
  balance: number,
  user: IUser,
  lastTransaction: ITransaction
}