import { atom } from "recoil";
import { emptyReferal, IReferal } from "../../models/Referal.model";

const referalState = atom({
  key: "referal",
  default: emptyReferal,
});

const referalListState = atom({
  key: "referal list",
  default: [] as IReferal[]
});

export {
  referalState,
  referalListState
}