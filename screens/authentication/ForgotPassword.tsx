import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Container from '../../components/shared/container.component'
import Logo from '../../components/shared/logo.component'
import tailwind from 'tailwind-rn'
import { Controller, useForm } from 'react-hook-form'
import ValidationError from '../../components/forms/vlaidation-error.component'
import { ScreenProps } from '../../App'

const ForgotPassword: React.FunctionComponent<ScreenProps<"ForgotPassword">> = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();


const onSubmit = ()=>{}



  return (
    <Container>
      <View style={tailwind("p-8")}/>
      <Logo showText/>
      <View style={tailwind("mt-8")}><Text style={tailwind("uppercase text-3xl")}>forgot password?</Text></View>
      <Text style={tailwind("p-4 text-lg text-white")}>Enter the email adddress associated with your account: </Text>
      <View
            style={tailwind(
              "border-solid border-2 justify-center w-11/12 border-white mb-4"
            )}
          >
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={[tailwind("py-3 px-4 text-white text-xl")]}
                    placeholder="Email"
                    keyboardType="email-address"
                    textContentType="username"
                    returnKeyType="next"
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
            
          </View>
          <TouchableOpacity
                style={[
                  tailwind("w-11/12 items-center py-4 mt-5 justify-center "),
                  { backgroundColor: "#9d0090" },
                ]}
                onPress={handleSubmit(onSubmit)}
              >
                <Text style={tailwind("text-white uppercase text-center text-xl")}>
                  reset password
                </Text>
              </TouchableOpacity>

              <View style={tailwind("p-6")}>
            <Text>
              Didnt succeed?{" "}
              <Text
                style={tailwind("text-yellow-500 underline")}
                onPress={() => {}}
              >
                Try another way
              </Text>
            </Text>
          </View>


    </Container>
  )
}

export default ForgotPassword
