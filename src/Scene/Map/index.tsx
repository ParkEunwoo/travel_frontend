import React, {Fragment} from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Text, View, TextInput, Button, Image } from 'react-native';
import Header from '../../Components/Header';
import ProfileInfo from './../../Components/ProfileInfo';
import TravelInfo from './../../Components/TravelInfo';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
//https://docs.expo.io/versions/latest/sdk/imagepicker/


interface Props {
    navigation: any;
  }

interface State {}
  
export default class Map extends React.Component<Props, State>{
    state = {
      travel_id: '',
      name: '',
      like: [],
      start_date: '',
      end_date: '',
      title: ''
    }
    static getDerivedStateFromProps(nextProps, preState){
        const {travel_id, name, like, start_date, end_date, title} = nextProps.navigation.state.params;
        console.log(nextProps)
        if(preState.travel_id !== travel_id || preState.name !== name || preState.like !== like || preState.start_date !== start_date || preState.end_date !== end_date || preState.title !== title){
            return {
                travel_id,
                name,
                like,
                start_date,
                end_date,
                title
            };
        }
        return null;
    }
    render(){
        return (
          <Fragment>
            <MapView 
            style={{flex:1}}
              initialRegion={
                {
                  latitude:37.583176,
                  longitude:126.943280,
                  latitudeDelta: 0.04,
                  longitudeDelta: 0.04
                }
              }>
                <Marker
                  coordinate={{
                    latitude:37.583176,
                    longitude:126.943280,
                  }}
                />
            </MapView>
              <View style={styles.container}>
                <Header title=''/>
                  <View style={styles.wrapper}>
                      <ProfileInfo name={this.state.name} like={this.state.like} />
                      <TravelInfo travel_id={this.state.travel_id} title={this.state.title} start_date={this.state.start_date} end_date={this.state.end_date} />
                  </View>
              </View>
          </Fragment>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  head: {
    borderWidth: 1
  },
  wrapper: {
      flex: 1,
      alignSelf: 'stretch',
      justifyContent: 'space-between',
      paddingTop: 10
  }
});
