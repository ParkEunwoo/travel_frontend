import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Image } from 'react-native';
import Travel from './Travel';
//https://docs.expo.io/versions/latest/sdk/imagepicker/


interface Props {
    navigation: any;
    travelList: any;
  }

interface travel {
    name: string;
    time: string;
    title: string;
    category: string;
    like: number;
    image: string;
}
interface State {
    travelList: travel[];
}
  
export default class TravelList extends React.Component<Props, State>{
    state = {
        travelList: []
    }
    static getDerivedStateFromProps(nextProps, preState){
        const {travelList} = nextProps;
        

        if(preState.travelList !== travelList){
            return {
                travelList
            };
        }
        return null;
    }
    render(){
        const travels = this.state.travelList?this.state.travelList.map((value, index) => 
            <Travel style={styles.travel} key={index} travel_id={value._id} name={value.name} 
            time={value.time} title={value.title} like={value.like} 
            category={value.category} image={value.image.uri} 
            start_date={value.start_date} end_date={value.end_date}/>
        ):null;
        return (
            <View style={styles.container}>
                {travels&&travels}
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
        justifyContent: 'space-around',
        padding: 10,
    },
    travel: {
    }
});
