import { API_URL } from "@env";
import { ITransaction } from "../models/Transaction.model";
import { baseService } from "./base.service";

export const transactionService = {
  index: async () => await baseService.get<ITransaction>(API_URL.concat('transactions')),
  show: async (transaction: ITransaction) => await baseService.get<ITransaction>(API_URL.concat(`transactions/${transaction.id}`)),
  store: async (transaction: ITransaction) => await baseService.post<ITransaction>(API_URL.concat('transactions'), transaction),
  update: async (transaction: ITransaction) => await baseService.patch<ITransaction>(API_URL.concat(`transactions/${transaction.id}`), transaction),
  delete: async (transaction: ITransaction) => await baseService.destroy<ITransaction>(API_URL.concat(`transactions/${transaction.id}`))
}