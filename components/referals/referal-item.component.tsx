import React from 'react'
import { View, Text, Image } from 'react-native'
import tailwind from 'tailwind-rn'


//todo: Implement the right parameters following the referal model
export type ReferalItemProps = {
    amount?: 2500,
    user: string,
    dateSince: string
}

const ReferalItem : React.FunctionComponent<ReferalItemProps> = ({amount, user, dateSince}) => {
    return (
        <View
                    style={tailwind(
                      "flex-1 flex-row justify-between bg-gray-100 p-2 mb-1 self-center w-11/12"
                    )}
                  >
                    <View
                      style={tailwind("flex-row items-center justify-center")}
                    >
                      <Image
                        style={tailwind("w-12 h-12 pl-2 ml-2 rounded-full ")}
                        resizeMode="cover"
                        source={require("./../../assets/images/icon-wallet.png")}
                      />
                      <View style={tailwind("ml-2")}>
                        <Text style={tailwind("text-xl")}>{user}</Text>
                        <Text>{dateSince}</Text>
                      </View>
                    </View>
                    <View style={tailwind("self-end p-2")}>
                      <Text>+{amount}</Text>
                    </View>
                  </View>
                
    )
}

export default ReferalItem
