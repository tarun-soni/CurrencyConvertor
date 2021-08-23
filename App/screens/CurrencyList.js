import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import RowItem, { RowSeparator } from '../components/RowItem'

import currencies from '../data/currencies.json'
const CurrencyList = ({ navigation }) => {
  const insets = useSafeAreaInsets()
  return (
    <View>
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          return <RowItem title={item} onPress={() => navigation.pop()} />
        }}
        keyExtractor={({ item }) => item}
        ItemSeparatorComponent={() => <RowSeparator />}
        ListFooterComponent={() => (
          <View style={{ paddingBottom: insets.bottom }} />
        )}
      />
    </View>
  )
}

export default CurrencyList
