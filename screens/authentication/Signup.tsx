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
  ActivityIndicator,
  Alert,
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
import { Formik } from "formik";
import * as Yup from 'yup'

const Signup: React.FunctionComponent<ScreenProps<"Signup">> = ({
  navigation,
}) => {
  const [signupLoading, setsignupLoading] = useState(false)
  const nameInput = React.useRef<TextInput>(null);
  const phoneInput = React.useRef<TextInput>(null);
  const emailInput = React.useRef<TextInput>(null);
  const passwordInput = React.useRef<TextInput>(null);
  const confirmPasswordInput = React.useRef<TextInput>(null);
  const [isChecked, setChecked] = useState(false);
  const { register } = useAuth();

 
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('required').matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    confirmPassword: Yup.string().required().oneOf([Yup.ref('password'), null], "Passwords must match"),
    username: Yup.string().required('Please provide the name'),

  });

  type submitProps = {
    email: string;
    password: string;
    confirmPassword: string;
    username: string;
    phoneNumber: string;
  };
  const submitForm = async (values: submitProps) => {
    setsignupLoading(true)
    console.log("Registering user");
    const apiResponse = await register({
      ...emptyUser,
      name: values.username,
      password: values.password,
      email: values.email,
      phoneNumber: values.phoneNumber,
    });
    console.log("response: ", apiResponse);
    setsignupLoading(false)
    if (apiResponse.success) {
      navigation.navigate("Login");
    } else {
      console.log("registration error: ", apiResponse.message);
      

      console.log("registration error: ", apiResponse.errors);
      const {phone_number} = apiResponse.errors

      Alert.alert("Error Creating Account", phone_number[0]);
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
          
            <Formik
              initialValues={{email: '', password:'', username: '', phoneNumber: '', confirmPassword: ''}}
              onSubmit={(values: submitProps , { setSubmitting }) => {
                submitForm(values)
                setSubmitting(false);
              }}
              validationSchema={SignupSchema}
              >
                {({handleChange, handleBlur, handleSubmit, values, errors}) => (    
                <View style={tailwind("w-full items-center")}>
                <View style={tailwind("border-solid border-2 justify-center w-11/12 border-white mb-4")}>
                  <Pressable onPress={() => nameInput.current?.focus()}>
                      <TextInput
                        style={[tailwind("py-3 px-4 text-white text-xl")]}
                        placeholder="Name"
                        keyboardType="default"
                        textContentType="username"
                        returnKeyType="next"
                        ref={nameInput}
                        onSubmitEditing={() => emailInput.current?.focus()}
                        onBlur={handleBlur("username")}
                        onChangeText={handleChange("username")}
                        value={values.username}
                        placeholderTextColor="#ffffff"
                      />
            </Pressable>
            {errors.username && <ValidationError message={errors.username}/>}
          </View>
          <View
            style={tailwind(
              "border-solid border-2 justify-center w-11/12 border-white mb-4"
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
                    onSubmitEditing={() => phoneInput.current?.focus()}
                    onBlur={handleBlur('email')}
                    onChangeText={handleChange('email')}
                    value={values.email}
                    placeholderTextColor="#ffffff"
                  />
            </Pressable>
            {errors.email && <ValidationError message={errors.email}/>}
          </View>
          <View
            style={tailwind(
              "border-solid border-2 justify-center w-11/12 border-white mb-4"
            )}
          >
            <Pressable onPress={() => phoneInput.current?.focus()}>
                  <TextInput
                    style={[tailwind("py-3 px-4 text-white text-xl")]}
                    placeholder="Phone Number"
                    keyboardType="phone-pad"
                    textContentType="telephoneNumber"
                    returnKeyType="next"
                    ref={phoneInput}
                    onSubmitEditing={() => passwordInput.current?.focus()}
                    onBlur={handleBlur('phoneNumber')}
                    onChangeText={handleChange('phoneNumber')}
                    value={values.phoneNumber}
                    placeholderTextColor="#ffffff"
                  />
            </Pressable>
            {errors.phoneNumber && <ValidationError message={errors.phoneNumber}/>}
          </View>
          <View
            style={tailwind(
              "border-solid border-2 justify-center w-11/12 border-white mb-4 "
            )}
          >
            <Pressable onPress={() => passwordInput.current?.focus()}>
                  <TextInput
                    style={tailwind("py-3 px-4 text-xl text-white")}
                    placeholder="Password"
                    selectionColor="#ffffff"
                    returnKeyType="done"
                    onBlur={handleBlur('password')}
                    onSubmitEditing={() => confirmPasswordInput.current?.focus}
                    onChangeText={handleChange('password')}
                    ref={passwordInput}
                    placeholderTextColor="#ffffff"
                    secureTextEntry
                    value={values.password}
                  />
            </Pressable>
          {errors.password && <ValidationError message={errors.password}/>}
          </View>
          <View
            style={tailwind(
              "border-solid border-2 justify-center w-11/12 border-white "
            )}
          >
            <Pressable onPress={() => confirmPasswordInput.current?.focus()}>
                  <TextInput
                    style={tailwind("py-3 px-4 text-xl text-white")}
                    placeholder="Confirm Password"
                    selectionColor="#ffffff"
                    returnKeyType="done"
                    onBlur={handleBlur('confirmPassword')}
                    //onSubmitEditing={handleSubmit(onSubmit)}
                    onChangeText={handleChange('confirmPassword')}
                    ref={confirmPasswordInput}
                    placeholderTextColor="#ffffff"
                    secureTextEntry
                    value={values.confirmPassword}
                  />
            </Pressable>
          {errors.confirmPassword && <ValidationError message={errors.confirmPassword}/>}
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
              tailwind("w-11/12 items-center py-4 mt-4 justify-center flex-row "),
              { backgroundColor: "#9d0090" },
            ]}
            onPress={handleSubmit}
          >
            <Text style={tailwind("text-white uppercase text-center text-xl px-4")}>
              signup
            </Text>
            {signupLoading && <ActivityIndicator color="#fff"/>}
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
          </View>
                )}
              
            </Formik>
       
        </KeyboardAvoidingView>
      </ScrollView>
    </Container>
  );
};

export default Signup;
