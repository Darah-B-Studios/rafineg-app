import React from 'react'
import { ImageBackground, SafeAreaView } from 'react-native'
import tailwind from "tailwind-rn"
import { StatusBar } from 'expo-status-bar'

const Container: React.FunctionComponent = ({ children }) => {
  return (
    <SafeAreaView style={tailwind("h-full flex-1 items-center w-full")}>
      <StatusBar />
      <ImageBackground
        resizeMode="cover"
        style={tailwind("h-full w-full flex-1 items-center")}
        source={require('./../../assets/images/splash-background.png')}
      >
        {children}
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Container;
