import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { FlatList, RefreshControl, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import RowItem, { RowSeparator } from '../components/RowItem'

import currencies from '../data/currencies.json'
import { wait } from '../utils/wait'
const CurrencyList = ({ navigation }) => {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const insets = useSafeAreaInsets()

  const onRefresh = useCallback(() => {
    setIsRefreshing(true)
    wait(1000).then(() => setIsRefreshing(false))
  }, [])

  return (
    <View>
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          return <RowItem title={item} onPress={() => navigation.pop()} />
        }}
        keyExtractor={item => item}
        ItemSeparatorComponent={() => <RowSeparator />}
        ListFooterComponent={() => (
          <View style={{ paddingBottom: insets.bottom }} />
        )}
        onRefresh={() => {
          setIsRefreshing(true)
        }}
        refreshing={isRefreshing}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  )
}

export default CurrencyList
