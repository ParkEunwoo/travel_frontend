import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
//https://docs.expo.io/versions/latest/sdk/imagepicker/


interface Props {
    navigation: any;
  }

interface State {}
  
export default class PictureLocation extends React.Component<Props, State>{
    state = {
    }
    render(){
        return (
          <View style={styles.container}>
              <View style={styles.icon}></View>
              <Text style={styles.text}>오사카 도톤보리</Text>
              <Image source={require('./../../../assets/icons/pen_gray.png')} style={styles.icon}></Image>
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
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginVertical: 30
    },
    text: {
        color: '#5966FF',
        fontSize: 19,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    icon: {
        width: 16,
        height: 16,
        marginRight: 30
    }
});
