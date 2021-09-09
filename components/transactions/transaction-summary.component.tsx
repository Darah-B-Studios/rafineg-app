import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tailwind from 'tailwind-rn'
import { ITransaction } from '../../models/Transaction.model'
import { format, compareAsc } from 'date-fns'


type TransactionSummaryProps = {
    transaction: ITransaction,
    handlePress: () => void
}

const TransactionSummaryView: React.FunctionComponent<TransactionSummaryProps>  = ({transaction, handlePress}) => {
      const dateCreated =  format(transaction.createOn, 'dd MMM yyyy')
    return (
        <TouchableOpacity onPress={handlePress} style={tailwind("flex-row justify-between my-2 p-2 border-gray-300 border-t-2 border-b-2")}>
            <Text style={tailwind("px-1")}>{transaction.description}</Text> 
            <Text style={tailwind("px-1")}>{transaction.method}</Text>
            <Text style={tailwind("px-1")}>{dateCreated}</Text>
            <Text style={tailwind("px-1")}>{transaction.amount}</Text>
        </TouchableOpacity>
    )
}

export default TransactionSummaryView 
