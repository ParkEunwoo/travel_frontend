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
        spotList:[]
    }
    static getDerivedStateFromProps(nextProps, preState){
        const {spotList} = nextProps;
        if(preState.spotList !== spotList){
            return {
                spotList
            };
        }
        return null;
    }
    render(){
        const spots = this.state.spotList.map((value, index) => <Spot
        key={index} title={value.title} time={value.time} content={value.content} images={value.images}
        />);
        return (
            <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
                {spots&&spots}
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
