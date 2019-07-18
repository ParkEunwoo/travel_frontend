import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Image } from 'react-native';
//https://docs.expo.io/versions/latest/sdk/imagepicker/


interface Props {
    navigation: any;
  }

interface State {}
  
export default class Travel extends React.Component<Props, State>{
    state = {
    }
    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.category}><Text style={{color:'#5966FF'}}>동남아</Text></TouchableOpacity>
                <TouchableOpacity style={styles.category}><Text style={{color:'#5966FF'}}>중국</Text></TouchableOpacity>
                <TouchableOpacity style={styles.category}><Text style={{color:'#5966FF'}}>유럽</Text></TouchableOpacity>
                <TouchableOpacity style={styles.category}><Text style={{color:'#5966FF'}}>미국</Text></TouchableOpacity>
            </View>
        );
    }
    _back = () => {
        this.props.navigation.navigate('Auth');
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        padding: 10,
    },
    category: {
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: '#5966FF',
        borderRadius: 20
    }
});
