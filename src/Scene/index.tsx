import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer,
  } from 'react-navigation';
  
  import Next from './Next';
  import Home from './Home';
  
  export default createAppContainer(
    createSwitchNavigator(
      {
          Home,
          Next
      },
      {
        initialRouteName: 'Home',
      }
    )
  );