import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Picker } from 'react-native';
import axios from 'axios';

interface Props {
    navigation: any;
    text: string;
    action(): void;
}

interface State {}
  
export default class Button extends React.Component<Props, State>{
    state = {
        text: ''
    };

    componentDidMount(){
        const {text} = this.props;
        this.setState({
            text
        });
    }

    render(){
        const {text} = this.state;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={this.props.action}>
                    <Text style={styles.text}>{text}</Text>
                </TouchableOpacity>
            </View>
        );
    }
  
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40
    },
    button: {
        backgroundColor: '#5966FF',
        borderRadius: 5,
        paddingVertical: 10,
        width: 300,
    },
    text: {
        color: 'white',
        textAlign: "center",
        fontSize: 15
    }
});
