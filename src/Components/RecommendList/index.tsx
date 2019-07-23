import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import Swiper from 'react-native-swiper';

//https://docs.expo.io/versions/latest/sdk/imagepicker/


interface Props {
    navigation: any;
    name: string;
  }

interface State {}
  
export default class RecommendList extends React.Component<Props, State>{
    state = {
        name: null
    }
    
    static getDerivedStateFromProps(nextProps, preState){
        const {name} = nextProps;
        if(preState.name !== name){
            return {
                name
            };
        }
        return null;
    }
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.name}님,</Text>
                <Text style={styles.text}>이런 여행지는 어떠신가요?</Text>
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
        justifyContent: 'center',
        paddingHorizontal: 30,
        paddingVertical: 16
    },
    text: {
        color: '#5966FF',
        fontSize: 20
    }
});
