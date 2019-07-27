import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import axios from 'axios';

interface Props {
    navigation: any;
  }

interface State {}
  
export default class ProfileInfo extends React.Component<Props, State>{
    state = {
        like: [],
        name: null,
    }
    static getDerivedStateFromProps(nextProps, preState){
        const {like, name} = nextProps;
        if(preState.name !== name || preState.like !== like){
            return {
                name,
                like
            };
        }
        return null;
    }
    render(){
        return (
            <View style={styles.container}>
                <Image source={require('./../../../assets/icons/mainprofile.png')} style={styles.profile} />
                <Text style={styles.name}>{this.state.name}</Text>
                <Image source={require('./../../../assets/icons/like_red.png')} style={styles.icon}/>
                <Text style={styles.like}>{this.state.like.length}</Text>
            </View>
        );
    }
  
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        marginHorizontal: 30,
    },
    profile: {
        width: 40,
        height: 40
    },
    name: {
        flex: 1,
        padding: 8,
        color: '#2C327E',
        fontSize: 15
    },
    like: {
        padding: 5,
        color: '#ED5369',
        fontSize: 14
    },
    icon: {
        width: 16,
        height: 16
    }
});
