import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Text, View, TextInput, Image, Picker } from 'react-native';
import Header from '../../Components/Header';
import UploadStatus from './../../Components/UploadStatus';
import BasicInput from './../../Components/BasicInput';
import Button from './../../Components/Button';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
//https://docs.expo.io/versions/latest/sdk/imagepicker/


interface Props {
    navigation: any;
  }

interface State {}
  
export default class Basic extends React.Component<Props, State>{
    state = {
      USER_ID: null,
      name: null,
      title: null,
      place: null,
      start_date: null,
      end_date: null,
      image: null,
      category: '휴식'
    }
    static getDerivedStateFromProps(nextProps, preState){
        const {USER_ID, name} = nextProps;
        if(preState.USER_ID !== USER_ID || preState.name !== name){
            return {
              USER_ID,
              name
            };
        }
        return null;
    }
    componentDidMount(){
        this.getPermissionAsync();
    }
    getPermissionAsync = async () => {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    }
    
  _pickImage = async () => {
    let image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      exif: true
    });

    if (!image.cancelled) {
        this.setState({
            image: image.uri
        });
    }
  };

    render(){
        return (
          <View style={styles.container}>
              <Header title="일지 업로드"/>
            <UploadStatus/>
            <View style={styles.wrapper}>
                <View style={styles.inputContainer}>
                    <Image source={require('./../../../assets/icons/pen_lightblue.png')} style={styles.icon}/>
                    <TextInput
                        placeholder="일지 제목"
                        style={styles.input}
                        onChangeText={(title) => this.setState({title})}
                        value={this.state.title}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image source={require('./../../../assets/icons/location_lightblue.png')} style={styles.icon}/>
                    <TextInput
                        placeholder="여행 지역"
                        style={styles.input}
                        onChangeText={(place) => this.setState({place})}
                        value={this.state.place}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image source={require('./../../../assets/icons/start_lightblue.png')} style={styles.icon}/>
                    <TextInput
                        placeholder="19-00-00"
                        style={styles.dateInput}
                        onChangeText={(start_date) => this.setState({start_date})}
                        value={this.state.start_date}
                    />
                    <Image source={require('./../../../assets/icons/end_lightblue.png')} style={styles.icon}/>
                    <TextInput
                        placeholder="19-00-00"
                        style={styles.dateInput}
                        onChangeText={(end_date) => this.setState({end_date})}
                        value={this.state.end_date}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image source={require('./../../../assets/icons/category_lightblue.png')} style={styles.icon}/>
                    <Picker
                        selectedValue={this.state.category}
                        style={styles.input}
                        onValueChange={(category) =>
                            this.setState({category})
                        }>
                        <Picker.Item label="휴식" value="휴식" />
                        <Picker.Item label="맛집" value="맛집" />
                    </Picker>
                </View>
            </View>
            <Button text="저장하기" action={this._storeData} />
          </View>
        );
    }
    
    _storeData = async () => {
        //axios 서버 통신
        const data = new FormData();
        const {profile, name, introduct, USER_ID } = this.state;
        const file = {
            uri: profile,
            type: 'image/'+profile.split('.').pop(),
            name: profile.split('/').pop().split('.')[0]
        }
        data.append('file', file);
        data.append('name', name);
        data.append('introduct', introduct);
        data.append('user_id', USER_ID);
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        const result = await axios.post('https://pic-me-back.herokuapp.com/api/user/profile', data, config);
        
        try {
            await AsyncStorage.multiSet([
                                        ['name', result.data.name],
                                        ['profile', result.data.profile.uri],
                                        ['introduct', result.data.introduct]]);
        } catch (error) {
            console.log(error);
            // Error saving data
        }
        this.props.navigation.navigate('Profile');
    };

    _storeData = async () => {
        //axios 서버 통신
        const data = new FormData();
        const {USER_ID, name, title, place, start_date, end_date, category, image} = this.state;
        const file = {
            uri: image,
            type: 'image/'+image.split('.').pop(),
            name: image.split('/').pop().split('.')[0]
        }
        data.append('file', file);
        data.append('name', name);
        data.append('title', title);
        data.append('user_id', USER_ID);
        data.append('title', title);
        data.append('place', place);
        data.append('start_date', start_date);
        data.append('end_date', end_date);
        data.append('category', category);
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        const result = await axios.post('https://pic-me-back.herokuapp.com/api/travel', data, config);
        
        this.props.navigation.navigate('Spot', {travel_id:result.data._id});
    };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  wrapper: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      alignSelf: 'stretch',
      paddingHorizontal: 30,
      justifyContent: 'center',
  },
  inputContainer: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      padding: 10,
      marginTop: 30,
      borderBottomColor: '#ABB2FF',
      borderBottomWidth: 1
  },
  input: {
      flex: 1,
      height: 20,
      paddingLeft: 10,
      color: '#5966FF',
      fontSize: 15
  },
  dateInput: {
      flex: 1,
      height: 20,
      paddingLeft: 10,
      color: '#5966FF',
      fontSize: 15
  },
  icon: {
      width: 20,
      height: 20
  }
});
