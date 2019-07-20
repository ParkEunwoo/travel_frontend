import React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, TextInput, Button, Image } from 'react-native';
import Spot from './Spot';
//https://docs.expo.io/versions/latest/sdk/imagepicker/


interface Props {
    navigation: any;
  }

interface State {}
  
export default class SpotList extends React.Component<Props, State>{
    state = {
    }
    render(){
        return (
            <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            <Spot />
              <Spot />
              <Spot />
              <Spot />
              <Spot />
            </ScrollView>
        );
    }
    _back = () => {
        this.props.navigation.navigate('Auth');
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
});
