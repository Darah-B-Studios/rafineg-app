import "react-native-gesture-handler";
import * as React from "react";
import { RootStackParamList } from "./types";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppShell from "./components/shared/app-shell.component";
import { RecoilRoot } from "recoil";
import { API_URL } from "@env";

//Auth context to manage authentication flow
// const AuthContext = React.createContext('signIn');
type ScreenNavigationProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;

type ScreenRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

export type ScreenProps<T extends keyof RootStackParamList> = {
  route: ScreenRouteProp<T>;
  navigation: ScreenNavigationProp<T>;
};

const App = () => {
  // useCachedResources();

  console.log("API_URL: ", API_URL);
  return (
    <>
      <Provider store={store}>
        <RecoilRoot>
          <AppShell />
        </RecoilRoot>
      </Provider>
    </>
  );
};

export default App;
