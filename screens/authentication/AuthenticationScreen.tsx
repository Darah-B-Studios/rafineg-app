import React, { useState } from 'react'
import {TouchableOpacity, View, Text} from 'react-native';
import Container from '../../components/shared/container.component';
import Logo from '../../components/shared/logo.component';
import tailwind from 'tailwind-rn';
import { useAuth } from '../../hooks/auth/auth.hook';
import { ScreenProps } from '../../App';


const AuthenticationScreen: React.FunctionComponent<ScreenProps<'AuthenticationScreen'>> = ({navigation}) => {
    const { testAuth } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigateToLogin = () => {
        navigation.navigate('Login');
    }
    const navigateToSignUp = () => {
        // setLoading(true);
        // await testAuth();
        // setLoading(false);
        navigation.navigate('Signup');
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
                        <Text style={tailwind('text-white text-center text-xl uppercase')}>{loading ? 'loading...' : 'sing up'}</Text>
                    </TouchableOpacity>
                </View>
           </Container>
        );
};

export default AuthenticationScreen;