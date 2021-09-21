import React from "react";
import { Text, View } from "react-native";
const AboutComponent = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <Text style={{ flex: 1, padding: 10 }}>About component</Text>
    </View>
  );
};

export default AboutComponent;
