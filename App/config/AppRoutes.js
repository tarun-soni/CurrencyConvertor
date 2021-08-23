import {
  CONVERTSCREEN,
  CURRENCYLISTSCREEN,
  HOMESCREEN,
} from '../constants/screens'
import HomeScreen from '../screens/HomeScreen'
import ConvertScreen from '../screens/ConvertScreen'
import CurrencyList from '../screens/CurrencyList'

const currencyOptions = ({ route }) => ({
  title: route?.params?.title,
})

export default AppRoutes = [
  {
    name: HOMESCREEN,
    component: HomeScreen,
    options: { headerShown: false },
  },

  {
    name: CONVERTSCREEN,
    component: ConvertScreen,
    options: {},
  },
  {
    name: CURRENCYLISTSCREEN,
    component: CurrencyList,
    options: currencyOptions,
  },
]
