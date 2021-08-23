import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native'

const CustomFlatButton = ({ text, onPress }) => {
  const styles = StyleSheet.create({
    button: {
      borderRadius: 8,
      paddingVertical: 14,
      paddingHorizontal: 10,
      backgroundColor: '#ffa151',
    },
    button_text: {
      color: 'white',
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

export default CustomFlatButton
