export interface IUser {
  id: number;
  name: string;
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
  email: "",
  password: "",
  phoneNumber: "",
  isRegistered: false,
  isVerified: false,
  token: "",
}