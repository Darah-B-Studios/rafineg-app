import React from 'react'
import { Text } from 'react-native'
import tailwind from 'tailwind-rn'

type Props = {
  message: string;
}

const ValidationError: React.FunctionComponent<Props> = ({message}) => {
  return (
    <Text style={tailwind('text-sm text-red-400')}>
      {message}
    </Text>
  )
}

export default ValidationError
