import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import colors from '../constants/colors'

const styles = StyleSheet.create({
  input_container: {
    backgroundColor: colors.white,
    marginVertical: 15,
    marginHorizontal: 20,
    flexDirection: 'row',
    borderRadius: 5,
  },

  input: {
    padding: 10,
    fontSize: 16,
    marginLeft: 10,
  },

  button: {
    minWidth: 70,
    padding: 12,
    borderRightColor: '#111',
    borderRightWidth: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  button_text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
  },

  containerDisabled: {
    backgroundColor: colors.offWhite,
  },
})

const ConversionInput = ({
  text,
  inputValue,
  setInputValue,
  onButtonPress,
  editable,
}) => {
  const containerStyles = [styles.input_container]
  if (!editable) containerStyles.push(styles.containerDisabled)

  return (
    <View style={containerStyles}>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text style={styles.button_text}>{text}</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={text => setInputValue(text)}
      />
    </View>
  )
}

export default ConversionInput
