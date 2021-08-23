import React from 'react'
import { useState } from 'react'
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import AppLogo from '../components/AppLogo'
import ConversionInput from '../components/ConversionInput'
import { format } from 'date-fns'
import colors from '../constants/colors'
import CustomFlatButton from '../components/CustomFlatButton'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.bgBlue,
  },
  text_header: {
    fontWeight: 'bold',
    color: colors.text,
    fontSize: 26,
    marginTop: 20,
    textAlign: 'center',
  },
  text_footer: {
    color: colors.text,
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
})

const ConvertScreen = () => {
  const [inputValue, setInputValue] = useState()
  const baseCurrency = 'USD'
  const quoteCurrency = 'INR'
  const conversionRate = 0.84
  const date = new Date()
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <View style={{ marginTop: 50 }}>
        <AppLogo />
        <Text style={styles.text_header}>Currency Converter</Text>
      </View>
      <View style={{ marginVertical: 20 }}>
        <ConversionInput
          text={baseCurrency}
          value={inputValue}
          onButtonPress={() => {}}
          keyboardType="numeric"
          onChangeText={text => setInputValue(text)}
          editable
        />

        <ConversionInput
          text={quoteCurrency}
          value={inputValue}
          onButtonPress={() => {}}
          keyboardType="numeric"
          onChangeText={text => setInputValue(text)}
          editable={false}
        />

        <Text style={styles.text_footer}>
          {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${
            date && format(new Date(date), 'MMM do, yyyy')
          }`}
        </Text>

        <View>
          {/* <Image source={require('../assets/images/reverse.png')} /> */}
          <CustomFlatButton
            text={'Revserse Currency'}
            onPress={() => {}}
            btnTextColor={colors.text}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ConvertScreen
