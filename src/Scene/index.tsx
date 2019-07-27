import { AsyncStorage } from 'react-native';
import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
import Auth from './Auth';
import Register from './Register';
import Main from './Main';
import {Basic, Detail, Spot} from './Upload';
import ProfileEdit from './ProfileEdit';
import Profile from './Profile';
import FollowList from './FollowList';
import Map from './Map';
import LogView from './LogView';

export default createAppContainer(
    createSwitchNavigator({
        Auth,
        Register,
        Main,
        Basic,
        Detail,
        Spot,
        ProfileEdit,
        Profile,
        FollowList,
        Map,
        LogView
    },
    {
        initialRouteName: ('Main'),
    })
);