import React from 'react'
import { useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import AppLogo from '../components/AppLogo'
import ConversionInput from '../components/ConversionInput'
import colors from '../constants/colors'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.bgBlue,
  },
})

const ConvertScreen = () => {
  const [inputValue, setInputValue] = useState('100')
  const onAddPress = () => {}
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <View style={{ marginTop: 50 }}>
        <AppLogo />
      </View>
      <View style={{ marginVertical: 40 }}>
        <ConversionInput
          text={'USD'}
          inputValue={inputValue}
          editable={true}
          onButtonPress={() => {}}
          setInputValue={setInputValue}
        />
        <ConversionInput
          text={'INR'}
          inputValue={inputValue}
          editable={false}
          onButtonPress={() => {}}
          setInputValue={setInputValue}
        />
      </View>
    </SafeAreaView>
  )
}

export default ConvertScreen
