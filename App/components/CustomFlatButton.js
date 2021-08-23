import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native'

const CustomFlatButton = ({ text, onPress, btnBgColor }) => {
  const styles = StyleSheet.create({
    button: {
      borderRadius: 8,
      paddingVertical: 14,
      paddingHorizontal: 10,
      backgroundColor: btnBgColor,
    },
    button_text: {
      color: '#f9f9f9',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textAlign: 'center',
      fontSize: 14,
    },
  })

  return (
    <TouchableOpacity onPress={onPress}>
      <SafeAreaView style={styles.button}>
        <Text style={styles.button_text}>{text}</Text>
      </SafeAreaView>
    </TouchableOpacity>
  )
}

CustomFlatButton.defaultProps = {
  text: 'ButtonText',
  btnBgColor: '#111',
}
export default CustomFlatButton
