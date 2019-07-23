import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
//https://docs.expo.io/versions/latest/sdk/imagepicker/


interface Props {
    navigation: any;
  }

interface State {}
  
export default class UploadStatus extends React.Component<Props, State>{
    state = {
    }
    render(){
        return (
          <View style={styles.container}>
            <View style={styles.statusContainer}>
                <View style={styles.dot}></View>
                <View style={styles.line1}></View>
                <View style={styles.dot}></View>
                <View style={styles.line2}></View>
                <View style={styles.dot}></View>
            </View>
              <View style={styles.textContainer}>
                  <Text style={styles.text}>기본정보</Text>
                  <Text style={styles.text}>장소추가</Text>
                  <Text style={styles.text}>내용추가</Text>
              </View>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    statusContainer: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    text: {
        color: '#5966FF',
        fontSize: 10
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 50,
        backgroundColor: '#5966FF'
    },
    line1: {
        borderWidth: 1,
        borderColor: '#ABB2FF',
        width: '34%',
        top: 3,
        position: 'absolute',
        zIndex: -1
    },
    line2: {
        borderWidth: 1,
        borderColor: '#E5E7FF',
        left: '50%',
        width: '34%',
        top: 3,
        position: 'absolute',
        zIndex: -1
    }
});
