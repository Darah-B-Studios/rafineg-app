import { IUser } from "./User.model";

export interface IProfile {
  id: number,
  user: IUser,
  bio: string,
  address: string,
  gender: string,
  dateOfBirth: Date,
  imageUrl: string,
  createdOn: Date,
  updatedOn: Date
}