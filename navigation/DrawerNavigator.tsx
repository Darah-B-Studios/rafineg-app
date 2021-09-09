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
import PackageDetails from '../screens/packages/PackageDetails';
import SavingScreen from '../screens/savings/SavingScreen';

const DrawerNav = createDrawerNavigator()

const ReferralStack = createStackNavigator()

const ProfileStack = createStackNavigator()

const TransactionsStack = createStackNavigator()
const PackageStack = createStackNavigator()
const SavingsStack = createStackNavigator()

function ReferralNavigator() {
    return (
        <ReferralStack.Navigator screenOptions={{ headerShown: false }}>
            <ReferralStack.Screen name="Referral" component={ReferralListScreen} />
            <ReferralStack.Screen name="Withdraw" component={ReferralScreen} />
        </ReferralStack.Navigator>
    )
}
function PackageNavigator(){
    return(
        <PackageStack.Navigator screenOptions={{headerShown: false}}>
        <PackageStack.Screen name="Package" component={Packages}/>
        <PackageStack.Screen name="PackageDetails" component={PackageDetails}/>
    </PackageStack.Navigator>
    )
    
}

function SavingsNavigator(){
    return (
        <SavingsStack.Navigator screenOptions={{headerShown: false}}>
            <SavingsStack.Screen name="DashBoard" component={Dashboard}/>
            <SavingsStack.Screen name="SavingScreen" component={SavingScreen}/>
            <TransactionsStack.Screen name="TransactionDetails" component={TransactionDetails}/>
        </SavingsStack.Navigator>
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

function TransactionsNavigator(){
    return (
        <TransactionsStack.Navigator initialRouteName="Transactionss" screenOptions={{headerShown: false}}>
            <TransactionsStack.Screen name="Transactionss" component={Transactions}/>
            <TransactionsStack.Screen name="TransactionDetails" component={TransactionDetails}/>  
        </TransactionsStack.Navigator>
    )
}

export default function DrawerNavigator() {
    return (
        <DrawerNav.Navigator drawerContent={props => <DrawerContent {...props} />} initialRouteName="Dashboard"
            screenOptions={{ headerShown: false }}
        >
            <DrawerNav.Screen name="Home" component={SavingsNavigator} />
            <DrawerNav.Screen name="Packages" component={PackageNavigator} />
            <DrawerNav.Screen name="Referrals" component={ReferralNavigator} />
            <DrawerNav.Screen name="Transactions" component={TransactionsNavigator} />
            <DrawerNav.Screen name="Profile" component={ProfileNavigator} />
            <DrawerNav.Screen name="Settings" component={SettingsScreen} />
        </DrawerNav.Navigator>
    );
}