import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
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
  
export default class Register extends React.Component<Props, State>{
    state = {
        token: '',
        name:'',
        profile: '',
        introduct: ''
    };
    componentDidMount(){
        const { token, name, profile } = this.props.navigation.state.params;
        this.setState({
            token, name, profile
        });
    }
    render(){
        return (
            <LinearGradient colors={['#58A0FF', '#5966FF']} style={styles.container}>
                <Text>LOGO</Text>
                <TouchableOpacity onPress={this._handlePressAsync} style={styles.naverAuthBtn}>
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
        console.log(result);
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
          this._next();
      };
    _next = () => {
        this.props.navigation.navigate('Main');
    }
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
        paddingVertical: 10,
        paddingHorizontal: 80
    },
    naverAuthText: {
        color: '#fff',

    }
});
