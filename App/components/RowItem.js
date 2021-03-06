import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

import colors from '../constants/colors'

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  title: {
    color: colors.text,
    fontSize: 16,
  },
  separator: {
    backgroundColor: colors.bgBlack,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
})

export default RowItem = ({ title, onPress, iconOnRight }) => (
  <TouchableOpacity onPress={onPress} style={styles.row}>
    <Text style={styles.title}>{title}</Text>
    {iconOnRight}
  </TouchableOpacity>
)

export const RowSeparator = () => <View style={styles.separator} />
