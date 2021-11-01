import React, { useState } from "react";
import {
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  Text,
  Platform,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import tailwind from "tailwind-rn";
import { useForm, Controller } from "react-hook-form";
import Container from "../../components/shared/container.component";
import Logo from "../../components/shared/logo.component";
import { ScreenProps } from "../../App";
import { useAuth } from "../../hooks/auth/auth.hook";
import { emptyUser } from "../../models/User.model";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil/atoms/user.atom";
import { Formik } from "formik";
import * as Yup from "yup";
import ValidationError from "../../components/forms/vlaidation-error.component";

const Login: React.FunctionComponent<ScreenProps<"Login">> = ({
  navigation,
}) => {
  const emailInput = React.useRef<TextInput>(null);
  const passwordInput = React.useRef<TextInput>(null);
  const [loginLoading, setLoginLoading] = useState(false);
  const { login } = useAuth();
  const user = useRecoilValue(userState);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("required"),
  });

  type LoginFormValues = {
    email: string;
    password: string;
  };

  const submitForm = async ({ email, password }: LoginFormValues) => {
    setLoginLoading(true);
    console.log("user login");
    const feedback = await login({ ...emptyUser, email, password });
    if (feedback) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Dashboard" }],
      });
    } else {
      console.log("authentication error: ", feedback);
    }
  };

  return (
    <Container>
      <KeyboardAvoidingView
        style={tailwind("flex-1 h-full w-full items-center")}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={tailwind(
              "items-center content-center w-full pt-32 flex-col"
            )}
          >
            <View style={tailwind("items-center content-center w-full")}>
              <Logo showText />
            </View>
            <View style={tailwind("pt-5 w-full")}>
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values: LoginFormValues, { setSubmitting }) => {
                  submitForm(values);
                  setSubmitting(false);
                }}
                validationSchema={LoginSchema}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                }) => (
                  <View
                    style={tailwind("pt-5 w-full justify-center items-center")}
                  >
                    <View
                      style={tailwind(
                        "border-solid border w-11/12 border-white mb-6"
                      )}
                    >
                      <Pressable onPress={() => emailInput.current?.focus()}>
                        <TextInput
                          style={[tailwind("py-3 px-4 text-white text-xl")]}
                          placeholder="Email address"
                          keyboardType="email-address"
                          textContentType="username"
                          returnKeyType="next"
                          ref={emailInput}
                          onSubmitEditing={() => passwordInput.current?.focus()}
                          onBlur={handleBlur("email")}
                          onChangeText={handleChange("email")}
                          value={values.email}
                          placeholderTextColor="#ffffff"
                        />
                      </Pressable>
                      {errors.email && (
                        <ValidationError message={errors.email} />
                      )}
                    </View>

                    <View
                      style={tailwind(
                        "border-solid border w-11/12 border-white mb-6 "
                      )}
                    >
                      <Pressable onPress={() => passwordInput.current?.focus()}>
                        <TextInput
                          style={tailwind("py-3 px-4 text-xl text-white")}
                          placeholder="Password"
                          selectionColor="#ffffff"
                          returnKeyType="done"
                          onBlur={handleBlur("password")}
                          onSubmitEditing={handleSubmit}
                          onChangeText={handleChange("password")}
                          ref={passwordInput}
                          placeholderTextColor="#ffffff"
                          secureTextEntry
                          value={values.password}
                        />
                      </Pressable>
                    </View>
                    <TouchableOpacity
                      style={[
                        tailwind(
                          "w-11/12 items-center py-4 mt-5 justify-center flex-row"
                        ),
                        { backgroundColor: "#9d0090" },
                      ]}
                      onPress={handleSubmit}
                    >
                      <Text
                        style={tailwind("text-white text-center text-xl px-4")}
                      >
                        LOGIN
                      </Text>
                      {loginLoading && <ActivityIndicator color="#fff" />}
                    </TouchableOpacity>
                  </View>
                )}
              </Formik>
            </View>
            <Text
              style={tailwind("underline p-6")}
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              Forgot Password
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Login;
