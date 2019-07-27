import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import SpotItem from './SpotItem';
import axios from 'axios';

interface Props {
    navigation: any;
  }

interface State {}
  
export default class SpotInput extends React.Component<Props, State>{
    state = {
        spotList: []
    }
    static getDerivedStateFromProps(nextProps, preState){
        const {spotList} = nextProps;
        console.log(spotList);
        if(preState.spotList !== spotList){
            return {
                spotList
            };
        }
        return null;
    }
    render(){
        const spots = this.state.spotList?this.state.spotList.map(value => 
            <SpotItem style={styles.spot} key={value._id} title={value.title} />
        ):null;
        return (
            <ScrollView style={styles.spotInput} showsVerticalScrollIndicator={false}>
                {spots&& spots}
            </ScrollView>
        );
    }
  
}

const styles = StyleSheet.create({
    spotInput: {
        flex: 1,
        alignSelf: 'stretch',
    },
    spot: {}
});
