import { HOMESCREEN, OPTIONSCREEN } from '../constants/screens'
import HomeScreen from '../screens/HomeScreen'
import Options from '../screens/Options'
export default AppRoutes = [
  {
    name: HOMESCREEN,
    component: HomeScreen,
    options: { headerShown: false },
  },
  {
    name: OPTIONSCREEN,
    component: Options,
    options: {},
  },
]
