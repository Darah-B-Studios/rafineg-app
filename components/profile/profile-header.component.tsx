import React from 'react'
import { View, Image, Text } from 'react-native'
import { useRecoilValue } from 'recoil'
import tailwind from 'tailwind-rn'
import { userState } from '../../recoil/atoms/user.atom'

type ProfileHeaderProps = {
  imageUri?: any
}

const ProfileHeader: React.FunctionComponent<ProfileHeaderProps> = ({imageUri, children}) => {

  const user = useRecoilValue(userState);
  
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
            <Text style={tailwind("capitalize text-lg")}>{user.name}</Text>
            <Text style={tailwind("text-sm")}>{user.email}</Text>
        </View>
    </View>
  )
}

export default ProfileHeader
