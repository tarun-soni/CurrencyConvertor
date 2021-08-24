import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppRoutes from './config/AppRoutes'
import { HOMESCREEN } from './constants/screens'
import { ConversionContextProvider } from './context/ConverionContext'

const MainStack = createNativeStackNavigator()

export default App = () => {
  return (
    <ConversionContextProvider>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName={HOMESCREEN}>
          {AppRoutes.map(route => (
            <MainStack.Screen
              key={route.name}
              name={route.name}
              component={route.component}
              options={route.options}
            />
          ))}
        </MainStack.Navigator>
      </NavigationContainer>
    </ConversionContextProvider>
  )
}
