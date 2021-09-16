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
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Appbar from "../../components/shared/appbar-header.component";
import tailwind from "tailwind-rn";
import { AntDesign, EvilIcons, FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Container from "../../components/shared/container.component";
import ProfileTextInput from "../../components/profile/textinput.component";
import { ScreenProps } from "../../App";
import ProfileHeader from "../../components/profile/profile-header.component";
import { useForm, Controller } from "react-hook-form";
import ValidationError from "../../components/forms/vlaidation-error.component";
import SuccessMessage from "../../components/shared/successmessage.component";
import ImagePickerModal from "../../components/profile/imagepicker.component";

type FormData = {
  oldPassword: string;
  newPassword: string;
  newPasswordRepeat: string;
};

const EditPassword: React.FunctionComponent<ScreenProps<"EditPassword">> =
  ({ navigation }) => {
    const newPasswordInput = React.useRef<TextInput>(null);
    const oldPasswordInput = React.useRef<TextInput>(null);
    const newPasswordRepeatInput = React.useRef<TextInput>(null);
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>();


    const onSubmit = ({
      oldPassword,
      newPassword,
      newPasswordRepeat
    }: FormData) =>
      console.log({
        oldPassword,
        newPassword,
        newPasswordRepeat
      });
    return (
      <Container>
        
        <Appbar
          screenTitle="Change Password"
          navigation={navigation}
          showDrawer={false}
          showBackButton={true}
        />
        <KeyboardAvoidingView
          style={tailwind("w-full items-center")}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView style={tailwind("w-full")}>


          <View
            style={tailwind(
              "border-solid border justify-center self-center w-11/12 border-white my-4"
            )}
          >
          <Pressable onPress={() => oldPasswordInput.current?.focus()}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={tailwind("py-3 px-4 text-xl text-white ")}
                    placeholder="Old Password"
                    selectionColor="#ffffff"
                    returnKeyType="done"
                    onBlur={onBlur}
                    onSubmitEditing={() => newPasswordInput.current?.focus()}
                    onChangeText={onChange}
                    ref={oldPasswordInput}
                    placeholderTextColor="#ffffff"
                    secureTextEntry
                    value={value}
                  />
                )}
                name="oldPassword"
                defaultValue=""
              />
            </Pressable>
            </View>

          <View
            style={tailwind(
              "border-solid border justify-center self-center w-11/12 border-white mb-4"
            )}
          >
          <Pressable onPress={() => newPasswordInput.current?.focus()}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={tailwind("py-3 px-4 text-xl text-white ")}
                    placeholder="New Password"
                    selectionColor="#ffffff"
                    returnKeyType="done"
                    onBlur={onBlur}
                    onSubmitEditing={() => newPasswordRepeatInput.current?.focus()}
                    onChangeText={onChange}
                    ref={newPasswordInput}
                    placeholderTextColor="#ffffff"
                    secureTextEntry
                    value={value}
                  />
                )}
                name="newPassword"
                defaultValue=""
              />
            </Pressable>
            </View>
            <View
            style={tailwind(
              "border-solid border justify-center self-center w-11/12 border-white mb-4"
            )}
          >
          <Pressable onPress={() => newPasswordRepeatInput.current?.focus()}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={tailwind("py-3 px-4 text-xl text-white ")}
                    placeholder="Repeat new password"
                    selectionColor="#ffffff"
                    returnKeyType="done"
                    onBlur={onBlur}
                    //onSubmitEditing={handleSubmit(onSubmit)}
                    onChangeText={onChange}
                    ref={newPasswordRepeatInput}
                    placeholderTextColor="#ffffff"
                    secureTextEntry
                    value={value}
                  />
                )}
                name="newPasswordRepeat"
                defaultValue=""
              />
            </Pressable>
            </View>

            


           <TouchableOpacity
            style={[
              tailwind("w-11/12 items-center self-center py-4 mt-4 justify-center "),
              { backgroundColor: "#9d0090" },
            ]}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={tailwind("text-white uppercase text-center text-xl")}>
              change  password
            </Text>
          </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView> 
      </Container>
    );
  };

export default EditPassword;
