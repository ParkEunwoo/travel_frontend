import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { withNavigation } from 'react-navigation';
import axios from 'axios';
//https://docs.expo.io/versions/latest/sdk/imagepicker/


interface Props {
    navigation: any;
  }

interface State {}
  
class Travel extends React.Component<Props, State>{
    state = {
        travel_id: '',
        name: '',
        time: '',
        title: '',
        category: '',
        like: 0,
        start_date: '',
        end_date: '',
        image: null
    }
    
    static getDerivedStateFromProps(nextProps, preState){
        const {name, time, title, category, like, image, start_date, end_date, travel_id} = nextProps;
        
        if(preState.travel_id !== travel_id || preState.name !== name || preState.time !== time || preState.title !== title || preState.category !== category || preState.like !== like || preState.image !== image || preState.start_date !== start_date || preState.end_date !== end_date){
            return {
                travel_id,
              name,
              time,
              title,
              category,
              like,
              image,
              start_date,
              end_date
            };
        }
        return null;
    }
    render(){
        const {name, time, title, category, like, image} = this.state;
        return (
            <TouchableOpacity style={styles.container} onPress={()=>this._showDetail()}>
                <View style={styles.userInfo}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.time}>{time}</Text>
                </View>
                <View style={styles.travel}>
                    <Image source={{uri:image}} style={styles.image} />
                    <LinearGradient colors={['#00000099',  '#00000000']} style={styles.gradient}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.like}><Image source={require('./../../../assets/icons/like.png')} style={{width:15,height:15}}/> {like}</Text>
                        </View>
                        <Text style={styles.category}>{category}</Text>
                    </LinearGradient>

                </View>
            </TouchableOpacity>
        );
    }
    _back = () => {
        this.props.navigation.navigate('Auth');
    }
    _showDetail = () => {
        console.log('------------------------------------------------')
        console.log(this.state);
        const { name, like, title, start_date, end_date, travel_id } = this.state;
        this.props.navigation.navigate('Map', {
            name,
            like,
            title,
            start_date,
            end_date,
            travel_id
        });
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    userInfo: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 10

    },
    name: {
        fontSize: 14,
        color: '#2c327e'
    },
    time: {
        marginLeft: 'auto',
        fontSize: 14,
        color: "#8e8e8e"
    },
    travel: {
        alignSelf: 'stretch',
        padding: 10
    },
    image: {
        width: '100%',
        height: 380,
        resizeMode: 'contain'
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 16,
        paddingBottom: 12,
        alignItems: 'center'
    },
    title: {
        fontSize: 19,
        color: "white"
    },
    like: {
        color: 'white',
        fontSize: 14
    },
    category: {
        color: 'white'
    },
    gradient: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
        position: 'absolute',
        top: 10,
        left: 10,
        paddingBottom: 50
    }
});


export default withNavigation(Travel);