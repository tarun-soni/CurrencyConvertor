import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import Options from './screens/Options'

const MainStack = createNativeStackNavigator()
export default App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="HomeScreen">
        <MainStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen name="OptionScreen" component={Options} />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}
