import React, {useState} from "react"
import {Controller} from "react-hook-form";
import {KeyboardAvoidingView, Pressable, TextInput, TouchableOpacity, View} from "react-native";
import { tailwind } from 'tailwind-rn';
import ValidationError from "../../components/forms/vlaidation-error.component";
import Container from "../../components/shared/container.component";
import Logo from "../../components/shared/logo.component";


const RegisterScreen: React.FunctionComponent = () => {

	const [loading, setLoading] = useState(false);
	return (
	<Container>
        <KeyboardAvoidingView
          style={tailwind("flex-1 h-full w-full items-center")}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={tailwind(
              "items-center content-center w-full pt-32 flex-col"
            )}
          >
            <Logo showText/>
            
          </View>
          <View
            style={tailwind(
              "pt-5 w-full m-1 items-center content-center justify-center flex-col"
            )}
          >
            
              <View
                style={tailwind(
                  "border-solid border-2 justify-center w-11/12 border-white mb-6"
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
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholderTextColor="#ffffff"
                    />
                  )}
                  name="email"
                  defaultValue=""
                />
                {errors.firstName && <ValidationError message="This is required." />}
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
            <TouchableOpacity
              style={[
                tailwind("w-11/12 items-center py-4 mt-5 justify-center "),
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
      </Container>
	)
}

export default RegisterScreen;
