import React, { useState } from "react";
import {
  TextInput,
  KeyboardAvoidingView,
  View,
  Text,
  Platform,
  Pressable,
  Image,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import tailwind from "tailwind-rn";
import { useForm, Controller } from "react-hook-form";
import Container from "../../components/shared/container.component";
import { ScreenProps } from "../../App";
import { Formik } from "formik";

import { registrationService } from "../../services/registration.service";
import {
  emptyRegistration,
  IRegistration,
} from "../../models/Registration.model";
import { Button } from "react-native-paper";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil/atoms/user.atom";
import { AntDesign } from "@expo/vector-icons";

const Registration: React.FunctionComponent<ScreenProps<"Registration">> = ({
  navigation,
}) => {
  const phoneNumber = React.useRef<TextInput>(null);
  const transactionMethod = React.useRef<TextInput>(null);
  const user = useRecoilValue(userState);

  const [transactionType, setTransactionType] = useState("");
  const [mtnCheckbox, setMtnCheckbox] = useState(false);
  const [orangeCheckbox, setOrangeCheckbox] = useState(false);

  const onPressMtnMomo = () => {
    setTransactionType("mtn");
    setMtnCheckbox(true);
    setOrangeCheckbox(false);
  };

  const onPressOrangeMomo = () => {
    setTransactionType("orange");
    setOrangeCheckbox(true);
    setMtnCheckbox(false);
  };

  return (
    <Container>
      <KeyboardAvoidingView
        style={tailwind("flex-1 h-full w-full items-center")}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={tailwind("w-full pt-24")}>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 30,
            }}
          >
            <Text style={tailwind("px-4 text-xl text-white")}>
              Choose{" "}
              <Text style={{ color: "#9d0090" }}>Transaction Method</Text>
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={onPressMtnMomo}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#9d0090",
                  borderRadius: 3,
                  alignContent: "center",
                  // padding: 5,
                }}
              >
                <Image
                  resizeMode="contain"
                  source={require("./../../assets/images/momo.png")}
                  style={{ width: 150, height: 150 }}
                />
              </View>
              {mtnCheckbox && (
                <AntDesign
                  style={tailwind("self-center")}
                  name="check"
                  size={24}
                  color="green"
                />
              )}
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressOrangeMomo}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#9d0090",
                  borderRadius: 3,
                  // padding: 5,
                }}
              >
                <Image
                  resizeMode="contain"
                  source={require("./../../assets/images/orange-momo.jpeg")}
                  style={{ width: 150, height: 150 }}
                />
              </View>
              {orangeCheckbox && (
                <AntDesign
                  style={tailwind("self-center")}
                  name="check"
                  size={24}
                  color="green"
                />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Formik
            initialValues={emptyRegistration}
            onSubmit={async (values, { setSubmitting }) => {
              const obj: IRegistration = {
                ...values,
                phone_number: values.phone_number,
                transaction_method: transactionType,
              };

              console.log("obj: ", obj);

              const feedback = await registrationService.store(obj);

              if (feedback) {
                console.log("Successful !", feedback.message);
              } else {
                console.log("Not successful !");
              }

              setSubmitting(false);
            }}
          >
            {({
              handleBlur,
              handleChange,
              isSubmitting,
              handleReset,
              values,
              handleSubmit,
            }) => (
              <View
                style={tailwind(
                  "pt-12 w-full m-1 items-center content-center justify-center flex-col"
                )}
              >
                <View
                  style={tailwind(
                    "border-solid border-2 justify-center w-11/12 border-white mb-4"
                  )}
                >
                  <TextInput
                    style={tailwind("py-3 px-4 text-xl text-white")}
                    placeholder="Transaction Method"
                    selectionColor="#ffffff"
                    onBlur={handleBlur("transaction_method")}
                    onSubmitEditing={() => transactionMethod.current?.focus}
                    onChangeText={handleChange("transaction_method")}
                    ref={transactionMethod}
                    placeholderTextColor="#ffffff"
                    editable={false}
                    value={transactionType}
                  />
                </View>

                <View
                  style={tailwind(
                    "border-solid border-2 justify-center w-11/12 border-white mb-4"
                  )}
                >
                  <TextInput
                    style={tailwind("py-3 px-4 text-xl text-white")}
                    placeholder="Phone Number"
                    keyboardType="phone-pad"
                    textContentType="telephoneNumber"
                    selectionColor="#ffffff"
                    returnKeyType="done"
                    onBlur={handleBlur("phone_number")}
                    onChangeText={handleChange("phone_number")}
                    ref={phoneNumber}
                    placeholderTextColor="#ffffff"
                    // secureTextEntry
                    value={values.phone_number}
                    onSubmitEditing={() => phoneNumber.current?.focus}
                  />
                </View>

                <Button
                  style={[
                    tailwind("w-11/12 items-center py-4 mt-5 justify-center "),
                    { backgroundColor: "#9d0090" },
                  ]}
                  onPress={handleSubmit}
                  loading={isSubmitting}
                  disabled={isSubmitting}
                >
                  <Text style={tailwind("text-white text-center text-xl")}>
                    SUBMIT
                  </Text>
                </Button>
              </View>
            )}
          </Formik>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Registration;
