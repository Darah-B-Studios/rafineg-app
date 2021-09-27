import { useSetRecoilState } from "recoil"
import { IPackage } from "../models/Package.model";
import { subscribedPackagesListState, subscriptionListState, subscriptionState } from "../recoil/atoms/package.atoms"


export const useTestPackage = () => {

    const setPackage = useSetRecoilState(subscriptionState)

    const setDefaultPackages = useSetRecoilState(subscriptionListState)

    


    return {
        setPackage,
        setDefaultPackages
    }
}