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
import { Formik } from "formik";
import * as Yup from 'yup'

type submitProps = {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

const EditPassword: React.FunctionComponent<ScreenProps<"EditPassword">> =
  ({ navigation }) => {
    const newPasswordInput = React.useRef<TextInput>(null);
    const oldPasswordInput = React.useRef<TextInput>(null);
    const confirmNewPasswordInput = React.useRef<TextInput>(null);
    
    const editPasswordSchema = Yup.object().shape({
      oldPassword: Yup.string().required('required'),
      newPassword: Yup.string().required('required').matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
      confirmNewPassword: Yup.string().required().oneOf([Yup.ref('password'), null], "Passwords must match"),
    });


    const submitForm = async (values: submitProps) => {

    }
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
          

          <Formik
           initialValues={{oldPassword: '', newPassword: '', confirmNewPassword: ''}}
           onSubmit={(values: submitProps, {setSubmitting}) => {
             submitForm(values)
           

           }}
           validationSchema= {editPasswordSchema} >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <ScrollView style={tailwind("w-full")}>
            <View
            style={tailwind(
              "border-solid border justify-center self-center w-11/12 border-white my-4"
            )}
          >
          <Pressable onPress={() => oldPasswordInput.current?.focus()}>
              
                  <TextInput
                    style={tailwind("py-3 px-4 text-xl text-white ")}
                    placeholder="Old Password"
                    selectionColor="#ffffff"
                    returnKeyType="next"
                    onBlur={handleBlur('oldPassword')}
                    onSubmitEditing={() => newPasswordInput.current?.focus()}
                    onChangeText={handleChange('oldPassword')}
                    ref={oldPasswordInput}
                    placeholderTextColor="#ffffff"
                    secureTextEntry
                    value={values.oldPassword}
                  />
            </Pressable>
            {errors.oldPassword && <ValidationError message={errors.oldPassword}/>}
            </View>

          <View
            style={tailwind(
              "border-solid border justify-center self-center w-11/12 border-white mb-4"
            )}
          >
          <Pressable onPress={() => newPasswordInput.current?.focus()}>
                  <TextInput
                    style={tailwind("py-3 px-4 text-xl text-white ")}
                    placeholder="New Password"
                    selectionColor="#ffffff"
                    returnKeyType="next"
                    onBlur={handleBlur('newPassword')}
                    onSubmitEditing={() => confirmNewPasswordInput.current?.focus()}
                    onChangeText={handleChange('newPassword')}
                    ref={newPasswordInput}
                    placeholderTextColor="#ffffff"
                    secureTextEntry
                    value={values.newPassword}
                  />
            </Pressable>
            {errors.newPassword && <ValidationError message={errors.newPassword}/>}
            </View>
            <View
            style={tailwind(
              "border-solid border justify-center self-center w-11/12 border-white mb-4"
            )}
          >
          <Pressable onPress={() => confirmNewPasswordInput.current?.focus()}>

                  <TextInput
                    style={tailwind("py-3 px-4 text-xl text-white ")}
                    placeholder="confirm new password"
                    selectionColor="#ffffff"
                    returnKeyType="done"
                    onBlur={handleBlur('confirmNewPassword')}
                    //onSubmitEditing={handleSubmit(onSubmit)}
                    onChangeText={handleChange('confirmNewPassword')}
                    ref={confirmNewPasswordInput}
                    placeholderTextColor="#ffffff"
                    secureTextEntry
                    value={values.confirmNewPassword}
                  />
            </Pressable>
            {errors.confirmNewPassword && <ValidationError message={errors.confirmNewPassword}/>}
            </View>
           <TouchableOpacity
            style={[
              tailwind("w-11/12 items-center self-center py-4 mt-4 justify-center "),
              { backgroundColor: "#9d0090" },
            ]}
            onPress={handleSubmit}
          >
            <Text style={tailwind("text-white uppercase text-center text-xl")}>
              change  password
            </Text>
          </TouchableOpacity>
          </ScrollView>
          )}
          </Formik>


          
          
        </KeyboardAvoidingView> 
      </Container>
    );
  };

export default EditPassword;
