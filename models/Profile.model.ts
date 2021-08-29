import { emptyUser, IUser } from "./User.model";

export interface IProfile {
  id: number | null,
  user: IUser,
  bio: string,
  address: string,
  gender: string,
  dateOfBirth: Date,
  imageUrl: string,
  createdOn: Date,
  updatedOn: Date
}

export const emptyProfile: IProfile = {
  id: null,
  user: emptyUser,
  bio: "",
  address: "",
  gender: "",
  dateOfBirth: new Date(),
  imageUrl: "",
  createdOn: new Date(),
  updatedOn: new Date()
}