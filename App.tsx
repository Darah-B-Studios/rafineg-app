import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { RecoilRoot } from 'recoil';
import { useAppHook } from './hooks/app.hook';

<<<<<<< Updated upstream
const App = () => {
  // const isLoadingComplete = useCachedResources();
=======
import ReferralListScreen from './screens/referrals/ReferralListScreen';
import Packages from './screens/packages/Packages';
import Signup from './screens/authentication/Signup';
import VerifyPhoneNumberScreen from './screens/verification/VerifyPhoneNumberScreen';
import VerifyPhoneSuccessScreen from './screens/verification/VerifyPhoneSuccessScreen';
import Transactions from './screens/transactions/Transactions';
import EditProfileScreen from './screens/profile/EditProfileScreen';

export default function App() {
  const isLoadingComplete = useCachedResources();
>>>>>>> Stashed changes
  const colorScheme = useColorScheme();
  const { initAppState } = useAppHook();
  useEffect(() => {
    initAppState();
  }, []);
  
    return (
<<<<<<< Updated upstream
      <RecoilRoot>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </RecoilRoot>
=======
      <EditProfileScreen/>
      // <SafeAreaProvider>
      //   <Navigation colorScheme={colorScheme} />
      //   <StatusBar />
      // </SafeAreaProvider>
>>>>>>> Stashed changes
    );
}

export default App;
