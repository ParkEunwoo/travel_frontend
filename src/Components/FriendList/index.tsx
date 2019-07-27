import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import axios from 'axios';
import Friend from './Friend';

interface Props {
    navigation: any;
  }

interface State {}
  
export default class FriendList extends React.Component<Props, State>{
    state = {
        followers: []
    }
    static getDerivedStateFromProps(nextProps, preState){
        const {followers} = nextProps;
        if(preState.followers !== followers){
            return {
                followers
            };
        }
        return null;
    }
    render(){
        const friends = this.followers?this.state.followers.map(value=><Friend key={value._id} name={value.name} profile={value.profile.uri} introduct={value.introduct} />)
        :null;
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
                {friends&&friends}
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
