import { IUser } from "./User.model";

export interface IReferal {
  id: number | null,
  code: string,
  link: string,
  user: IUser
}