import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Text, View, TextInput, Button, Image, AsyncStorage } from 'react-native';
import Header from '../../Components/Header';
import UserInfo from './../../Components/UserInfo';
import Dashboard from './../../Components/Dashboard';
import Category from './../../Components/Category';
import FollowButton from './../../Components/FollowButton';
import TravelList from './../../Components/TravelList';
//https://docs.expo.io/versions/latest/sdk/imagepicker/


interface Props {
    navigation: any;
  }

interface State {}
  
export default class Profile extends React.Component<Props, State>{
    state = {
      USER_ID: null,
      name: null,
      profile:null,
      introduct: null
    }
    async componentWillMount(){
      await AsyncStorage.multiGet(['USER_ID', 'name', 'profile', 'introduct'], (err, stores) => {
          stores.map((result, i, store) => {
              // get at each store's key/value so you can work with it
              let key = store[i][0];
              let value = store[i][1];
              this.setState({
                  [key]: value
              })
          });
      });
    }
    render(){
      const {name, profile, introduct} = this.state;
        return (
          <View style={styles.container}>
              <Header title="마이페이지" />
              <TouchableOpacity style={styles.upload}>
                <Image source={require('./../../../assets/icons/upload.png')} style={{width:24, height:24}}/>
              </TouchableOpacity>
              <ScrollView style={styles.wrapper}>
              <UserInfo name={name} profile={profile} introduct={introduct} />
              <FollowButton />
              <Dashboard />
                <Category />
                <TravelList />
              </ScrollView>
          </View>
        );
    }
    _back = () => {
        this.props.navigation.navigate('Auth');
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F7',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  upload: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#5966FF',
    borderRadius: 50,
    bottom: 30,
    right: 30,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1
  },
  wrapper: {
    flex: 1,
    alignSelf: 'stretch',
  }
});
