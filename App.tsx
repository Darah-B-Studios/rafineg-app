import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import ReferralListScreen from './screens/referrals/ReferralListScreen';
import Packages from './screens/packages/Packages';
import Signup from './screens/authentication/Signup';
import VerifyPhoneNumberScreen from './screens/verification/VerifyPhoneNumberScreen';
import VerifyPhoneSuccessScreen from './screens/verification/VerifyPhoneSuccessScreen';
import Transactions from './screens/transactions/Transactions';
import ProfileScreen from './screens/profile/ProfileScreen';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
