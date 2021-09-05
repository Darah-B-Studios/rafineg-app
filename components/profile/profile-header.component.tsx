import React from 'react'
import { View, Image, Text } from 'react-native'
import tailwind from 'tailwind-rn'

type ProfileHeaderProps = {
  imageUri: any
}

const ProfileHeader: React.FunctionComponent<ProfileHeaderProps> = ({imageUri, children}) => {
  return (
     <View style={tailwind("flex-row items-center p-2")}>
        <View style={tailwind("")}>
            <Image
                resizeMode='contain'
                style={tailwind("h-20 w-20 rounded-full")}
                source={imageUri? { uri: imageUri }: {uri: 'https://picsum.photos/40'}} />
                {children}

        </View>
        <View style={tailwind("p-2 items-start")}>
            <Text style={tailwind("capitalize text-lg")}>bless darah</Text>
            <Text style={tailwind("text-sm")}>blessdarahuba@gmail.com</Text>
        </View>
    </View>
  )
}

export default ProfileHeader
