import React from "react";
import {
  Image,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import tailwind from "tailwind-rn";
import Container from "../components/shared/container.component";
import Logo from "../components/shared/logo.component";

export default function SplashScreen({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("AuthenticationScreen");
  };
  return (
    <Container>
      <View
        style={tailwind(
          "flex-1 items-center content-center justify-center flex-col"
        )}
      >
        <Logo showText/>
        <Text style={tailwind("")}>Save money, Live better</Text>
      </View>
      <TouchableOpacity onPress={pressHandler}>
        <Text style={tailwind("p-8")}>Welcome, Tap to get started</Text>
      </TouchableOpacity>
    </Container>
  );
}
