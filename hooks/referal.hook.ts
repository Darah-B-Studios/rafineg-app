import { useDispatch, useSelector } from "react-redux";
import { IReferal } from "../models/Referal.model";
import { addReferal, referalSelector, referalsSelector, removeReferal } from "../redux/referal.slice";
import { referalService } from "../services/referal.service"

export const useReferal = () => {
  const dispatch = useDispatch();
  const referals = useSelector(referalsSelector);
  const referal = useSelector(referalSelector);

  /**
   * Initialize with with all referals
   * @returns null
   */
  const initReferalState = async () => {
    const apiResponse = await referalService.index();
    if (apiResponse.success) {
      dispatch(addReferal(apiResponse.data));
    }
    return;
  }

  
  /**
   * Sets a single referal in the state
   * @param referal referal
   * @returns null
   */
  const setReferal = (referal: IReferal): void => dispatch(setReferal(referal));


  /**
   * Store a new referal into the database
   * @param referal user referal
   * @returns apiResponse
   */
  const storeReferal = async (referal: IReferal) => {
    const apiResponse = await referalService.store(referal);
    if (apiResponse.success) {
      dispatch(addReferal(apiResponse.data));
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
    if (apiResponse.success) {
      dispatch(updateReferal(apiResponse.data));
    }
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
      dispatch(removeReferal(apiResponse.data));
    }
    return apiResponse;
  }

  return {
    referal,
    referals,
    initReferalState,
    setReferal,
    storeReferal,
    updateReferal,
    deleteReferal
  }
}