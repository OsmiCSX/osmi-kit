import React from 'react'
import {
  SafeAreaView,
  View,
  Text
} from 'react-native'

import { apply } from '../Themes/OsmiProvider'

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={apply("flex justify-center items-center")}>
      <Text style={apply("text-lg text-black")}>Hello World</Text>
    </SafeAreaView>
  )
}

export default WelcomeScreen