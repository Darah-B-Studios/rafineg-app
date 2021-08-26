import { IUser } from "./User.model";

export interface ITransaction {
  id: number,
  code: string,
  description: string,
  amount: number,
  method: string,
  user: IUser
}