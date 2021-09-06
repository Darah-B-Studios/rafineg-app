import { atom } from "recoil";
import { emptyContract, IContract } from "../../models/Contract.model";

const contractState = atom({
  key: "contract",
  default: emptyContract
});

const contractListState = atom({
  key: "contract list",
  default: [] as IContract[]
});

export {
  contractState,
  contractListState
}