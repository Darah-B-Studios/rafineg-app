import React from "react";
import {
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  View,
  Text,
  Platform,
  Pressable,
} from "react-native";
import tailwind from "tailwind-rn";
import { useForm, Controller } from "react-hook-form";
import Dashboard from "./Dashboard";

const Login = ({navigation}) => {
  const emailInput = React.useRef<TextInput>(null);
  const passwordInput = React.useRef<TextInput>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //TEMPORAL: navigate to dashboard if the email and password are not empty
  const onSubmit = ({email, password}) => {
    if (!email.trim().isEmpty &&  !password.trim().isEmpty){
      navigation.navigate(Dashboard);
    } else {
      console.log("Invalide credentials")
    }

  };

  return (
    <SafeAreaView style={tailwind("h-full w-full flex-1")}>
      <ImageBackground
        resizeMode="cover"
        style={tailwind("flex-1 h-full w-full items-center")}
        source={require("./../assets/images/splash-background.png")}
      >
        <KeyboardAvoidingView
          style={tailwind("flex-1 h-full w-full items-center")}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={tailwind(
              "items-center content-center w-full pt-32 flex-col"
            )}
          >
            <Image
              style={tailwind("w-20 h-20")}
              resizeMode="cover"
              source={require("./../assets/images/white-logo.png")}
            />
            <Text style={tailwind("text-white text-3xl font-bold text-center")}>
              RAFINEG
            </Text>
          </View>
          <View
            style={tailwind(
              "pt-5 w-full m-1 items-center content-center justify-center flex-col"
            )}
          >
            
              <View
                style={tailwind(
                  " m-4 border-solid border-2 justify-center w-11/12 h-12 border-white "
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
                      style={[tailwind("p-1 text-white text-xl")]}
                      placeholder="Email address"
                      keyboardType="email-address"
                      textContentType="username"
                      returnKeyType="next"
                      ref={emailInput}
                      onSubmitEditing={() => passwordInput.current?.focus()}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholderTextColor="#ffffff"
                    />
                  )}
                  name="email"
                  defaultValue=""
                />
                {errors.firstName && <Text>This is required.</Text>}
                </Pressable>
              </View>
            
            
              <View
                style={tailwind(
                  "border-solid border-2 justify-center w-11/12 h-12 border-white "
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
                      style={tailwind("p-1 text-xl text-white")}
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
            <TouchableOpacity
              style={[
                tailwind("w-11/12 items-center h-12 mt-12 justify-center "),
                { backgroundColor: "#9d0090" },
              ]}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={tailwind("text-white text-center text-xl")}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={tailwind("underline p-6")} onPress={() => alert()}>
            Forgot Password
          </Text>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
