import { useRecoilState, useSetRecoilState } from "recoil";
import { ICashBox } from "../models/Cashbox.model";
import { cashBoxListState, cashBoxState } from "../recoil/atoms/cashbox.atom";
import { cashBoxService } from "../services/cashbox.service"

export const useCashBox = () => {
  const [cashBoxList, setCashBoxList] = useRecoilState(cashBoxListState);

  /**
   * Initialize the cashBoxes state
   */
  const initCashBoxState = async () => {
    const setCashBoxList = useSetRecoilState(cashBoxListState);
    const cashBoxes = await cashBoxService.index();
    setCashBoxList(cashBoxes.data);
  }
  
  /**
   * Save a new cashbox to there server
   * @param cashBox cashbox
   * @returns apiResponse
   */
  const storeCashBox = async (cashBox: ICashBox) => {
    const apiResponse = await cashBoxService.store(cashBox);
    if (apiResponse.success) {
      setCashBoxList([...cashBoxList, apiResponse.data]);
    }
    return apiResponse
  }

  /**
   * update cashbos
   * @param cashBox ICashBox
   * @returns ApiResponse
   */
  const updateCashBox = async (cashBox: ICashBox) => {
    const apiResponse = await cashBoxService.update(cashBox);
    if (apiResponse.success) {
      cashBoxList.map(cashBoxItem => {
        if (cashBoxItem.id === apiResponse.data.id) {
          return apiResponse.data;
        }
      });
      setCashBoxList(cashBoxList);
    }
    return apiResponse;
  }

  return {
    initCashBoxState,
    storeCashBox,
    updateCashBox,
  }
}