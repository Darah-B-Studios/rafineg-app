import React, { useState } from "react";
import { Text, TouchableOpacity, Switch, View } from "react-native";
const ThemesComponent = () => {
  const [switchValue, setswitchValue] = useState(false);
  const toggleSwitch = () => setswitchValue((previousState) => !previousState);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        paddingTop: 30,
        justifyContent: "space-between",
        alignContent: "center",
      }}
    >
      <View style={{ flex: 1, padding: 10, backgroundColor: "#3f674a" }}>
        <Text>Dark Theme</Text>
      </View>
      <View style={{ flex: 1, padding: 10 }}>
        <Text>{switchValue ? "ACTIVED" : "DE-ACTIVATED"}</Text>
        <TouchableOpacity onPress={() => console.log("touched!!!")}>
          <Switch
            trackColor={{ false: "#cecdcf", true: "#2b2815" }}
            thumbColor={"#f4f3f4"}
            ios_backgroundColor="#ffffff"
            onValueChange={toggleSwitch}
            value={switchValue}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ThemesComponent;
