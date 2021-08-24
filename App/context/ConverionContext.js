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
  const [isLoading, setIsLoading] = useState(true)
  const setBaseCurrency = async currency => {
    try {
      setIsLoading(true)
      _setBaseCurrency(currency)
      const res = await api(`/latest?base=${currency}`)
      setDate(res.date)
      setRates(res.rates)
    } catch (error) {
      Alert.alert('Something went wrong', error.message)
      console.log(`error`, error.message)
    } finally {
      setIsLoading(false)
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
    isLoading,
    setIsLoading,
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
