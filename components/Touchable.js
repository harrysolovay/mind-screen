
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Touchable = props => (
  <TouchableOpacity
    activeOpacity={ 1 }
    { ...props }
  />
)

export default Touchable