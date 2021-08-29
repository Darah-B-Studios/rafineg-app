import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { RecoilRoot } from 'recoil';
import { useAppHook } from './hooks/app.hook';

const App = () => {
  // const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const { initAppState } = useAppHook();
  useEffect(() => {
    initAppState();
  }, []);
  
    return (
      <RecoilRoot>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </RecoilRoot>
    );
}

export default App;
