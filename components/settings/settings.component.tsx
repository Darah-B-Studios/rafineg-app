import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tailwind from 'tailwind-rn'
import Container from '../shared/container.component'


export type SettingsOptions = {
    title: string,
    subtitle?: string,
    onPress: () => void
}


const SettingsComponent: React.FunctionComponent<SettingsOptions> = ({title, subtitle, onPress}) => {
    return (
                <TouchableOpacity onPress={onPress} style={tailwind("w-full")}>
                    <View style={tailwind("p-2 py-4 items-start")}>
                        <Text>{title}</Text>
                        {subtitle&&<Text style={tailwind("opacity-50")}>{subtitle}</Text>}
                    </View>

                    <View style={tailwind("h-0.5 bg-gray-300")}/>
                </TouchableOpacity>
    )
}

export default SettingsComponent
