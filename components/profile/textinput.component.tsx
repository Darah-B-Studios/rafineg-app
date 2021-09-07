import React from "react";
import { KeyboardType } from "react-native";
import { View, Text, TextInput } from "react-native";
import tailwind from "tailwind-rn";
type TextInputParams = {
  label: string;
};

const ProfileTextInput: React.FunctionComponent<TextInputParams> = ({
  label,
  ...props
}) => {
  return (
    <View style={tailwind("mb-4 flex-1")}>
      <Text style={tailwind("mb-2")}>{label}</Text>
      <TextInput
        style={tailwind("border text-left rounded w-full p-2 border-gray-400")}
        {...props}
      />
    </View>
  );
};

export default ProfileTextInput;
