import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
//https://docs.expo.io/versions/latest/sdk/imagepicker/


interface Props {
    navigation: any;
  }

interface State {}
  
export default class Header extends React.Component<Props, State>{
    state = {
    }
    render(){
        return (
          <View style={styles.container}>
              <Image source={require('./../../../assets/icons/list.png')} style={styles.icon}/>
              <Text style={styles.text}>일지 업로드</Text>
              <Image source={require('./../../../assets/icons/search.png')} style={styles.icon}/>
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
        color: '#5966FF'
    }
});
