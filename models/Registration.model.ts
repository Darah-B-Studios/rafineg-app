export interface IRegistration {
  id: number;
  username: string;
  user_id: string;
  phone_number: string;
  amount: string;
  transaction_method: string;
}

export const emptyRegistration: IRegistration = {
  id: 0,
  username: "",
  user_id: "",
  phone_number: "",
  amount: "",
  transaction_method: "",
};
