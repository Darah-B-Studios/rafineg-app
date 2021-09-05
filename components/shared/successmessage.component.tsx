import { Feather } from '@expo/vector-icons'
import React from 'react'
import { View, Text, Pressable } from 'react-native'
import tailwind from 'tailwind-rn'

type SuccessMessageProps = {
    title: string,
    message: string
}

const SuccessMessage: React.FunctionComponent<SuccessMessageProps> = ({title, message, children}) => {
    return (
        <Pressable>
        <View style={tailwind(" bg-white items-center p-8 w-11/12 m-3")}>
                <View style={tailwind("bg-green-500 p-2 rounded-full")}>
                    <Feather name="check" size={40} color="white" />
                </View>
                <Text style={tailwind("text-green-500 p-2")}>{title}</Text>
                <Text style={tailwind("text-center")}>{message}</Text>
                {children}
            </View>
            
        </Pressable>
    )
}

export default SuccessMessage
