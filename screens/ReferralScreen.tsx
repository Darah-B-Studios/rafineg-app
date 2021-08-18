import React from "react";
import {
  ScrollView,
  StatusBar,
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import tailwind from "tailwind-rn";
import { SimpleLineIcons, Ionicons, AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { useForm, Controller } from "react-hook-form";

const ReferralScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ withdrawalAmount, withdrawalNumber }) => {
    console.log(withdrawalAmount, withdrawalNumber);
  };
  return (
    <>
      <SafeAreaView style={[tailwind("w-full h-full flex-1")]}>
        <ImageBackground
          resizeMode="cover"
          style={tailwind("flex-1 h-full w-full items-center")}
          source={require("./../assets/images/splash-background.png")}
        >
          <StatusBar barStyle="light-content" backgroundColor="blue" />
          <View style={tailwind("h-1/6 w-full bg-blue-700 flex-auto")}>
            <View
              style={tailwind(
                "flex-row pt-6 flex-1 items-baseline justify-between"
              )}
            >
              <View style={tailwind("pl-3")}>
                <Ionicons name="ios-arrow-back-sharp" size={16} color="white" />
              </View>
              <View style={tailwind("pr-3")}>
                <SimpleLineIcons name="menu" size={16} color="white" />
              </View>
            </View>
            <View
              style={tailwind("flex-row justify-between items-center pb-1")}
            >
              <View style={tailwind("flex-col pl-4")}>
                <Text style={tailwind("text-white text-base")}>
                  Referral Withrawal
                </Text>
              </View>
              <View>
                <View style={tailwind("pr-3 pt-3")}>
                  <Image
                    style={tailwind("w-10 h-10 rounded-full ")}
                    resizeMode="cover"
                    source={require("./../assets/images/icon-wallet.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={tailwind("h-3/4 w-full")}>
            <View style={tailwind("flex-row justify-between pt-10 px-3")}>
              <View style={tailwind("flex-wrap")}>
                <Text style={tailwind("text-xl")}>Notice</Text>
                <Text style={tailwind("text-xs")}>
                  You have initiated a withrawal request
                </Text>
              </View>
              <View>
                <Text style={tailwind("text-left text-xs")}>Total Bonuses</Text>
                <Text style={tailwind("text-xl text-left text-red-600")}>
                  20,000XAF
                </Text>
              </View>
            </View>
            <View style={tailwind("mt-6")}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={tailwind("bg-white px-3 m-3 h-12")}
                    placeholder="Enter Amount"
                    keyboardType="numeric"
                  ></TextInput>
                )}
                name="withdrawalAmount"
                defaultValue=""
              />
              {errors.withdrawalAmount && <Text> Amount is required</Text>}
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={tailwind("bg-white px-3 m-3 h-12")}
                    placeholder="Enter Mobile Money number"
                    keyboardType="numeric"
                  ></TextInput>
                )}
                name="withdrawalNumber"
                defaultValue=""
              />
              {errors.withdrawalNumber && <Text> Momo Number is required</Text>}

              <TouchableOpacity
                onPress={handleSubmit(onSubmit)}
                style={tailwind(
                  "bg-blue-700 items-center justify-center self-end px-3 m-3 h-8 w-28"
                )}
              >
                <Text style={tailwind("text-white")}>Withdraw</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={tailwind("w-full bg-gray-300 h-12")}></View>
          <TouchableOpacity
            style={[
              tailwind(
                "w-12 bg-white h-12 rounded-full absolute items-center justify-center"
              ),
              {
                bottom: 23,
              },
            ]}
          >
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default ReferralScreen;
