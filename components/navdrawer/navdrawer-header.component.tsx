import React from 'react'
import { View } from 'react-native'
import { Avatar, Text } from 'react-native-paper'
import tailwind from 'tailwind-rn'

const NavDrawerHeader: React.FunctionComponent = () => {
    return (
        <View style={tailwind("bg-blue-700 py-10 items-center")}>
                    <View style={tailwind("")}>
                        <Avatar.Image 
                            size={80}
                            source={{uri: 'https://picsum.photos/40'}}/>

                    </View>
                    <Text style={tailwind("text-white pt-2")}>Joined 2 months ago</Text>
                    <Text style={tailwind("text-2xl text-white uppercase")}>Bless Darah</Text>

                </View>
    )
}

export default NavDrawerHeader
