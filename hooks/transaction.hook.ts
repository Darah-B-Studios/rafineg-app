import { useRecoilState } from "recoil";
import { ITransaction } from "../models/Transaction.model";
import { transactionListState } from "../recoil/atoms/transaction.atom";
import { transactionService } from "../services/transaction.service";

export const useTransaction = () => {
  const [transactionList, setTransactionList] = useRecoilState(transactionListState);

  /**
   * initialize the app state with all transactions
   */
  const initTransactionState = async () => {
    const apiResponse = await transactionService.index();
    if (apiResponse.success) {
      setTransactionList(apiResponse.data);
    }
    return;
  }

  /**
   * Save a new transaction   
   * @param transaction transaction from user
   * @returns apiResponse
   */
  const storeTransaction = async (transaction: ITransaction) => {
    const apiResponse = await transactionService.store(transaction);
    if (apiResponse.success) {
      setTransactionList([...transactionList, apiResponse.data]);
    }
    return apiResponse;
  }

  /**
   * Update a transaction
   * @param transaction user transaction
   */
  const updateTransaction = async (transaction: ITransaction) => {
    const apiResponse = await transactionService.update(transaction);
    if (apiResponse.success) {
      transactionList.map(item => {
        if (item.id === apiResponse.data.id) {
          return apiResponse.data;
        }
      })
      setTransactionList(transactionList);
    }
    return apiResponse;
  }

  /**
   * Delete a user transaction  
   * @param transaction user transaction record
   * @returns apiResponse
   */
  const deleteTransaction = async (transaction: ITransaction) => {
    const apiResponse = await transactionService.delete(transaction);
    if (apiResponse.success) {
      setTransactionList(transactionList.filter(transactionItem => transactionItem.id !== apiResponse.data.id));
    }
    return apiResponse;
  }

  return {
    initTransactionState,
    updateTransaction,
    storeTransaction,
    deleteTransaction
  }
}