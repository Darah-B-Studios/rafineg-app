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
} from "react-native";
import tailwind from "tailwind-rn";
import { useForm, Controller } from "react-hook-form";
import Container from "../../components/shared/container.component";
import { ScreenProps } from "../../App";
import {
  emptyRegistration,
  IRegistration,
} from "../../models/Registration.model";

const Registration: React.FunctionComponent<ScreenProps<"Registration">> = ({
  navigation,
}) => {
  const phoneNumber = React.useRef<TextInput>(null);
  const transactionMethod = React.useRef<TextInput>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ phoneNumber, transactionMethod }: IRegistration) => {
    console.log("registration", {
      ...emptyRegistration,
      phoneNumber: phoneNumber,
      transactionMethod: transactionMethod,
    });
    if (
      phoneNumber.toString().trim() !== "" &&
      transactionMethod.trim() !== ""
    ) {
      navigation.replace("Dashboard");
    }
  };

  const [transactionType, setTransactionType] = useState("");

  const onPressMtnMomo = () => {
    setTransactionType("mtn");
  };

  const onPressOrangeMomo = () => {
    setTransactionType("orange");
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
                  // padding: 5,
                }}
              >
                <Image
                  resizeMode="contain"
                  source={require("./../../assets/images/momo.png")}
                  style={{ width: 150, height: 150 }}
                />
              </View>
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
            </TouchableOpacity>
          </View>
        </View>

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
            <Pressable onPress={() => transactionMethod.current?.focus()}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur } }) => (
                  <TextInput
                    style={tailwind("py-3 px-4 text-xl text-white")}
                    placeholder="Transaction Method"
                    selectionColor="#ffffff"
                    returnKeyType="done"
                    onBlur={onBlur}
                    onSubmitEditing={handleSubmit(onSubmit)}
                    onChangeText={onChange}
                    ref={transactionMethod}
                    placeholderTextColor="#ffffff"
                    editable={false}
                    value={transactionType}
                  />
                )}
                name="transactionMethod"
                defaultValue=""
              />
            </Pressable>
          </View>

          <View
            style={tailwind(
              "border-solid border-2 justify-center w-11/12 border-white "
            )}
          >
            <Pressable onPress={() => phoneNumber.current?.focus()}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={tailwind("py-3 px-4 text-xl text-white")}
                    placeholder="Phone Number"
                    selectionColor="#ffffff"
                    returnKeyType="done"
                    onBlur={onBlur}
                    onSubmitEditing={handleSubmit(onSubmit)}
                    onChangeText={onChange}
                    ref={phoneNumber}
                    placeholderTextColor="#ffffff"
                    // secureTextEntry
                    value={value}
                  />
                )}
                name="phoneNumber"
                defaultValue=""
              />
            </Pressable>
          </View>

          <TouchableOpacity
            style={[
              tailwind("w-11/12 items-center py-4 mt-5 justify-center "),
              { backgroundColor: "#9d0090" },
            ]}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={tailwind("text-white text-center text-xl")}>
              SUBMIT
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Registration;
