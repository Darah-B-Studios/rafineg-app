import React, { useState, useEffect} from "react";
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
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
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

type FormData ={
  firstName: string,
  lastName: string,
  email: string,
  address: string,
  city: string,
  region: string,
  aboutMe: string
}

const EditProfileScreen: React.FunctionComponent<ScreenProps<"EditProfile">> =
  ({ navigation }) => {


    const [image, setImage] = useState(null);

    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);
    const captureImage = async () => {
      setModalVisible(false)
      let capturedResult = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      })

      console.log(capturedResult);

      if (!capturedResult.cancelled) {
        setImage(capturedResult.uri);
      }
    }
  
    const pickImage = async () => {
      setModalVisible(false)
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

  const [modalVisible, setModalVisible] = useState(false);  
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = ({firstName, lastName, email, address, city, region, aboutMe}: FormData) => console.log({firstName, lastName, email, address, city, region, aboutMe})
    return (
      <Container>
        <Appbar
          screenTitle="Your Profile"
          navigation={navigation}
          showDrawer={false}
        />
        <KeyboardAvoidingView
          style={tailwind("w-full")}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView style={tailwind("w-full")}>
            <View
              style={[tailwind("bg-white mx-3 p-2 pb-12 bg-opacity-50 my-6 w-11/12")]}
            >
              <View style={tailwind("border-gray-300 pb-2 border-b-2")}>
                <ProfileHeader imageUri={image}>
                  <Pressable 
                  onPress={() => setModalVisible(true)}
                  style={[tailwind("absolute p-1 bg-white rounded-full items-center"),{right:0, bottom:0} ]}>
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
                <View style={tailwind("flex-row justify-between items-center")}>
                <View style={tailwind("flex-1 mx-1")}>
                <Controller
                    control={control}
                    rules={{
                    required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                  <ProfileTextInput
                    label="First Name"
                    placeholder="Enter your name"
                    keyboardType="default"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                  />)}
                  name="firstName"
                  defaultValue=""
                  />
                  {errors.firstName && <ValidationError message="This is required"/>}
                  </View>
                  <View style={tailwind("flex-1 mx-1")}>
                  <Controller
                    control={control}
                    rules={{
                    required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                  <ProfileTextInput
                    label="Last Name"
                    placeholder="Enter your name"
                    keyboardType="default"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                   />)}
                   name="lastName"
                   defaultValue=""
                   />
                   {errors.lastName && <ValidationError message="This is required"/>}
                   </View>
                </View>
                <View>
                <Controller
                    control={control}
                    rules={{
                    required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                <ProfileTextInput
                  label="Email address"
                  placeholder="Enter your email address"
                  keyboardType="email-address"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />)}
                name="email"
                defaultValue=""
                />
                {errors.email && <ValidationError message="This is required"/>}
                </View>
                <View>
                <Controller
                    control={control}
                    rules={{
                    required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                <ProfileTextInput
                  label="Address"
                  placeholder="Mile 4 Nkwen"
                  keyboardType="default"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />)}
                name="address"
                defaultValue=""
                />
                {errors.address && <ValidationError message="This is required"/>}
                </View>
                <View style={tailwind("flex-row justify-between items-center")}>
                  <View style={tailwind("flex-1 mx-1")}>
                  <Controller
                    control={control}
                    rules={{
                    required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                  <ProfileTextInput
                    label="City/Town"
                    placeholder="Mile 4 Nkwen"
                    keyboardType="default"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                  />)}
                  name="city"
                  defaultValue=""
                  />
                  {errors.city && <ValidationError message="This is required"/>}
                  </View>
                  <View style={tailwind("flex-1 mx-1")}>
                  <Controller
                    control={control}
                    rules={{
                    required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                  <ProfileTextInput
                    label="Region"
                    placeholder="North West"
                    keyboardType="default"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                  />)}
                  name="region"
                  defaultValue=""
                  />
                  {errors.region && <ValidationError message="This is required"/>}
                </View>
                </View>
                <View>
                <Controller
                    control={control}
                    rules={{
                    required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                <ProfileTextInput
                    label="About Me"
                    placeholder="A business man going about his daily activities"
                    keyboardType="default"
                    onChangeText={onChange}
                    multiline={true}
                    onBlur={onBlur}
                    value={value}
                  />)}
                  name="aboutMe"
                  defaultValue=""
                  />
                  {errors.aboutMe && <ValidationError message="This is required"/>}
                  </View>
              </View>
           
               <TouchableOpacity onPress={()=> {}} style={tailwind("bg-purple-600 p-4 self-start")}>
                   <Text style={tailwind("text-white")}>save changes</Text>
                </TouchableOpacity> 
            </View>      
          </ScrollView>
        </KeyboardAvoidingView>
        <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
                >
                  <View style={{justifyContent: "flex-end"}}>
                  <View style={[tailwind("flex-row items-center rounded-lg  justify-between  bg-white p-4"), {}]}>
                    <TouchableWithoutFeedback onPress={pickImage} style={tailwind("items-center")}>
                      <View style={tailwind("items-center p-8")}>
                      <FontAwesome name="photo" size={24} color="black" />
                        <Text>Gallery</Text>
                      </View>    
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={captureImage} style={tailwind("items-center")}>
                      <View style={tailwind("items-center p-8")}>
                        <AntDesign name="camera" size={24} color="black" />
                        <Text>Take a photo</Text>
                      </View>
                      
                    </TouchableWithoutFeedback>

                   </View>
                  </View>
                
              </Modal>
      </Container>
    );
  };

export default EditProfileScreen;
