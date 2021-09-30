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
import { useState } from "react";
import { ScreenProps } from "../../App";
import Appbar from "../../components/shared/appbar-header.component";
import { Picker } from "@react-native-picker/picker";
import { useRecoilValue } from "recoil";
import { subscriptionListState } from "../../recoil/atoms/package.atoms";

const SavingScreen: React.FunctionComponent<ScreenProps<"SavingScreen">> = ({
  navigation,
}) => {
  const [selectedPackage, setSelectedPackage] = useState();
  const [loading, setLoading] = useState(false);
  const subscriptions = useRecoilValue(subscriptionListState).filter(item => item.subscribed === true)
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
        <Appbar
          screenTitle="Save"
          navigation={navigation}
          showDrawer={false}
          showBackButton={true}
        />
        <View style={tailwind("w-full h-full")}>
          <View style={tailwind("flex-row justify-between pt-10 px-3")}></View>
          <View style={tailwind("mt-6")}>
            <View style={tailwind("flex-row items-center")}>
              <View style={tailwind("bg-white m-3 ")}>
                <Text style={tailwind("text-sm p-4")}>Package</Text>
              </View>

              <View style={tailwind("bg-white py-4 mr-3 flex-1")}>
                <Picker
                  selectedValue={selectedPackage}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedPackage(itemValue)
                  }
                >
                  {
                    subscriptions.map((item, index) => {
                      return (<Picker.Item label={item.name} value={item.name} key={index}/>)
                    })
                  }
                </Picker>
              </View>
            </View>

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
              <Text style={tailwind("text-white")}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    </>
  );
};

export default SavingScreen;
