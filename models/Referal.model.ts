import { IUser } from "./User.model";

export interface IReferal {
  code: string,
  link: string,
  user: IUser
}