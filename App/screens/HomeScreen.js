import React from 'react'
import { Dimensions, Image, SafeAreaView, StyleSheet, View } from 'react-native'
import colors from '../constants/colors'
import CustomFlatButton from '../components/CustomFlatButton'
const screen = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },
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
  start_button: {
    alignSelf: 'center',
    width: 140,
    marginVertical: 30,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    fontSize: 16,
  },
})

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
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

      <SafeAreaView style={styles.start_button}>
        <CustomFlatButton text={"Let's Start"} />
      </SafeAreaView>
    </SafeAreaView>
  )
}

export default HomeScreen
