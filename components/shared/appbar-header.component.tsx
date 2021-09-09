import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, Image, StatusBar, Platform } from 'react-native'
import tailwind from 'tailwind-rn'

type NavHeaderProps = {
    navigation?: any
    screenTitle: string;
    showDrawer?: boolean;
}

const Appbar: React.FunctionComponent<NavHeaderProps> = ({navigation, screenTitle, showDrawer = true}) => {

    return (
        <View style={[tailwind("flex-row justify-between items-center px-3 py-4 bg-blue-700 w-full"), {paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}]}>
            <Text style={tailwind("text-white text-xl")}> {screenTitle}</Text>
            {
                showDrawer &&
                <View>
                    <Ionicons name="menu-outline" size={30} color="white" onPress={() => navigation.openDrawer()}/>
                </View>
            }
            
        </View>
    )
}

export default Appbar
