import { cashBoxService } from "../services/cashbox.service"

const useCashBox = async () => {
  const setCashBoxes = useRecoilState(cashBoxes);
  const cashBoxes = await cashBoxService.index();
  setCashBoxes(setCashBoxes);
}