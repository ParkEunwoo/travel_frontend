import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
import Auth from './Auth';
import Main from './Main';
  
  
export default createAppContainer(
    createSwitchNavigator({
        Auth,
        Main
    },
    {
        initialRouteName: 'Auth',
    })
);