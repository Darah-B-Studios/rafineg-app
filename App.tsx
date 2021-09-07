import 'react-native-gesture-handler';
import React from 'react';
import { RootStackParamList } from './types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Provider } from "react-redux";
import store from './redux/store';
import AppShell from './components/shared/app-shell.component';

//Auth context to manage authentication flow
// const AuthContext = React.createContext('signIn');
type ScreenNavigationProp<
  T extends keyof RootStackParamList
  > = StackNavigationProp<RootStackParamList, T>;

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

  return (
    <>
      <Provider store={store}>
        <AppShell />
      </Provider>
    </>
  );
}

export default App;
