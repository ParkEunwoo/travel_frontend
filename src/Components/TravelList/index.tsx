import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Image } from 'react-native';
import Travel from './Travel';
//https://docs.expo.io/versions/latest/sdk/imagepicker/


interface Props {
    navigation: any;
  }

interface State {}
  
export default class TravelList extends React.Component<Props, State>{
    state = {
    }
    render(){
        return (
            <View style={styles.container}>
            <Travel />
                <Travel />
                <Travel />
                <Travel />
                <Travel />
                <Travel />
                <Travel />
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
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        padding: 10,
    }
});
