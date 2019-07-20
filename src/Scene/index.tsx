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
        FollowList
    },
    {
        initialRouteName: 'Profile',
    })
);