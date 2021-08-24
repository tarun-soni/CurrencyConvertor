import React, { createContext, useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { api } from '../utils/api'

export const ConversionContext = createContext()

export const ConversionContextProvider = ({ children }) => {
  const DEFAULT_BASE_CURRENCY = 'USD'

  const [baseCurrency, _setBaseCurrency] = useState(DEFAULT_BASE_CURRENCY)
  const [quoteCurrency, setQuoteCurrency] = useState('INR')
  const [rates, setRates] = useState({})
  const [date, setDate] = useState()
  const setBaseCurrency = async currency => {
    try {
      _setBaseCurrency(currency)
      const res = await api(`/latest?base=${currency}`)
      setDate(res.date)
      setRates(res.rates)
    } catch (error) {
      Alert.alert('Something went wrong', error.message)
      console.log(`error`, error.message)
    }
  }

  const reverseCurrenciesHandler = () => {
    setBaseCurrency(quoteCurrency)
    setQuoteCurrency(baseCurrency)
  }

  const inititalState = {
    baseCurrency,
    quoteCurrency,
    reverseCurrenciesHandler,
    setBaseCurrency,
    setQuoteCurrency,
    date,
    rates,
  }

  useEffect(() => {
    setBaseCurrency(DEFAULT_BASE_CURRENCY)
  }, [])
  return (
    <ConversionContext.Provider value={inititalState}>
      {children}
    </ConversionContext.Provider>
  )
}
