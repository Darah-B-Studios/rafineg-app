import { useSetRecoilState } from "recoil";
import { ICashBox } from "../models/Cashbox.model";
import { cashBoxListState } from "../recoil/atoms/cashbox.atom";
import { cashBoxService } from "../services/cashbox.service"

export const useCashBox = () => {
  const init = async () => {
    const setCashBoxList = useSetRecoilState(cashBoxListState);
    const cashBoxes = await cashBoxService.index();
    setCashBoxList(cashBoxes.data);
  }
  
  const storeCashBox = (cashBox: ICashBox) => {
    const apiResponse = cashBoxService.store(cashBox)
  }

  return {
    init,

  }
}