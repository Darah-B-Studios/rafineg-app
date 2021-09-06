import { useDispatch, useSelector } from "react-redux";
import { ITransaction } from "../models/Transaction.model";
import { addTransaction, removeTransaction, transactionSelector, transactionsSelector } from "../redux/transaction.slice";
import { transactionService } from "../services/transaction.service";

export const useTransaction = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(transactionsSelector);
  const transaction = useSelector(transactionSelector);

  /**
   * initialize the app state with all transactions
   */
  const initTransactionState = async () => {
    const apiResponse = await transactionService.index();
    if (apiResponse.success) {
      dispatch(addTransaction(apiResponse.data));
    }
    return;
  }

    
  /**
   * Sets a single transaction in the state
   * @param transaction transaction
   * @returns null
   */
  const setTransaction = (transaction: ITransaction): void => dispatch(setTransaction(transaction));

  /**
   * Save a new transaction   
   * @param transaction transaction from user
   * @returns apiResponse
   */
  const storeTransaction = async (transaction: ITransaction) => {
    const apiResponse = await transactionService.store(transaction);
    if (apiResponse.success) {
      dispatch(addTransaction(apiResponse.data));
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
      dispatch(updateTransaction(apiResponse.data));
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
      dispatch(removeTransaction(apiResponse.data));
    }
    return apiResponse;
  }

  return {
    transaction,
    transactions,
    initTransactionState,
    setTransaction,
    updateTransaction,
    storeTransaction,
    deleteTransaction
  }
}