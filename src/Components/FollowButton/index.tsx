import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Picker } from 'react-native';
import axios from 'axios';

interface Props {
    navigation: any;
  }

interface State {}
  
export default class FollowButton extends React.Component<Props, State>{
    state = {
    };

    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>FOLLOW</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.un]}>
                    <Text style={[styles.text, styles.un]}>UNFOLLOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
  
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 40
    },
    button: {
        backgroundColor: '#5966FF',
        borderColor: '#5966FF',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 6,
        width: 100,
        marginHorizontal: 10
    },
    un: {
        backgroundColor: 'white',
        color: '#5966FF'
    },
    text: {
        color: 'white',
        textAlign: "center",
        fontSize: 15
    }
});
