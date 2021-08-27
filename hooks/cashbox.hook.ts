import { useSetRecoilState } from "recoil";
import { ICashBox } from "../models/Cashbox.model";
import { cashBoxListState } from "../recoil/atoms/cashbox.atom";
import { cashBoxService } from "../services/cashbox.service"

export const useCashBox = () => {
  const initCashBoxState = async () => {
    const setCashBoxList = useSetRecoilState(cashBoxListState);
    const cashBoxes = await cashBoxService.index();
    setCashBoxList(cashBoxes.data);
  }
  
  const storeCashBox = async (cashBox: ICashBox) => {
    const apiResponse = await cashBoxService.store(cashBox);
    return apiResponse;
  }

  return {
    initCashBoxState,
    storeCashBox,
  }
}