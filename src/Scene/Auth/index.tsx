import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
//https://docs.expo.io/versions/latest/sdk/imagepicker/


interface Props {
    navigation: any;
  }

interface State {}
  
export default class Auth extends React.Component<Props, State>{
    state = {
    }
    render(){
        return (
            <LinearGradient colors={['#58A0FF', '#5966FF']} style={styles.container}>
                <Text>LOGO</Text>
                <TouchableOpacity onPress={this._next} style={styles.naverAuthBtn}>
                    <Text style={styles.naverAuthText}>네이버 아이디로 시작하기</Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
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
