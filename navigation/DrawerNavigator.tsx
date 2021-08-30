import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'
import Dashboard from '../screens/dashboard/Dashboard'
import ReferralListScreen from '../screens/referrals/ReferralListScreen';
import Transactions from '../screens/transactions/Transactions';
import SettingsScreen from '../screens/settings/SetttingsScreen';
import { DrawerContent } from './DrawerContent';
import Packages from '../screens/packages/Packages';
import { createStackNavigator } from '@react-navigation/stack';
import ReferralScreen from '../screens/referrals/ReferralScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const DrawerNav = createDrawerNavigator()

const ReferralStack = createStackNavigator()

function ReferralNavigator(){
    return (
        <ReferralStack.Navigator screenOptions={{ headerShown: false }}>
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
            <DrawerNav.Screen name="Packages" component={Packages}/>
            <DrawerNav.Screen name="Referrals" component={ReferralNavigator}/>
            <DrawerNav.Screen name="Transactions" component={Transactions}/>
            <DrawerNav.Screen name="Profile" component={ProfileScreen}/>
            <DrawerNav.Screen name="Settings" component={SettingsScreen}/>
        </DrawerNav.Navigator>
    );
}