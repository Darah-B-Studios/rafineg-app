import { useCashBox } from "./cashbox.hook";
import { useContract } from "./contract.hook";
import { useProfile } from "./profile.hook";
import { useReferal } from "./referal.hook";
import { useTransaction } from "./transaction.hook";
import { useUser } from "./user.hook";

export const useAppHook = () => {
  const { initCashBoxState } = useCashBox();
  const { initUserState } = useUser();
  const { initReferalState } = useReferal();
  const { initProfileState } = useProfile();
  const { initContractState } = useContract();
  const { initTransactionState } = useTransaction();
  
  const initAppState = async () => {
    // await initCashBoxState();
    // await initUserState();
    // await initReferalState();
    // await initTransactionState();
    // await initProfileState();
    // await initContractState();
    return true;
  }

  return {
    initAppState
  }
}