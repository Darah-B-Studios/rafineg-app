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

export interface registrationApiProps {
  id: number;
  username: string;
  user_id: string;
  phone_number: string;
  amount: string;
  transaction_method: string;
}
