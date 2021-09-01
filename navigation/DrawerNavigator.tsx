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
import TransactionDetails from '../screens/transactions/TransactionDetails';
import EditProfileScreen from '../screens/profile/EditProfileScreen';

const DrawerNav = createDrawerNavigator()

const ReferralStack = createStackNavigator()

const ProfileStack = createStackNavigator()

function ReferralNavigator() {
    return (
        <ReferralStack.Navigator screenOptions={{ headerShown: false }}>
            <ReferralStack.Screen name="Referral" component={ReferralListScreen} />
            <ReferralStack.Screen name="Withdraw" component={ReferralScreen} />
        </ReferralStack.Navigator>
    )
}

function ProfileNavigator() {
    return (
        <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
            <ProfileStack.Screen name="ProfileS" component={ProfileScreen} />
            <ProfileStack.Screen name="EditProfile" component={EditProfileScreen} />
        </ProfileStack.Navigator>
    )
}

export default function DrawerNavigator() {
    return (
        <DrawerNav.Navigator drawerContent={props => <DrawerContent {...props} />} initialRouteName="Dashboard"
            screenOptions={{ headerShown: false }}
        >
            <DrawerNav.Screen name="Home" component={Dashboard} />
            <DrawerNav.Screen name="Packages" component={Packages} />
            <DrawerNav.Screen name="Referrals" component={ReferralNavigator} />
            <DrawerNav.Screen name="Transactions" component={TransactionDetails} />
            <DrawerNav.Screen name="Profile" component={ProfileNavigator} />
            <DrawerNav.Screen name="Settings" component={SettingsScreen} />
        </DrawerNav.Navigator>
    );
}