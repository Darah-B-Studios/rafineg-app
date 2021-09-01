import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native'
import Appbar from '../../components/shared/appbar-header.component'
import tailwind from 'tailwind-rn'
import { EvilIcons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import Container from '../../components/shared/container.component'
import ProfileTextInput from '../../components/profile/textinput.component'
import { ScreenProps } from '../../App'
import ProfileHeader from '../../components/profile/profile-header.component'

const EditProfileScreen: React.FunctionComponent<ScreenProps<'EditProfile'>> = ({ navigation }) => {
    return (
        <Container>
            <Appbar screenTitle="Your Profile" navigation={navigation} showDrawer={false} />
            <KeyboardAvoidingView style={tailwind('w-full')} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <ScrollView style={tailwind("w-full")}>
                    <View style={[tailwind("bg-white mx-3 p-2 bg-opacity-50 my-6 w-11/12")]}>
                        <View style={tailwind('border-gray-300 pb-2 border-b-2')}>
                            <ProfileHeader />

                            <View style={tailwind("flex-row justify-between items-end")}>
                                <Text style={tailwind("p-2")}>Personal Information</Text>
                                <TouchableOpacity style={tailwind("flex-row p-2 ")}>
                                    <EvilIcons name="pencil" size={24} color="blue" />
                                    <Text style={tailwind("text-blue-700 underline")}>edit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>


                        <View style={tailwind('p-2 mt-3')}>
                            <View style={tailwind("flex-row justify-between items-center")}>
                                <ProfileTextInput
                                    label="First Name"
                                    placeholder="Enter your name"
                                    keyboardType="default" />
                                <ProfileTextInput
                                    label="First Name"
                                    placeholder="Enter your name"
                                    keyboardType="default" />
                            </View>
                            <ProfileTextInput label="Email address"
                                placeholder="Enter your email address"
                                keyboardType="email-address" />

                            <ProfileTextInput label="Address"
                                placeholder="Mile 4 Nkwen"
                                keyboardType="default" />
                        </View>

                    </View>


                </ScrollView>
            </KeyboardAvoidingView>
        </Container>
    )
}

export default EditProfileScreen
