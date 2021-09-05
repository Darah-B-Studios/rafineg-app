import { useDispatch, useSelector } from "react-redux";
import { ICashBox } from "../models/Cashbox.model";
import { addCashbox, cashboxesSelector, cashboxSelector } from "../redux/cashbox.slice";
import { cashBoxService } from "../services/cashbox.service"

export const useCashBox = () => {
  const dispatch = useDispatch();
  const cashBoxes = useSelector(cashboxesSelector);
  const cashBox = useSelector(cashboxSelector);

  /**
   * Initialize the cashBoxes state
   */
  const initCashBoxState = async () => {
    const apiResponse = await cashBoxService.index();
    if (apiResponse.success) {
      dispatch(addCashbox(apiResponse.data));
    }
  }

  /**
   * Sets a single cashbox in the state
   * @param cashbox cashbox
   * @returns null
   */
  const setCashBox = (cashbox: ICashBox): void => dispatch(setCashBox(cashbox));
  
  /**
   * Save a new cashbox to there server
   * @param cashBox cashbox
   * @returns apiResponse
   */
  const storeCashBox = async (cashBox: ICashBox) => {
    const apiResponse = await cashBoxService.store(cashBox);
    if (apiResponse.success) {
      dispatch(addCashbox(apiResponse.data));
    }
    return apiResponse;
  }

  /**
   * update cashbos
   * @param cashBox ICashBox
   * @returns ApiResponse
   */
  const updateCashBox = async (cashBox: ICashBox) => {
    const apiResponse = await cashBoxService.update(cashBox);
    if (apiResponse.success) {
      dispatch(updateCashBox(apiResponse.data));
    }
    return apiResponse;
  }

  return {
    cashBox,
    cashBoxes,
    setCashBox,
    initCashBoxState,
    storeCashBox,
    updateCashBox,
  }
}

