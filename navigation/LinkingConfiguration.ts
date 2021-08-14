/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      SplashScreen: {
        screens: {
          SplashScreen: 'SplashScreen'
        }
      },
      AuthenticationScreen: {
        screens: {
          AuthenticationScreen: 'AuthenticationScreen'
        }
      },
      Login: {
        screens: {
          Login:'Login'
        }
      },
    },
  },
};
