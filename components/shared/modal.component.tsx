import * as React from "react";
import Modal from "react-native-modal";
import { Text, View } from "react-native";

export const WrapperModalComponent: React.FC = ({ children }) => {
  return (
    <View>
      <Modal>
        <View style={{ flex: 1 }}>{children}</View>
      </Modal>
    </View>
  );
};
