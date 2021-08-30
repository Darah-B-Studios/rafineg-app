import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Appbar from '../../components/shared/appbar-header.component'
import tailwind from 'tailwind-rn'
import { ScreenProps } from '../../App'

const ProfileScreen: React.FunctionComponent<ScreenProps<'Profile'>> = ({navigation}) => {
    return (
        <SafeAreaView style={tailwind("h-full w-full")}>
            <Appbar screenTitle="Your Profile" navigation={navigation}/>
        </SafeAreaView>
    )
}

export default ProfileScreen
