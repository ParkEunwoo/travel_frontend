import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
//https://docs.expo.io/versions/latest/sdk/imagepicker/


interface Props {
    title: string;
    left_icon: string;
    right_icon: string;
    navigation: any;
  }

interface State {}
  
export default class Header extends React.Component<Props, State>{
    state = {
        title: '',
        left_icon: './../../../assets/icons/back_blue.png',
        right_icon: './../../../assets/icons/quit_blue.png'
    }
    render(){
        const {title, left_icon, right_icon} = this.state;
        return (
          <View style={styles.container}>
              <Image source={require('./../../../assets/icons/back_blue.png')} style={styles.icon}/>
              <Text style={styles.text}>{title}</Text>
              <Image source={require('./../../../assets/icons/quit_blue.png')} style={styles.icon}/>
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
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingTop: 50,
        paddingBottom: 30
    },
    icon: {
        width: 20,
        height: 20,
        marginHorizontal: 20
    },
    text: {
        color: '#5966FF',
        fontSize: 16
    }
});
