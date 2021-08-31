import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { ScreenProps } from '../../App'
import Appbar from '../../components/shared/appbar-header.component'
import Container from '../../components/shared/container.component'

const Transactions: React.FunctionComponent<ScreenProps<'Transactions'>> = ({ navigation }) => {
        return (
            <Container>
                <Appbar navigation={navigation} screenTitle="Transactions"/>
                <View><Text>Transaction details</Text></View>
            </Container>
        )
    
}

export default Transactions
