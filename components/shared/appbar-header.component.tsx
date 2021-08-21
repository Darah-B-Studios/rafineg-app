import React from 'react'
import { Image, View, Text } from 'react-native'
import { Appbar } from 'react-native-paper'
import tailwind from 'tailwind-rn'
import { useNavigation } from '@react-navigation/native';
type NavHeaderProps = {
    navigation: any
}

const AppbarHeader: React.FunctionComponent<NavHeaderProps> = ({navigation}) => {

    return (
        <Appbar.Header style={tailwind("bg-blue-700 w-full")}>
            <Appbar.Content title="Dashboard"/>
            <Appbar.Action icon="menu" onPress ={()=> navigation.openDrawer()}/>
        </Appbar.Header>
    )
}

export default AppbarHeader
