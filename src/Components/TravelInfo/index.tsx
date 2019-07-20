import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import axios from 'axios';

interface Props {
    navigation: any;
  }

interface State {}
  
export default class TravelInfo extends React.Component<Props, State>{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>오사카 3박 4일 먹방투어</Text>
                    <Text style={styles.range}>19/03/22 ~ 19/03/25</Text>
                </View>
                <View style={styles.button}>
                    <Image source={require('./../../../assets/icons/start_lightblue.png')} style={styles.icon} />
                </View>
            </View>
        );
    }
  
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#F8F8F9',
        alignSelf: 'stretch',
        margin: 25,
        padding: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 1,
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#5966FF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 20,
        height: 20
    },
    wrapper: {
        marginLeft: 10,
        justifyContent: 'center',
        flex: 1,
    },
    title: {
        color: '#5966FF',
        fontSize: 19,
        marginBottom: 10
    },
    range: {
        color: '#8E8E8E',
        fontSize: 15
    }
});
