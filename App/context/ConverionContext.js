import React, { createContext, useState } from 'react'

export const ConversionContext = createContext()

export const ConversionContextProvider = ({ children }) => {
  const [baseCurrency, setBaseCurrency] = useState('USD')
  const [quoteCurrency, setQuoteCurrency] = useState('INR')

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
  }
  return (
    <ConversionContext.Provider value={inititalState}>
      {children}
    </ConversionContext.Provider>
  )
}
