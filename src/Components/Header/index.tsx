import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableHighlight, AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';
//https://docs.expo.io/versions/latest/sdk/imagepicker/


interface Props {
    title: string;
    navigation: any;
  }

interface State {}
  
class Header extends React.Component<Props, State>{
    state = {
        title: '',
        left_icon: null,
        right_icon: null,
        USER_ID: null
    }
    async componentDidMount(){
        const value = await AsyncStorage.getItem('USER_ID');
        if (value !== null) {
        // We have data!!
            console.log(value);
            this.setState({
                USER_ID : value
            })
        }
        let { title } = this.props;
        let left_icon = require('./../../../assets/icons/back_blue.png');
        let right_icon = require('./../../../assets/icons/quit_blue.png');

        if(title=='logo'){
            left_icon = require('./../../../assets/icons/myprofile_blue.png');
            right_icon = require('./../../../assets/icons/search_blue.png');
        }
        else if(title=='마이페이지'){
            left_icon = require('./../../../assets/icons/list_blue.png');
            right_icon = require('./../../../assets/icons/edit.png');
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
          <View style={[styles.container, title==''&&styles.back]}>
              <TouchableHighlight onPress={this._leftWork} ><Image source={left_icon} style={styles.icon}/></TouchableHighlight>
              {title=='logo' ?<Image source={require('./../../../assets/logo_blue.png')} style={{width:100,height:20}}/> : <Text style={styles.text}>{title}</Text>}
              <TouchableHighlight onPress={this._rightWork} ><Image source={right_icon} style={styles.icon}/></TouchableHighlight>
          </View>
        );
    }
    _leftWork = () => {
        if(this.state.title=='logo'){
            this.props.navigation.navigate('Profile', {owner:this.state.USER_ID});
        }
        else {
            this.props.navigation.navigate('Main');
        }
    }
    _rightWork = () => {
        if(this.state.title=='logo'){
            
        }
        else if(this.state.title=='마이페이지'){
            this.props.navigation.navigate('ProfileEdit');
        }
        else {
            this.props.navigation.navigate('Main');
        }
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
    back: {
        backgroundColor: 'white'
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

export default withNavigation(Header);