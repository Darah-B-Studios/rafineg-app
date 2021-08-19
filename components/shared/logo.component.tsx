import React from 'react'
import tailwind from 'tailwind-rn'
import {
  Image, Text
} from "react-native";

type LogoProps = {
  showText?: boolean;
}

const Logo: React.FunctionComponent<LogoProps> = ({showText}) => {
  return (
    <>
      <Image
        resizeMode="contain"
        source={require('../../assets/images/white-logo.png')}
      />
      {
        showText &&
        <Text style={tailwind("text-white text-3xl font-bold text-center mt-1 uppercase")}>
          rafineg
        </Text>
      }
    </>
  )
}

export default Logo;
