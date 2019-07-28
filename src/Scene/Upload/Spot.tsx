import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Text, View, TextInput, Image } from 'react-native';
import Header from '../../Components/Header';
import UploadStatus from '../../Components/UploadStatus';
import SpotInput from '../../Components/SpotInput';
import Button from '../../Components/Button';
import axios from 'axios';
//https://docs.expo.io/versions/latest/sdk/imagepicker/


interface Props {
    navigation: any;
    travel_id: string;
  }

interface State {}
  
export default class Spot extends React.Component<Props, State>{
    state = {
      spotList: null,
      title: '',
      travel_id: null
    }
    async componentDidMount(){
      const {travel_id} = this.props.navigation.state.params;
      console.log("*****************Spot*************************");
      console.log('travel_id',travel_id);
      const result = await axios.get('https://pic-me-back.herokuapp.com/api/travel/'+travel_id);
      console.log("*******************************************")
      console.log(result.data);
      this.setState({
        spotList:result.data,
        travel_id
      })
    }
    render(){
        return (
          <View style={styles.container}>
              <Header title="일지 업로드" />
            <UploadStatus/>
                <View style={styles.wrapper}>
                    <TextInput style={styles.input} placeholder="장소를 입력해주세요." 
                    onChangeText={(title) => this.setState({title})}></TextInput>
                    <Image source={require('./../../../assets/icons/quit_blue.png')} style={styles.icon} />
                </View>
            <SpotInput spotList={this.state.spotList}/>
            <Button text="다음" action={()=>this.props.navigation.navigate('Detail', {title: this.state.title, travel_id: this.state.travel_id})} />
          </View>
        );
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
      borderWidth: 1,
      borderColor: "#5966FF",
      flexDirection: 'row',
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: 20,
      marginVertical: 10,
      paddingHorizontal: 20,
      marginTop: 30,
      paddingVertical: 10,
      borderRadius: 2
  },
  input: {
      color: "#5966FF",
      fontSize: 16
  },
  icon: {
      width: 20,
      height: 20
  }
});
