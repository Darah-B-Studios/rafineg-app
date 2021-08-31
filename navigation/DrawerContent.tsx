import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import { View } from 'react-native';
import { useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
 } from 'react-native-paper';
 import tailwind from 'tailwind-rn';
import NavDrawerHeader from '../components/navdrawer/navdrawer-header.component'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export function DrawerContent(props){
    return (
        <View style={tailwind("flex-1 flex-col ")}>
            <NavDrawerHeader/>
            <DrawerContentScrollView {...props}>
                <View>
                    
                        <DrawerItem
                        icon={({color, size}) => (
                            <Icon 
                                name="home-outline"
                                color={color}
                                size={size}/>

                        )}
                        label="Dashboard"
                        onPress={()=> {props.navigation.navigate("Home")}}/>
                        <DrawerItem
                        icon={({color, size}) => (
                            <Icon 
                                name="shape-outline"
                                color={color}
                                size={size}/>

                        )}
                        label="Subscriptions"
                        onPress={()=> {props.navigation.navigate("Packages")}}/>
                        <DrawerItem
                        icon={({color, size}) => (
                            <Icon 
                                name="account-outline"
                                color={color}
                                size={size}/>

                        )}
                        label="Profile"
                        onPress={()=> {props.navigation.navigate("Profile")}}/>
                        <DrawerItem
                        icon={({color, size}) => (
                            <Icon 
                                name="account-multiple-outline"
                                color={color}
                                size={size}/>

                        )}
                        label="Referrals"
                        onPress={()=> {props.navigation.navigate("Referrals")}}/>
                        <DrawerItem
                        icon={({color, size}) => (
                            <Icon 
                                name="shuffle-variant"
                                color={color}
                                size={size}/>

                        )}
                        label="Transactions"
                        onPress={()=> {props.navigation.navigate("Transactions")}}/>
                        <DrawerItem
                        icon={({color, size}) => (
                            <Icon 
                                name="cellphone-settings"
                                color={color}
                                size={size}/>

                        )}
                        label="Settings"
                        onPress={()=> {props.navigation.navigate("Settings")}}/>
                    
                    
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon 
                                name="exit-to-app"
                                color={color}
                                size={size}/>

                        )}
                        label="Logout"
                        onPress={()=> {}}/>
                    
                </View>
                

            </DrawerContentScrollView>

        </View>
    );
}