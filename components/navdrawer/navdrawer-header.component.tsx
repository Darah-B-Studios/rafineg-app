import React from 'react'
import { View, Image, Text } from 'react-native'
import { Avatar } from 'react-native-paper'
import { useRecoilValue } from 'recoil'
import tailwind from 'tailwind-rn'
import { userState } from '../../recoil/atoms/user.atom'

const NavDrawerHeader: React.FunctionComponent = () => {
    const user = useRecoilValue(userState);
    return (
        <View style={tailwind("bg-blue-700 py-10 items-center")}>
            <View style={tailwind("")}>
                <Image
                    resizeMode='contain'
                    style={tailwind(" h-20 w-20 rounded-full")}
                    source={{ uri: 'https://picsum.photos/40' }} />

            </View>
            <Text style={tailwind("text-white pt-2")}>Joined 2 months ago</Text>
            <Text style={tailwind("text-2xl text-white")}>{user.name}</Text>

        </View>
    )
}

export default NavDrawerHeader
