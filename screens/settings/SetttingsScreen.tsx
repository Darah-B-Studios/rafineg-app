import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { ScreenProps } from '../../App'
import SettingsComponent, { SettingsOptions } from '../../components/settings/settings.component'
import Appbar from '../../components/shared/appbar-header.component'
import Container from '../../components/shared/container.component'



const SettingsScreen: React.FunctionComponent<ScreenProps<"SettingsScreen">> = ({navigation}) => {
   const settingsOptions: SettingsOptions [] = [
       {title: "Language", subtitle: "English", onPress: () => {}}, 
       {title: "Account", subtitle: "Manage your account", onPress: () => {}},
       {title: "Help", subtitle: undefined, onPress: () => {}},
       {title: "Contact us", subtitle: undefined, onPress: () => {}},
       {title: "About RAFINEG", subtitle: undefined, onPress: () => {}},
   ]
    
        return (
            <Container>
                <Appbar navigation={navigation} screenTitle="Setttings" showDrawer={false} showBackButton={true} />
                <ScrollView style={tailwind("bg-white opacity-50 w-full")}>
                {
                    settingsOptions.map((item, index)=>(
                        <SettingsComponent key={item.title} title={item.title} subtitle={item.subtitle} onPress={()=>{}}/>
                    ))
                }
                </ScrollView>
            </Container>
        )
    
}

export default SettingsScreen
