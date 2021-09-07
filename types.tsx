/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  SplashScreen: undefined;
  AuthenticationScreen: undefined;
  Login: undefined;
  Signup: undefined;
  Dashboard: undefined;
  Packages: undefined;
  PackageDetails: undefined,
  Referals: undefined,
  EditProfile: undefined,
  Withdraw: undefined,
  Transactions: undefined,
  TransactionDetail: undefined,
  Profiles: undefined,
  Profile: undefined,
};

export type DrawerNavParamList = {
  Dashboard: undefined;
  Subscriptions: undefined;
  ReferralScreen: undefined;
  Transactions: undefined;
  Settings: undefined;
  PackageDetails: undefined,
  Logout: undefined;
  Packages: undefined;
}

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
