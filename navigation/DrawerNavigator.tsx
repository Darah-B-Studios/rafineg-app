import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'
import Dashboard from '../screens/dashboard/Dashboard'
import ReferralListScreen from '../screens/referrals/ReferralListScreen';
import SubscriptionsScreen from '../screens/subscriptions/SubscriptionsScreen';
import Transactions from '../screens/transactions/Transactions';
import SettingsScreen from '../screens/settings/SetttingsScreen';
import { DrawerContent } from './DrawerContent';
import { View, Text } from 'react-native';
import AppbarHeader from '../components/shared/appbar-header.component';
import  tailwind  from 'tailwind-rn';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import Packages from '../screens/packages/Packages';
import { createStackNavigator } from '@react-navigation/stack';
import ReferralScreen from '../screens/referrals/ReferralScreen';

const DrawerNav = createDrawerNavigator()

const ReferralStack = createStackNavigator()

function ReferralNavigator(){
    return (
        <ReferralStack.Navigator>
            <ReferralStack.Screen name="Referral" component={ReferralListScreen}/>
            <ReferralStack.Screen name="Withdraw" component={ReferralScreen}/>
        </ReferralStack.Navigator>
    )
} 



export default function DrawerNavigator(){

    return(
        <DrawerNav.Navigator drawerContent={props => <DrawerContent {...props}/>} initialRouteName="Dashboard"
        screenOptions={{ headerShown: false }} 
         >
            <DrawerNav.Screen name="Home" component={Dashboard}/>
            <DrawerNav.Screen name="Subscriptions" component={Packages}/>
            <DrawerNav.Screen name="Referrals" component={ReferralNavigator}/>
            <DrawerNav.Screen name="Transactions" component={Transactions}/>
            <DrawerNav.Screen name="Settings" component={SettingsScreen}/>
        </DrawerNav.Navigator>

    );
}