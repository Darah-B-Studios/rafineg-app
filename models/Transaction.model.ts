import { emptyUser, IUser } from "./User.model";

export interface ITransaction {
  id: number,
  code?: "",
  description: string,
  amount: number,
  method: string,
  user?: IUser,
  createOn: Date,
  updateOn?: Date,
}

export const emptyTransaction: ITransaction = {
    id: 0,
    code: "",
    description: "",
    amount: 0,
    method: "",
    user: emptyUser,
    createOn: new Date(),
    updateOn: new Date(),
}