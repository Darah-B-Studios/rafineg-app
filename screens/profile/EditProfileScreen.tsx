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
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil/atoms/user.atom";
import { Formik } from "formik";
import { profileState } from "../../recoil/atoms/profile.atom";
import { IProfile } from "../../models/Profile.model";
import { useProfile } from "../../recoil-hooks/profile.hook";
import { IUser } from "../../models/User.model";
import { Button } from "react-native-paper";

const EditProfileScreen: React.FunctionComponent<ScreenProps<"EditProfile">> =
  ({ navigation }) => {
    const [image, setImage] = useState<string>("");
    const [modalVisible, setModalVisible] = useState(false);
    const user = useRecoilValue(userState);
    const profileInfo = useRecoilValue(profileState);
    const { updateProfile } = useProfile();

    useEffect(() => {
      (async () => {
        if (Platform.OS !== "web") {
          const { status } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== "granted") {
            alert("Sorry, we need camera roll permissions to make this work!");
          }
        }
      })();
    }, []);
    const captureImage = async () => {
      setModalVisible(false);
      let capturedResult = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      console.log(capturedResult);

      if (!capturedResult.cancelled) {
        setImage(capturedResult.uri);
      }
    };

    const pickImage = async () => {
      setModalVisible(false);
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      console.log(result);

      if (!result.cancelled) {
        setImage(result.uri);
      }
    };

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<IProfile & IUser>();
    const onSubmit = ({
      bio,
      dateOfBirth,
      gender,
      name,
      password,
      email,
      address,
    }: IProfile & IUser) =>
      console.log({
        email,
        address,
      });
    return (
      <Container>
        <Appbar
          screenTitle="Your Profile"
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
                <ProfileHeader imageUri={image}>
                  <Pressable
                    onPress={() => setModalVisible(true)}
                    style={[
                      tailwind(
                        "absolute p-1 bg-white rounded-full items-center"
                      ),
                      { right: 0, bottom: 0 },
                    ]}
                  >
                    <AntDesign name="camera" size={16} color="red" />
                  </Pressable>
                </ProfileHeader>

                <View style={tailwind("flex-row justify-between items-end")}>
                  <Text style={tailwind("p-2")}>Personal Information</Text>
                  <TouchableOpacity style={tailwind("flex-row p-2 ")}>
                    <EvilIcons name="pencil" size={24} color="blue" />
                    <Text style={tailwind("text-blue-700 underline")}>
                      edit
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={tailwind("p-2 mt-3")}>
                <Formik
                  initialValues={profileInfo}
                  onSubmit={async (values, { setSubmitting }) => {
                    const obj: IProfile = {
                      ...values,
                    };

                    console.log("obj: ", obj);

                    const feedback = await updateProfile(obj);

                    if (feedback) {
                      console.log("Successful !", feedback.message);
                    } else {
                      console.log("Not successful !");
                    }

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
                      <View
                        style={tailwind(
                          "flex-row justify-between items-center"
                        )}
                      >
                        <View style={tailwind("flex-1 mx-1")}>
                          <ProfileTextInput
                            label="First Name"
                            placeholder="Enter your name"
                            keyboardType="default"
                            onChangeText={handleChange("name")}
                            onBlur={handleBlur("name")}
                            // value={values}
                            defaultValue={user.name}
                          />
                          {errors.name && (
                            <ValidationError message="This is required" />
                          )}
                        </View>
                      </View>
                      <View>
                        <ProfileTextInput
                          label="Email address"
                          placeholder="Enter your email address"
                          keyboardType="email-address"
                          onChangeText={handleChange("email")}
                          onBlur={handleBlur("email")}
                          // value={values.em}
                          name="email"
                          defaultValue={user.email}
                        />
                        {errors.email && (
                          <ValidationError message="This is required" />
                        )}
                      </View>
                      <View>
                        <ProfileTextInput
                          label="Address"
                          placeholder="Mile 4 Nkwen"
                          keyboardType="default"
                          onChangeText={handleChange("address")}
                          onBlur={handleBlur("address")}
                          // value={values.address}
                          name="address"
                          defaultValue={profileInfo.address}
                        />
                        {errors.address && (
                          <ValidationError message="This is required" />
                        )}
                      </View>
                      {/* <View
                        style={tailwind(
                          "flex-row justify-between items-center"
                        )}
                      >
                        <View style={tailwind("flex-1 mx-1")}>
                          <ProfileTextInput
                            label="City/Town"
                            placeholder="Mile 4 Nkwen"
                            keyboardType="default"
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            name="city"
                            defaultValue=""
                          />
                          {errors.city && (
                            <ValidationError message="This is required" />
                          )}
                        </View>
                        <View style={tailwind("flex-1 mx-1")}>
                          <ProfileTextInput
                            label="Region"
                            placeholder="North West"
                            keyboardType="default"
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            name="region"
                            defaultValue=""
                          />
                          {errors.region && (
                            <ValidationError message="This is required" />
                          )}
                        </View>
                      </View> */}
                      <View>
                        <ProfileTextInput
                          label="About Me"
                          placeholder="A business man going about his daily activities"
                          keyboardType="default"
                          onChangeText={handleChange("bio")}
                          multiline={true}
                          onBlur={handleBlur("bio")}
                          // value={value}
                          name="aboutMe"
                          defaultValue={profileInfo.bio}
                        />
                        {errors.bio && (
                          <ValidationError message="This is required" />
                        )}
                      </View>

                      <Button
                        style={[tailwind("bg-purple-600 self-start")]}
                        onPress={handleSubmit}
                        loading={isSubmitting}
                        disabled={isSubmitting}
                      >
                        <Text style={tailwind("text-white text-center")}>
                          Save Changes
                        </Text>
                      </Button>
                      {/* 
                      <TouchableOpacity
                        onPress={() => {}}
                        style={tailwind("bg-purple-600 p-4 self-start")}
                      >
                        <Text style={tailwind("text-white")}>save changes</Text>
                      </TouchableOpacity> */}
                    </>
                  )}
                </Formik>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        <TouchableWithoutFeedback
          style={{ flex: 1 }}
          onPress={() => setModalVisible(false)}
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View
              style={{
                backgroundColor: "rgba(0,0,0,0.2)",
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <View
                style={[
                  tailwind(
                    "flex-row items-center rounded-t-lg  justify-between  bg-white p-4"
                  ),
                ]}
              >
                <TouchableWithoutFeedback
                  onPress={pickImage}
                  style={tailwind("items-center")}
                >
                  <View style={tailwind("items-center p-8")}>
                    <FontAwesome name="photo" size={24} color="black" />
                    <Text>Gallery</Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={captureImage}
                  style={tailwind("items-center")}
                >
                  <View style={tailwind("items-center p-8")}>
                    <AntDesign name="camera" size={24} color="black" />
                    <Text>Take a photo</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </Modal>
        </TouchableWithoutFeedback>
      </Container>
    );
  };

export default EditProfileScreen;
