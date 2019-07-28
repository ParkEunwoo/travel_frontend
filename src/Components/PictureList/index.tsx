import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import axios from 'axios';

interface Props {
    navigation: any;
  }

interface State {}
  
export default class PictureList extends React.Component<Props, State>{
    state = {
        images: []
    }
    static getDerivedStateFromProps(nextProps, preState){
        const {images} = nextProps;
        
        if(preState.images !== images){
            return {
                images
            };
        }
        return null;
    }
    render(){
        const images = this.state.images.map((value, key)=>
                <Image source={{uri:value}} key={key} style={{width:100,height:100}}/>)
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
                {images && images}
            </ScrollView>
        );
    }
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
