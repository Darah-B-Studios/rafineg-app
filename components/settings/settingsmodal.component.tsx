import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import tailwind from "tailwind-rn";

type SettingsModalProps = {
  showModal: boolean;
  title: string;
  closeModal: () => void;
};

const SettingsModal: React.FunctionComponent<SettingsModalProps> = ({
  showModal,
  children,
  title,
  closeModal,
  ...props
}) => {
  const [modalVisible, setModalVisible] = useState(showModal);

  return (
    <Modal
      {...props}
      animationType="slide"
      transparent={true}
      visible={modalVisible}
    >
      <View
        style={{
          backgroundColor: "rgba(0,0,0,0.2)",
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <View style={[tailwind("items-center rounded-lg  m-2 h-5/6 bg-white")]}>
          <View style={tailwind("w-full")}>
            <View style={tailwind("flex-row justify-between p-4")}>
              <Text style={tailwind("text-xl")}>{title}</Text>
              <TouchableOpacity
                onPress={closeModal}
                style={tailwind("justify-end")}
              >
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={tailwind("h-0.5 w-full bg-gray-300")} />
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default SettingsModal;
