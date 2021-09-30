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
import { AntDesign, Entypo, EvilIcons, FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Container from "../../components/shared/container.component";
import ProfileTextInput from "../../components/profile/textinput.component";
import { ScreenProps } from "../../App";
import ProfileHeader from "../../components/profile/profile-header.component";
import ValidationError from "../../components/forms/vlaidation-error.component";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil/atoms/user.atom";
import { Formik } from "formik";
import { profileState } from "../../recoil/atoms/profile.atom";
import { IProfile } from "../../models/Profile.model";
import { useProfile } from "../../recoil-hooks/profile.hook";
import DateTimePicker from '@react-native-community/datetimepicker';

interface FormValues {
  bio: string,
  address: string,
  gender: string,
}


const EditProfileScreen: React.FunctionComponent<ScreenProps<"EditProfile">> =
  ({ navigation }) => {
    const [image, setImage] = useState<string>("");
    const [modalVisible, setModalVisible] = useState(false);
    const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);
    const user = useRecoilValue(userState);
    const profileInfo = useRecoilValue(profileState);
    const {setProfile, updateProfile } = useProfile();

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

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };

    const submitForm = async (values: FormValues) => {
      const obj: IProfile = {
        ...values, 
        id: null,
        user: user,
        imageUrl: image,
        createdOn: new Date(),
        updatedOn: new Date(),
        dateOfBirth: date
      };

      console.log("obj: ", obj);

      setProfile(obj)

      const feedback = await updateProfile(obj);

      if (feedback) {
        console.log("Successful !", feedback.message);
      } else {
        console.log("Not successful !");
      }

    }

    const imageToshow = () => {
      if(image === ""){
        return profileInfo.imageUrl
      } else {
        return image
      }
    }

  
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
                <ProfileHeader imageUri={imageToshow()}>
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
                </View>
              </View>

              <View style={tailwind("p-2 mt-3")}>
                <Formik
                  initialValues={profileInfo}
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
                            label="Address"
                            placeholder="Enter your addres"
                            keyboardType="default"
                            onChangeText={handleChange("address")}
                            onBlur={handleBlur("address")}
                            value={values.address}
                            defaultValue={profileInfo.address}
                          />
                          <ProfileTextInput
                            label="Gender"
                            placeholder="Enter Male/Female or Other"
                            keyboardType="default"
                            onChangeText={handleChange("gender")}
                            onBlur={handleBlur("gender")}
                            value={values.gender}
                            name="gender"
                            defaultValue={profileInfo.gender}
                          />
                          <Text style={tailwind("mb-2")}>Date of Birth</Text>
                          <View style={tailwind("flex-row mb-4 justify-between items-center border rounded p-2 border-gray-400")}>
                            
                            <Text>{profileInfo.dateOfBirth.toDateString() ?? date.toDateString()}</Text>
                            <TouchableOpacity onPress={() => setShow(!show)}>
                              <Entypo name="calendar" size={24} color="black" />
                            </TouchableOpacity>
                          </View>
                          {show && (
                              <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode="date"
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                              />
                            )}
                          <ProfileTextInput
                            label="About Me"
                            placeholder="Tell us more about you"
                            keyboardType="default"
                            onChangeText={handleChange("bio")}
                            multiline={true}
                            onBlur={handleBlur("bio")}
                            value={values.bio}
                            name="bio"
                            defaultValue={profileInfo.bio}
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
