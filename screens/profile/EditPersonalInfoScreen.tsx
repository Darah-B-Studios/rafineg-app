import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Modal,
  Alert,
  Pressable,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import Appbar from "../../components/shared/appbar-header.component";
import tailwind from "tailwind-rn";
import { AntDesign, Entypo, EvilIcons, FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Container from "../../components/shared/container.component";
import ProfileTextInput from "../../components/profile/textinput.component";
import { ScreenProps } from "../../App";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil/atoms/user.atom";
import { Formik } from "formik";
import { profileState } from "../../recoil/atoms/profile.atom";
import DateTimePicker from '@react-native-community/datetimepicker';
import { IUser } from "../../models/User.model";

interface FormValues {
  name: string,
  email: string,
  phoneNumber: string,
}


const EditPersonalInfoScreen
: React.FunctionComponent<ScreenProps<"EditPersonalInfoScreen">> =
  ({ navigation }) => {
    const user = useRecoilValue(userState);
    const profileInfo = useRecoilValue(profileState);
  


    const submitForm = async (values: FormValues) => {
      const obj: IUser = {
        ...values, 
      };

      console.log("obj: ", obj);

      // const feedback = await updateProfile(obj);

      // if (feedback) {
      //   console.log("Successful !", feedback.message);
      // } else {
      //   console.log("Not successful !");
      // }

    }

  
    return (
      <Container>
        <Appbar
          screenTitle="Edit Personal Details"
          navigation={navigation}
          showDrawer={false}
          showBackButton={true}
        />
        <KeyboardAvoidingView
          style={tailwind("w-full")}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView style={tailwind("w-full")}>
            <View
              style={[
                tailwind("bg-white mx-3 p-2 pb-12 bg-opacity-50 my-6 w-11/12"),
              ]}
            >
              <View style={tailwind("border-gray-300 pb-2 border-b-2")}>
                <View style={tailwind("flex-row justify-between items-end")}>
                  <Text style={tailwind("p-2")}>Personal Information</Text>
                </View>
              </View>

              <View style={tailwind("p-2 mt-3")}>
                <Formik
                  initialValues={user}
                  onSubmit={(values: FormValues , { setSubmitting }) => {
                    submitForm(values)
                    setSubmitting(false);
                  }}
                >
                  {({
                    handleBlur,
                    handleChange,
                    isSubmitting,
                    handleReset,
                    values,
                    handleSubmit,
                  }) => (
                    <>
                      <View style={tailwind("")}>
                          <ProfileTextInput
                            label="Full Name"
                            placeholder="Enter your name"
                            keyboardType="default"
                            onChangeText={handleChange("name")}
                            onBlur={handleBlur("name")}
                            value={values.name}
                            defaultValue={user.name}
                          />
                          <ProfileTextInput
                            label="Email"
                            placeholder="Enter your Email"
                            keyboardType="email"
                            onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}
                            value={values.email}
                            name="email"
                            defaultValue={user.name}
                          />
                          <ProfileTextInput
                            label="Telephone"
                            placeholder="Enter your phone number"
                            keyboardType="numeric"
                            onChangeText={handleChange("phoneNumber")}
                            onBlur={handleBlur("phoneNumber")}
                            value={values.phoneNumber}
                            name="phoneNumber"
                            defaultValue={user.phoneNumber}
                          />
                      <TouchableOpacity
                        onPress={handleSubmit}
                        style={tailwind("bg-purple-600 p-4 self-start")}
                      >
                        <Text style={tailwind("text-white")}>save changes</Text>
                      </TouchableOpacity>
                      </View>
                    </>
                  )}
                </Formik>

              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Container>
    );
  };

export default EditPersonalInfoScreen
;
