import React from 'react'
import {TouchableOpacity, View, Text} from 'react-native';
import Container from '../../components/shared/container.component';
import Logo from '../../components/shared/logo.component';
import tailwind from 'tailwind-rn';
import { useAuth } from '../../hooks/auth/auth.hook';
import { authService } from '../../services/auth/auth.service';
import { baseService } from '../../services/base.service';


export default function AuthenticationScreen({navigation}){
    const { testAuth } = useAuth();
    const navigateToLogin = () =>{
        navigation.navigate('Login');
    }
    const navigateToSignUp = async () => {
        //todo: Implement function to navigate to signup screen
        console.log('To sign up screen');
        try {
            const testData = baseService.test();
            console.log('test data: ', testData);
        } catch (error) {
            // console.log('error: ', error);
        }
    }
        return (
            <Container>
                <View style = {tailwind('items-center content-center w-full pt-40 flex-col')}>
                    <Logo showText />
                    <Text style = {tailwind('')}>Save money, Live better</Text>
                </View>
                <View style={tailwind('pt-20 w-full m-12 items-center content-center justify-center flex-col')}>
                    <TouchableOpacity onPress={navigateToLogin} style={[tailwind('bg-red-500 w-10/12 items-center py-3 m-4 justify-center border-transparent border-4'), {backgrounColor:'#FF3C6D'}]} >
                        <Text style={tailwind('text-white text-center text-xl uppercase')}>login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={navigateToSignUp} style={tailwind('border-solid border-2 justify-center w-10/12 items-center py-3 border-white')} >
                        <Text style={tailwind('text-white text-center text-xl uppercase')}>sign up</Text>
                    </TouchableOpacity>
                </View>
           </Container>
        );
};

