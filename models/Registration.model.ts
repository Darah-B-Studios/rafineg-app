export interface IRegistration {
  id: number;
  username: string;
  userId: string;
  phoneNumber: string;
  amount: string;
  transactionMethod: string;
}

export const emptyRegistration: IRegistration = {
  id: 0,
  username: "",
  userId: "",
  phoneNumber: "",
  amount: "",
  transactionMethod: "",
};
