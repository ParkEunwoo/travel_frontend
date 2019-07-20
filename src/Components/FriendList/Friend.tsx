import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import axios from 'axios';

interface Props {
    navigation: any;
  }

interface State {}
  
export default class Friend extends React.Component<Props, State>{
    render(){
        return (
            <View style={styles.container}>
                <Image source={require('./../../../assets/icons/mainprofile.png')} style={styles.profile} />
                <View style={styles.wrapper}>
                    <Text style={styles.name}>이름</Text>
                    <Text style={styles.introduct}>자기소개</Text>
                </View>
            </View>
        );
    }
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F8F8F9',
        alignSelf: 'stretch',
        marginVertical: 3,
        paddingVertical: 16,
        paddingLeft: 30
    },
    profile: {
        width: 50,
        height: 50
    },
    wrapper: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    name: {
        color: '#2C327E',
        fontSize: 15
    },
    introduct: {
        color: '#8E8E8E',
        fontSize: 12
    }
});
