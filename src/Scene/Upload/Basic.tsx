import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Text, View, TextInput, Button, Image } from 'react-native';
import MainHeader from '../../Components/MainHeader';
import RecommendList from './../../Components/RecommendList';
import Category from './../../Components/Category';
import TravelList from './../../Components/TravelList';
//https://docs.expo.io/versions/latest/sdk/imagepicker/


interface Props {
    navigation: any;
  }

interface State {}
  
export default class Basic extends React.Component<Props, State>{
    state = {
    }
    render(){
        return (
          <View style={styles.container}>
              <MainHeader />
              <TouchableOpacity style={styles.upload}>
                <Image source={require('./../../../assets/icons/upload.png')} style={{width:24, height:24}}/>
              </TouchableOpacity>
              <ScrollView style={styles.wrapper}>
                <RecommendList />
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
