import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Picker } from 'react-native';
import axios from 'axios';

interface Props {
    navigation: any;
  }

interface State {}
  
export default class DetailInput extends React.Component<Props, State>{
    state = {
    };

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Image source={require('./../../../assets/icons/location_lightblue.png')} style={styles.icon}/>
                    <TextInput
                        placeholder="여행 지역"
                        style={styles.input}
                    />
                    <Image source={require('./../../../assets/icons/pen_gray.png')} style={styles.icon}/>
                </View>
                <View style={styles.inputContainer}>
                    <Image source={require('./../../../assets/icons/calendar_lightblue.png')} style={styles.icon}/>
                    <TextInput
                        placeholder="19-00-00"
                        style={styles.input}
                    />
                    <Image source={require('./../../../assets/icons/pen_gray.png')} style={styles.icon}/>
                </View>
                <View style={styles.textContainer}>
                    <TextInput
                        placeholder="텍스트를 입력해주세요."
                        style={styles.textInput}
                        multiline={true}
                        textAlignVertical={"top"}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image source={require('./../../../assets/icons/star_lightblue.png')} style={styles.icon}/>
                    <Text style={styles.text}>메인 사진으로 선택</Text>
                </View>
            </View>
        );
    }
  
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginVertical: 50
    },
    inputContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        padding: 10,
        marginTop: 8,
    },
    textContainer: {
        marginTop: 8,
        flex: 1,
        alignSelf: 'stretch',
    },
    input: {
        flex: 1,
        height: 20,
        paddingLeft: 10,
        color: '#5966FF',
        fontSize: 15
    },
    icon: {
        width: 20,
        height: 20
    },
    text: {
        flex: 1,
        height: 20,
        paddingLeft: 10,
        fontSize: 15,
        color: "#ABB2FF"
    },
    textInput: {
        flex: 1,
        height: 20,
        paddingLeft: 10,
        paddingTop: 10,
        fontSize: 15,
        color: "#DADADA",
        borderWidth: 1,
        borderColor: "#ABB2FF",
    }
});
