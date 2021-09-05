import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import tailwind from 'tailwind-rn'
import {Text} from "react-native"

type Props = {
  name: string;
}

const Tag: React.FunctionComponent<Props> = ({name = 'tag'}) => {
  return (
    <TouchableOpacity
      style={tailwind(
        "border-solid p-2 mr-2 border-2 justify-center border-white "
      )}
    >
      <Text>{name}</Text>
    </TouchableOpacity>
  )
}

export default Tag
