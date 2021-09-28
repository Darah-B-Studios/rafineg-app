import React, { useEffect } from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useAppHook } from '../../hooks/app.hook'
import Navigation from '../../navigation'

const AppShell: React.FunctionComponent = () => {
  const { initAppState } = useAppHook();
  const colorScheme = useColorScheme();
  
  
  useEffect(() => {
    console.log('loading redux data');
    initAppState()
      .then(response => console.log('state loaded', response))
      .catch(error => console.log('Error: ', error));
  }, []);

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
