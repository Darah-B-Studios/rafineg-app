import { atom } from "recoil";
import { emptyPackage, IPackage } from "../../models/Package.model";

const subcriptionState = atom({
  key: "subscription",
  default: emptyPackage
});

const subscriptionListState = atom({
  key: "subscription list",
  default: [] as IPackage[]
});

export { subcriptionState, subscriptionListState }