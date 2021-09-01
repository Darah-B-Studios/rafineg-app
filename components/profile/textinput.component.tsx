import React from 'react'
import { KeyboardType } from 'react-native'
import { View, Text, TextInput } from 'react-native'
import tailwind from 'tailwind-rn'
type TextInputParams = {
    label: string,
    keyboardType: KeyboardType,
    placeholder: string,
}

const ProfileTextInput: React.FunctionComponent<TextInputParams> = ({ label, keyboardType, placeholder }) => {
    return (
        <View style={tailwind('mb-4 flex-1')}>
            <Text style={tailwind('mb-2')}>{label}</Text>
            <TextInput
                keyboardType={keyboardType}
                placeholder={placeholder}
                style={tailwind("border rounded w-full p-2 border-gray-400")}
            />
        </View>
    )
}

export default ProfileTextInput
