import { atom } from "recoil";
import { emptyPackage, IPackage } from "../../models/Package.model";

const subscriptionState = atom({
  key: "subscription",
  default: emptyPackage
});

const subscriptionListState = atom({
  key: "subscription list",
  default: [] as IPackage[]
});

export { subscriptionState, subscriptionListState }