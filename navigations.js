import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/Component/Home/index'
import PlayerRegisterScreen from './src/Component/Player/index'

const nav = createStackNavigator(
    {
        home: HomeScreen,
        playerRegister:PlayerRegisterScreen
    },
    {
        headerMode:'none',
        initialRouteName:'home'
    }
)
export default createAppContainer(nav)