import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import axios from 'axios';

interface Props {
    navigation: any;
  }

interface State {}
  
export default class UserInfo extends React.Component<Props, State>{
    render(){
        return (
            <View style={styles.container}>
                <Image source={require('./../../../assets/icons/mainprofile.png')} style={styles.profile} />
                <Text style={styles.name}>이름</Text>
                <Text style={styles.introduct}>자기소개</Text>
            </View>
        );
    }
  
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        paddingVertical: 16,
        alignItems: 'center',
    },
    profile: {
        width: 50,
        height: 50
    },
    name: {
        color: '#2C327E',
        fontSize: 20,
        marginVertical: 8
    },
    introduct: {
        color: '#8E8E8E',
        fontSize: 12
    }
});
