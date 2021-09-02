import React from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn'
import { ITransaction } from '../../models/Transaction.model'




const TransactionSummaryView: React.FunctionComponent<ITransaction>  = ({id =2, description, method, createOn, amount}) => {
    return (
        <View style={tailwind("flex-row justify-between py-2 border-gray-300 pb-2 border-b-2")}>
            <Text style={tailwind("px-1")}>{description}</Text> 
            <Text style={tailwind("px-1")}>{method}</Text>
            <Text style={tailwind("px-1")}>{createOn.toDateString()}</Text>
            <Text style={tailwind("px-1")}>{amount}</Text>
        </View>
    )
}

export default TransactionSummaryView 
