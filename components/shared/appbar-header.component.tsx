import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, Image, StatusBar, Platform } from 'react-native'
import tailwind from 'tailwind-rn'

type NavHeaderProps = {
    navigation?: any
    screenTitle: string;
    showDrawer?: boolean;
    showBackButton?: boolean;
}

const Appbar: React.FunctionComponent<NavHeaderProps> = ({navigation, screenTitle, showDrawer = true, showBackButton = false}) => {

    return (
        <View style={[tailwind("flex-row justify-between items-center px-3 py-4 bg-blue-700 w-full"), {paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}]}>

            { showBackButton && (Platform.OS === "ios" ? <View style={tailwind("pt-2")}><Ionicons name="ios-chevron-back" size={30} color="white" onPress={() => navigation.goBack()}/></View> : <View style={tailwind("pt-2")}><MaterialIcons name="arrow-back" size={30} color="white" onPress={() => navigation.goBack()}/></View>) 

            }
            <Text style={tailwind("text-white self-center text-xl pt-2")}> {screenTitle}</Text>
            {showBackButton && <View></View>}
            {
                showDrawer &&
                <View style={tailwind("pt-2")}>
                    <Ionicons name="menu-outline" size={30} color="white" onPress={() => navigation.openDrawer()}/>
                </View>
            }
            
        </View>
    )
}

export default Appbar
