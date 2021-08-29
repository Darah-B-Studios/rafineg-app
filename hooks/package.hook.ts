import { useRecoilState } from "recoil";
import { IPackage } from "../models/Package.model";
import { subscriptionListState } from "../recoil/atoms/package.atoms";
import { packageService } from "../services/package.service"

export const usePackage = () => {
  const [packageList, setPackageList] = useRecoilState(subscriptionListState);

  /**
   * Initialize the app with all the available packages
   * @returns null
   */
  const initPackageState = async () => {
    const apiResponse = await packageService.index();
    if (apiResponse.success) {
      setPackageList(apiResponse.data);
    }
    return;
  }

  /**
   * Add a new package (alias subscription) to the platform
   * @param subscription package for user, this is
   *                    used as an alias because package is a keyword.
   * @return apiResponse
   */
  const storePackage = async (subscription: IPackage) => {
    const apiResponse = await packageService.store(subscription);
    if (apiResponse.success) {
      setPackageList([...packageList, apiResponse.data]);
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
       packageList.map(packageItem => {
         if (packageItem.id === apiResponse.data.id) {
           return apiResponse.data;
         }
       });
      setPackageList(packageList);
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
      setPackageList(packageList.filter(packageItem => packageItem.id !== apiResponse.data.id));
    }
    return apiResponse;
  }

  return {
    initPackageState,
    storePackage,
    updatePackage,
    deletePackage
  }
}