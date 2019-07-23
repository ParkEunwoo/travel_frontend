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
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>오사카 도톤보리</Text>
                <Image source={require('./../../../assets/icons/pen_gray.png')} style={styles.edit} />
            </TouchableOpacity>
        );
    }
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf:'stretch',
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: "#ABB2FF",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 14,
        paddingHorizontal: 20,
        alignItems: 'center',
        borderRadius: 2
    },
    text: {
        color: '#5966FF',
        fontSize: 18
    },
    edit: {
        width: 20,
        height: 20
    }
});
