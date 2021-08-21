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
import Container from "../../components/shared/container.component";
import DashboardHeader from "../../components/dashboard/dashboard-header.component";

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
      <Container>
          <StatusBar barStyle="light-content" backgroundColor="blue" />
          <DashboardHeader totalSavings="Referral Withdrawal"/>
          <View style={tailwind("w-full h-full")}>
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
                    style={tailwind("bg-white p-3 m-3 ")}
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
                    style={tailwind("bg-white p-3 m-3")}
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
                  "bg-blue-700 items-center justify-center m-3 self-end p-4"
                )}
              >
                <Text style={tailwind("text-white")}>Withdraw</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Container>
    </>
  );
};

export default ReferralScreen;
