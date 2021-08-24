import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { FlatList, RefreshControl, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import RowItem, { RowSeparator } from '../components/RowItem'

import currencies from '../data/currencies.json'
import { wait } from '../utils/wait'
const CurrencyList = ({ navigation, route = {} }) => {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const insets = useSafeAreaInsets()

  const params = route.params || {}

  const onRefresh = useCallback(() => {
    setIsRefreshing(true)
    wait(1000).then(() => setIsRefreshing(false))
  }, [])

  return (
    <View>
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          const selected = params.activeCurrency === item
          return (
            <RowItem
              title={item}
              onPress={() => {
                if (params.onChange) params.onChange(item)
                navigation.pop()
              }}
              iconOnRight={selected && <Text>Selected</Text>}
            />
          )
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
