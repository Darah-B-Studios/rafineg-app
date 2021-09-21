import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";

const NotificationsComponent = () => {
  const [switchValue, setswitchValue] = useState(false);
  const toggleSwitch = () => setswitchValue((previousState) => !previousState);

  const notificationsData = [];
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        paddingTop: 30,
        justifyContent: "space-between",
      }}
    >
      <View style={{ flex: 1, padding: 10 }}>
        <Text>New stuff</Text>
        <Text>Receive daily app updates</Text>
      </View>

      <View style={{ flex: 1, padding: 10 }}>
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

export default NotificationsComponent;
