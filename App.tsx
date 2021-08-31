import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import useColorScheme from './hooks/useColorScheme';
import { RecoilRoot } from 'recoil';
import { useAppHook } from './hooks/app.hook';
import useCachedResources from './hooks/useCachedResources';
import AppShell from './screens/AppShellScren';
import { RootStackParamList } from './types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

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
  useCachedResources();
  const colorScheme = useColorScheme();
  // const { initAppState } = useAppHook();
  // useEffect(() => {
  //   initAppState();
  // }, []);

    return (
      <RecoilRoot>
          <AppShell />
      </RecoilRoot>
    );
}

export default App;
