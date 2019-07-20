import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Header from '../../Components/Header';
import SearchFriend from '../../Components/SearchFriend';
import FriendList from '../../Components/FriendList';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthSession } from 'expo';
import axios from 'axios';


interface Props {
    navigation: any;
  }

interface State {}
  
export default class FollowList extends React.Component<Props, State>{
    render(){
        return (
            <View style={styles.container}>
                <Header />
                <SearchFriend />
                <FriendList />
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
});
