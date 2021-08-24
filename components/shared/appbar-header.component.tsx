import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, Image, } from 'react-native'
import { TextInput } from 'react-native-paper'
import tailwind from 'tailwind-rn'
type NavHeaderProps = {
    navigation: any
    screenTitle: string
}

const Appbar: React.FunctionComponent<NavHeaderProps> = ({navigation, screenTitle}) => {

    return (
        <View style={tailwind("mt-6 flex-row justify-between items-center p-3 bg-blue-700 w-full")}>
            <Text style={tailwind(" text-white text-xl")}> {screenTitle}</Text>

            <View style={tailwind("")}>
            <Ionicons name="menu-outline" size={40} color="white" onPress={() => navigation.openDrawer()}/>
            </View>
        </View>
    )
}

export default Appbar
