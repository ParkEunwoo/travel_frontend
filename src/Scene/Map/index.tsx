import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Text, View, TextInput, Button, Image } from 'react-native';
import Header from '../../Components/Header';
import ProfileInfo from './../../Components/ProfileInfo';
import TravelInfo from './../../Components/TravelInfo';
//https://docs.expo.io/versions/latest/sdk/imagepicker/


interface Props {
    navigation: any;
  }

interface State {}
  
export default class Map extends React.Component<Props, State>{
    state = {
    }
    render(){
        return (
          <View style={styles.container}>
              <Header />
              <View style={styles.wrapper}>
                <ProfileInfo />
                <TravelInfo />
              </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F7',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  wrapper: {
      flex: 1,
      alignSelf: 'stretch',
      justifyContent: 'space-between'
  }
});
