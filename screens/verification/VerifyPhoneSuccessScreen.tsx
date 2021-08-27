import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Container from '../../components/shared/container.component'
import tailwind from 'tailwind-rn'
import { Feather } from '@expo/vector-icons'
import SuccessMessage from '../../components/shared/successmessage.component'

const VerifyPhoneSuccessScreen = () => {
    return (
        <Container>
            <View style={tailwind("items-center justify-center w-full h-full flex-col")}>

           

            <SuccessMessage title="Congratulations" message="Your phone number has been successfully verified."/>

            <TouchableOpacity
              style={[
                tailwind("w-11/12 items-center py-4 mt-5 justify-center "),
                { backgroundColor: "#9d0090" },
              ]}
              onPress={()=> console.log("Pressed")}
            >
              <Text style={tailwind("text-white uppercase text-center text-xl")}>
                continue
              </Text>
            </TouchableOpacity>

            </View>

        </Container>
    )
}

export default VerifyPhoneSuccessScreen
