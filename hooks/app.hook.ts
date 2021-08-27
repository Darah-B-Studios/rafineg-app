import { useCashBox } from "./cashbox.hook";

export const useAppHook = () => {
  const { initCashBoxState } = useCashBox();
  const initAppState = async () => {
    await initCashBoxState();
  }

  return {
    initAppState
  }
}