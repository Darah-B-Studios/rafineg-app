import { AntDesign, FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { TouchableWithoutFeedback, Modal, View, Text } from 'react-native'
import tailwind  from 'tailwind-rn'

const ImagePickerModal: React.FunctionComponent = ({...props}) => {
    return (
        <Modal {...props}>
                <View style={tailwind("flex-row items-center justify-between")}>
                    <TouchableWithoutFeedback style={tailwind("items-center")}>
                        <FontAwesome name="photo" size={24} color="black" />
                        <Text>Add photo from gallery</Text>

                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={tailwind("items-center")}>
                    <AntDesign name="camera" size={24} color="black" />
                    <Text>Take a photo</Text>

                    </TouchableWithoutFeedback>

                </View>
        </Modal>
    )
}

export default ImagePickerModal
