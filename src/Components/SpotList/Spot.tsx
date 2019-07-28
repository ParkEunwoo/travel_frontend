import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, ImageStore } from 'react-native';
import axios from 'axios';

interface Props {
    navigation: any;
  }

interface State {}
  
export default class Spot extends React.Component<Props, State>{
    state = {
        title: '',
        content: '',
        time: '',
        images: [],
        page: 0
    }
    static getDerivedStateFromProps(nextProps, preState){
        const {title, content, time, images} = nextProps;
        if(preState.title !== title || preState.content !== content || preState.time !== time || preState.images !== images){
            return {
                title,
                content,
                time,
                images
            };
        }
        return null;
    }
    render(){
        
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.setState({page:(this.state.page+1)%this.state.images.length})}>
                    <Image source={{uri:this.state.images[this.state.page].uri}} style={styles.picture} />
                </TouchableOpacity>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <Text style={styles.date}>{this.state.time}</Text>
                    <Text style={styles.content}>{this.state.content}</Text>
                </View>
            </View>
        );
    }
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf:'stretch',
        margin: 10,
    },
    picture: {
        width: 350,
        height: 350
    },
    wrapper: {
        backgroundColor: 'gray',
        padding: 20
    },
    title: {
        color: 'white',
        fontSize: 19,
    },
    date: {
        color: 'white',
        fontSize: 15,
        marginVertical: 10

    },
    content: {
        borderTopWidth: 0.5,
        borderTopColor: 'white',
        paddingTop: 10,
        color: 'white',
        fontSize: 15,

    }
});
