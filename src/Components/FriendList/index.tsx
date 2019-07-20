import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import axios from 'axios';
import Friend from './Friend';

interface Props {
    navigation: any;
  }

interface State {}
  
export default class FriendList extends React.Component<Props, State>{
    render(){
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
            <Friend></Friend>
                <Friend></Friend>
                <Friend></Friend>
                <Friend></Friend>
                <Friend></Friend>
                <Friend></Friend>
                <Friend></Friend>
                <Friend></Friend>
                <Friend></Friend>
            </ScrollView>
        );
    }
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        paddingHorizontal: 20
    },
});
