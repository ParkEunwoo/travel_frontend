import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {ImagePicker, Permissions, Constants} from 'expo';
import axios from 'axios';


interface Props {
    navigation: any;
  }

interface State {}
  
export default class Register extends React.Component<Props, State>{
    state = {
        token: '',
        name:'',
        profile: null,
        introduct: '',
        image: null
    };
    componentDidMount(){
        const { token, name, profile } = this.props.navigation.state.params;
        this.setState({
            token, name, profile
        });
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
            image,
            profile: image.uri
        });
    }
  };

    render(){
        return (
            <LinearGradient colors={['#58A0FF', '#5966FF']} style={styles.container}>

                <TouchableOpacity onPress={this._pickImage}>
                    <Image source={{uri:this.state.profile}} style={styles.profile} />
                </TouchableOpacity>
                <View style={styles.inputContainer}>
                    <Image source={require('./../../../assets/icons/user.png')} style={styles.icon}/>
                    <TextInput
                        placeholder="이름"
                        style={styles.input}
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image source={require('./../../../assets/icons/Introduction.png')} style={styles.icon}/>
                    <TextInput
                        placeholder="자기소개를 입력해주세요."
                        style={styles.input}
                        onChangeText={(introduct) => this.setState({introduct})}
                        value={this.state.introduct}
                    />
                </View>
                <TouchableOpacity onPress={this._storeData} style={styles.naverAuthBtn}><Text style={styles.naverAuthText}>시작하기</Text></TouchableOpacity>
            </LinearGradient>
        );
    }
  
    _storeData = async () => {
        //axios 서버 통신
        const data = new FormData();
        const {profile, token, name, introduct } = this.state;
        const file = {
            uri: profile,
            type: 'image/'+profile.split('.').pop(),
            name: profile.split('/').pop().split('.')[0]
        }
        data.append('file', file);
        data.append('token', token);
        data.append('name', name);
        data.append('introduct', introduct);
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        const result = await axios.post('https://pic-me-back.herokuapp.com/api/user/auth/signup', data, config);
        
        try {
            await AsyncStorage.setItem('USER_ID', result.data._id);
          } catch (error) {
              console.log(error);
            // Error saving data
          }
        this.props.navigation.navigate('Main');
    };
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    naverAuthBtn: {
        backgroundColor: 'transparent',
        borderColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 40,
        paddingVertical: 10,
        width: 300
    },
    naverAuthText: {
        color: '#fff',
        textAlign: "center"
    },
    profile: {
        borderRadius: 50,
        width: 60,
        height: 60,
        marginBottom: 10
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: 300,
        padding: 10,
        marginTop: 30,
        borderBottomColor: 'white',
        borderBottomWidth: 1
    },
    input: {
        width: 260,
        height: 20,
        paddingLeft: 10,
        color: 'white'
    },
    icon: {
        width: 20,
        height: 20
    }
});
