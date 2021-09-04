export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export const emptyUser: IUser = {
    id: 0,
  name: "",
  email: "",
  password: "",
  phoneNumber: "",
}