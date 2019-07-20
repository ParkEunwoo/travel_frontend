import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
//https://docs.expo.io/versions/latest/sdk/imagepicker/


interface Props {
    title: string;
    navigation: any;
  }

interface State {}
  
export default class Header extends React.Component<Props, State>{
    state = {
        title: '',
        left_icon: require('./../../../assets/icons/back_blue.png'),
        right_icon: require('./../../../assets/icons/quit_blue.png')
    }
    componentDidMount(){
        let { title } = this.props;
        let left_icon, right_icon;
        if(title=='logo'){
            left_icon = require('./../../../assets/icons/list.png');
            right_icon = require('./../../../assets/icons/search.png');
        }
        this.setState({
            title, 
            left_icon, 
            right_icon
        });
    }
    render(){
        const {title, left_icon, right_icon} = this.state;
        return (
          <View style={[styles.container, title=='logo' && styles.main]}>
              <Image source={left_icon} style={styles.icon}/>
              {title=='logo' ?<Image source={require('./../../../assets/icon.png')} style={{width:20,height:20}}/> : <Text style={styles.text}>{title}</Text>}
              <Image source={right_icon} style={styles.icon}/>
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
    main: {
        backgroundColor: '#5966FF',
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
