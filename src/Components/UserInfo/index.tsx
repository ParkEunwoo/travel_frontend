import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

interface Props {
    navigation: any;
    name: string;
    profile: string;
    introduct: string;
  }

interface State {}
  
export default class UserInfo extends React.Component<Props, State>{
    state = {
        profile: null,
        name: null,
        introduct: null
    }
    static getDerivedStateFromProps(nextProps, preState){
        const {introduct, name, profile} = nextProps;
        if(preState.introduct !== introduct || preState.name !== name || preState.profile !== profile){
            return {
                name,
                profile,
                introduct
            };
        }
        return null;
    }
     
    render(){
        const {profile, name, introduct} = this.state;
        return (
            <View style={styles.container}>
                <Image source={{uri:profile}} style={styles.profile} />
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.introduct}>{introduct}</Text>
            </View>
        );
    }
  
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        paddingVertical: 16,
        alignItems: 'center',
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 50
    },
    name: {
        color: '#2C327E',
        fontSize: 20,
        marginVertical: 10
    },
    introduct: {
        color: '#8E8E8E',
        fontSize: 12
    }
});
