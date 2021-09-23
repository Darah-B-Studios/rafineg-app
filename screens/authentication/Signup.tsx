import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StatusBar,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import tailwind from "tailwind-rn";
import Container from "../../components/shared/container.component";
import Logo from "../../components/shared/logo.component";
import { useForm, Controller } from "react-hook-form";
import ValidationError from "../../components/forms/vlaidation-error.component";
import Checkbox from "expo-checkbox";
import { ScreenProps } from "../../App";
import { authService } from "../../services/auth/auth.service";
import { emptyUser } from "../../models/User.model";
import { useAuth } from "../../hooks/auth/auth.hook";

const Signup: React.FunctionComponent<ScreenProps<"Signup">> = ({
  navigation,
}) => {
  const nameInput = React.useRef<TextInput>(null);
  const phoneInput = React.useRef<TextInput>(null);
  const emailInput = React.useRef<TextInput>(null);
  const passwordInput = React.useRef<TextInput>(null);
  const [isChecked, setChecked] = useState(false);
  const { register } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  type submitProps = {
    email: string;
    password: string;
    username: string;
    phoneNumber: string;
  };
  const onSubmit = async (values: submitProps) => {
    console.log("Registering user");
    const apiResponse = await register({
      ...emptyUser,
      name: values.username,
      password: values.password,
      email: values.email,
      phoneNumber: values.phoneNumber,
    });
    console.log("response: ", apiResponse);
    if (apiResponse.success) {
      navigation.navigate("Login");
    } else {
      console.log("registration error: ", apiResponse.message);
    }
  };

  return (
    <Container>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center" }}
        style={tailwind("h-full w-full flex-1")}
      >
        <View style={tailwind("pt-12")}></View>
        <Logo showText={true} />

        <Text style={tailwind("uppercase text-3xl pt-12 pb-4")}>
          user registration
        </Text>

        <KeyboardAvoidingView style={tailwind("w-full items-center")}>
          <View
            style={tailwind(
              "border-solid border-2 justify-center w-11/12 border-white mb-4"
            )}
          >
            <Pressable onPress={() => nameInput.current?.focus()}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={[tailwind("py-3 px-4 text-white text-xl")]}
                    placeholder="Name"
                    keyboardType="default"
                    textContentType="username"
                    returnKeyType="next"
                    ref={nameInput}
                    onSubmitEditing={() => emailInput.current?.focus()}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholderTextColor="#ffffff"
                  />
                )}
                name="username"
                defaultValue=""
              />
              {errors.firstName && (
                <ValidationError message="This is required." />
              )}
            </Pressable>
          </View>
          <View
            style={tailwind(
              "border-solid border-2 justify-center w-11/12 border-white mb-4"
            )}
          >
            <Pressable onPress={() => emailInput.current?.focus()}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={[tailwind("py-3 px-4 text-white text-xl")]}
                    placeholder="Email address"
                    keyboardType="email-address"
                    textContentType="username"
                    returnKeyType="next"
                    ref={emailInput}
                    onSubmitEditing={() => phoneInput.current?.focus()}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholderTextColor="#ffffff"
                  />
                )}
                name="email"
                defaultValue=""
              />
              {errors.firstName && (
                <ValidationError message="This is required." />
              )}
            </Pressable>
          </View>
          <View
            style={tailwind(
              "border-solid border-2 justify-center w-11/12 border-white mb-4"
            )}
          >
            <Pressable onPress={() => phoneInput.current?.focus()}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={[tailwind("py-3 px-4 text-white text-xl")]}
                    placeholder="Phone Number"
                    keyboardType="phone-pad"
                    textContentType="telephoneNumber"
                    returnKeyType="next"
                    ref={phoneInput}
                    onSubmitEditing={() => passwordInput.current?.focus()}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholderTextColor="#ffffff"
                  />
                )}
                name="phoneNumber"
                defaultValue=""
              />
              {errors.firstName && (
                <ValidationError message="This is required." />
              )}
            </Pressable>
          </View>
          <View
            style={tailwind(
              "border-solid border-2 justify-center w-11/12 border-white "
            )}
          >
            <Pressable onPress={() => passwordInput.current?.focus()}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={tailwind("py-3 px-4 text-xl text-white")}
                    placeholder="Password"
                    selectionColor="#ffffff"
                    returnKeyType="done"
                    onBlur={onBlur}
                    //onSubmitEditing={handleSubmit(onSubmit)}
                    onChangeText={onChange}
                    ref={passwordInput}
                    placeholderTextColor="#ffffff"
                    secureTextEntry
                    value={value}
                  />
                )}
                name="password"
                defaultValue=""
              />
            </Pressable>
          </View>
          <View
            style={tailwind(
              "self-start p-2 flex-row items-center justify-start"
            )}
          >
            {Platform.OS === "android" && (
              <>
                <Checkbox
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? "#4630EB" : undefined}
                />
                <Text style={tailwind("p-2")}>
                  I agree to all{" "}
                  <Text
                    style={{ color: "#9d0090" }}
                    onPress={() => alert("Terms")}
                  >
                    terms
                  </Text>{" "}
                  and
                  <Text
                    style={{ color: "#9d0090" }}
                    onPress={() => alert("Conditions")}
                  >
                    {" "}
                    conditions
                  </Text>
                </Text>
              </>
            )}
          </View>

          <TouchableOpacity
            style={[
              tailwind("w-11/12 items-center py-4 mt-4 justify-center "),
              { backgroundColor: "#9d0090" },
            ]}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={tailwind("text-white uppercase text-center text-xl")}>
              signup
            </Text>
          </TouchableOpacity>
          <View style={tailwind("p-6")}>
            <Text>
              Already have an account?{" "}
              <Text
                style={tailwind("text-yellow-500 underline")}
                onPress={() => navigation.navigate("Login")}
              >
                Login
              </Text>
            </Text>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </Container>
  );
};

export default Signup;
