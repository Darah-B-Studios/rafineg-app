import { useSetRecoilState } from "recoil"
import { subscriptionState } from "../recoil/atoms/package.atoms"

export const useTestPackage = () => {
    const setPackage = useSetRecoilState(subscriptionState)


    return {
        setPackage
    }
}