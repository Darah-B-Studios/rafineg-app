import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'
import Dashboard from '../screens/dashboard/Dashboard'
import ReferralListScreen from '../screens/referrals/ReferralListScreen';
import Packages from '../screens/packages/Packages';
import ReferralScreen from '../screens/referrals/ReferralScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import SubscriptionsScreen from '../screens/subscriptions/SubscriptionsScreen';
import Transactions from '../screens/transactions/Transactions';
import SettingsScreen from '../screens/settings/SetttingsScreen';
import Logout from '../screens/authentication/Logout';
import tailwind from 'tailwind-rn';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { DrawerContent } from './DrawerContent';
import AppbarHeader from '../components/shared/appbar-header.component';
import { Appbar } from 'react-native-paper';

const DrawerNav = createDrawerNavigator()



export default function DrawerNavigator(){

    return(
        <DrawerNav.Navigator drawerContent={props => <DrawerContent {...props}/>} initialRouteName="Dashboard" screenOptions ={{
           header: ({navigation})=> (
            <Appbar.Header style={tailwind("bg-blue-700 w-full")}>
                <Appbar.Content title="Dashboard"/>
                <Appbar.Action icon="menu" onPress ={()=> navigation.dispatch(DrawerActions.openDrawer())}/>
            </Appbar.Header>
           )
        }}
         >
            <DrawerNav.Screen name="Dashboard" component={Dashboard}/>
            <DrawerNav.Screen name="Subscriptions" component={SubscriptionsScreen}/>
            <DrawerNav.Screen name="Referrals" component={ReferralListScreen}/>
            <DrawerNav.Screen name="Transactions" component={Transactions}/>
            <DrawerNav.Screen name="Settings" component={SettingsScreen}/>
            
            
        </DrawerNav.Navigator>

    );
}