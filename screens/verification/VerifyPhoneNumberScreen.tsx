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
import Dashboard from "../dashboard/Dashboard";
import Container from "../../components/shared/container.component";
import Logo from "../../components/shared/logo.component";
import ValidationError from "../../components/forms/vlaidation-error.component";

const VerifyPhoneNumberScreen = () => {
  const codeInput = React.useRef<TextInput>(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //TEMPORAL: navigate to dashboard if the email and password are not empty
  const onSubmit = ({verificationCode}) => {
    

  };

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
          <View>
            <Text style={tailwind("uppercase self-center pt-5 text-xl")}>verify phone number</Text>
            <Text style={tailwind("self-center p-3 text-center")}>a code has been sent to the number <Text>6...78</Text> be sure to verify your phone number</Text>
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
                <Pressable onPress={()=> codeInput.current?.focus()}>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={[tailwind("py-3 px-4 text-white text-xl")]}
                      placeholder="Enter Verification Code"
                      keyboardType="numeric"
                      textContentType="oneTimeCode"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      ref={codeInput}
                      value={value}
                      placeholderTextColor="#ffffff"
                    />
                  )}
                  name="verification"
                  defaultValue=""
                />
                {errors.firstName && <ValidationError message="This is required." />}

                </Pressable>
                
              </View>
            
            
               
            <TouchableOpacity
              style={[
                tailwind("w-11/12 items-center py-4 mt-5 justify-center "),
                { backgroundColor: "#9d0090" },
              ]}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={tailwind("text-white uppercase text-center text-xl")}>
                verify number
              </Text>
            </TouchableOpacity>
          </View>
          <View style={tailwind("p-6")}>
                <Text>Didn't Receive Code?  <Text style={[tailwind("underline"),{color: "#9d0090"}]} onPress={()=>alert("Resend")}>Resend</Text></Text>
            </View>
        </KeyboardAvoidingView>
      </Container>
  );
};

export default VerifyPhoneNumberScreen;
