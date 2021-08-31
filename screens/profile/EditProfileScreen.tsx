import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import Appbar from '../../components/shared/appbar-header.component'
import tailwind from 'tailwind-rn'
import { EvilIcons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import Container from '../../components/shared/container.component'
import ProfileTextInput from '../../components/profile/textinput.component'

const EditProfileScreen = ({navigation}) => {
    return (
        <Container>
            <Appbar screenTitle="Your Profile" navigation={navigation}/>
            <ScrollView style={tailwind("w-full")}>
            <View style={[tailwind("bg-white mx-3 p-2 bg-opacity-50 my-6 w-11/12")]}>
                    <View style={tailwind("flex-row items-center p-4")}>
                    <View style={tailwind("")}>
                        <Image 
                            resizeMode='contain'
                            style={tailwind(" h-16 w-16 rounded-full")}
                            source={{uri: 'https://picsum.photos/40'}}/>

                    </View>
                    <View style={tailwind("p-2")}>
                        <Text style={tailwind("capitalize text-lg")}>bless darah</Text>
                        <Text style={tailwind("text-sm")}>blessdarahuba@gmail.com</Text>
                    </View>
                    </View>

                    <View style={tailwind("flex-row justify-between items-end")}>
                    <Text style={tailwind("p-2")}>Personal Information</Text>
                    <TouchableOpacity style={tailwind("flex-row p-2 ")}>
                        <EvilIcons name="pencil" size={24} color="blue" />
                        <Text style={tailwind("text-blue-700 underline")}>edit</Text>
                    </TouchableOpacity>
                    </View>
                    
                    <View style={tailwind("border border-gray-400")}></View>

                    <View style={tailwind("flex-row flex-1")}>
                    <ProfileTextInput
                     label="First Name" 
                     placeholder="Enter your name"
                     keyboardType="default"/>
                     <ProfileTextInput
                     label="First Name" 
                     placeholder="Enter your name"
                     keyboardType="default"/>
                    </View>
                    <ProfileTextInput label="Email address"
                    placeholder="Enter your email address"
                    keyboardType="email-address"/>

                    <ProfileTextInput label="Address"
                    placeholder="Mile 4 Nkwen"
                    keyboardType="default"/>

                    </View>

                    
                    </ScrollView>
        </Container>
    )
}

export default EditProfileScreen
