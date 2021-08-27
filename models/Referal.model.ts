import { emptyUser, IUser } from "./User.model";

export interface IReferal {
  id: number | null,
  code: string,
  link: string,
  user: IUser
}

export const emptyReferal: IReferal = {
  id: null,
  code: "",
  link: "",
  user: emptyUser
}