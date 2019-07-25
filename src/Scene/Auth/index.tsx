import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthSession } from 'expo';
import axios from 'axios';
//https://docs.expo.io/versions/latest/sdk/imagepicker/
const NV_APP_ID = '1gPlAVzR2876G7EwPnBQ';
const NV_APP_SECRET = 'QiGSFar9Qa';
const STATE_STRING = 'sfdjlweioj312esdf';


interface Props {
    navigation: any;
  }

interface State {}
  
export default class Auth extends React.Component<Props, State>{
    state = {
        result: null,
        token: null,
        info: null
    };
    componentDidMount(){
        axios.get('https://pic-me-back.herokuapp.com/');
    }
    render(){
        return (
            <LinearGradient colors={['#58A0FF', '#5966FF']} style={styles.container}>
                <Image source={require('./../../../assets/logo_white.png')} style={styles.logo}/>
                <TouchableOpacity onPress={this._handlePressAsync} style={styles.naverAuthBtn}>
                    <Image source={require('./../../../assets/icons/naverlogo.png')} style={styles.icon}/>
                    <Text style={styles.naverAuthText}>네이버 아이디로 시작하기</Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
  
    _handlePressAsync = async () => {
        let redirectUrl = AuthSession.getRedirectUrl();
        console.log(redirectUrl);
        console.log(encodeURIComponent(redirectUrl));
        let result = await AuthSession.startAsync({
            authUrl: `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NV_APP_ID}&redirect_uri=${encodeURIComponent(redirectUrl)}&state=${STATE_STRING}`,
          });
        this.setState({ result });
        console.log('result', result);
        this._handleGetAccess();
    };
    _handleGetAccess = async () => {
          let result = await axios.get(`https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${NV_APP_ID}&client_secret=${NV_APP_SECRET}&code=${this.state.result.params.code}&state=${STATE_STRING}`);
          let data = result.data;
          console.log(data);
          this.setState({token:data});
          const config = {
              headers: {
                  'Authorization': `Bearer ${data.access_token}`
              }
          }
          
          result = await axios.get('https://openapi.naver.com/v1/nid/me', config);
          data = result.data;
          this.setState({info:data});
          console.log(this.state.info);
          this._registProfile();
      };
    _registProfile = () => {
        const {token, info} = this.state;
        this.props.navigation.navigate('Register', {token: token.access_token, name: info.response.name, profile:info.response.profile_image});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    naverAuthBtn: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        borderColor: '#fff',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 1,
        paddingVertical: 10,
        width: 300
    },
    naverAuthText: {
        color: '#fff',
        textAlign: "center",
        fontSize: 15,
        marginLeft: 10,
    },
    icon: {
        width: 20,
        height: 20,
    },
    logo: {
        height: 40, 
        width: 180,
        marginBottom: 100
    }
});
