import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Header from '../../Components/Header';
import Button from '../../Components/Button';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthSession } from 'expo';
import axios from 'axios';


interface Props {
    navigation: any;
  }

interface State {}
  
export default class ProfileEdit extends React.Component<Props, State>{
    render(){
        return (
            <View style={styles.container}>
                <Header title="프로필 수정" />
                <View style={styles.wrapper}>
                    <Image source={require('./../../../assets/icons/mainprofile.png')} style={styles.profile} />
                    <View style={styles.inputContainer}>
                        <Image source={require('./../../../assets/icons/user_lightblue.png')} style={styles.icon}/>
                        <TextInput
                            placeholder="이름"
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Image source={require('./../../../assets/icons/Introduction_lightblue.png')} style={styles.icon}/>
                        <TextInput
                            placeholder="자기소개를 입력해주세요."
                            style={styles.input}
                        />
                    </View>
                </View>
                <Button text="저장하기" />
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
