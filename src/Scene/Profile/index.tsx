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
      logs:null,
      followers: null,
      following: null,
      owner: null
    }
    async componentDidMount(){
      const USER_ID = await AsyncStorage.getItem('USER_ID');
      this.setState({USER_ID});
      const user = await axios.get('https://pic-me-back.herokuapp.com/api/user/'+this.state.owner);
      this.setState({
        name: user.data.name,
        profile: user.data.profile.uri,
        introduct: user.data.introduct,
        followers: user.data.friends
      })
      const result = await axios.get('https://pic-me-back.herokuapp.com/api/travel/list/'+USER_ID);
      
      const travelList = result.data.map((value)=>{
        return {
          travel_id: value._id,
          name: value.name,
          time: value.register_date,
          like: value.like.length,
          title: value.title,
          category: value.category,
          image: value.image.uri
        }
      });
      
      this.setState({
        travelList,
        logs: travelList.length
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
      const {name, profile, introduct, owner, USER_ID, logs, followers} = this.state;
        return (
          <View style={styles.container}>
              <Header title="마이페이지" />
              <TouchableOpacity style={styles.upload} onPress={()=>this.props.navigation.navigate('Basic', {USER_ID:this.state.USER_ID, name: this.state.name})}>
                <Image source={require('./../../../assets/icons/upload.png')} style={{width:24, height:24}}/>
              </TouchableOpacity>
              <ScrollView style={styles.wrapper}>
              <UserInfo name={name} profile={profile} introduct={introduct} />
              {owner!==USER_ID && <FollowButton />}
              <Dashboard logs={logs} followers={followers}/>
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
