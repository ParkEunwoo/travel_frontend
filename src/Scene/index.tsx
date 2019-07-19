import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
import Auth from './Auth';
import Register from './Register';
import Main from './Main';
import {Basic, Detail, Picture} from './Upload';
  
  
export default createAppContainer(
    createSwitchNavigator({
        Auth,
        Register,
        Main,
        Basic,
        Detail,
        Picture
    },
    {
        initialRouteName: 'Picture',
    })
);