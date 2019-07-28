import React, {Fragment} from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Text, View, TextInput, Button, Image } from 'react-native';
import Header from '../../Components/Header';
import ProfileInfo from './../../Components/ProfileInfo';
import TravelInfo from './../../Components/TravelInfo';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import axios from 'axios';
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
      title: '',
      tourlist: [],
      spotlist: [],
      region: {
        latitude:37.583176,
        longitude:126.943280,
        latitudeDelta: 0.4,
        longitudeDelta: 0.4
      }
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
    async componentDidMount(){
      const spots = await axios.get('https://pic-me-back.herokuapp.com/api/travel/'+this.state.travel_id);
      const region = spots.data.reduce((acc, cur)=>{
        acc.latitude+=cur.latitude;
        acc.longitude+=cur.longitude;
        return acc;
      }, {latitude:0,longitude:0,latitudeDelta:0,longitudeDelta:0});
      region.latitude /= spots.data.length;
      region.longitude /= spots.data.length;
      spots.data.forEach(value=>{
        region.latitudeDelta = Math.max(Math.abs(region.latitude - value.latitude), region.latitudeDelta);
        region.longitudeDelta = Math.max(Math.abs(region.longitude - value.longitude), region.longitudeDelta);
      });
      region.latitudeDelta = region.latitudeDelta*2 + 0.04;
      region.longitudeDelta = region.longitudeDelta*2 + 0.04;
      const result = await axios.get(`https://pic-me-back.herokuapp.com/api/travel/tourist/spot/${region.latitude}/${region.longitude}/${region.latitudeDelta}/${region.longitudeDelta}`);
      this.setState({
        spotlist:spots.data,
        tourlist:result.data,
        region
      });
    }
    render(){
      const spotlist = this.state.spotlist.map((value, index)=> <Marker
                    key={index+value._id}
                    coordinate={{
                      latitude:value.latitude,
                      longitude:value.longitude
                    }}
                    title={value.title}
                    pinColor='#58A0FF'
                    />);
                    console.log(spotlist)
      const tourlist = this.state.tourlist.map((value, index) => <Marker 
                    key={index}
                    coordinate={{
                      latitude:value.latitude,
                      longitude:value.longitude
                    }}
                    title={value.name}
                    description={value.phone}
                    />);
        return (
          <Fragment>
            <MapView 
            style={{flex:1}}
              region={this.state.region}>
                {tourlist&&tourlist}
                {spotlist&&spotlist}
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
