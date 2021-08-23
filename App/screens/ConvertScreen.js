import React from 'react'
import { useState } from 'react'
import {
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

const ConvertScreen = () => {
  const [inputValue, setInputValue] = useState()
  const baseCurrency = 'USD'
  const quoteCurrency = 'INR'
  const conversionRate = 0.84
  const date = new Date()

  const [isScrollEnabled, setIsScrollEnabled] = useState(true)

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
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView scrollEnabled={isScrollEnabled}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

        <View style={styles.content}>
          <View>
            <AppLogo />
            <Text style={styles.text_header}>Currency Converter</Text>
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View>
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
                  editable
                />

                <Text style={styles.text_footer}>
                  {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${
                    date && format(new Date(date), 'MMM do, yyyy')
                  }`}
                </Text>

                {/* <Image source={require('../assets/images/reverse.png')} /> */}
                <CustomFlatButton
                  text={'Revserse Currency'}
                  onPress={() => {}}
                  btnTextColor={colors.text}
                />
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ConvertScreen
