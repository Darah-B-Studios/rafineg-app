export interface IUser {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  isRegistered: boolean;
  isVerified: boolean;
  token?: string;
}

export const emptyUser: IUser = {
  id: 0,
  name: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phoneNumber: "",
  isRegistered: false,
  isVerified: false,
  token: "",
}