import { useDispatch, useSelector } from "react-redux";
import { IContract } from "../models/Contract.model";
import { addContract, contractSelector, contractsSelector, removeContract } from "../redux/contract.slice";
import { contractService } from "../services/contract.service";

export const useContract = () => {
  const dispatch = useDispatch();
  const contracts = useSelector(contractsSelector);
  const contract = useSelector(contractSelector);


  /**
   * initialize app contract state
   * @returns null
   */
  const initContractState = async () => {
    const apiResponse = await contractService.index();
    if (apiResponse.success) {
      dispatch(addContract(apiResponse.data));
    }
    return;
  }

  /**
   * Sets a single contract in the state
   * @param contract contract
   * @returns null
   */
  const setContract = (contract: IContract): void => dispatch(setContract(contract));

  /**
   * Add new contract
   * @param contract user contract
   * @returns apiResponse
   */
  const storeContract = async (contract: IContract) => {
    const apiResponse = await contractService.store(contract);
    if (apiResponse.success) {
      dispatch(addContract(apiResponse.data));
    }
    return apiResponse;
  }

  /**
   * Update a Contract
   * @param contract user Contract
   */
  const updateContract = async (contract: IContract) => {
    const apiResponse = await contractService.update(contract);
    if (apiResponse.success) {
     dispatch(updateContract(apiResponse.data));
    }
    return apiResponse;
  }

  /**
   * Delete a contract
   * @param contract user contract
   * @returns apiResponse
   */
  const deleteContract = async (contract: IContract) => {
    const apiResponse = await contractService.delete(contract);
    if (apiResponse.success) {
      dispatch(removeContract(apiResponse.data));
    }
    return apiResponse;
  }

  return {
    contract,
    contracts,
    setContract,
    initContractState,
    storeContract,
    updateContract,
    deleteContract
  }
}