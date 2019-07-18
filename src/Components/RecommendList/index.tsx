import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import Swiper from 'react-native-swiper';

//https://docs.expo.io/versions/latest/sdk/imagepicker/


interface Props {
    navigation: any;
  }

interface State {}
  
export default class RecommendList extends React.Component<Props, State>{
    state = {
    }
    render(){
        return (
            <View style={styles.container}>
            <View style={styles.header}></View>
                <Swiper style={styles.wrapper} loop={true} dotStyle={{backgroundColor:'#ABB2FF'}} activeDotStyle={{backgroundColor:'#5966FF'}}>
                    <View style={styles.slide}>
                    <Image source={require('./../../../assets/icons/like_red.png')} style={styles.item} />
                    </View>
                    <View style={styles.slide}>
                    <Image source={require('./../../../assets/icons/location_lightblue.png')} style={styles.item} />
                    </View>
                    <View style={styles.slide}>
                    <Image source={require('./../../../assets/icons/star_lightblue.png')} style={styles.item} />
                    </View>
                    <View style={styles.slide}>
                    <Image source={require('./../../../assets/icons/calendar_lightblue.png')} style={styles.item} />
                    </View>
                </Swiper>

            </View>
        );
    }
    _back = () => {
        this.props.navigation.navigate('Auth');
    }
}

const styles = StyleSheet.create({
    container: {
        height: 400,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },
    header: {
        position: 'absolute',
        top: 0,
        height: 150,
        width: 800,
        backgroundColor: '#5966FF',
    },
    wrapper: {
        width: 800,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        width: 300,
        height: 300
    }
});
