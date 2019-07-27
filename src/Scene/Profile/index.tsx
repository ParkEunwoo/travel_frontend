import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Text, View, TextInput, Button, Image, AsyncStorage } from 'react-native';
import Header from '../../Components/Header';
import UserInfo from './../../Components/UserInfo';
import Dashboard from './../../Components/Dashboard';
import Category from './../../Components/Category';
import FollowButton from './../../Components/FollowButton';
import TravelList from './../../Components/TravelList';
import axios from 'axios';
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
      introduct: null,
      travelList: null,
      owner: null
    }
    async componentDidMount(){
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
      
      const result = await axios.get('https://pic-me-back.herokuapp.com/api/travel/'+this.state.USER_ID);
      
      const travelList = result.data.map((value)=>{
        return {
          name: value.name,
          time: value.register_date,
          like: value.like.length,
          title: value.title,
          category: value.category,
          image: value.image.uri
        }
      });
      
      this.setState({
        travelList
      })
    }
    static getDerivedStateFromProps(nextProps, preState){
        const {owner} = nextProps.navigation.state.params;
        if(preState.owner !== owner){
            return {
                owner
            };
        }
        return null;
    }
    render(){
      const {name, profile, introduct, owner, USER_ID} = this.state;
        return (
          <View style={styles.container}>
              <Header title="마이페이지" />
              <TouchableOpacity style={styles.upload} onPress={()=>this.props.navigation.navigate('Basic', {USER_ID:this.state.USER_ID, name: this.state.name})}>
                <Image source={require('./../../../assets/icons/upload.png')} style={{width:24, height:24}}/>
              </TouchableOpacity>
              <ScrollView style={styles.wrapper}>
              <UserInfo name={name} profile={profile} introduct={introduct} />
              {owner!==USER_ID && <FollowButton />}
              <Dashboard />
                <TravelList travelList={this.state.travelList}/>
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
