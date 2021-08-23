import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import colors from '../constants/colors'

const styles = StyleSheet.create({})

const Options = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

      <ScrollView></ScrollView>
    </SafeAreaView>
  )
}

export default Options
