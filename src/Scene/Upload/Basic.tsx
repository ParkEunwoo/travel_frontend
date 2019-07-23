import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Text, View, TextInput, Image } from 'react-native';
import Header from '../../Components/Header';
import UploadStatus from './../../Components/UploadStatus';
import BasicInput from './../../Components/BasicInput';
import Button from './../../Components/Button';
//https://docs.expo.io/versions/latest/sdk/imagepicker/


interface Props {
    navigation: any;
  }

interface State {}
  
export default class Basic extends React.Component<Props, State>{
    state = {
    }
    render(){
        return (
          <View style={styles.container}>
              <Header title="일지 업로드"/>
            <UploadStatus/>
            <BasicInput />
            <Button text="저장하기" action={()=>this.props.navigation.navigate('Picture')} />
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  upload: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#5966FF',
    borderRadius: 50,
    bottom: 30,
    right: 30,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1
  },
  wrapper: {
    flex: 1,
    alignSelf: 'stretch',
  }
});
