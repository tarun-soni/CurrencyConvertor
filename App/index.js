import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppRoutes from './config/AppRoutes'
import { HOMESCREEN } from './constants/screens'
const MainStack = createNativeStackNavigator()
export default App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={HOMESCREEN}>
        {AppRoutes.map(route => (
          <MainStack.Screen
            name={route.name}
            component={route.component}
            options={route.options}
          />
        ))}
        {/* <MainStack.Screen name="OptionScreen" component={Options} /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  )
}
