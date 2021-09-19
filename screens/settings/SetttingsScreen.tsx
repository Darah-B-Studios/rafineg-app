import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { ScreenProps } from '../../App'
import SettingsComponent, { SettingsOptions } from '../../components/settings/settings.component'
import SettingsModal from '../../components/settings/settingsmodal.component'
import Appbar from '../../components/shared/appbar-header.component'
import Container from '../../components/shared/container.component'



const SettingsScreen: React.FunctionComponent<ScreenProps<"SettingsScreen">> = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [settingsToShow, setSettingsToShow] = useState("")
   const settingsOptions: SettingsOptions [] = [
       {title: "Language", subtitle: "English", onPress: () => {}}, 
       {title: "Account", subtitle: "Manage your account", onPress: () => {}},
       {title: "Help", subtitle: undefined, onPress: () => {}},
       {title: "Contact us", subtitle: undefined, onPress: () => {}},
       {title: "About RAFINEG", subtitle: undefined, onPress: () => {}},
   ]
   const onSettingsItemPress = (title: string) => {
       setModalVisible(!modalVisible)
       setSettingsToShow(title)
   }
   const showSettings = (title: string) => {
       switch (title) {
           case 'Language': 
                return (
                    <SettingsModal 
                                    closeModal={() => setModalVisible(!modalVisible)} 
                                    title= {title}
                                    onRequestClose={ 
                                        () => setModalVisible(!modalVisible) } 
                                        showModal={modalVisible}>
                    
                    
                    </SettingsModal>
                )
           break;
           case 'Account': 
                return (
                    <SettingsModal 
                                    closeModal={() => setModalVisible(!modalVisible)} 
                                    title= {title}
                                    onRequestClose={ 
                                        () => setModalVisible(!modalVisible) } 
                                        showModal={modalVisible}>
                    
                    
                    </SettingsModal>
                )
           break;
           case 'Help' :
               return(
                <SettingsModal 
                    closeModal={() => setModalVisible(!modalVisible)} 
                    title= {title}
                    onRequestClose={ 
                        () => setModalVisible(!modalVisible) } 
                    showModal={modalVisible}>


                </SettingsModal> 
               )
            break;
            case 'Contact us' :
                return (
                    <SettingsModal 
                                    closeModal={() => setModalVisible(!modalVisible)} 
                                    title= {title}
                                    onRequestClose={ 
                                        () => setModalVisible(!modalVisible) } 
                                        showModal={modalVisible}>
                    
                    
                    </SettingsModal>
                )
            break;
            case 'About RAFINEG' :
                return (
                    <SettingsModal 
                                    closeModal={() => setModalVisible(!modalVisible)} 
                                    title= {title}
                                    onRequestClose={ 
                                        () => setModalVisible(!modalVisible) } 
                                        showModal={modalVisible}>
                    
                    
                    </SettingsModal>
                )
            break;
       }
   }
    
        return (
            <Container>
                <Appbar navigation={navigation} screenTitle="Setttings" showDrawer={false} showBackButton={true} />
                <ScrollView style={tailwind("bg-white opacity-50 w-full")}>
                {
                    settingsOptions.map((item, index)=>(
                        <SettingsComponent key={item.title} title={item.title} subtitle={item.subtitle} onPress={() => onSettingsItemPress(item.title)}/>
                    ))
                }
                {modalVisible && showSettings(settingsToShow)  
                    }
                
                </ScrollView>
            </Container>
        )
    
}

export default SettingsScreen
