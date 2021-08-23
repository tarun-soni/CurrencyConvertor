import { CONVERTSCREEN, HOMESCREEN } from '../constants/screens'
import HomeScreen from '../screens/HomeScreen'
import ConvertScreen from '../screens/ConvertScreen'
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
]
