import React from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'
const screen = Dimensions.get('window')

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoBackground: {
    width: screen.width / 0.4,
    height: screen.width * 0.4,
  },
  logo: {
    position: 'absolute',
    width: screen.width * 0.2,
    height: screen.width * 0.2,
  },
})

const AppLogo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={[styles.logoBackground]}
        source={require('../assets/images/background.png')}
        resizeMode="contain"
      />
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
        resizeMode="contain"
      />
    </View>
  )
}

export default AppLogo
