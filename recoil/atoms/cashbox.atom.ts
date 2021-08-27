import { emptyCashBox } from "../../models/Cashbox.model";

const cashBox = atom({
  key: "cashbox",
  default: emptyCashBox
});

const cashBoxes = atom({
  key: "cashboxes",
  default: []
});