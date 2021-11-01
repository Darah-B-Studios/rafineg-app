import { atom } from "recoil";
import { emptySaving, ISaving } from "../../models/Saving.model";

const savingState = atom({
  key: "saving",
  default: emptySaving,
});

const savingListState = atom({
  key: "saving list",
  default: [] as ISaving[],
});

export { savingState, savingListState };
