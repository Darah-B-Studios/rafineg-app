import React from 'react'
import { KeyboardType } from 'react-native'
import { View, Text, TextInput } from 'react-native'
import tailwind from 'tailwind-rn'
type TextInputParams = {
    label: string,
    keyboardType: KeyboardType,
    placeholder: string
}

const ProfileTextInput: React.FunctionComponent<TextInputParams> = ({label, keyboardType, placeholder}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput 
            keyboardType = {keyboardType}
            placeholder={placeholder}
            style={tailwind("border rounded w-full")}
            />
        </View>
    )
}

export default ProfileTextInput
