import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Text, View, TextInput, Button, Image } from 'react-native';
import Header from '../../Components/Header';
import SpotList from './../../Components/SpotList';
import axios from 'axios';

//https://docs.expo.io/versions/latest/sdk/imagepicker/


interface Props {
    navigation: any;
  }

interface State {}
  
export default class LogView extends React.Component<Props, State>{
    state = {
      travel_id:'',
      spotList: []
    }
    static getDerivedStateFromProps(nextProps, preState){
        const {travel_id} = nextProps.navigation.state.params;
        console.log(nextProps)
        if(preState.travel_id !== travel_id){
            return {
                travel_id,
            };
        }
        return null;
    }
    async componentDidMount(){
      const spots = await axios.get('https://pic-me-back.herokuapp.com/api/travel/'+this.state.travel_id);
      
      this.setState({
        spotList: spots.data
      })
    }
    render(){
        return (
          <View style={styles.container}>
              <Header />
              <SpotList spotList={this.state.spotList}/>
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
  }
});
