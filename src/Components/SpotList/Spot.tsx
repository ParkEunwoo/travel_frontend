import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import axios from 'axios';

interface Props {
    navigation: any;
  }

interface State {}
  
export default class Spot extends React.Component<Props, State>{
    render(){
        return (
            <View style={styles.container}>
                <Image source={require('./../../../assets/travel.jpg')} style={styles.picture} />
                <View style={styles.wrapper}>
                    <Text style={styles.title}>오사카 도톤보리</Text>
                    <Text style={styles.date}>2019/03/22</Text>
                    <Text style={styles.content}>엄ㄹ니ㅏㅓㅇ리ㅏㅁ너ㅣ;ㅏ얾니;ㅓ</Text>
                </View>
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
    wrapper: {
        backgroundColor: 'gray',
        padding: 20
    },
    title: {
        color: 'white',
        fontSize: 19,
    },
    date: {
        color: 'white',
        fontSize: 15,
        marginVertical: 10

    },
    content: {
        borderTopWidth: 0.5,
        borderTopColor: 'white',
        paddingTop: 10,
        color: 'white',
        fontSize: 15,

    }
});
