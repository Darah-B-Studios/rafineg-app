import React from 'react'
import { ImageBackground, SafeAreaView} from 'react-native'
import tailwind from "tailwind-rn"
import { StatusBar } from 'expo-status-bar'
const Container: React.FunctionComponent = ({children}) => {
  return (  
    <SafeAreaView style={tailwind("h-full items-center w-full flex-1")}>
      <StatusBar/>
      <ImageBackground
        resizeMode="cover"
        style={tailwind("flex-1 h-full w-full items-center")}
        source={require('./../../assets/images/splash-background.png')}
      >
        {children}
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Container;
