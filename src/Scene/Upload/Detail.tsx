import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Text, View, TextInput, Image, AsyncStorage } from 'react-native';
import Header from '../../Components/Header';
import UploadStatus from './../../Components/UploadStatus';
import PictureList from './../../Components/PictureList';
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
  
export default class Detail extends React.Component<Props, State>{
    state = {
      title:'',
      user_id:null,
      travel_id: null,
      day:null,
      images:[],
      latitude:null,
      longitude: null,
      time:null,
      content: null
    }
    async componentDidMount(){
      const user_id = await AsyncStorage.getItem('USER_ID');
      const {title, travel_id} = this.props.navigation.state.params;
      
      this.setState({
        title,
        travel_id,
        user_id
      })
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
    console.log(image);
    if (!image.cancelled) {
      this.setState({
        images: [
          ...this.state.images,
          image.uri
        ]
      });
      if(image.exif && !this.state.time){
        const time = image.exif.DateTime;
        this.setState({
          time
        });
      }
      if(image.exif.GPSLatitude && !this.state.latitude){
        this.setState({
          latitude: image.exif.GPSLatitude,
          longitude: image.exif.GPSLongitude
        })
      }
      console.log(this.state);
    }
  };
    render(){
        return (
          <View style={styles.container}>
              <Header title="일지 업로드" />
            <UploadStatus/>
            <View style={styles.wrapper} >
              <PictureList images={this.state.images}/>
            <View style={styles.detailInput}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addButton} onPress={this._pickImage}>
                    <Text style={styles.add}>사진 추가</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.deleteButton}>
                    <Text style={styles.delete}>사진 삭제</Text>
                  </TouchableOpacity>
              </View>
                <View style={styles.inputContainer}>
                    <Image source={require('./../../../assets/icons/location_lightblue.png')} style={styles.icon}/>
                    <TextInput
                        placeholder="장소를 입력해주세요."
                        style={styles.input}
                        value={this.state.title}
                        onChangeText={(title) => this.setState({title})}
                    />
                    <Image source={require('./../../../assets/icons/pen_gray.png')} style={styles.icon}/>
                </View>
                <View style={styles.inputContainer}>
                    <Image source={require('./../../../assets/icons/calendar_lightblue.png')} style={styles.icon}/>
                    <TextInput
                        placeholder="19-00-00"
                        style={styles.input}
                        value={this.state.time}
                        onChangeText={(day) => this.setState({day})}
                    />
                    <Image source={require('./../../../assets/icons/pen_gray.png')} style={styles.icon}/>
                </View>
                <View style={styles.textContainer}>
                    <TextInput
                        placeholder="텍스트를 입력해주세요."
                        style={styles.textInput}
                        multiline={true}
                        textAlignVertical={"top"}
                        value={this.state.content}
                        onChangeText={(content) => this.setState({content})}
                    />
                </View>
            </View>
            </View>
            <Button text="저장하기" action={()=>{
              this._storeData();
              this.props.navigation.navigate('Profile', {owner:this.state.user_id})}} />
          </View>
        );
    }
    
    _storeData = async () => {
      //axios 서버 통신
      const data = new FormData();
      const {travel_id, user_id, title, content, time, latitude, longitude, images} = this.state;
      images.forEach((value) => {
        const files = {
            uri: value,
            type: 'image/'+value.split('.').pop(),
            name: value.split('/').pop().split('.')[0]
        }
        data.append('files', files);
      })
      data.append('title', title);
      data.append('user_id', user_id);
      data.append('time', time);
      data.append('latitude', latitude);
      data.append('longitude', longitude);
      data.append('content', content);
      console.log('data', data);
      const config = {
          headers: { 'content-type': 'multipart/form-data' }
      }
      const result = await axios.post('https://pic-me-back.herokuapp.com/api/travel/spot/'+travel_id, data, config);
      
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
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  detailInput: {
      flex: 3,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      marginVertical: 50
  },
  inputContainer: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      padding: 10,
      marginTop: 8,
  },
  textContainer: {
      marginTop: 8,
      flex: 1,
      alignSelf: 'stretch',
  },
  input: {
      flex: 1,
      height: 20,
      paddingLeft: 10,
      color: '#5966FF',
      fontSize: 15
  },
  icon: {
      width: 20,
      height: 20
  },
  text: {
      flex: 1,
      height: 20,
      paddingLeft: 10,
      fontSize: 15,
      color: "#ABB2FF"
  },
  textInput: {
      flex: 1,
      height: 20,
      paddingLeft: 10,
      paddingTop: 10,
      fontSize: 15,
      color: "#DADADA",
      borderWidth: 1,
      borderColor: "#ABB2FF",
  },
  buttonContainer: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      marginTop: 8,
  },
  addButton: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#5966FF',
    marginHorizontal: 10
  },
  add: {
    color: '#5966FF',
    fontSize: 10
  },
  deleteButton: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: '#ED5369',
    borderColor: '#ED5369',
    marginHorizontal: 10
  },
  delete: {
    color: 'white',
    fontSize: 10
  }
});
