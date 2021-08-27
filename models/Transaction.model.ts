import { emptyUser, IUser } from "./User.model";

export interface ITransaction {
  id: number,
  code: "",
  description: string,
  amount: number,
  method: string,
  user: IUser
}

export const emptyTransaction: ITransaction = {
    id: 0,
    code: "",
    description: "",
    amount: 0,
    method: "",
    user: emptyUser
}