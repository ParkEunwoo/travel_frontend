import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Text, View, TextInput, Button, Image, AsyncStorage } from 'react-native';
import Header from '../../Components/Header';
import RecommendList from './../../Components/RecommendList';
import Category from './../../Components/Category';
import TravelList from './../../Components/TravelList';
import axios from 'axios';
//https://docs.expo.io/versions/latest/sdk/imagepicker/


interface Props {
    navigation: any;
}

interface State {}
  
export default class Main extends React.Component<Props, State>{
    state = {
      USER_ID:null,
      name:null,
      travelList: null
    }
    async componentDidMount(){
      await AsyncStorage.multiGet(['USER_ID', 'name'], (err, stores) => {
          stores.map((result, i, store) => {
              // get at each store's key/value so you can work with it
              let key = store[i][0];
              let value = store[i][1];
              this.setState({
                  [key]: value
              })
          });
      });
      const result = await axios.get('https://pic-me-back.herokuapp.com/api/user/'+this.state.USER_ID+'/friends/travel');
      
      console.log(result.data);
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
    render(){
        return (
          <View style={styles.container}>
              <Header title='logo' />
              <TouchableOpacity style={styles.upload} onPress={()=>this.props.navigation.navigate('Basic', {USER_ID:this.state.USER_ID, name: this.state.name})}>
                <Image source={require('./../../../assets/icons/upload.png')} style={{width:24, height:24}}/>
              </TouchableOpacity>
              <ScrollView style={styles.wrapper}>
                <RecommendList name={this.state.name}/>
                <Category />
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
    backgroundColor: '#fff',
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
