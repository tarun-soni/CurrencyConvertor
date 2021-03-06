import React, { useContext } from 'react'
import { useState } from 'react'
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import AppLogo from '../components/AppLogo'
import ConversionInput from '../components/ConversionInput'
import { format } from 'date-fns'
import colors from '../constants/colors'
import CustomFlatButton from '../components/CustomFlatButton'
import { useEffect } from 'react'

import { CURRENCYLISTSCREEN } from '../constants/screens'
import { ConversionContext } from '../context/ConverionContext'
import { api } from '../utils/api'
const screen = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgBlue,
  },
  content: {
    paddingTop: screen.height * 0.1,
    // borderWidth: 2,
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

const ConvertScreen = ({ navigation }) => {
  const {
    baseCurrency,
    quoteCurrency,
    reverseCurrenciesHandler,
    date,
    rates,
    isLoading,
  } = useContext(ConversionContext)
  const [inputValue, setInputValue] = useState(100)

  const [isScrollEnabled, setIsScrollEnabled] = useState(true)

  const conversionRate = rates[quoteCurrency]
  /**
   * alternative if not using keyboardAvoidoingView (the conmplete effect)
   * - also requires new component KeyboardSpacer, that gives granual control over spacing above the keyboard
   * - more on it - https://learn.reactnativeschool.com/p/react-native-basics-build-a-currency-converter
   */
  // useEffect(() => {
  //   const showListener = Keyboard.addListener('keyboardDidShow', () => {

  //     setIsScrollEnabled(true)
  //   })
  //   const hideListener = Keyboard.addListener('keyboardDidHide', () => {
  //     setIsScrollEnabled(false)
  //   })
  //   return () => {
  //     showListener.remove()
  //     hideListener.remove()
  //   }
  // }, [])

  const onBaseCurrencyPress = () => {
    navigation.push(CURRENCYLISTSCREEN, {
      title: 'Base Currency',
      isBaseCurrency: true,
    })
  }
  const onQuoteCurrencyPress = () => {
    navigation.push(CURRENCYLISTSCREEN, {
      title: 'Quote Currency',
      isBaseCurrency: false,
    })
  }

  // useEffect(() => {
  //   async function getConversionRates() {
  //     const res = await api(`/latest?base=${baseCurrency}`)
  //     console.log(`res`, res)
  //   }

  //   getConversionRates()
  // }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView scrollEnabled={isScrollEnabled}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

        <View style={styles.content}>
          <View>
            <AppLogo />
            <Text style={styles.text_header}>Currency Converter</Text>
          </View>

          {isLoading ? (
            <ActivityIndicator
              color={colors.white}
              size={'large'}
              style={{ marginVertical: 40 }}
            />
          ) : (
            <>
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <View>
                    <ConversionInput
                      text={baseCurrency}
                      value={inputValue}
                      onButtonPress={onBaseCurrencyPress}
                      keyboardType="numeric"
                      onChangeText={text => setInputValue(text)}
                      editable={true}
                    />
                    <ConversionInput
                      text={quoteCurrency}
                      value={
                        inputValue &&
                        `${(parseFloat(inputValue) * conversionRate).toFixed(
                          2,
                        )}`
                      }
                      onButtonPress={onQuoteCurrencyPress}
                      keyboardType="numeric"
                      editable={false}
                    />

                    <Text style={styles.text_footer}>
                      {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${
                        date && format(new Date(date), 'MMM do, yyyy')
                      }`}
                    </Text>

                    {/* <Image source={require('../assets/images/reverse.png')} /> */}
                    <CustomFlatButton
                      text={'Revserse Currency'}
                      onPress={reverseCurrenciesHandler}
                      btnTextColor={colors.text}
                    />
                  </View>
                </TouchableWithoutFeedback>
              </KeyboardAvoidingView>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ConvertScreen
