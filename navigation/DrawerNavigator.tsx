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
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import EditPassword from '../screens/profile/EditPassword';

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
            <ProfileStack.Screen name="EditPassword" component={EditPassword}/>
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
            {/* Navigation works as intended but I don't understand the reason for the errors and I dont know how to solve that now
            i know it has something to do with types */}
            <DrawerNav.Screen name="Home" component={SavingsNavigator} 
            options={({route}) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home'
                if (routeName == "SavingScreen" || routeName == "TransactionDetails")
                    return({swipeEnabled: false})
            }}/>
            <DrawerNav.Screen name="Packages" component={PackageNavigator} 
            options={({route}) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? 'Packages'
                if (routeName == "PackageDetails")
                    return({swipeEnabled: false})
            }} />
            <DrawerNav.Screen name="Referrals" component={ReferralNavigator} 
            options={({route}) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? 'Referrals'
                if (routeName == "Withdraw")
                    return({swipeEnabled: false})
            }}/>
            <DrawerNav.Screen name="Transactions" component={TransactionsNavigator}
            options={({route}) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? 'Transactions'
                if (routeName == "TransactionDetails")
                    return({swipeEnabled: false})
            }} />
            <DrawerNav.Screen name="Profile" component={ProfileNavigator} 
            options={({route}) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? 'Profile'
                if (routeName == "EditProfile")
                    return({swipeEnabled: false})
            }}/>
            <DrawerNav.Screen name="Settings" component={SettingsScreen}/>
        </DrawerNav.Navigator>
    );
}