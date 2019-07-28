import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, AsyncStorage } from 'react-native';
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
    state = {
        followers: null
    }
    async componentDidMount(){
        const user_id = await AsyncStorage.getItem('USER_ID');
        console.log('-------------------followlist-------------------')
        console.log(user_id);
        const result = await axios.get('https://pic-me-back.herokuapp.com/api/user/'+user_id+'/friends');

        console.log(result);
        this.setState({
            followers: result.data.friends
        });
        console.log("------------------------------------")
        console.log(this.state.followers);
    }
    render(){
        return (
            <View style={styles.container}>
                <Header />
                <SearchFriend />
                <FriendList followers={this.state.followers}/>
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
