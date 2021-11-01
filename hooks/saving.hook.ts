import { useDispatch, useSelector } from "react-redux";
import { ISaving } from "../models/Saving.model";
import {
  addSaving,
  removeSaving,
  savingSelector,
  savingsSelector,
} from "../redux/saving.slice";
import { savingService } from "../services/saving.service";

export const useSaving = () => {
  const dispatch = useDispatch();
  const savings = useSelector(savingsSelector);
  const saving = useSelector(savingSelector);

  /**
   * initialize the app state with all savings
   */
  const initSavingState = async () => {
    const apiResponse = await savingService.index();
    if (apiResponse.success) {
      dispatch(addSaving(apiResponse.data));
    }
    return;
  };

  /**
   * Sets a single saving in the state
   * @param saving saving
   * @returns null
   */
  const setSaving = (saving: ISaving): void => dispatch(setSaving(saving));

  /**
   * Save a new saving
   * @param saving saving from user
   * @returns apiResponse
   */
  const storeSaving = async (saving: ISaving) => {
    const apiResponse = await savingService.store(saving);
    console.log("API: ", apiResponse);
    if (apiResponse.success) {
      dispatch(addSaving(apiResponse.data));
    }
    return apiResponse;
  };

  /**
   * Update a saving
   * @param saving user saving
   */
  const updateSaving = async (saving: ISaving) => {
    const apiResponse = await savingService.update(saving);
    if (apiResponse.success) {
      dispatch(updateSaving(apiResponse.data));
    }
    return apiResponse;
  };

  /**
   * Delete a user saving
   * @param saving user saving record
   * @returns apiResponse
   */
  const deleteSaving = async (saving: ISaving) => {
    const apiResponse = await savingService.delete(saving);
    if (apiResponse.success) {
      dispatch(removeSaving(apiResponse.data));
    }
    return apiResponse;
  };

  return {
    saving,
    savings,
    initSavingState,
    setSaving,
    updateSaving,
    storeSaving,
    deleteSaving,
  };
};
