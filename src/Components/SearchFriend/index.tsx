import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Picker } from 'react-native';
import axios from 'axios';

interface Props {
    navigation: any;
  }

interface State {}
  
export default class SearchFriend extends React.Component<Props, State>{
    state = {
    };

    render(){
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Searchs"
                    style={styles.input}
                />
                <Image source={require('./../../../assets/icons/search_blue.png')} style={styles.icon}/>
            </View>
        );
    }
  
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        padding: 15,
        margin: 14,
        borderColor: '#ABB2FF',
        borderWidth: 1
    },
    input: {
        flex: 1,
        height: 20,
        color: '#5966FF',
        fontSize: 15
    },
    icon: {
        width: 20,
        height: 20
    }
});
