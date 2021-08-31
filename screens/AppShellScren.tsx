import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from '../navigation'
import useCachedResources from '../hooks/useCachedResources'
import { useColorScheme } from 'react-native'
import EditProfileScreen from './profile/EditProfileScreen'
// import { useAppHook } from '../hooks/app.hook'

const AppShell: React.FunctionComponent = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  // const { initAppState } = useAppHook();

  // const setupAppState = async () => await initAppState();
  // useEffect(() => {
  //   setupAppState();
  // }, []);

  return (
    <> 
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    </>
  )
}

export default AppShell
