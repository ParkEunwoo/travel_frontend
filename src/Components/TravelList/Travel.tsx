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
                <View style={styles.userInfo}>
                    <Image source={require('./../../../assets/icons/star_blue.png')} style={styles.profile} />
                    <Text style={styles.name}>Username</Text>
                    <Text style={styles.time}>1h ago</Text>
                </View>
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
        justifyContent: 'center'
    },
    userInfo: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 1
    },
    profile: {
        width: 30,
        height: 30,
        borderRadius: 50,
        margin: 10
    },
    name: {
        fontSize: 14,
        color: '#2c327e'
    },
    time: {
        marginLeft: 'auto',
        fontSize: 14,
        color: "#8e8e8e"
    }
});
