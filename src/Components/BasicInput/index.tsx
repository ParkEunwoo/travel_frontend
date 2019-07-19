import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Picker } from 'react-native';
import axios from 'axios';

interface Props {
    navigation: any;
  }

interface State {}
  
export default class BasicInput extends React.Component<Props, State>{
    state = {
    };

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Image source={require('./../../../assets/icons/pen_lightblue.png')} style={styles.icon}/>
                    <TextInput
                        placeholder="일지 제목"
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image source={require('./../../../assets/icons/location_lightblue.png')} style={styles.icon}/>
                    <TextInput
                        placeholder="여행 지역"
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image source={require('./../../../assets/icons/start_lightblue.png')} style={styles.icon}/>
                    <TextInput
                        placeholder="19-00-00"
                        style={styles.dateInput}
                    />
                    <Image source={require('./../../../assets/icons/end_lightblue.png')} style={styles.icon}/>
                    <TextInput
                        placeholder="19-00-00"
                        style={styles.dateInput}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image source={require('./../../../assets/icons/category_lightblue.png')} style={styles.icon}/>
                    <Picker
                        selectedValue={'먹방'}
                        style={styles.input}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                        }>
                        <Picker.Item label="휴식" value="java" />
                        <Picker.Item label="맛집" value="js" />
                    </Picker>
                </View>
            </View>
        );
    }
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: 300,
        padding: 10,
        marginTop: 30,
        borderBottomColor: '#ABB2FF',
        borderBottomWidth: 1
    },
    input: {
        width: 260,
        height: 20,
        paddingLeft: 10,
        color: '#5966FF',
        fontSize: 15
    },
    dateInput: {
        width: 130,
        height: 20,
        paddingLeft: 10,
        color: '#5966FF',
        fontSize: 15
    },
    icon: {
        width: 20,
        height: 20
    }
});
