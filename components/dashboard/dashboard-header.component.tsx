import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import React from 'react'
import { View, Image, Text } from 'react-native'
import tailwind from 'tailwind-rn'

type DashboardHeaderProps= {
  totalSavings: string
}

const DashboardHeader: React.FunctionComponent<DashboardHeaderProps> = ({totalSavings}) => {
  return (
    <View style={tailwind("w-full bg-blue-700 py-3")}>
      <View style={tailwind("flex-row justify-between items-center")}>
        <View style={tailwind("flex-col pl-4")}>
          <Image source={require("./../../assets/images/icon-wallet.png")} />
          <Text style={tailwind("text-white")}>Total Savings</Text>
          <Text style={tailwind("text-white text-base")}>{totalSavings}</Text>
        </View>
        {/* avatar */}
        <View>
          <View style={tailwind("pr-3 pt-3")}>
            <Image
              style={tailwind("w-12 h-12 rounded-full")}
              resizeMode="cover"
              source={{ uri: "https://picsum.photos/40" }}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default DashboardHeader
