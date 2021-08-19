import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import React from 'react'
import { View, Image, Text } from 'react-native'
import tailwind from 'tailwind-rn'

const DashboardHeader: React.FunctionComponent = () => {
  return (
    <View style={tailwind("w-full bg-blue-700 flex-auto py-3")}>
      <View
        style={tailwind(
          "flex-row flex-1 items-baseline justify-between"
        )}
      >
        <View style={tailwind("pl-3")}>
          <Ionicons name="ios-arrow-back-sharp" size={16} color="white" />
        </View>
        <View style={tailwind("pr-3")}>
          <SimpleLineIcons name="menu" size={16} color="white" />
        </View>
      </View>
      <View style={tailwind("flex-row justify-between items-center")}>
        <View style={tailwind("flex-col pl-4")}>
          <Image source={require("../../assets/images/icon-wallet.png")} />
          <Text style={tailwind("text-white")}>Total Savings</Text>
          <Text style={tailwind("text-white text-base")}>XAF 100000</Text>
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
