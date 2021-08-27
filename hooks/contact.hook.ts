import { useRecoilState } from "recoil"
import { IContract } from "../models/Contract.model";
import { contractListState } from "../recoil/atoms/contract.atom"
import { contractService } from "../services/contract.service";

export const useContract = () => {
  const [contractList, setContractList] = useRecoilState(contractListState);

  /**
   * initialize app contract state
   * @returns null
   */
  const initContractState = async () => {
    const apiResponse = await contractService.index();
    if (apiResponse.success) {
      setContractList(apiResponse.data);
    }
    return;
  }

  /**
   * Add new contract
   * @param contract user contract
   * @returns apiResponse
   */
  const storeContract = async (contract: IContract) => {
    const apiResponse = await contractService.store(contract);
    if (apiResponse.success) {
      setContractList([...contractList, apiResponse.data]);
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
      contractList.map(item => {
        if (item.id === apiResponse.data.id) {
          return apiResponse.data;
        }
      })
      setContractList(contractList);
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
      contractList.map(item => {
        if (item.id === apiResponse.data.id) {
          return apiResponse.data;
        }
      })
      setContractList(contractList);
    }
    return apiResponse;
  }

  return {
    initContractState,
    storeContract,
    updateContract,
    deleteContract
  }
}