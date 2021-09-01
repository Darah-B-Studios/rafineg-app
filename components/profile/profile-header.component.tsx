import React from 'react'
import { View, Image, Text } from 'react-native'
import tailwind from 'tailwind-rn'

const ProfileHeader: React.FunctionComponent = () => {
  return (
     <View style={tailwind("flex-row items-center p-4")}>
        <View style={tailwind("")}>
            <Image
                resizeMode='contain'
                style={tailwind("h-16 w-16 rounded-full")}
                source={{ uri: 'https://picsum.photos/40' }} />

        </View>
        <View style={tailwind("p-2")}>
            <Text style={tailwind("capitalize text-lg")}>bless darah</Text>
            <Text style={tailwind("text-sm")}>blessdarahuba@gmail.com</Text>
        </View>
    </View>
  )
}

export default ProfileHeader
