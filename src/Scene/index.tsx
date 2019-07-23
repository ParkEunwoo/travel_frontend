import { AsyncStorage } from 'react-native';
import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
import Auth from './Auth';
import Register from './Register';
import Main from './Main';
import {Basic, Detail, Picture} from './Upload';
import ProfileEdit from './ProfileEdit';
import Profile from './Profile';
import FollowList from './FollowList';
import Map from './Map';
import LogView from './LogView';

const state = {
    USER_ID: ''
}

const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('USER_ID');
      if (value !== null) {
        // We have data!!
        console.log(value);
        state.USER_ID = value;
      }
    } catch (error) {
      // Error retrieving data
    }
  };
_retrieveData();
export default createAppContainer(
    createSwitchNavigator({
        Auth,
        Register,
        Main,
        Basic,
        Detail,
        Picture,
        ProfileEdit,
        Profile,
        FollowList,
        Map,
        LogView
    },
    {
        initialRouteName: (!state.USER_ID?'Auth':'Main'),
    })
);