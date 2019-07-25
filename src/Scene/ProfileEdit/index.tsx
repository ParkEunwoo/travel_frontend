import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import Header from '../../Components/Header';
import Button from '../../Components/Button';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthSession } from 'expo';
import axios from 'axios';


interface Props {
    navigation: any;
  }

interface State {}
  
export default class ProfileEdit extends React.Component<Props, State>{
    state = {
        USER_ID:null,
        name:null,
        profile:null,
        introduct:null
    }
    componentDidMount(){
        AsyncStorage.multiGet(['USER_ID', 'name', 'profile', 'introduct'], (err, stores) => {
            stores.map((result, i, store) => {
                // get at each store's key/value so you can work with it
                let key = store[i][0];
                let value = store[i][1];
                this.setState({
                    [key]: value
                })
            });
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

    render(){
        return (
            <View style={styles.container}>
                <Header title="프로필 수정" />
                <View style={styles.wrapper}>
                    <TouchableOpacity onPress={this._pickImage}>
                        <Image source={{uri:this.state.profile}} style={styles.profile} />
                    </TouchableOpacity>
                    <View style={styles.inputContainer}>
                        <Image source={require('./../../../assets/icons/user_lightblue.png')} style={styles.icon}/>
                        <TextInput
                            placeholder="이름"
                            style={styles.input}
                            value={this.state.name}
                            onChangeText={(name) => this.setState({name})}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Image source={require('./../../../assets/icons/Introduction_lightblue.png')} style={styles.icon}/>
                        <TextInput
                            placeholder="자기소개를 입력해주세요."
                            style={styles.input}
                            value={this.state.introduct}
                            onChangeText={(introduct) => this.setState({introduct})}
                        />
                    </View>
                </View>
                <Button text="저장하기" action={this._storeData}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6F7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profile: {
        borderRadius: 50,
        width: 60,
        height: 60,
        marginBottom: 10
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: 300,
        padding: 10,
        marginTop: 30,
        borderBottomColor: '#5966FF',
        borderBottomWidth: 1
    },
    input: {
        width: 260,
        height: 20,
        paddingLeft: 10,
        color: '#5966FF'
    },
    icon: {
        width: 20,
        height: 20
    }
});
