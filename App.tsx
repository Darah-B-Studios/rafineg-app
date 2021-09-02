import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import useColorScheme from './hooks/useColorScheme';
import useCachedResources from './hooks/useCachedResources';
import { RootStackParamList } from './types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Provider } from "react-redux";
import store from './redux/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
import { StatusBar } from 'expo-status-bar';
import { useAppHook } from './hooks/app.hook';

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
  const { initAppState } = useAppHook();
  useCachedResources();
  const colorScheme = useColorScheme();
  useEffect(() => {
    initAppState()
      .then(response => console.log('state loaded'))
      .catch(error => console.log('Error: ', error));
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
