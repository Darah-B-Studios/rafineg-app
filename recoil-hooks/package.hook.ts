import { useDispatch, useSelector } from "react-redux";
import { IPackage } from "../models/Package.model";
import { addPackage, removePackage, subscriptionSelector, subscriptionsSelector } from "../redux/package.slice";
import { packageService } from "../services/package.service"

export const usePackage = () => {
  const dispatch = useDispatch();
  const subscriptions = useSelector(subscriptionsSelector);
  const subscription = useSelector(subscriptionSelector);

  /**
   * Initialize the app with all the available packages
   * @returns null
   */
  const initPackageState = async () => {
    const apiResponse = await packageService.index();
    if (apiResponse.success) {
      dispatch(addPackage(apiResponse.data));
    }
    return;
  }

    /**
   * Sets a single package in the state
   * @param package package
   * @returns null
   */
  const setPackage = (suscription: IPackage): void => dispatch(setPackage(suscription));

  /**
   * Add a new package (alias subscription) to the platform
   * @param subscription package for user, this is
   *                    used as an alias because package is a keyword.
   * @return apiResponse
   */
  const storePackage = async (subscription: IPackage) => {
    const apiResponse = await packageService.store(subscription);
    if (apiResponse.success) {
      dispatch(addPackage(apiResponse.data));
    }
    return apiResponse;
  }

  /**
   * Update a package in the app
   * @param subscription package
   * @returns apiResponse
   */
  const updatePackage = async (subscription: IPackage) => {
    const apiResponse = await packageService.update(subscription);
     if (apiResponse.success) {
       dispatch(updatePackage(apiResponse.data));
    }
    return apiResponse;
  }

  /**
   * Delete a package in the system
   * @param subscription app package
   * @returns apiResponse
   */
  const deletePackage = async (subscription: IPackage) => {
    const apiResponse = await packageService.delete(subscription);
     if (apiResponse.success) {
       dispatch(removePackage(apiResponse.data));
    }
    return apiResponse;
  }

  return {
    subscription,
    subscriptions,
    setPackage,
    initPackageState,
    storePackage,
    updatePackage,
    deletePackage
  }
}