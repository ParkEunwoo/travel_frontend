import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import PictureItem from './PictureItem';
import axios from 'axios';

interface Props {
    navigation: any;
  }

interface State {}
  
export default class PictureInput extends React.Component<Props, State>{
    render(){
        return (
            <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            <PictureItem />
                <PictureItem />
                <PictureItem />
                <PictureItem />
            </ScrollView>
        );
    }
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
