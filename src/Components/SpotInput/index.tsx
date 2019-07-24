import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import SpotItem from './SpotItem';
import axios from 'axios';

interface Props {
    navigation: any;
  }

interface State {}
  
export default class SpotInput extends React.Component<Props, State>{
    render(){
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <SpotItem />
                <SpotItem />
                <SpotItem />
                <SpotItem />
            </ScrollView>
        );
    }
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
    },
});
