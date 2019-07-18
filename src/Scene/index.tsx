import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
import Auth from './Auth';
import Register from './Register';
import Main from './Main';
  
  
export default createAppContainer(
    createSwitchNavigator({
        Auth,
        Register,
        Main
    },
    {
        initialRouteName: 'Auth',
    })
);