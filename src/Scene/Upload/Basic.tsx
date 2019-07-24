import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Text, View, TextInput, Image, Picker } from 'react-native';
import Header from '../../Components/Header';
import UploadStatus from './../../Components/UploadStatus';
import BasicInput from './../../Components/BasicInput';
import Button from './../../Components/Button';
import axios from 'axios';
//https://docs.expo.io/versions/latest/sdk/imagepicker/


interface Props {
    navigation: any;
  }

interface State {}
  
export default class Basic extends React.Component<Props, State>{
    state = {
      USER_ID: null,
      name: null,
      title: null,
      place: null,
      start_date: null,
      end_date: null,
      category: '휴식'
    }
    static getDerivedStateFromProps(nextProps, preState){
        const {USER_ID, name} = nextProps;
        if(preState.USER_ID !== USER_ID || preState.name !== name){
            return {
              USER_ID,
              name
            };
        }
        return null;
    }
    render(){
        return (
          <View style={styles.container}>
              <Header title="일지 업로드"/>
            <UploadStatus/>
            <View style={styles.wrapper}>
                <View style={styles.inputContainer}>
                    <Image source={require('./../../../assets/icons/pen_lightblue.png')} style={styles.icon}/>
                    <TextInput
                        placeholder="일지 제목"
                        style={styles.input}
                        onChangeText={(title) => this.setState({title})}
                        value={this.state.title}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image source={require('./../../../assets/icons/location_lightblue.png')} style={styles.icon}/>
                    <TextInput
                        placeholder="여행 지역"
                        style={styles.input}
                        onChangeText={(place) => this.setState({place})}
                        value={this.state.place}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image source={require('./../../../assets/icons/start_lightblue.png')} style={styles.icon}/>
                    <TextInput
                        placeholder="19-00-00"
                        style={styles.dateInput}
                        onChangeText={(start_date) => this.setState({start_date})}
                        value={this.state.start_date}
                    />
                    <Image source={require('./../../../assets/icons/end_lightblue.png')} style={styles.icon}/>
                    <TextInput
                        placeholder="19-00-00"
                        style={styles.dateInput}
                        onChangeText={(end_date) => this.setState({end_date})}
                        value={this.state.end_date}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image source={require('./../../../assets/icons/category_lightblue.png')} style={styles.icon}/>
                    <Picker
                        selectedValue={this.state.category}
                        style={styles.input}
                        onValueChange={(category) =>
                            this.setState({category})
                        }>
                        <Picker.Item label="휴식" value="휴식" />
                        <Picker.Item label="맛집" value="맛집" />
                    </Picker>
                </View>
            </View>
            <Button text="저장하기" action={this._storeData} />
          </View>
        );
    }
    _
    _storeData = async () => {
        //axios 서버 통신
        const {USER_ID, title, place, start_date, end_date, category} = this.state;
        const data = {
          user_id:USER_ID,
          title,
          place,
          start_date,
          end_date,
          category
        }
        const result = await axios.post('https://pic-me-back.herokuapp.com/api/travel', data);
        
        this.props.navigation.navigate('Spot', {travel_id:result.data._id});
    };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  wrapper: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      alignSelf: 'stretch',
      paddingHorizontal: 30,
      justifyContent: 'center',
  },
  inputContainer: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      padding: 10,
      marginTop: 30,
      borderBottomColor: '#ABB2FF',
      borderBottomWidth: 1
  },
  input: {
      flex: 1,
      height: 20,
      paddingLeft: 10,
      color: '#5966FF',
      fontSize: 15
  },
  dateInput: {
      flex: 1,
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
