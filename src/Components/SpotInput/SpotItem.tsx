import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import axios from 'axios';

interface Props {
    navigation: any;
  }

interface State {}
  
export default class SpotItem extends React.Component<Props, State>{
    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('./../../../assets/icons/upload.png')} style={styles.plus} />
                </TouchableOpacity>
            </View>
        );
    }
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf:'stretch',
        margin: 10,
    },
    picture: {
        width: 350,
        height: 350
    },
    button: {
        backgroundColor: "#B3B3B3",
        borderRadius: 50,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 125,
        top: 125,
    },
    star: {
        width: 20,
        height: 20,
        position: 'absolute',
        left: 10,
        top: 10
    },
    plus: {
        width: 50,
        height: 50
    }
});
