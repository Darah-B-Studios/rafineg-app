import React from 'react'
import { Text, View } from 'react-native'
import Appbar from '../../components/shared/appbar-header.component'
import Container from '../../components/shared/container.component'

const SettingsScreen = ({navigation}) => {
    
        return (
            <Container>
                <Appbar navigation={navigation} screenTitle="Setttings"/>
            
            </Container>
        )
    
}

export default SettingsScreen
