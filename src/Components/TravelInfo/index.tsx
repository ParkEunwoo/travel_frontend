import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import axios from 'axios';
import { withNavigation } from 'react-navigation';

interface Props {
    navigation: any;
  }

interface State {}

class TravelInfo extends React.Component<Props, State>{
    state = {
        title: '',
        start_date: '',
        end_date: '',
        travel_id: ''
    }
    static getDerivedStateFromProps(nextProps, preState){
        const {start_date, end_date, title, travel_id} = nextProps;
        
        if(preState.travel_id !== travel_id || preState.start_date !== start_date || preState.end_date !== end_date || preState.title !== title){
            return {
                travel_id,
                start_date,
                end_date,
                title
            };
        }
        return null;
    }
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <Text style={styles.range}>{this.state.start_date} ~ {this.state.end_date}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('LogView', {travel_id:this.state.travel_id})}>
                    <Image source={require('./../../../assets/icons/forward.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>
        );
    }
  
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#F8F8F9',
        alignSelf: 'stretch',
        margin: 25,
        padding: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 1,
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#5966FF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 20,
        height: 20
    },
    wrapper: {
        marginLeft: 10,
        justifyContent: 'center',
        flex: 1,
    },
    title: {
        color: '#5966FF',
        fontSize: 19,
        marginBottom: 10
    },
    range: {
        color: '#8E8E8E',
        fontSize: 15
    }
});

export default withNavigation(TravelInfo);