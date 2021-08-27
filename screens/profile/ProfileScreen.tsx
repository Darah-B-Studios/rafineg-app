import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Appbar from '../../components/shared/appbar-header.component'
import tailwind from 'tailwind-rn'

const ProfileScreen = ({navigation}) => {
    return (
        <SafeAreaView style={tailwind("h-full w-full")}>
            <Appbar screenTitle="Your Profile" navigation={navigation}/>
        </SafeAreaView>
    )
}

export default ProfileScreen
