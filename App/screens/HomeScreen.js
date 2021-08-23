import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import colors from '../constants/colors'
import CustomFlatButton from '../components/CustomFlatButton'
import { CONVERTSCREEN } from '../constants/screens'

import AppLogo from '../components/AppLogo'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.bgBlack,
  },

  start_button: {
    alignSelf: 'center',
    width: 140,
    marginVertical: 30,
    borderRadius: 8,
    fontSize: 16,
  },
})

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <AppLogo />
      <SafeAreaView style={styles.start_button}>
        <CustomFlatButton
          text={"Let's Start"}
          onPress={() => navigation.navigate(CONVERTSCREEN)}
          btnBgColor={colors.red}
        />
      </SafeAreaView>
    </SafeAreaView>
  )
}

export default HomeScreen
