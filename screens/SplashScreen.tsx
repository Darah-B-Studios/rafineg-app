import React from 'react';
import {ImageBackground, StyleSheet, Image, TouchableOpacity, Alert, SafeAreaView, View, Text, StatusBar} from 'react-native';
import tailwind from 'tailwind-rn';

export default function SplashScreen({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('AuthenticationScreen')
    }
    return (
        <SafeAreaView style={tailwind('h-full w-full flex-1')}>
            <ImageBackground resizeMode='cover' style = {tailwind('h-full w-full items-center')} source ={require('./../assets/images/splash-background.png')}>
                <View style = {tailwind('flex-1 items-center content-center justify-center flex-col')}>
                    <Image style = {tailwind('w-20 h-20')} resizeMode='cover' source={require('./../assets/images/white-logo.png')} />
                    <Text style = {tailwind('text-white text-3xl font-bold text-center')}>RAFINEG</Text>
                    <Text style = {tailwind('')}>Save money, Live better</Text>
                </View>
                <TouchableOpacity onPress ={pressHandler} >
                    <Text style={tailwind('p-px')}>Welcome, Tap to get started</Text>
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    );
};