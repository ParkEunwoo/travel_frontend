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
                <View style={styles.wrapper}>
                    <TextInput style={styles.input} placeholder="장소를 입력해주세요."></TextInput>
                    <Image source={require('./../../../assets/icons/quit_blue.png')} style={styles.icon} />
                </View>
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
    wrapper: {
        borderWidth: 1,
        borderColor: "#5966FF",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 20,
        marginTop: 30,
        paddingVertical: 10,
        borderRadius: 2
    },
    input: {
        color: "#5966FF",
        fontSize: 16
    },
    icon: {
        width: 20,
        height: 20
    }
});
