import { useRecoilState } from "recoil";
import { IReferal } from "../models/Referal.model";
import { referalListState } from "../recoil/atoms/referal.atom";
import { referalService } from "../services/referal.service"

export const useReferal = () => {
  const [referalList, setReferalList] = useRecoilState(referalListState);

  /**
   * Initialize with with all referals
   * @returns null
   */
  const initReferalState = async () => {
    const apiResponse = await referalService.index();
    if (apiResponse.success) {
      setReferalList(apiResponse.data);
    }
    return;
  }

  /**
   * Store a new referal into the database
   * @param referal user referal
   * @returns apiResponse
   */
  const storeReferal = async (referal: IReferal) => {
    const apiResponse = await referalService.store(referal);
    if (apiResponse.success) {
      setReferalList([...referalList, apiResponse.data]);
    }
    return apiResponse;
  }

  /**
   * Update a referal
   * @param referal user referal
   * @returns apiResponse
   */
  const updateReferal = async (referal: IReferal) => {
    const apiResponse = await referalService.update(referal);
     referalList.map(referalItem => {
        if (referalItem.id === apiResponse.data.id) {
          return apiResponse.data;
        }
      });
    setReferalList(referalList);
    return apiResponse;
  }

  /**
   * Remove or delete a user referal
   * @param referal user referal
   * @returns apiResponse
   */
  const deleteReferal = async (referal: IReferal) => {
    const apiResponse = await referalService.delete(referal);
    if (apiResponse.success) {
      setReferalList(referalList.filter(referalItem => referalItem.id !== apiResponse.data.id));
    }
    return apiResponse;
  }

  return {
    initReferalState,
    storeReferal,
    updateReferal,
    deleteReferal
  }
}