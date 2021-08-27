import { atom } from "recoil";
import { emptyCashBox, ICashBox } from "../../models/Cashbox.model";

const cashBoxState = atom({
  key: "cashbox",
  default: emptyCashBox
});

const cashBoxListState = atom({
  key: "cashbox list",
  default: [] as ICashBox[]
});

export { cashBoxState, cashBoxListState };
