import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import axios from 'axios';

interface Props {
    navigation: any;
  }

interface State {}
  
export default class PictureList extends React.Component<Props, State>{
    render(){
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
            <Image source={require('./../../../assets/travel.jpg')} ></Image>
                <Image source={require('./../../../assets/travel.jpg')} ></Image>
                <Image source={require('./../../../assets/travel.jpg')} ></Image>
                <Image source={require('./../../../assets/travel.jpg')} ></Image>
                <Image source={require('./../../../assets/travel.jpg')} ></Image>
            </ScrollView>
        );
    }
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
